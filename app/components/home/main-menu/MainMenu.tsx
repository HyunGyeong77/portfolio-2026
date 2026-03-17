"use client";

import styles from './main-menu.module.scss';
import Image from 'next/image';
import Background from './assets/img/background.png';
import Title from './components/title/Title';
import KeyButton from './components/key-button/KeyButton';
import {useState} from 'react';
import Menu from './components/menu/Menu';
import clsx from 'clsx';

type Props = {
  mainMenuRef: React.RefObject<HTMLDivElement | null>
  showMainMenu: boolean
}

export default function MainMenu(props: Props) {
  const {mainMenuRef, showMainMenu} = props;
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  return (
    <div ref={mainMenuRef} className={clsx(
      styles.main,
      !showMainMenu && styles.hide
    )}>
      <div className={styles["main__bg-box"]}>
        <Image className={styles.main__bg} src={Background} alt="background image" width={1400} height={700} />
      </div>
      {!isOpenMenu ? 
        <div className={styles.main__container}>
          <Title />
          <KeyButton setIsOpenMenu={setIsOpenMenu} />
        </div> :
        <div className={styles.main__menu}>
          <Menu setIsOpenMenu={setIsOpenMenu} />
        </div>
      }
    </div>
  );
}