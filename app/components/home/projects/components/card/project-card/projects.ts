import {skill, tag} from "../constants/constants";
import {githubShortcut} from "../utils/github-url";
import {CardType} from "../../../type/card-type";

// Image
import Petgo from './assets/png/petgo.png';
import Hodadoc from './assets/png/hodadoc.png';
import Jwimovie from './assets/png/jwimovie.png';
import Sweat from './assets/png/sweat.png';

const {next, react, scss, ts, postgres, python} = skill;
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