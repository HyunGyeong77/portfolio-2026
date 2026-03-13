import styles from './navigation-button.module.scss';
import {useContext} from 'react';
import {PageContext} from '@/components/layout/header/components/stats/Stats';
import {pageList} from '@/lib/constants/constants';
import clsx from 'clsx';

type Props = {
  label: string
  isSelect: boolean
  onClick: () => void
}

export default function(props: Props) {
  const {label, isSelect, onClick} = props;
  const page = useContext(PageContext);

  return (
    <button onClick={onClick} className={clsx(
      styles.button,
      isSelect && styles.select,
      (page === pageList.projects) && "cursor-target"
    )}>
      {label}
    </button>
  );
}