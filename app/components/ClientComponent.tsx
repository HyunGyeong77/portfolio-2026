"use client";

import styles from './client-component.module.scss';
import Loading from '@common/loading/Loading';
import Header from '@layout/header/Header';
import {PageContext} from '@layout/header/components/stats/Stats';
import {useState, createContext} from 'react';
import TargetCursor from '@common/cursor/TargetCursor';

export const CursorContext = createContext<(() => void) | null>(null);

export default function ClientComponent() {
  const [page, setPage] = useState<string>("hero");
  const [cursorKey, setCursorKey] = useState<number>(0);

  const cursorRemount = () => {
    setCursorKey(prev => prev + 1);
  }

  return (
    <div className={styles.wrap}>
      <Loading />
      <TargetCursor 
        key={cursorKey}
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />
      <CursorContext value={cursorRemount}>
        <PageContext.Provider value={page}>
          <Header />
        </PageContext.Provider>
        <main></main>
      </CursorContext>
    </div>
  );
}