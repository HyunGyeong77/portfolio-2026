import styles from './button.module.scss';
import ButtonSvg from '../ButtonSvg';

export default function Button({content}: {content: string}) {
  return (
    <button className={`${styles.button} cursor-target`}>
      <ButtonSvg />
      <div className={styles["button__text-box"]}>
        <p className={styles.button__text}>{content}</p>
      </div>
    </button>
  );
}