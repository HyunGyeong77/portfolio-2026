import styles from './main-menu.module.scss';
import Image from 'next/image';
import Background from './assets/img/background.png';

export default function MainMenu() {
  return (
    <div className={styles.main}>
      <div className={styles["main__bg-box"]}>
        <Image className={styles.main__bg} src={Background} alt="background image" width={1400} height={700} />
      </div>
    </div>
  );
}