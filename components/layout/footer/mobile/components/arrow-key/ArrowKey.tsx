import styles from './arrow-key.module.scss';
import Next from './components/next/Next';
import Prev from './components/prev/Prev';
import {useContext} from 'react';
import {PageContext} from '@/components/layout/header/components/stats/Stats';
import {pageList} from '@/lib/constants/constants';

export default function ArrowKey() {
  const page = useContext(PageContext);

  const isFocusPosible = () => {
    return (page !== pageList.mainMenu) && "cursor-target";
  }

  return (
    <div className={styles["arrow-key"]}>
      <Prev isFocusPosible={isFocusPosible} />
      <Next isFocusPosible={isFocusPosible} />
    </div>
  );
}