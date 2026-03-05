import styles from './loading.module.scss';
import LoadingGif from './assets/loading.gif';
import LoadingSvg from './components/LoadingSvg';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className={styles.loading}>
        <Image className={styles.loading__gif} src={LoadingGif} alt="loading gif" width={37} height={6} />
        <div className={styles.loading__progressbar}>
          <LoadingSvg width="250" height="47" />
          <div className={styles["loading__progress-box"]}>
            <span className={styles["loading__percent"]}></span>
            <div className={styles.loading__progress}></div>
          </div>
        </div>
    </div>
  );
}