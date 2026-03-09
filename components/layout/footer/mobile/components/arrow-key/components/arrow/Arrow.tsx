import styles from './arrow.module.scss';
import ArrowSvg from "../ArrowSvg";
import {useContext} from 'react';
import {PageContext} from '@/components/layout/header/components/stats/Stats';
import {pageList} from '@/lib/constants/constants';

type Props = {
  isPrev: boolean
}

export default function Arrow(props: Props) {
  const {isPrev} = props;
  const page = useContext(PageContext);

  return (
    <button className={`${styles.arrow} ${(page !== pageList.mainMenu) && "cursor-target"} ${isPrev && styles.prev}`}>
      <ArrowSvg />
    </button>
  );
}