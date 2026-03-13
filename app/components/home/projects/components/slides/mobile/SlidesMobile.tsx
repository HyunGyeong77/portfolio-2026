import styles from './slides-mobile.module.scss';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Swiper as SwiperClass} from 'swiper';
import {Mousewheel, Keyboard} from 'swiper/modules';
import Card from '../../card/Card';
import {CardType} from '../../../type/card-type';
import {useState, useEffect, useRef} from 'react';
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

  // height 768px를 기준으로 boolean 값 결정
  const [isSwiper, setIsSwiper] = useState<boolean>(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsSwiper(innerHeight < 768 ? false : true);

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
          key="vertical"
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
              
              const isActive = slide.className.includes("active");
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
          loop={true}
          keyboard={true}
          simulateTouch={false}
        >
          {Object.values(curSlide).map((project, index) => {
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
      <div className={styles["slides__pagination-box"]}>
        <span>
          {!isSwiper ? progress : activeIndex + 1} / {Object.keys(curSlide).length}
        </span>
      </div>
    </>
  );
}