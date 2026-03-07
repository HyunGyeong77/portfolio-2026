import styles from './main-menu.module.scss';
import Image from 'next/image';
import Background from './assets/img/background.png';
import Title from './components/title/Title';
import KeyButton from './components/key-button/KeyButton';

export default function MainMenu() {
  return (
    <div className={styles.main}>
      <div className={styles["main__bg-box"]}>
        <Image className={styles.main__bg} src={Background} alt="background image" width={1400} height={700} />
      </div>
      <div className={styles.main__container}>
        <Title />
        <KeyButton />
      </div>
    </div>
  );
}