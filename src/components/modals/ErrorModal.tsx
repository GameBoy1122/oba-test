import Image from 'next/image';
import styles from './ErrorModal.module.scss';

interface ErrorModalProps {
  message: string;
}

export default function ErrorModal(props: ErrorModalProps) {
  const { message } = props;
  return (
    <div className={`${styles['errorBox']}`}>
      <Image className={`${styles['info-icon']}`} src={'/images/error.svg'} alt="customer_img" width={20} height={20} />
      <span className={`${styles['errorBox__text']}`}>{message}</span>
    </div>
  );
}
