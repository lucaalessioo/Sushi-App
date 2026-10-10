import { useState } from "react";
import { Lock, User, KeyRound, LogIn } from "lucide-react";

export default function LoginStaff({ onLogin, titolo = "Area riservata al personale", ruoliConsentiti })
{
  const [nome, setNome] = useState("");
  const [password, setPassword] = useState("");
  const [errore, setErrore] = useState("");

  const handleSubmit = async (e) =>
  {
    e.preventDefault();
    if (!nome.trim() || !password)
    {
      setErrore("Inserisci nome utente e password");
      return;
    }
    setErrore("");

    try
    {
      const response = await fetch("http://localhost:8080/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          username: nome,
          password: password,
        }),
      });

      if (!response.ok)
      {
        throw new Error("Credenziali non valide");
      }

      const data = await response.json();
      const token = data.token || data.jwt || data.accessToken;
      const utente = {
        nome: data.username || nome,
        ruolo: data.ruolo,
        tavoloId: data.tavoloId,
        numeroTavolo: data.numeroTavolo,
      };

      if (ruoliConsentiti?.length && !ruoliConsentiti.includes(utente.ruolo))
      {
        setErrore("Account non autorizzato per questa area");
        return;
      }

      if (token)
      {
        localStorage.setItem("token", token);
        localStorage.setItem("utente", JSON.stringify(utente));
      }

      onLogin(utente);
    } catch (err)
    {
      console.error("Errore login:", err);
      setErrore("Nome utente o password errati");
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center mb-8">
          <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-lg mb-4">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 8V12L15 14" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 8V12L5 14" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="7" y="16" width="10" height="4" rx="2" fill="#FBBF24" fillOpacity="0.1" stroke="#FBBF24" strokeWidth="1.5" />
            </svg>
          </div>
          <h1 className="text-2xl font-extrabold tracking-tighter text-white">
            Sushi <span className="text-amber-400">Zen</span>
          </h1>
          <p className="text-xs text-neutral-500 mt-1">{titolo}</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 space-y-4">
          <div>
            <label className="text-xs text-neutral-400 mb-1.5 flex items-center gap-1.5">
              <User size={13} /> Nome utente
            </label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-amber-400/60 transition-colors"
              autoComplete="username"
            />
          </div>

          <div>
            <label className="text-xs text-neutral-400 mb-1.5 flex items-center gap-1.5">
              <KeyRound size={13} /> Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-amber-400/60 transition-colors"
              autoComplete="current-password"
            />
          </div>

          {errore && <p className="text-xs text-red-400">{errore}</p>}

          <button
            type="submit"
            className="w-full bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold py-3 rounded-2xl text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <LogIn size={16} /> Accedi
          </button>
        </form>

        <p className="flex items-center justify-center gap-1.5 text-[11px] text-neutral-600 mt-5">
          <Lock size={11} /> Accesso protetto — solo personale autorizzato
        </p>
      </div>
    </div>
  );
}
