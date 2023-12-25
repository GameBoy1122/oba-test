import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .required("กรุณากรอกรหัสพนักงาน")
    .matches(/^[s]/, "รหัสพนักงานไม่ถูกต้อง"),
  password: Yup.string().required("กรุณากรอกรหัสผ่าน"),
});
