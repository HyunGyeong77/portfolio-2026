import styles from './navigation-menu.module.scss';
import NavigationButton from '@home-projects/components/navigation/components/navigation-button/NavigationButton';
import {useContext} from 'react';
import {CurSlideContext} from '@home-projects/components/slides/Slides';

export default function NavigationMenu() {
  const curSlideTxtState = useContext(CurSlideContext);
  const menuList = {
    project: "프로젝트",
    imitation: "모작",
    team: "팀"
  }

  const isSelect = (name: string) => {
    return curSlideTxtState?.curSlideTxt === name;
  }

  const onClick = (changeName: string) => {
    curSlideTxtState?.setCurSlideTxt(changeName);
  }

  return (
    <nav className={styles.menu__wrap}>
      <ul>
        {Object.entries(menuList).map((menu, index) => (
          <li key={menu[0] + index}>
            <NavigationButton 
              label={menu[1]}
              isSelect={isSelect(menu[0])} 
              onClick={() => onClick(menu[0])}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}