import Image from "next/image";
import styles from "./MainCard.module.scss";
import CardDisable from "@/components/cards/CardDisable";

interface MainCardProps {
  id: string;
  nameCard: string;
  imgCard: string;
  isCardDisabled?: boolean;
  disabled?: boolean;
  active?: boolean;
  onClick: (id: string | null) => void;
}

export default function MainCard(props: MainCardProps) {
  const {
    id,
    nameCard,
    imgCard,
    disabled = false,
    active = false,
    onClick,
  } = props;

  const handleClick = () => {
    if (!disabled) {
      onClick(id);
    }
  };

  return (
    <div className={styles["main"]}>
      {disabled ? <CardDisable /> : null}
      <div
        className={`${styles["card"]} 
        ${active ? styles["card--clicked"] : ""} 
        ${disabled ? styles["card--disabled"] : ""}  
        `}
        onClick={handleClick}
        id={id}
      >
        <div className={styles["card__image"]}>
          <Image src={imgCard} alt={nameCard} width={180} height={180} />
        </div>
        <div className={styles["card__detail"]}>
          <div className={styles["card__detail--th"]}>{nameCard}</div>
        </div>
      </div>
    </div>
  );
}
