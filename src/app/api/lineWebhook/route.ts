import { NextRequest, NextResponse } from "next/server";
import { POST as sendLineMessage } from "../lineMessage/route";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // LINE Messaging API への送信などの処理を書く
    console.log("Received data:", data);

    // LINE API へのメッセージ送信
    const lineResponse = await sendLineMessage(req); // 受け取ったデータをLINE APIへ送信

    // LINE APIからのレスポンスを確認してレスポンスを返す
    return lineResponse;
  } catch (error) {
    // エラーハンドリング
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
