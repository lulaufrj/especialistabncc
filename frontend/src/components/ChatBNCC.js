import React, { useState } from "react";
import { sendChat } from "../api/api";

function ChatBNCC() {
  const [pergunta, setPergunta] = useState("");
  const [resposta, setResposta] = useState("");

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      const userId = JSON.parse(atob(token.split('.')[1])).id; // decodifica JWT simples
      const res = await sendChat({ userId, pergunta });
      setResposta(res.data.resposta);
    } catch (err) {
      alert("Erro ao enviar pergunta");
    }
  };

  return (
    <div>
      <h2>Chat BNCC</h2>
      <textarea placeholder="Digite sua pergunta" onChange={e => setPergunta(e.target.value)} />
      <button onClick={handleSubmit}>Enviar</button>
      {resposta && (
        <div>
          <h3>Resposta:</h3>
          <p>{resposta}</p>
        </div>
      )}
    </div>
  );
}

export default ChatBNCC;
