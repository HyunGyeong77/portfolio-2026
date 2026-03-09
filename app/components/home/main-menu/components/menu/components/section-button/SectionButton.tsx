import styles from './section-button.module.scss';
import MenuButtonSvg from '../MenuButtonSvg';
import {useContext} from 'react';
import {CursorContext} from '@/app/components/ClientComponent';
import {pageList} from '@/lib/constants/constants';

type Props = {
  content: string
  onClick: () => void
}

export default function SectionButton(props: Props) {
  const {content, onClick} = props;
  const cursorTarget = useContext(CursorContext);
  if(!cursorTarget) return null;

  return (
    <button 
      className={`${styles.button} ${cursorTarget(pageList.mainMenu)}`} 
      onClick={onClick}
    >
      <MenuButtonSvg />
      <div className={styles["button__content-box"]}>
        <p className={styles.button__content}>{content}</p>
      </div>
    </button>
  );
}