import styles from './skills.module.scss';
import SectionLayout from "../components/layout/SectionLayout";
import SectionTitle from "../components/common/section/title/SectionTitle";
import SectionContent from "../components/common/section/content/SectionContent";
import Skill from "./components/skill/Skill";

// frontend
import Html from './assets/svg/html.svg';
import Css from './assets/svg/css.svg';
import Scss from './assets/svg/scss.svg';
import Js from './assets/svg/javascript.svg';
import Ts from './assets/svg/typescript.svg';
import NextJs from './assets/svg/next-js.svg';

// backend
import Python from './assets/svg/python.svg';
import PostgreSql from './assets/svg/postgre-sql.svg';
import FastApi from './assets/svg/fast-api.svg';

// devops
import Vercel from './assets/svg/vercel.svg';

// tools
import Git from './assets/svg/git.svg';
import Github from './assets/svg/github.svg';
import Supabase from './assets/svg/supabase.svg';
import Photoshop from './assets/svg/photoshop.svg';
import Illustrator from './assets/svg/illustrator.svg';
import Figma from './assets/svg/figma.svg';

export default function Skills() {
  return (
    <SectionLayout>
      <SectionTitle title="Skills" />
      <SectionContent>
        <div className={styles["skills__skill-box"]}>
          <Skill 
            stack="FrontEnd" 
            skills={[
              {name: "html", icon: Html}, {name: "css", icon: Css},
              {name: "scss", icon: Scss}, {name: "javascript", icon: Js},
              {name: "typescript", icon: Ts}, {name: "next.js", icon: NextJs}
            ]}
          />
          <Skill
            stack="BackEnd"
            skills={[
              {name: "python", icon: Python}, {name: "postgresql", icon: PostgreSql},
              {name: "fastapi", icon: FastApi}
            ]}
          />
          <Skill
            stack="DevOps"
            skills={[
              {name: "vercel", icon: Vercel}
            ]}
          />
          <Skill
            stack="Tools"
            skills={[
              {name: "git", icon: Git}, {name: "github", icon: Github},
              {name: "supabase", icon: Supabase}, {name: "photoshop", icon: Photoshop},
              {name: "illustrator", icon: Illustrator}, {name: "figma", icon: Figma}
            ]}
          />
        </div>
      </SectionContent>
    </SectionLayout>
  );
}