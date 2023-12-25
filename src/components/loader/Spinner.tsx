import styles from "./Spinner.module.scss";
interface SpinnerProps {
  title: string;
  isLongLoading?: boolean;
  descriptLongLoading?: string;
}

export default function Spinner(props: SpinnerProps) {
  const { title, isLongLoading, descriptLongLoading } = props;
  return (
    <div className={styles["loadind-container"]}>
      <div className={styles["loading"]}>
        <div className={styles["loading_spinner"]}>
          <div className={styles["lds-spinner"]}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className={styles["loading_title"]}>{title}</div>
        {isLongLoading && (
          <div className={styles["loading_detail"]}>{descriptLongLoading}</div>
        )}
      </div>
    </div>
  );
}
