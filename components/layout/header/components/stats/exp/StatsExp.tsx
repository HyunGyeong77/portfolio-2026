"use client";

import Image from 'next/image';
import {useState, useEffect} from 'react';
import {StaticImport} from 'next/dist/shared/lib/get-img-props';
import StatsExp0 from './assets/svg/stats-exp-0.svg';
import StatsExp25 from './assets/svg/stats-exp-25.svg';
import StatsExp75 from './assets/svg/stats-exp-75.svg';

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
      case "hero":
      case "projects":
        setExp(StatsExp0);
        break;
      case "about":
        setExp(StatsExp25);
        break;
      case "skills":
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
    />
  );
}