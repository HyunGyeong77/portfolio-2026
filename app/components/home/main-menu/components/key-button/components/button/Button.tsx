import styles from './button.module.scss';
import ButtonSvg from '../ButtonSvg';
import {useContext} from 'react';
import {CursorContext} from '@/app/components/ClientComponent';
import {pageList} from '@/lib/constants/constants';

type Props = {
  content: string,
  onClick: () => void
}

export default function Button(props: Props) {
  const {content, onClick} = props;
  const cursorTarget = useContext(CursorContext);
  if(!cursorTarget) return null;

  return (
    <button className={`${styles.button} ${cursorTarget(pageList.mainMenu)}`} onClick={onClick}>
      <ButtonSvg />
      <div className={styles["button__text-box"]}>
        <p className={styles.button__text}>{content}</p>
      </div>
    </button>
  );
}