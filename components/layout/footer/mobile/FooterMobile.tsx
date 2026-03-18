import styles from './footer-mobile.module.scss';
import More from "./components/more/More";
import ArrowKey from "./components/arrow-key/ArrowKey";

type Props = {
  isDesktop: boolean,
  animating: boolean
}

export default function FooterMobile(props: Props) {
  const {isDesktop, animating} = props;

  return (
    <footer className={`${styles.footer} ${isDesktop && styles.hide}`}>
      <More animating={animating} />
      <ArrowKey />
    </footer>
  );
}