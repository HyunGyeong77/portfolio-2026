import styles from './menu.module.scss';
import CloseSvg from "./components/CloseSvg";
import GithubLink from './components/github-link/GithubLink';
import SectionButton from './components/section-button/SectionButton';
import {useContext} from 'react';
import {PageChangeContext} from '@/app/components/ClientComponent';
import {pageList, githubLink} from '@/lib/constants/constants';

type Props = {
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Menu(props: Props) {
  const {setIsOpenMenu} = props;
  const pageChange = useContext(PageChangeContext);

  const closeBtnClick = () => {
    setIsOpenMenu(false);
  }

  return (
    <div className={styles.menu}>
      <div className={styles["menu__close-box"]}>
        <button className={`${styles["menu__close"]} cursor-target`} onClick={closeBtnClick}>
          <CloseSvg />
        </button>
      </div>
      <div className={styles["menu__navigation-box"]}>
        <div className={styles["menu__github-box"]}>
          <GithubLink 
            href={githubLink.profile} 
            title="깃허브 바로가기"
            content="Github"
          />
          <GithubLink 
            href={githubLink.repository}
            title="레포지토리 보러가기"
            content="Repo"
          />
        </div>
        <div className={styles["menu__section-box"]}>
          <SectionButton 
            content={pageList.about[0].toUpperCase() + pageList.about.slice(1)}
            onClick={() => {
              pageChange?.mainMenuHide(pageList.about);
              closeBtnClick();
            }}
          />
          <SectionButton 
            content={pageList.skills[0].toUpperCase() + pageList.skills.slice(1)}
            onClick={() => {
              pageChange?.mainMenuHide(pageList.skills);
              closeBtnClick();
            }}
          />
          <SectionButton 
            content={pageList.projects[0].toUpperCase() + pageList.projects.slice(1)}
            onClick={() => {
              pageChange?.mainMenuHide(pageList.projects);
              closeBtnClick();
            }}
          />
        </div>
      </div>
    </div>
  );
}