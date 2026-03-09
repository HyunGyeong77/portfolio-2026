import styles from './navigation.module.scss';
import More from './components/MoreSvg';
import {useContext} from 'react';
import {PageContext} from '@/components/layout/header/components/stats/Stats';
import {pageList} from '@/lib/constants/constants';

export default function Navigation() {
  const page = useContext(PageContext);

  return (
    <div className={styles.navigation}>
      <button 
        className={`${styles.navigation__more} ${(page !== pageList.mainMenu) && "cursor-target"}`}
      >
        <More />
      </button>
    </div>
  );
}