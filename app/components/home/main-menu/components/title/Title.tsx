import styles from './title.module.scss';
import Sign from './assets/img/sign.png';
import Image from 'next/image';

export default function Title() {
  return (
    <div className={styles["title"]}>
      <p><span>HyunGyeong's</span></p>
      <p><span>PortFolio</span></p>
      <div className={styles["title__sign-box"]}>
        <Image src={Sign} alt="sign image" width={317} height={163} />
      </div>
    </div>
  );
}