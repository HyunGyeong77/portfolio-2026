import styles from './slides-mobile.module.scss';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Swiper as SwiperClass} from 'swiper';
import {Mousewheel, Keyboard} from 'swiper/modules';
import Card from '../../card/Card';
import {CardType} from '../../../type/card-type';
import SlideDescribe from '../components/slide-describe/SlideDescribe';
import SlideNone from '../components/slide-none/SlideNone';
import {useState, useEffect, useRef, useMemo} from 'react';
import Scroll from './components/Scroll';
import "swiper/css";

type Props = {
  curSlide: Record<string, CardType> 
}

export default function SlidesMobile(props: Props) {
  const {curSlide} = props;

  // scroll
  const [progress, setProgress] = useState<number>(1);

  // swiper
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiperRef = useRef<SwiperClass>(null);
  const slides = useMemo(() => Object.values(curSlide), [curSlide]);
  const noneSlide = slides.length === 0;

  // height 730px를 기준으로 boolean 값 결정
  const [isSwiper, setIsSwiper] = useState<boolean>(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsSwiper(innerHeight <= 730 ? false : true);

      if(swiperRef.current) {
        swiperRef.current.update();
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // scroll Progress 초기화
  useEffect(() => {
    if(!isSwiper) {
      setProgress(1);
    }
  }, [isSwiper]);
  
  return (
    <>
      {!isSwiper ? (
        <Scroll curSlide={curSlide} setProgress={setProgress} />
      ) : (
        <Swiper
          key={JSON.stringify(curSlide)}
          className={styles.slides__swiper}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setActiveIndex(swiper.realIndex);
          }}
          onSlideChange={(swiper) => {setActiveIndex(swiper.realIndex);}}
          onSlideChangeTransitionEnd={(swiper) => {
            swiper.slides.forEach((slide) => {
              const aTags: NodeList = slide.querySelectorAll("a");
              const aTagsArr: Node[] = [...aTags];
              
              const isActive = slide.classList.contains("swiper-slide-active");
              aTagsArr.forEach((atag) => {
                if(!(atag instanceof HTMLAnchorElement)) return;

                atag.tabIndex = isActive ? 0 : -1;
              });
            })
          }}
          modules={[Mousewheel, Keyboard]}
          direction="vertical"
          spaceBetween={30}
          mousewheel={true}
          slidesPerView="auto"
          centeredSlides={true}
          loop={slides.length >= 2}
          keyboard={true}
          simulateTouch={false}
        >
          {slides.map((project, index) => {
            const {title, describe, skills, tags, githubUrl, visitUrl, bg} = project;

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
          })}
        </Swiper>
      )}
      {!noneSlide ?
        isSwiper &&
        <div className={styles["slides__pagination-box"]}>
          <span>
            {!isSwiper ? progress : activeIndex + 1} / {Object.keys(curSlide).length}
          </span>
          <SlideDescribe
            topDescribe="PC : 마우스 휠 또는 키보드 (↑위, ↓아래)"
            btmDescribe="모바일 / 태블릿 : 손가락으로 위, 아래 드래그"
          />
        </div> :
        <SlideNone />
      }
    </>
  );
}