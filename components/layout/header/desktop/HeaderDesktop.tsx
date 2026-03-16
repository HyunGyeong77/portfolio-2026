import styles from './header-desktop.module.scss';
import Stats from '@layout/header/components/stats/Stats';
import Repo from '@layout/header/components/resource/repo/Repo';
import Follower from '@layout/header/components/resource/follower/Follower';
import Hide from '../components/hide-button/Hide';
import {useContext} from 'react';
import {UiHideContext} from '../components/hide-button/Hide';
import clsx from 'clsx';

export default function HeaderDesktop({isMobile}: {isMobile: boolean}) {
  const uiHideContext = useContext(UiHideContext);

  return (
    <header className={clsx(
      styles.header,
      isMobile && styles.hidden,
      uiHideContext?.uiHide && styles.hide
    )}>
      <Stats 
        statsWidth="400px"
        statsHeight="204px"
        expWidth={201}
        expHeight={21}
      />
      <div className={styles.header__info}>
        <Hide />
        <div>
          <Repo
            bgWidth={250}
            bgHeight={57}
            linkWidth={35}
            linkHeight={39}
          />
          <Follower 
            bgWidth={250}
            bgHeight={57}
            linkWidth={35}
            linkHeight={39}
          />
        </div>
      </div>
    </header>
  );
}