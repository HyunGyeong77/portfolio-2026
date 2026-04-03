"use client";

import styles from './loading.module.scss';
import LoadingGif from './assets/loading.gif';
import LoadingSvg from './assets/loading.svg';
import ProgressBar from './components/ProgressBar';
import Image from 'next/image';
import {useState, useEffect, useRef} from 'react';
import gsap from 'gsap';

export default function Loading() {
  // 퍼센트
  const [percent, setPercent] = useState<number>(0);
  const percentRef = useRef<number>(0);

  // document가 준비된 상태인지 확인
  const [isReady, setIsReady] = useState(false);

  // document가 준비가 됐고 애니메이션이 끝났는지 확인
  const [isLoading, setIsLoading] = useState(true);

  // DOM Ref
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isComplete = () => {
      if(document.readyState === "complete") {
        setPercent(100);
        setIsReady(true);
        clearInterval(interval);

        if(!containerRef.current) return;
        gsap.to(containerRef.current, {
          opacity: 0, 
          duration: 0.5,
          delay: 0.5,
          onComplete: () => {
            setIsLoading(false);
          }
        });
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
    }, 200);

    isComplete();

    return () => clearInterval(interval);
  }, []);

  if(!isLoading) return null;

  return (
    <div ref={containerRef} className={styles.loading}>
      <div className={styles.loading__inner}>
          <Image 
            className={styles.loading__gif} 
            src={!isReady ? LoadingGif : LoadingSvg} 
            alt="loading image" 
            width={37} 
            height={6} 
            loading="eager"
            unoptimized
          />
          <div className={styles.loading__progressbar}>
            <ProgressBar />
            <div className={styles["loading__progress-box"]}>
              <span className={styles["loading__percent"]}>{percent}%</span>
              <div className={styles.loading__progress} style={{width: `${percent}%`}}></div>
            </div>
          </div>
      </div>
    </div>
  );
}