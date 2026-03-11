import styles from './navigation.module.scss';
import NavigationBtn from "@layout/footer/components/navigation/components/navigation-btn/NavigationBtn";
import MainSvg from "@layout/footer/components/navigation/components/MainSvg";
import AboutSvg from "@layout/footer/components/navigation/components/AboutSvg";
import SkillsSvg from "@layout/footer/components/navigation/components/SkillsSvg";
import ProjectsSvg from "@layout/footer/components/navigation/components/ProjectsSvg";

type Props = {
  isMenuOpen?: boolean
}

export default function Navigation(props: Props) {
  const {isMenuOpen} = props;
 
  return (
    <ul className={`${styles.navigation} ${isMenuOpen && styles.open}`}
      aria-hidden={isMenuOpen}>
      <li><NavigationBtn icon={<MainSvg />} /></li>
      <li><NavigationBtn icon={<AboutSvg />} /></li>
      <li><NavigationBtn icon={<SkillsSvg />} /></li>
      <li><NavigationBtn icon={<ProjectsSvg />} /></li>
    </ul>
  );
}