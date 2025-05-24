import { useState, useEffect, useRef, useCallback } from 'react';

export function useWebSocket(url) {
  const [chatLog, setChatLog] = useState([]);
  const wsRef = useRef(null);
  const reconnectTimeoutRef = useRef(null);

  const connect = useCallback(() => {
    const socket = new WebSocket(url);
    socket.binaryType = 'arraybuffer';

    socket.onopen = () => {
      console.log('Соединение установлено');
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
        reconnectTimeoutRef.current = null;
      }
    };

    socket.onmessage = (event) => {
      let data;
      if (event.data instanceof ArrayBuffer) {
        const decoder = new TextDecoder('utf-8');
        data = decoder.decode(new Uint8Array(event.data));
      } else {
        data = event.data;
      }
      const cleanData = data.replace(/[{}#*]/g, '');
      setChatLog(prev => [...prev, cleanData]);
    };

    socket.onclose = (event) => {
      console.log('Соединение закрыто:', event.code, event.reason);
      // Попытка переподключения через 1 секунду
      reconnectTimeoutRef.current = setTimeout(() => {
        connect();
      }, 1000);
    };

    socket.onerror = (event) => {
      console.log('Ошибка подключения:', event);
      socket.close();
    };

    wsRef.current = socket;
  }, [url]);

  useEffect(() => {
    connect();

    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }
    };
  }, [connect]);

  const sendMessage = useCallback(
    (message) => {
      if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
        wsRef.current.send(message);
      } else {
        console.log('Соединение не установлено или закрыто');
      }
    },
    []
  );

  return { chatLog, sendMessage };
}
