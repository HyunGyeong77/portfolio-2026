import styles from './arrow-key.module.scss';
import Arrow from './components/arrow/Arrow';
import {useContext} from 'react';
import {UiHideContext} from '@/components/layout/header/components/hide-button/Hide';
import clsx from 'clsx';

export default function ArrowKey() {
  const uiHideContext = useContext(UiHideContext);

  return (
    <div className={clsx(
      styles["arrow-key"],
      uiHideContext?.uiHide && styles.hide
    )}>
      <Arrow isPrev={true} />
      <Arrow isPrev={false} />
    </div>
  );
}