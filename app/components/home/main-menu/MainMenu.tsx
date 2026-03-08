"use client";

import styles from './main-menu.module.scss';
import Image from 'next/image';
import Background from './assets/img/background.png';
import Title from './components/title/Title';
import KeyButton from './components/key-button/KeyButton';
import {useState, useContext, useEffect} from 'react';
import {CursorContext} from '@/app/components/ClientComponent';

export default function MainMenu() {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const cursorRemount = useContext(CursorContext);

  useEffect(() => {
    if(!cursorRemount) return;
    cursorRemount();
  }, [isOpenMenu]);

  return (
    <div className={styles.main}>
      <div className={styles["main__bg-box"]}>
        <Image className={styles.main__bg} src={Background} alt="background image" width={1400} height={700} />
      </div>
      {!isOpenMenu &&
        <div className={styles.main__container}>
          <Title />
          <KeyButton setIsOpenMenu={setIsOpenMenu} />
        </div>
      }
    </div>
  );
}