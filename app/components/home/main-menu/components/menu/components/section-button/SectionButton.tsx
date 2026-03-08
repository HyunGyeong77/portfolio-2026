import styles from './section-button.module.scss';
import MenuButtonSvg from '../MenuButtonSvg';

type Props = {
  content: string
  onClick: () => void
}

export default function SectionButton(props: Props) {
  const {content, onClick} = props;

  return (
    <button className={`${styles.button} cursor-target`} onClick={onClick}>
      <MenuButtonSvg />
      <div className={styles["button__content-box"]}>
        <p className={styles.button__content}>{content}</p>
      </div>
    </button>
  );
}