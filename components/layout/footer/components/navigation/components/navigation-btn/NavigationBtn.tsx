import styles from './navigation-btn.module.scss';
import {useContext} from 'react';
import {PageContext} from '@/components/layout/header/components/stats/Stats';
import {pageList} from '@/lib/constants/constants';

type Props = {
  icon: React.ReactNode
}

export default function NavigationBtn(props: Props) {
  const page = useContext(PageContext);
  const {icon} = props;

  return (
    <button className={`${styles.button} ${(page !== pageList.mainMenu) && "cursor-target"}`}>
      {icon}
    </button>
  );
}