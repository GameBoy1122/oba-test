import React from "react";
import styles from "./Navbar.module.scss";

const navbarBgStyle = ["solid", "image"] as const;

type NavbarBgStyle = (typeof navbarBgStyle)[number];

const DEFAULT_BGSTYLE: NavbarBgStyle = "solid";
interface NavbarProps {
  bgStyle?: NavbarBgStyle;
  left?: React.PropsWithChildren<React.ReactNode>;
  right?: React.PropsWithChildren<React.ReactNode>;
  center?: React.PropsWithChildren<React.ReactNode>;
}

export default function Navbar(props: NavbarProps) {
  const { bgStyle = DEFAULT_BGSTYLE, left, right, center } = props;

  const normalizedBgStyle = navbarBgStyle.includes(bgStyle)
    ? bgStyle
    : DEFAULT_BGSTYLE;

  return (
    <nav
      className={`${styles.navbar} ${styles[`navbar-${normalizedBgStyle}`]}`}
    >
      <div className={styles["navbar-left"]}>{left}</div>
      <div className={styles["navbar-center"]}>{center}</div>
      <div className={styles["navbar-right"]}>{right}</div>
    </nav>
  );
}
