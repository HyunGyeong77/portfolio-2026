"use client";

import Image from 'next/image';
import {useState, useEffect} from 'react';
import {StaticImport} from 'next/dist/shared/lib/get-img-props';
import StatsExp0 from './assets/svg/stats-exp-0.svg';
import StatsExp25 from './assets/svg/stats-exp-25.svg';
import StatsExp75 from './assets/svg/stats-exp-75.svg';
import {pageList} from '@/lib/constants/constants';

type Props = {
  expWidth: number
  expHeight: number
  page: string
}

export default function StatsExp(props: Props) {
  const {expWidth, expHeight, page} = props;

  // 경험치
  const [exp, setExp] = useState<StaticImport>(StatsExp0);

  useEffect(() => {
    switch(page) {
      case pageList.mainMenu:
      case pageList.projects:
        setExp(StatsExp0);
        break;
      case pageList.about:
        setExp(StatsExp25);
        break;
      case pageList.skills:
        setExp(StatsExp75);
        break;
    }
  }, [page]);

  return (
    <Image 
      src={exp} alt="stats exp" 
      width={expWidth} 
      height={expHeight}
      style={{userSelect: "none"}}
      loading="eager"
      unoptimized
    />
  );
}