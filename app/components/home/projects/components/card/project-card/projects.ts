import {skill, tag} from "../constants/constants";
import {githubShortcut} from "../utils/github-url";
import {CardType} from "../../../type/card-type";

// Image
import Petgo from './assets/img/petgo.png';
import Hodadoc from './assets/img/hodadoc.png';
import Jwimovie from './assets/img/jwimovie.png';
import Sweat from './assets/img/sweat.png';
import Portfolio2025a from './assets/img/portfolio-2025.png';
import Portfolio2025b from './assets/img/portfolio-2025-2.png';

const {next, react, scss, ts, postgres, python, js, html, css} = skill;
const {responsive, interactive, fixed} = tag;

export const projects: Record<string, CardType> = {
  petgo: {
    title: "PetGo",
    describe: "강아지를 키우고 있는 반려자 또는 키우려고 하는 사람들을 위한 사이트",
    skills: [next, scss, ts, postgres, python],
    tags: [responsive, interactive],
    githubUrl: githubShortcut("petgo"),
    visitUrl: "https://petgo-orcin.vercel.app",
    bg: Petgo
  },
  hodadoc: {
    title: "Hodadoc",
    describe: "병원을 찾거나, 병원에 대한 정보를 제공하는 포털 사이트",
    skills: [next, scss, ts],
    tags: [responsive, interactive],
    githubUrl: githubShortcut("hodadoc"),
    visitUrl: "https://hyungyeong77.github.io/hodadoc",
    bg: Hodadoc
  },
  portfolio2025b: {
    title: "portfolio-2025-2",
    describe: "2025년 2번째 포트폴리오 사이트",
    skills: [next, scss, ts],
    tags: [responsive, interactive],
    githubUrl: githubShortcut("portfolio-2025-2"),
    visitUrl: "https://portfolio-2025-2-inky.vercel.app",
    bg: Portfolio2025b
  },
  portfolio2025a: {
    title: "portfolio-2025",
    describe: "2025년 포트폴리오 사이트",
    skills: [html, css, js],
    tags: [responsive, interactive],
    githubUrl: githubShortcut("portfolio-2025"),
    visitUrl: "https://hyungyeong77.github.io/portfolio-2025",
    bg: Portfolio2025a
  },
  jwimovie: {
    title: "Jwimovie",
    describe: "영화에 대한 정보와 검색 및 필터 기능을 통하여 원하는 영화를 찾을 수 있는 사이트",
    skills: [react, scss, ts],
    tags: [fixed, interactive],
    githubUrl: githubShortcut("jwimovie"),
    visitUrl: "https://hyungyeong77.github.io/jwimovie",
    bg: Jwimovie
  },
  Sweat: {
    title: "Sweat",
    describe: "의류 쇼핑몰을 참조하여 제작한 사이트",
    skills: [react, scss, ts],
    tags: [responsive, interactive],
    githubUrl: githubShortcut("sweat"),
    visitUrl: "https://hyungyeong77.github.io/sweat",
    bg: Sweat
  }
}