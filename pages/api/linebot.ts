import { NextApiRequest, NextApiResponse } from "next";
import * as line from "@line/bot-sdk";

const config = {
  channelAccessToken:
    "RVSL1mJWImhKz76nhCuzeXMYMbQDHFELcWvqE5rioOa+Q23FJY80IRs4hkrG/WAuDvHpJS9e5GwdSed8ylLDbZ/rZnBLDWJd6yY2mxhwODoKCnpxM9RaixcdR21ZGgURnUuP0r6kp4c0e5j5mFFBsAdB04t89/1O/w1cDnyilFU=",
  channelSecret: "dacfaefe36947703f82bc0e8ae9f5611",
};

const client = new line.Client(config);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const message = req.body.message;

    await client.pushMessage("U6a934c65da47bd1a06d768e5e35da61f", {
      type: "text",
      text: message,
    });

    res
      .status(200)
      .json({ message: `${message}というメッセージが送信されました。` });
  } catch (e) {
    res.status(500).json({ message: `error! ${e} ` });
  }
}
