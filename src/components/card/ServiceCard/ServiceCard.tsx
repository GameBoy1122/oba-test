import Image from "next/image";
import styles from "./ServiceCard.module.scss";

interface ServiceCardProps {
  id: string;
  title: string;
  image: string;
  disabled?: boolean;
  disabledMessage?: string;
  active?: boolean;
  onClick: (id: string | null) => void;
}

const DisabledCard = ({ message }: { message: string }) => {
  return (
    <div className={styles["card-disabled"]}>
      <p className={styles["card-disabled_text"]}>{message}</p>
    </div>
  );
};
export default function ServiceCard(props: ServiceCardProps) {
  const {
    id,
    title,
    image,
    disabled = false,
    active = false,
    onClick,
    disabledMessage = "",
  } = props;

  const handleClick = () => {
    if (!disabled) {
      onClick(id);
    }
  };

  return (
    <div className={styles["card-container"]}>
      {disabled ? <DisabledCard message={disabledMessage} /> : null}
      <div
        id={id}
        onClick={handleClick}
        className={`${styles["card"]}
        ${active ? styles["card--clicked"] : ""} 
        ${disabled ? styles["card--disabled"] : ""}  
        `}
      >
        <div className={styles["card__image"]}>
          <Image src={image} alt={title} width={180} height={180} />
        </div>
        <h4 className={styles["card__detail--th"]}>{title}</h4>
      </div>
    </div>
  );
}
