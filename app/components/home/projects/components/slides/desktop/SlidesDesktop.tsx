import styles from './slides-desktop.module.scss';
import {Swiper, SwiperSlide} from "swiper/react";
import {Swiper as SwiperClass} from 'swiper';
import {Mousewheel, Keyboard} from "swiper/modules";
import {CardType} from "../../../type/card-type";
import {useMemo, useState, useEffect, useRef} from 'react';
import Card from "../../card/Card";
import SlideDescribe from '../components/slide-describe/SlideDescribe';
import SlideNone from '../components/slide-none/SlideNone';
import "swiper/css";

type Props = {
  curSlide: Record<string, CardType>
}

export default function SlidesDesktop(props: Props) {
  const {curSlide} = props;
  const swiperRef = useRef<SwiperClass>(null);
  const slides = useMemo(() => Object.values(curSlide), [curSlide]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const isSlideLoop = slides.length > 3;
  const loopSlides = [...slides, ...slides, ...slides];
  const noneSlide = slides.length === 0;

  useEffect(() => {
    const handlerResize = () => {
      if(swiperRef.current) {
        swiperRef.current.update();
      }
    }

    window.addEventListener("resize", handlerResize);

    return () => window.removeEventListener("resize", handlerResize);
  }, []);

  const swiperSlideComponent = (slides: CardType[]) => {
    return (
      slides.map((slide, index) => {
        const {title, describe, skills, tags, githubUrl, visitUrl, bg} = slide;

        return (
          <SwiperSlide key={title + index}>
            <Card 
              title={title}
              describe={describe}
              skills={skills}
              tags={tags}
              githubUrl={githubUrl}
              visitUrl={visitUrl}
              bg={bg}
            />
          </SwiperSlide>
        );
      })
    );
  }

  return (
    <>
      <Swiper
        key={JSON.stringify(curSlide)}
        className={styles.slides__swiper}
        modules={[Mousewheel, Keyboard]}
        mousewheel={true}
        direction="horizontal"
        keyboard={true}
        simulateTouch={false}
        centeredSlides={true}
        spaceBetween={30}
        slidesPerView="auto"
        loop={isSlideLoop}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setActiveIndex(swiper.realIndex % slides.length);
        }}
        onSlideChange={(swiper) => {setActiveIndex(swiper.realIndex % slides.length);}}
        onSlideChangeTransitionEnd={(swiper) => {
          swiper.slides.forEach((slide) => {
            const aTags: NodeList = slide.querySelectorAll("a");
            const aTagsArr: Node[] = [...aTags];
            const isActive = slide.classList.contains("swiper-slide-active");

            aTagsArr.forEach((atag => {
              if(!(atag instanceof HTMLAnchorElement)) return;

              atag.tabIndex = isActive ? 0 : -1;
            }));
          })
        }}
      >
        {swiperSlideComponent(slides)}
        {isSlideLoop && swiperSlideComponent(loopSlides)}
      </Swiper>
      {!noneSlide ? 
        <div className={styles["slides__pagination-box"]}>
          <span className={styles.slides__pagination}>{activeIndex + 1} / {slides.length}</span>
          <SlideDescribe 
            topDescribe="PC : 마우스 휠 또는 키보드 (← 왼쪽, 오른쪽 →)"
            btmDescribe="모바일 / 태블릿 : 손가락으로 왼쪽, 오른쪽 드래그"
          />
        </div> :
        <SlideNone />
      }
    </>
  );
}