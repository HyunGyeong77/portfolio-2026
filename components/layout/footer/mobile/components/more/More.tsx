import styles from './more.module.scss';
import MoreSvg from './components/MoreSvg';
import {useContext} from 'react';
import {PageContext} from '@/components/layout/header/components/stats/Stats';
import {pageList} from '@/lib/constants/constants';

export default function More() {
  const page = useContext(PageContext);

  return (
    <div className={styles.more}>
      <button 
        className={`${styles.more__button} ${(page !== pageList.mainMenu) && "cursor-target"}`}
      >
        <MoreSvg />
      </button>
      
    </div>
  );
}