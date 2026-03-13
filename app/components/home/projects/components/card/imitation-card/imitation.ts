import {CardType} from "../../../type/card-type";
import {skill, tag} from "../constants/constants";
import {githubShortcut} from "../utils/github-url";

// Image
import Creators from './assets/img/creators.png';
import Naver from './assets/img/naver.png';
import Jbfg from './assets/img/jbfg.png';
import Starbucks from './assets/img/starbucks.png';

const {next, react, html, scss, js, ts} = skill;
const {responsive, adaptive, interactive} = tag;

export const imitation: Record<string, CardType> = {
  creators: {
    title: "Nexon Creators",
    describe: "넥슨 크리에이터즈 메인 페이지를 모작하기 위해 제작한 사이트",
    skills: [html, scss, js],
    tags: [adaptive, interactive],
    githubUrl: githubShortcut("creators"),
    visitUrl: "https://hyungyeong77.github.io/creators",
    bg: Creators
  },
  naver: {
    title: "Naver",
    describe: "네이버 메인 페이지를 모작하기 위해 제작한 사이트",
    skills: [html, scss, js],
    tags: [adaptive, interactive],
    githubUrl: githubShortcut("naver"),
    visitUrl: "https://hyungyeong77.github.io/naver",
    bg: Naver
  },
  jbfg: {
    title: "Jbfg",
    describe: "JB금융그룹 메인 페이지를 모작하기 위해 제작한 사이트",
    skills: [next, scss, ts],
    tags: [responsive, interactive],
    githubUrl: githubShortcut("jbfg"),
    visitUrl: "https://hyungyeong77.github.io/jbfg",
    bg: Jbfg
  },
  starbucks: {
    title: "Starbucks",
    describe: "스타벅스 메인 페이지를 모작하기 위해 제작한 사이트",
    skills: [react, scss, ts],
    tags: [responsive, interactive],
    githubUrl: githubShortcut("starbucks"),
    visitUrl: "https://hyungyeong77.github.io/starbucks",
    bg: Starbucks
  }
}