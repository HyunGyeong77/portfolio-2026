import styles from './scroll.module.scss';
import Card from '../../../card/Card';
import {CardType} from '../../../../type/card-type';
import {useEffect, useRef, useState} from 'react';

type Props = {
  curSlide: Record<string, CardType>
  setProgress: React.Dispatch<React.SetStateAction<number>>
}

export default function Scroll(props: Props) {
  const {curSlide, setProgress} = props;
  const slidesBoxRef = useRef<HTMLDivElement>(null);

  // card 요소 하나의 height 크기
  const [cardHeight, setCardHeight] = useState<number>(0);
  const cardHeightRef = useRef<number>(0);

  const progressRef = useRef<number>(1);

  useEffect(() => {
    const card = document.querySelector('[class*="card__wrap"]');
    if(!(card instanceof HTMLDivElement)) return;

    const height = card.getBoundingClientRect().height;
    setCardHeight(height);
    cardHeightRef.current = height;
  }, []);

  // keyboard 스크롤
  useEffect(() => {
    const slidesBox = slidesBoxRef.current;
    if(!(slidesBox instanceof HTMLDivElement)) return;

    const keyDownHandler = (e: KeyboardEvent) => {
      if(!cardHeightRef.current) return;
      
      const gap = parseInt(getComputedStyle(slidesBox).gap);
      const cardHeight = cardHeightRef.current + gap; 

      if(e.key === "ArrowDown") {
        e.preventDefault();

        slidesBox.scrollTo({top: cardHeight * progressRef.current});
      }

      if(e.key === "ArrowUp") {
        e.preventDefault();

        const prevCardHeight = cardHeight * (progressRef.current - 1);

        if(slidesBox.scrollTop > prevCardHeight) {
          slidesBox.scrollTo({top: prevCardHeight});
        } else {
          slidesBox.scrollTo({top: cardHeight * (progressRef.current - 2)});
        }
      }
    }
    
    document.addEventListener("keydown", keyDownHandler);
    return () => document.removeEventListener("keydown", keyDownHandler);
  }, []);

  const scrollProgress = (e: React.UIEvent) => {
    const target: Element = e.currentTarget;
    const scrollTop = target.scrollTop;

    const progress = Math.floor(scrollTop / cardHeight) + 1;
    setProgress(progress);
    progressRef.current = progress;
  }

  return (
    <div ref={slidesBoxRef} className={styles.slides__box} onScroll={scrollProgress}>
      {Object.values(curSlide).map((project, index) => {
        const {title, describe, skills, tags, githubUrl, visitUrl, bg} = project;

        return (
          <Card
            key={title + index}
            title={title}
            describe={describe}
            skills={skills}
            tags={tags}
            githubUrl={githubUrl}
            visitUrl={visitUrl}
            bg={bg}
          />
        );
      })}
    </div>
  );
}