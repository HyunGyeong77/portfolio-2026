import styles from './navigation.module.scss';
import NavigationBtn from "@layout/footer/components/navigation/components/navigation-btn/NavigationBtn";
import MainSvg from "@layout/footer/components/navigation/components/MainSvg";
import AboutSvg from "@layout/footer/components/navigation/components/AboutSvg";
import SkillsSvg from "@layout/footer/components/navigation/components/SkillsSvg";
import ProjectsSvg from "@layout/footer/components/navigation/components/ProjectsSvg";
import {useContext} from 'react';
import {UiHideContext} from '@/components/layout/header/components/hide-button/Hide';
import clsx from 'clsx';

type Props = {
  isMenuOpen?: boolean
}

export default function Navigation(props: Props) {
  const {isMenuOpen} = props;
  const uiHideContext = useContext(UiHideContext);
 
  return (
    <ul className={clsx(
        styles.navigation,
        isMenuOpen && styles.open,
        uiHideContext?.uiHide && styles.hide
      )}
      aria-hidden={isMenuOpen}
    >
      <li><NavigationBtn icon={<MainSvg />} /></li>
      <li><NavigationBtn icon={<AboutSvg />} /></li>
      <li><NavigationBtn icon={<SkillsSvg />} /></li>
      <li><NavigationBtn icon={<ProjectsSvg />} /></li>
    </ul>
  );
}