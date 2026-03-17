"use client";

import styles from './client-component.module.scss';
import Loading from '@common/loading/Loading';
import Header from '@layout/header/Header';
import Footer from '@layout/footer/Footer';
import {PageContext} from '@layout/header/components/stats/Stats';
import {useState, createContext, useRef, useEffect} from 'react';
import TargetCursor from '@common/cursor/TargetCursor';
import MainMenu from './home/main-menu/MainMenu';
import About from './home/about/About';
import Skills from './home/skills/Skills';
import Projects from './home/projects/Projects';
import {pageList} from '@/lib/constants/constants';
import {UiHideContext} from '@/components/layout/header/components/hide-button/Hide';
import {toBeNextPage} from '../utils/toBeNextPage';
import {sectionElements} from '../utils/sectionElements';
import clsx from 'clsx';
import gsap from 'gsap';

export type PageChangeContextType = {
  mainMenuHide: (pageName: string) => void
}

export const PageChangeContext = createContext<PageChangeContextType | null>(null);
export const CursorContext = createContext<((pageName: string) => false | string) | null>(null);
export const AnimationContext = createContext<(({pageName, isNext}: {pageName?: string, isNext?: boolean}) => void) | null>(null);

export default function ClientComponent() {
  const [page, setPage] = useState<string>(pageList.mainMenu);
  const [uiHide, setUiHide] = useState<boolean>(false);

  // className
  const cursorTargetChange = (pageName: string) => {
    return (page === pageName) && "cursor-target";
  }

  // mainMenu animation
  const mainMenuRef = useRef<HTMLDivElement | null>(null);
  const [showMainMenu, setShowMainMenu] = useState<boolean>(true);

  useEffect(() => {
    if(showMainMenu) {
      mainMenuOpen();
    }
  }, [showMainMenu]);

  const mainMenuHide = (pageName: string) => {
    gsap.to(mainMenuRef.current, {
      opacity: 0,
      duration: 0.8,
      onComplete: () => {
        setShowMainMenu(false);
      }
    });

    setSectionNoneAnim(true);
    setPage(pageName);
  }
  
  const mainMenuOpen = () => {
    gsap.to(mainMenuRef.current, {
      opacity: 1,
      duration: 0.8
    });

    setSectionNoneAnim(false);
  }

  // sections animation
  const tlAppear = useRef<GSAPTimeline | null>(null);
  const tlDisappear = useRef<GSAPTimeline | null>(null);
  const [sectionNoneAnim, setSectionNoneAnim] = useState<boolean>(false);

  useEffect(() => {
    const {sectionContent, sectionTitle} = sectionElements();

    const attribute = () => {
      sectionContent?.style.setProperty("opacity", "1");
      sectionTitle?.style.setProperty("opacity", "1");
    }

    if(sectionNoneAnim) {
      attribute();
    }
  }, [sectionNoneAnim]);

  useEffect(() => {
    if(page === pageList.mainMenu) return;
    if(showMainMenu) return;

    const {sectionTitle, sectionContent} = sectionElements();

    const appearPageAnim = () => {
      if(!tlAppear.current) tlAppear.current = gsap.timeline();
      if (tlAppear.current.isActive()) return;
      
      tlAppear.current.clear();

      tlAppear.current.set(sectionTitle, {y: "-150%", opacity: 0});
      tlAppear.current.set(sectionContent, {opacity: 0});

      tlAppear.current.to(sectionTitle, {y: 0, opacity: 1, duration: 0.3});
      tlAppear.current.to(sectionContent, {opacity: 1, duration: 0.5, delay: 0.1});
    }

    appearPageAnim();
  }, [page]);

  const pageChangeAnim = ({pageName, isNext}: {pageName?: string, isNext?: boolean}) => {
    if(page === pageName) return;

    const {sectionTitle, sectionContent} = sectionElements();

    const disappearPageAnim = () => {
      if(pageName === pageList.mainMenu) {
        setShowMainMenu(true);
        setPage(pageName);
        return;
      }

      if(!tlDisappear.current) tlDisappear.current = gsap.timeline();
      if(tlDisappear.current.isActive()) return;

      tlDisappear.current.clear();

      tlDisappear.current
        .to(sectionTitle, {y: "-150%", opacity: 0, duration: 0.3})
        .to(sectionContent, {
          opacity: 0, 
          duration: 0.5,
          delay: 0.1,
          onComplete: () => {
            if(!pageName && (isNext !== undefined)) {
              toBeNextPage({isNext, page, setPage, setShowMainMenu});
            } else if(pageName) {
              setPage(pageName);
            }
          }
        });
    }

    disappearPageAnim();
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
              <AnimationContext.Provider value={pageChangeAnim}>
                <Footer />
              </AnimationContext.Provider>
            </UiHideContext.Provider>
          </PageContext.Provider>
        </CursorContext>
      </PageChangeContext>
    </div>
  );
}