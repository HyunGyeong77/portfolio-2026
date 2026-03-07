import styles from './header-desktop.module.scss';
import Stats from '@layout/header/components/stats/Stats';
import Repo from '@layout/header/components/resource/repo/Repo';
import Follower from '@layout/header/components/resource/follower/Follower';

export default function HeaderDesktop() {
  return (
    <header className={styles.header}>
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