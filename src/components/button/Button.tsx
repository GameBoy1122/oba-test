import React from "react";
import styles from "./Button.module.scss";

const buttonVariant = [
  "primary",
  "secondary",
  "previous",
  "next",
  "outline",
] as const;
const buttonSize = ["sd", "lg"] as const;

type ButtonVariant = (typeof buttonVariant)[number];
type ButtonSize = (typeof buttonSize)[number];

const DEFAULT_VARIANT: ButtonVariant = "primary";
const DEFAULT_SIZE: ButtonSize = "sd";
interface ButtonProps
  extends React.PropsWithChildren<
    React.ButtonHTMLAttributes<HTMLButtonElement>
  > {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export default function Button(props: ButtonProps) {
  const {
    children,
    onClick,
    disabled,
    variant = DEFAULT_VARIANT,
    size = DEFAULT_SIZE,
    ...rest
  } = props;

  const normalizedVariant = buttonVariant.includes(variant)
    ? variant
    : DEFAULT_VARIANT;

  const normalizedSize = buttonSize.includes(size) ? size : DEFAULT_SIZE;

  return (
    <button
      className={`${styles.btn} ${styles[`btn-${normalizedVariant}`]} ${
        styles[`btn--${normalizedSize}`]
      }`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
