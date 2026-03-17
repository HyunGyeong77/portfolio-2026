import styles from './arrow.module.scss';
import ArrowSvg from "../ArrowSvg";
import {useContext} from 'react';
import {PageContext} from '@/components/layout/header/components/stats/Stats';
import {pageList} from '@/lib/constants/constants';
import clsx from 'clsx';
import {AnimationContext} from '@/app/components/ClientComponent';

type Props = {
  isPrev: boolean
}

export default function Arrow(props: Props) {
  const {isPrev} = props;
  const page = useContext(PageContext);
  const animationContext = useContext(AnimationContext);
  if(!animationContext) return;

  return (
    <button className={clsx(
      styles.arrow,
      (page !== pageList.mainMenu) && "cursor-target",
      isPrev && styles.prev
    )} onClick={() => animationContext({isNext: isPrev})}
    >
      <ArrowSvg />
    </button>
  );
}