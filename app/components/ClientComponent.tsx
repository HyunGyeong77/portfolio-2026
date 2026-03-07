"use client";

import styles from './client-component.module.scss';
import Loading from '@common/loading/Loading';
import Header from '@layout/header/Header';
import {PageContext} from '@layout/header/components/stats/Stats';
import {useState} from 'react';

export default function ClientComponent() {
  const [page, setPage] = useState<string>("hero");

  return (
    <div className={styles.wrap}>
      <Loading />
      <PageContext.Provider value={page}>
        <Header />
      </PageContext.Provider>
      <main></main>
    </div>
  );
}