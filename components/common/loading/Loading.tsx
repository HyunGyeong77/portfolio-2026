"use client";

import styles from './loading.module.scss';
import LoadingGif from './assets/loading.gif';
import LoadingSvg from './components/LoadingSvg';
import Image from 'next/image';
import {useState, useEffect, useRef} from 'react';

export default function Loading() {
  const [percent, setPercent] = useState(0);
  const percentRef = useRef(0);

  useEffect(() => {
    const isComplete = () => {
      if(document.readyState === "complete") {
        setPercent(100);
        clearInterval(interval);
      }
    }

    const interval = setInterval(() => {
      const max = 15;
      const min = 5;

      const nextPercent = Math.floor(Math.random() * (max - min + 1)) + max;
      percentRef.current = percentRef.current + nextPercent;

      if(percentRef.current < 100) {
        setPercent(percentRef.current);
      } else {
        isComplete();
      }
    }, 1000);

    isComplete();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.loading}>
      <div className={styles.loading__inner}>
          <Image className={styles.loading__gif} src={LoadingGif} alt="loading gif" width={37} height={6} loading="eager" />
          <div className={styles.loading__progressbar}>
            <LoadingSvg />
            <div className={styles["loading__progress-box"]}>
              <span className={styles["loading__percent"]}>{percent}%</span>
              <div className={styles.loading__progress} style={{width: `${percent}%`}}></div>
            </div>
          </div>
      </div>
    </div>
  );
}