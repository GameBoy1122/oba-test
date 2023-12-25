import React from "react";
import Button from "react-bootstrap/Button";
import styles from "./OBAButton.module.scss";

interface OBAButtonProps
  extends React.PropsWithChildren<
    React.ButtonHTMLAttributes<HTMLButtonElement>
  > {
  variant?: "primary" | "secondary" | "previous" | "next" | "outline";
  size?: "sd" | "lg";
  onClick?: () => void;
  disabled?: boolean;
}

export default function OBAButton(props: OBAButtonProps) {
  const {
    children,
    onClick,
    disabled,
    variant = "primary",
    size = "sd",
    ...rest
  } = props;
  return (
    <Button
      className={`${styles[`btn`]} ${styles[`btn-${variant}`]} ${
        size === "lg" ? styles[`btn--lg`] : ""
      }`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </Button>
  );
}
