"use client";

import styles from './client-component.module.scss';
import Loading from '@common/loading/Loading';
import Header from '@layout/header/Header';
import {PageContext} from '@layout/header/components/stats/Stats';
import {useState} from 'react';
import TargetCursor from '@common/cursor/TargetCursor';
import {pageList} from '@/lib/constants/constants';

export default function ClientComponent() {
  const [page, setPage] = useState<string>(pageList.mainMenu);

  return (
    <div className={styles.wrap}>
      <Loading />
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />
      <PageContext.Provider value={page}>
        <Header />
      </PageContext.Provider>
      <main></main>
    </div>
  );
}