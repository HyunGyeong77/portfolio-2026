"use client";

import styles from './stats.module.scss';
import StatsIcon from '@/components/layout/header/components/stats/icon/StatsIcon';
import {createContext, useContext, useEffect, useState} from 'react';
import StatsExp from '@/components/layout/header/components/stats/exp/StatsExp'; 

type Props = {
  statsWidth: string,
  statsHeight: string,
  expWidth: number,
  expHeight: number
}

export const PageContext = createContext<string | null>(null);

export default function Stats(props: Props) {
  const {statsWidth, statsHeight, expWidth, expHeight} = props;

  // 스텟 정보 레벨 표시
  const [level, setLevel] = useState(1);

  const page = useContext(PageContext);
  if(!page) return null;

  useEffect(() => {
    page !== "projects" ? setLevel(1) : setLevel(2);
  }, [page]);

  return (
    <div className={styles.stats}>
      <StatsIcon width={statsWidth} height={statsHeight} />
      <div className={styles.stats__content}>
        <div className={styles.stats__inner}>
          <div className={styles["stats__level-job"]}>
            <p className={styles.stats__level}>Level <span>{level}</span></p>
            <p className={styles.stats__job}>개발자</p>
          </div>
          <div className={styles["stats__exp-email"]}>   
            <StatsExp expWidth={expWidth} expHeight={expHeight} page={page} />
          </div>    
        </div>
      </div>
    </div>
  );
}