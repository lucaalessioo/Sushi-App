import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const API_BASE = import.meta.env.VITE_API_URL ?? 'http://localhost:8080';

export function connettiWebSocket(onOrdineRicevuto) {
  const client = new Client({
    // Invia automaticamente i Cookie HTTP-Only durante la stretta di mano WebSocket/SockJS
    webSocketFactory: () => new SockJS(`${API_BASE}/ws`, null, { withCredentials: true }),
    reconnectDelay: 5000, // Riconnessione automatica in caso di disconnessione
    debug: (str) => {
      // console.log(str); // Scommenta per debug STOMP
    },
  });

  client.onConnect = () => {
    // Sottoscrizione al canale degli ordini
    client.subscribe('/topic/ordini', (message) => {
      if (message.body) {
        const ordine = JSON.parse(message.body);
        onOrdineRicevuto(ordine);
      }
    });
  };

  client.activate();

  // Funzione di pulizia per disconnettersi quando il componente si smonta
  return () => {
    if (client.active) {
      client.deactivate();
    }
  };
}