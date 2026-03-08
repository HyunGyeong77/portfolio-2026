import styles from './section-button.module.scss';
import MenuButtonSvg from '../MenuButtonSvg';
import {useContext} from 'react';
import {PageContext} from '@layout/header/components/stats/Stats';
import {pageList} from '@/lib/constants/constants';

type Props = {
  content: string
  onClick: () => void
}

export default function SectionButton(props: Props) {
  const {content, onClick} = props;
  const page = useContext(PageContext);

  return (
    <button 
      className={`${styles.button} ${(page === pageList.mainMenu) && "cursor-target"}`} 
      onClick={onClick}
    >
      <MenuButtonSvg />
      <div className={styles["button__content-box"]}>
        <p className={styles.button__content}>{content}</p>
      </div>
    </button>
  );
}