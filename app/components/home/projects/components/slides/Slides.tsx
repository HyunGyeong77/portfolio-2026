import styles from './slides.module.scss';
import Navigation from '../navigation/Navigation';
import {useMediaQuery} from '@/lib/hooks/useMediaQuery';
import SlidesMobile from './mobile/SlidesMobile';
import {useState, createContext, useEffect} from 'react';
import {CardType} from '../../type/card-type';
import {projects} from '../card/project-card/projects';
import {imitation} from '../card/imitation-card/imitation';
import {team} from '../card/team-card/team';

type CurSlideContext = {
  curSlideTxt: string
  setCurSlideTxt: React.Dispatch<React.SetStateAction<string>>
}
export const CurSlideContext = createContext<CurSlideContext | null>(null);

export default function Slides() {
  const [curSlide, setCurSlide] = useState<Record<string, CardType>>(projects);
  const [curSlideTxt, setCurSlideTxt] = useState<string>("project");

  useEffect(() => {
    switch(curSlideTxt) {
      case "project":
        setCurSlide(projects);
        break;
      case "imitation":
        setCurSlide(imitation);
        break;
      case "team":
        setCurSlide(team);
        break;
    }
  }, [curSlideTxt]);

  const {width, isMobile} = useMediaQuery();
  if(!width) return null;

  return (
    <div className={styles.slides__wrap}>
      <CurSlideContext.Provider value={{curSlideTxt, setCurSlideTxt}}>
        <Navigation />
      </CurSlideContext.Provider>
      {isMobile && <SlidesMobile curSlide={curSlide} />}
    </div>
  );
}