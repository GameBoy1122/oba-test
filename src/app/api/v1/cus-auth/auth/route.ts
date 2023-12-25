// Notice from where NextResponse is imported:
import { NextResponse, NextRequest } from "next/server";

type UserData = {
  username?: string;
  password?: string;
};
// Notice the function definition:
export async function POST(request: NextRequest) {
  const data: UserData = await request.json();
  const { username, password } = data;
  console.log("data:", data);
  if (username === "s01234" && password === "Ss12345678!") {
    return NextResponse.json({
      status: { code: "AUTH1000", description: "สำเร็จ" },
      data: {
        username: "ณิชนันท์ ศักดิ์สินธุ์ชัย",
        userid: "s01234",
        userrole: "maker",
        branch: "รัชโยธิน",
        branchid: "0111",
        occode: "7652",
        samcode: "7652",
        team: "พัฒนาธุรกิจลูกค้าบุคคลกรุงเทพ 1 ทีม 1",
        license: "-",
      },
    });
  } else if (username === "s01234" && password !== "Ss12345678!") {
    return NextResponse.json({
      status: {
        code: "AUTH1001",
        description: "คุณกรอกรหัสพนักงานหรือรหัสผ่านไม่ถูกต้อง",
      },
      data: null,
    });
  } else {
    return NextResponse.json({
      status: {
        code: "AUTH9999",
        description: "ระบบเกิดความขัดข้องกรุณาลองใหม่อีกครั้ง",
      },
      data: null,
    });
  }
}

export async function GET(request: Request) {
  console.log(request);
  return NextResponse.json({ message: "success" });
}
