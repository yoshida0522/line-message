import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // LINE Messaging API への送信などの処理を書く
    console.log("Received data:", data);

    // 成功時のレスポンス
    return NextResponse.json(
      { message: "Data received successfully" },
      { status: 200 }
    );
  } catch (error) {
    // エラーハンドリング
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
