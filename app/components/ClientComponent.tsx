"use client";

import styles from './client-component.module.scss';
import Loading from '@common/loading/Loading';
import Header from '@layout/header/Header';
import Footer from '@layout/footer/Footer';
import {PageContext} from '@layout/header/components/stats/Stats';
import {useState, createContext, useRef} from 'react';
import TargetCursor from '@common/cursor/TargetCursor';
import MainMenu from './home/main-menu/MainMenu';
import About from './home/about/About';
import Skills from './home/skills/Skills';
import Projects from './home/projects/Projects';
import {pageList} from '@/lib/constants/constants';
import {UiHideContext} from '@/components/layout/header/components/hide-button/Hide';
import clsx from 'clsx';
import gsap from 'gsap';

export type PageChangeContextType = {
  mainMenuHide: (pageName: string) => void
}

export const PageChangeContext = createContext<PageChangeContextType | null>(null);
export const CursorContext = createContext<((pageName: string) => false | string) | null>(null);

export default function ClientComponent() {
  const [page, setPage] = useState<string>(pageList.mainMenu);
  const mainMenuRef = useRef<HTMLDivElement | null>(null);
  const [showMainMenu, setShowMainMenu] = useState<boolean>(true);
  const [uiHide, setUiHide] = useState<boolean>(false);

  const cursorTargetChange = (pageName: string) => {
    return (page === pageName) && "cursor-target";
  }

  const mainMenuHide = (pageName: string) => {
    gsap.to(mainMenuRef.current, {
      opacity: 0,
      duration: 0.8,
      onComplete: () => {
        setShowMainMenu(false);
      }
    });

    setPage(pageName);
  }

  return (
    <div className={styles.wrap}>
      <Loading />
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />
      <PageChangeContext value={{mainMenuHide}}>
        <CursorContext value={cursorTargetChange}>
          <PageContext.Provider value={page}>
            <MainMenu mainMenuRef={mainMenuRef} showMainMenu={showMainMenu} />
            <UiHideContext.Provider value={{uiHide, setUiHide}}>
              <Header />
              <main className={clsx(
                styles.wrap__main,
                uiHide && styles.hide
              )}>
                {(page === pageList.about) && <About />}
                {(page === pageList.skills) && <Skills />}
                {(page === pageList.projects) && <Projects />}
              </main>
              <Footer />
            </UiHideContext.Provider>
          </PageContext.Provider>
        </CursorContext>
      </PageChangeContext>
    </div>
  );
}