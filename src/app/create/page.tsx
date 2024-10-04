"use client";
import { useState } from "react";

export default function CreatePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // フォームのデータを送信する
    const response = await fetch("/api/lineMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });

    if (response.ok) {
      alert("LINEにメッセージを送信しました！");
    } else {
      alert("メッセージの送信に失敗しました。");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        名前:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        メールアドレス:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button type="submit">送信</button>
    </form>
  );
}
