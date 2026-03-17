import styles from './arrow.module.scss';
import ButtonWrapper from '@layout/assets/svg/button-wrapper.svg';
import Image from 'next/image';
import {useContext} from 'react';
import {PageContext} from '@/components/layout/header/components/stats/Stats';
import {pageList} from '@/lib/constants/constants';
import {AnimationContext} from '@/app/components/ClientComponent';
import {useButtonDisabled} from '@layout/footer/hooks/useButtonDisabled';
import clsx from 'clsx';

type Props = {
  content: string
}

export default function Arrow(props: Props) {
  const animationContext = useContext(AnimationContext);
  if(!animationContext) return; 
  
  const {content} = props;
  const page = useContext(PageContext);
  const isNext = content === "진행" ? true : false;
  const {isLastPage} = useButtonDisabled();
  const disabled = isNext && isLastPage;
  const firstPagePrevBtn = (page === pageList.about) && (isNext === false);

  return (
    <button 
      className={clsx(
        styles.button,
        ((page !== pageList.mainMenu) && !disabled) && "cursor-target",
        disabled && styles.disabled
      )} 
      onClick={() => animationContext({
        ...(firstPagePrevBtn && {pageName: pageList.mainMenu}), 
        isNext: isNext
      })}
      disabled={disabled}
    >
      <Image src={ButtonWrapper} alt="button background image" width={250} height={88} />
      <div className={styles["button__content-box"]}>
        <p className={styles.button__content}>{content}</p>
      </div>
    </button>
  );
}