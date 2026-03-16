"use client";

import styles from './menu.module.scss';
import Stats from '@layout/header/components/stats/Stats';
import Repo from '@layout/header/components/resource/repo/Repo';
import Follower from '@layout/header/components/resource/follower/Follower';
import clsx from 'clsx';

type Props = {
  isMenuOpen: boolean
  hide: string | false | undefined 
}

export default function Menu(props: Props) {
  const {isMenuOpen, hide} = props;

  return (
    <div className={clsx(
      styles.menu,
      isMenuOpen && styles["menu-open"],
      hide
    )}
      aria-hidden={isMenuOpen}>
      <Stats 
        statsWidth="313px"
        statsHeight="158px"
        expWidth={157}
        expHeight={19}
      />
      <div className={styles.menu__info}>
        <Repo bgWidth={311} bgHeight={70} linkWidth={42} linkHeight={47} />
        <Follower bgWidth={311} bgHeight={70} linkWidth={42} linkHeight={47} />
      </div>
    </div>
  );
}