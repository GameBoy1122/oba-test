import Image from "next/image";
import styles from "./Toast.module.scss";

const toastVariant = ["success", "warning", "error"] as const;

type ToastVariant = (typeof toastVariant)[number];

const DEFAULT_VARIANT: ToastVariant = "success";

interface ToastProps {
  message: string;
  variant: ToastVariant;
}

export default function Toast(props: ToastProps) {
  const { message, variant = DEFAULT_VARIANT } = props;
  const normalizedVariant = toastVariant.includes(variant)
    ? variant
    : DEFAULT_VARIANT;
  return (
    <div
      className={`${styles["toast"]} ${styles[`toast-${normalizedVariant}`]}`}
    >
      <Image
        className={`${styles["toast-icon"]}`}
        src={"/images/error.svg"}
        alt="customer_img"
        width={20}
        height={20}
      />
      <p>{message}</p>
    </div>
  );
}
