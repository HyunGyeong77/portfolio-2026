import styles from "./navigation.module.scss";
import NavigationBtn from "@layout/footer/components/navigation/components/navigation-btn/NavigationBtn";
import MainSvg from "@layout/footer/components/navigation/components/MainSvg";
import AboutSvg from "@layout/footer/components/navigation/components/AboutSvg";
import SkillsSvg from "@layout/footer/components/navigation/components/SkillsSvg";
import ProjectsSvg from "@layout/footer/components/navigation/components/ProjectsSvg";
import { useContext } from "react";
import { UiHideContext } from "@/components/layout/header/components/hide-button/Hide";
import { AnimationContext } from "@/app/components/ClientComponent";
import { pageList } from "@/lib/constants/constants";
import clsx from "clsx";

type Props = {
  isMenuOpen?: boolean;
  mobile?: boolean
};

export default function Navigation(props: Props) {
  const { isMenuOpen, mobile } = props;
  const uiHideContext = useContext(UiHideContext);
  const animationContext = useContext(AnimationContext);
  if (!animationContext) return;

  return (
    <ul
      className={clsx(
        styles.navigation,
        isMenuOpen && styles.open,
        uiHideContext?.uiHide && styles.hide,
      )}
      role={mobile ? "menu" : undefined}
      aria-labelledby={mobile ? "footer-navigation-button" : undefined}
    >
      <li>
        <NavigationBtn
          icon={<MainSvg />}
          iconPage={pageList.mainMenu}
          onClick={() => animationContext({ pageName: pageList.mainMenu })}
        />
      </li>
      <li>
        <NavigationBtn
          icon={<AboutSvg />}
          iconPage={pageList.about}
          onClick={() => animationContext({ pageName: pageList.about })}
        />
      </li>
      <li>
        <NavigationBtn
          icon={<SkillsSvg />}
          iconPage={pageList.skills}
          onClick={() => animationContext({ pageName: pageList.skills })}
        />
      </li>
      <li>
        <NavigationBtn
          icon={<ProjectsSvg />}
          iconPage={pageList.projects}
          onClick={() => animationContext({ pageName: pageList.projects })}
        />
      </li>
    </ul>
  );
}
