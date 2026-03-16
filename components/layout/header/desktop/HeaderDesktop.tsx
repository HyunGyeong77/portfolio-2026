import styles from './header-desktop.module.scss';
import Stats from '@layout/header/components/stats/Stats';
import Repo from '@layout/header/components/resource/repo/Repo';
import Follower from '@layout/header/components/resource/follower/Follower';
import clsx from 'clsx';

export default function HeaderDesktop({isMobile}: {isMobile: boolean}) {
  return (
    <header className={clsx(
      styles.header,
      isMobile && styles.hide
    )}>
      <Stats 
        statsWidth="400px"
        statsHeight="204px"
        expWidth={201}
        expHeight={21}
      />
      <div className={styles.header__info}>
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
    </header>
  );
}