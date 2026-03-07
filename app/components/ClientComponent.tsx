"use client";

import styles from './client-component.module.scss';
import Loading from '@common/loading/Loading';
import Header from '@layout/header/Header';
import {PageContext} from '@layout/header/components/stats/Stats';
import {useState} from 'react';
import TargetCursor from '@common/cursor/TargetCursor';
import MainMenu from './home/main-menu/MainMenu';

export default function ClientComponent() {
  const [page, setPage] = useState<string>("hero");

  return (
    <div className={styles.wrap}>
      <Loading />
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />
      <MainMenu />
      <PageContext.Provider value={page}>
        <Header />
      </PageContext.Provider>
      <main></main>
    </div>
  );
}