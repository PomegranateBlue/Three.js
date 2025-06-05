import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';

const socket = io();

export default function ChatBox() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    socket.on('chat', (msg: string) => setMessages(m => [...m, msg]));
    return () => {
      socket.off('chat');
    };
  }, []);

  const sendMessage = () => {
    if (inputRef.current && inputRef.current.value.trim()) {
      socket.emit('chat', inputRef.current.value);
      inputRef.current.value = '';
    }
  };

  return (
    <div className="absolute bottom-2 right-2 w-64 bg-white/80 p-2 rounded shadow">
      <div className="h-40 overflow-y-auto mb-2">
        {messages.map((m, i) => (
          <div key={i}>{m}</div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          ref={inputRef}
          className="flex-1 border rounded px-1"
          type="text"
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage} className="px-2 py-1 bg-blue-500 text-white rounded">
          Send
        </button>
      </div>
    </div>
  );
}
