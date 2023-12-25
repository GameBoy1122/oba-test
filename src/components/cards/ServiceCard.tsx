import Image from "next/image";
import styles from "./ServiceCard.module.scss";
import { useTranslations } from "next-intl";

interface ServiceCardProps {
  id: string;
  title: string;
  image: string;
  disabled?: boolean;
  active?: boolean;
  onClick: (id: string | null) => void;
}

const disabledCard = () => {
  const t = useTranslations();
  return (
    <div className={styles["disabled"]}>
      <p className={styles["disabled_text"]}>
        {t("landing.not_available")}
      </p>
    </div>
  );
};
export default function ServiceCard(props: ServiceCardProps) {
  const { id, title, image, disabled = false, active = false, onClick } = props;

  const handleClick = () => {
    if (!disabled) {
      onClick(id);
    }
  };

  return (
    <div className={styles["container"]}>
      {disabled ? disabledCard() : null}
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
        <p className={styles["card__detail--th"]}>{title}</p>
      </div>
    </div>
  );
}
