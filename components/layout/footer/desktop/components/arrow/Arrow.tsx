import styles from './arrow.module.scss';
import ButtonWrapper from '@layout/assets/svg/button-wrapper.svg';
import Image from 'next/image';
import {useContext} from 'react';
import {PageContext} from '@/components/layout/header/components/stats/Stats';
import {pageList} from '@/lib/constants/constants';

type Props = {
  content: string
}

export default function Arrow(props: Props) {
  const {content} = props;
  const page = useContext(PageContext);

  return (
    <button 
      className={`${styles.button} ${(page !== pageList.mainMenu) && "cursor-target"}`}
    >
      <Image src={ButtonWrapper} alt="button background image" width={250} height={88} />
      <div className={styles["button__content-box"]}>
        <p className={styles.button__content}>{content}</p>
      </div>
    </button>
  );
}