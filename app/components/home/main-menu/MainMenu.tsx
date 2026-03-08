"use client";

import styles from './main-menu.module.scss';
import Image from 'next/image';
import Background from './assets/img/background.png';
import Title from './components/title/Title';
import KeyButton from './components/key-button/KeyButton';
import {useState} from 'react';
import Menu from './components/menu/Menu';

export default function MainMenu({mainMenuRef}: {mainMenuRef: React.RefObject<HTMLDivElement | null>}) {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  return (
    <div ref={mainMenuRef} className={styles.main}>
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