import React, { useState } from "react";
import { LockKeyhole, ArrowRight, Infinity, AlertCircle } from "lucide-react";

const LoginTablet = ({ onLoginSuccess }) =>
{

    const [nome, setNome] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const bgImageUrl =
        "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1200";

    const handleLogin = async () =>
    {

        setError("");

        if (!nome || !password)
        {
            setError("Inserisci nome tablet e password");
            return;
        }

        try
        {

            setLoading(true);

            const response = await fetch(
                "http://localhost:8080/api/v1/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        username: nome,
                        password
                    })
                }
            );


            if (!response.ok)
            {
                throw new Error("Credenziali non valide");
            }


            const data = await response.json();

            if (data.ruolo !== "ROLE_TABLET" || data.tavoloId == null)
            {
                throw new Error("Accedi con un account tablet (non admin)");
            }

            const utente = {
                nome: data.username,
                ruolo: data.ruolo,
                tavoloId: data.tavoloId,
                numeroTavolo: data.numeroTavolo,
            };

            localStorage.setItem("token", data.token);
            localStorage.setItem("utente", JSON.stringify(utente));

            onLoginSuccess(utente);


        } catch (err)
        {

            setError(err.message);

        } finally
        {

            setLoading(false);

        }
    };


    return (

        <div
            className="
      min-h-screen
      bg-cover
      bg-center
      flex
      items-center
      justify-center
      p-6
      text-neutral-100
      font-sans
      "
            style={{
                backgroundImage: `url(${bgImageUrl})`
            }}
        >

            <div
                className="
        absolute
        inset-0
        bg-black/70
        backdrop-blur-sm
        "
            />


            <div
                className="
        relative
        z-10
        w-full
        max-w-md
        "
            >


                {/* Logo */}

                <div className="flex justify-center mb-8">

                    <div
                        className="
            p-5
            rounded-3xl
            bg-neutral-950/80
            border
            border-neutral-700
            shadow-xl
            "
                    >

                        <Infinity
                            className="
              w-14
              h-14
              text-amber-400
              "
                            strokeWidth={1.5}
                        />

                    </div>

                </div>



                <div
                    className="
          bg-neutral-950/85
          backdrop-blur-md
          border
          border-neutral-800
          rounded-3xl
          p-8
          shadow-2xl
          "
                >


                    <h1
                        className="
            text-4xl
            font-extrabold
            text-center
            tracking-tight
            "
                    >

                        Sushi
                        <span className="text-amber-400">
                            Zen
                        </span>

                    </h1>


                    <p
                        className="
            text-center
            text-neutral-400
            mt-2
            mb-8
            "
                    >

                        Accesso Tablet Tavolo

                    </p>



                    {error && (

                        <div
                            className="
              mb-5
              flex
              gap-3
              items-center
              bg-red-950/40
              border
              border-red-700/50
              text-red-300
              p-4
              rounded-2xl
              text-sm
              "
                        >

                            <AlertCircle
                                className="w-5 h-5"
                            />

                            {error}

                        </div>

                    )}



                    <div className="space-y-5">


                        <div>

                            <label
                                className="
                text-sm
                text-neutral-300
                "
                            >
                                Nome Tablet
                            </label>

                            <input

                                value={nome}

                                onChange={(e) =>
                                    setNome(e.target.value)
                                }

                                placeholder="Tablet Tavolo "

                                className="
                mt-2
                w-full
                bg-neutral-900
                border
                border-neutral-700
                rounded-2xl
                px-5
                py-4
                outline-none
                focus:border-amber-400
                transition
                "

                            />

                        </div>



                        <div>

                            <label
                                className="
                text-sm
                text-neutral-300
                "
                            >
                                Password
                            </label>


                            <div
                                className="
                relative
                "
                            >

                                <LockKeyhole
                                    className="
                  absolute
                  left-4
                  top-4
                  w-5
                  h-5
                  text-neutral-500
                  "
                                />

                                <input

                                    type="password"

                                    value={password}

                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }

                                    placeholder="Password"

                                    className="
                  mt-2
                  w-full
                  bg-neutral-900
                  border
                  border-neutral-700
                  rounded-2xl
                  pl-12
                  pr-5
                  py-4
                  outline-none
                  focus:border-amber-400
                  transition
                  "

                                />

                            </div>

                        </div>



                        <button

                            onClick={handleLogin}

                            disabled={loading}

                            className="
              w-full
              mt-5
              bg-amber-400
              hover:bg-amber-300
              text-neutral-950
              font-bold
              py-4
              rounded-2xl
              flex
              justify-center
              items-center
              gap-3
              transition
              disabled:opacity-50
              "

                        >

                            {loading
                                ? "Accesso..."
                                :
                                <>
                                    Entra nel Menu
                                    <ArrowRight
                                        className="w-5 h-5"
                                    />
                                </>
                            }


                        </button>


                    </div>


                </div>



                <p
                    className="
          text-center
          text-neutral-400
          text-sm
          mt-8
          "
                >
                    Sushi Zen SRL © 2026
                </p>


            </div>


        </div>

    );

};


export default LoginTablet;