// Notice from where NextResponse is imported:
import { NextResponse, NextRequest } from "next/server";

type LoginRequest = {
  deviceId: string;
  deviceIp: string;
  isConfirmLoginDuplicateUser?: boolean;
  password: string;
  sessionId?: string;
  token?: string;
  username: string;
  version: string;
};
// Notice the function definition:
export async function POST(request: NextRequest) {
  try {
    const data: LoginRequest = await request.json();
    const { username, password } = data;
    if (username == "" || password == "") {
      return NextResponse.json({
        message: "username and password is required",
        status: 500,
      });
    }

    let response = NextResponse.json([
      {
        code: "0111",
        text: "รัชโยธิน",
      },
      {
        code: "0071",
        text: "บางเขน",
      },
    ]);

    response.headers.set(
      "X-TOKEN",
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSJ9"
    );

    return response;
  } catch (e) {
    return NextResponse.json({
      message:
        "Required parameter data was null or undefined when calling login.",
      status: 500,
    });
  }
}

export async function GET(request: Request) {
  console.log(request);
  return NextResponse.json({ message: "success" });
}
