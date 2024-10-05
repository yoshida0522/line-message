import { NextRequest, NextResponse } from "next/server";

const CHANNEL_ACCESS_TOKEN = process.env.LINE_CHANNEL_ACCESS_TOKEN;

export async function POST(req: NextRequest) {
  console.log(CHANNEL_ACCESS_TOKEN);
  try {
    const { name, email } = await req.json();

    const message = {
      to: "U6a934c65da47bd1a06d768e5e35da61f",
      messages: [
        {
          type: "text",
          text: `新しいフォームの送信があります。\n名前: ${name}\nメールアドレス: ${email}`,
        },
      ],
    };

    const response = await fetch("https://api.line.me/v2/bot/message/push", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CHANNEL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify(message),
    });

    const responseData = await response.json();
    console.log("Response from LINE API:", responseData);

    if (response.ok) {
      return NextResponse.json({ message: "メッセージを送信しました" });
    } else {
      return NextResponse.json(
        { message: "メッセージ送信に失敗しました" },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "サーバーエラー" }, { status: 500 });
  }
}
