import React, { useEffect, useState } from "react";
import { Formik, FormikProps } from "formik";
import { saveLocalStorage } from "@/libs/localStorage";
import { useAppStore } from "@/zustand/useAppStore";
import { useRouter } from "next/navigation";
import styles from "./Form.module.scss";
import { Toast } from "@/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";
import type { User } from "../../_types";
import { LoginSchema } from "@/libs/schema";

let roles = {
  // "iob", "stb", "ipf", "rbf"
  admin: [
    { name: "iOnboard", isDisabled: false, id: "single-account" },
    { name: "Startbiz", isDisabled: false, id: "juristic-account" },
    { name: "iProfile", isDisabled: false, id: "joint-account" },
    { name: "RB front", isDisabled: true, id: "" },
  ],
  iob: [{ name: "iOnboard", isDisabled: false, id: "single-account" }],
  stb: [{ name: "Startbiz", isDisabled: false, id: "juristic-account" }],
  ipf: [{ name: "iProfile", isDisabled: false, id: "joint-account" }],
  rbf: [{ name: "RB front", isDisabled: false, id: "" }],
};

const errorMessageContainer = (
  props: FormikProps<{
    username: string;
    password: string;
  }>
) => {
  if (props.errors.username && props.errors.password)
    return (
      <Toast message="กรุณากรอกรหัสพนักงาน และรหัสผ่าน" variant={"error"} />
    );
  else if (props.errors.username && !props.errors.password)
    return (
      <Toast
        message={props.errors.username ? props.errors.username : ""}
        variant={"success"}
      />
    );
  else if (props.errors.password && !props.errors.username)
    return (
      <Toast
        message={props.errors.password ? props.errors.password : ""}
        variant={"error"}
      />
    );
  else return null;
};

interface FormProps {}

function Form({}: FormProps) {
  const t = useTranslations("login");
  const login = useAppStore((state) => state.login);
  const isAuthenticated = useAppStore((state) => state.isAuthenticated);
  const token = useAppStore((state) => state.token);
  console.log(
    "🚀 ~ file: Form.tsx:57 ~ Form ~ isAuthenticated:",
    isAuthenticated
  );
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const loginAction = async (data: User) => {
    // let username = data.username;
    // let userRole =
    //   username == "s99999"
    //     ? roles.admin
    //     : username == "s99990"
    //     ? roles.iob
    //     : username == "s99991"
    //     ? roles.stb
    //     : username == "s99992"
    //     ? roles.ipf
    //     : username == "s99993"
    //     ? roles.rbf
    //     : roles.admin;

    // let userInfo = {
    //   username: username,
    //   firstNameTH: "ชนิศา",
    //   lastNameTH: "รัศมีโชติ",
    //   roles: userRole,
    // };

    login({ username: data.username, password: data?.password });

    // router.push("/");
  };

  useEffect(() => {
    if (isAuthenticated && token !== null && token !== "") {
      router.push("/");
    }
  }, [isAuthenticated, token]);

  return (
    <Formik
      // validateOnChange={false}
      // validateOnBlur={false}
      validationSchema={LoginSchema}
      initialValues={{ username: "", password: "" }}
      onSubmit={async (values, actions) => {
        // actions.resetForm()
        let data = {
          username: values.username,
          password: values.password,
        };
        loginAction(data);
      }}
    >
      {(props) => (
        <form className={styles.loginBox} onSubmit={props.handleSubmit}>
          <div className={`${styles["loginBox__header"]}`}>
            <h1 className={`${styles["loginBox__title"]}`}>{t("title")}</h1>
          </div>
          <div className={`${styles["loginBox__content"]}`}>
            {/* Error Message */}
            {errorMessageContainer(props)}
            <input
              className={`${styles["text-input"]} ${
                props.errors.username && props.touched.username
                  ? styles["error"]
                  : ""
              }`}
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.username}
              name="username"
            />
            <div className={`${styles["input_password"]}`}>
              <input
                className={`${styles["text-input"]} ${
                  props.errors.password && props.touched.password
                    ? styles["error"]
                    : ""
                }`}
                type={showPassword ? "text" : "password"}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.password}
                name="password"
              />

              <span
                className={`${styles["eye-icon"]}`}
                onClick={() => setShowPassword(!showPassword)}
              >
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </span>
            </div>
          </div>
          <div className={`${styles["loginBox__footer"]}`}>
            <button
              style={{ fontSize: "22px" }}
              className="w-100 btnAction btn-purple"
              type="submit"
            >
              {t("sign_in")}
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
}

export default Form;
