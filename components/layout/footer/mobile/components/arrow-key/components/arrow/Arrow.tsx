import styles from './arrow.module.scss';
import ArrowSvg from "../ArrowSvg";
import {useContext} from 'react';
import {PageContext} from '@/components/layout/header/components/stats/Stats';
import {pageList} from '@/lib/constants/constants';
import clsx from 'clsx';
import {AnimationContext} from '@/app/components/ClientComponent';
import {useButtonDisabled} from '@/components/layout/footer/hooks/useButtonDisabled';

type Props = {
  isPrev: boolean
}

export default function Arrow(props: Props) {
  const animationContext = useContext(AnimationContext);
  if(!animationContext) return;

  const {isPrev} = props;
  const page = useContext(PageContext);
  const {isLastPage} = useButtonDisabled();
  const disabled = !isPrev && isLastPage;
  const firstPagePrevBtn = (page === pageList.about) && isPrev;

  return (
    <button 
      className={clsx(
        styles.arrow,
        ((page !== pageList.mainMenu) && !disabled) && "cursor-target",
        isPrev && styles.prev,
        disabled && styles.disabled
      )} onClick={() => animationContext({
        ...(firstPagePrevBtn && {pageName: pageList.mainMenu}),
        isNext: !isPrev
      })}
      disabled={disabled}
    >
      <ArrowSvg />
    </button>
  );
}