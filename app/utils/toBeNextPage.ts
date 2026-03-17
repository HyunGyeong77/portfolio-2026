import {pageList} from "@/lib/constants/constants";

type Parameter = {
  isNext: boolean,
  page: string,
  setPage: React.Dispatch<React.SetStateAction<string>>
  setShowMainMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export const toBeNextPage = (parameter: Parameter) => {
  const {isNext, page, setPage, setShowMainMenu} = parameter;

  if(isNext) {
    switch(page) {
      case pageList.about: setPage(pageList.skills); break;
      case pageList.skills: setPage(pageList.projects); break;
    }
  } else {
    switch(page) {
      case pageList.about: 
        setShowMainMenu(true);  
        setPage(pageList.mainMenu); 
        break;
      case pageList.skills: setPage(pageList.about); break;
      case pageList.projects: setPage(pageList.skills); break;
    }
  }
}