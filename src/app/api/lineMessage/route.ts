import { NextApiRequest, NextApiResponse } from "next";

const CHANNEL_ACCESS_TOKEN =
  "HrdWhF6LCombABpNRZDkV/fsXR+WcotUAhp7rApxZzHh96E+CWYExMJ/NimYKjIIDvHpJS9e5GwdSed8ylLDbZ/rZnBLDWJd6yY2mxhwODrt0x/OUb6XAo8WowMRaTeYShjX3S1CPwlcRcS0oYldRAdB04t89/1O/w1cDnyilFU="; // LINEチャネルアクセストークンをここに追加

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email } = req.body;

  // LINE Messaging APIに送るメッセージ内容を定義
  const message = {
    to: "U6a934c65da47bd1a06d768e5e35da61f", // 送信相手のユーザーIDを指定
    messages: [
      {
        type: "text",
        text: `新しいフォームの送信があります。\n名前: ${name}\nメールアドレス: ${email}`,
      },
    ],
  };

  // LINE APIにPOSTリクエストを送信
  try {
    const response = await fetch("https://api.line.me/v2/bot/message/push", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CHANNEL_ACCESS_TOKEN}`, // アクセストークンをヘッダーに設定
      },
      body: JSON.stringify(message),
    });

    if (response.ok) {
      return res.status(200).json({ message: "メッセージを送信しました" });
    } else {
      return res
        .status(response.status)
        .json({ message: "メッセージ送信に失敗しました" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "サーバーエラー" });
  }
}
