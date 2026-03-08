import styles from './button.module.scss';
import ButtonSvg from '../ButtonSvg';

type Props = {
  content: string,
  onClick: () => void
}

export default function Button(props: Props) {
  const {content, onClick} = props;

  return (
    <button className={`${styles.button} cursor-target`} onClick={onClick}>
      <ButtonSvg />
      <div className={styles["button__text-box"]}>
        <p className={styles.button__text}>{content}</p>
      </div>
    </button>
  );
}