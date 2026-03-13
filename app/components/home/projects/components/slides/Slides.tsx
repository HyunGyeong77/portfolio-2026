import styles from './slides.module.scss';
import Navigation from '../navigation/Navigation';
import {useMediaQuery} from '@/lib/hooks/useMediaQuery';
import SlidesMobile from './mobile/SlidesMobile';
import {useState} from 'react';
import {CardType} from '../../type/card-type';
import {projects} from '../card/project-card/projects';

export default function Slides() {
  const [curSlide, setCurSlide] = useState<Record<string, CardType>>(projects);
  const {width, isMobile} = useMediaQuery();
  if(!width) return null;


  return (
    <div className={styles.slides__wrap}>
      <Navigation />
      {isMobile && <SlidesMobile curSlide={curSlide} />}
    </div>
  );
}