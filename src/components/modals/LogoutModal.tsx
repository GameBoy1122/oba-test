import React from "react";
import style from "./LogoutModal.module.scss";

export default function LogoutModal({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={style["logoutmodal"]}>
      <div className={style["logoutmodal_triangle"]}></div>
      <div className={style["logoutmodal_content"]}>{children}</div>
    </div>
  );
}
