import styles from './hide.module.scss';
import ButtonWrapper from '@layout/assets/svg/button-wrapper.svg';
import {useContext, createContext} from 'react';
import {PageContext} from '../stats/Stats';
import {pageList} from '@/lib/constants/constants';
import Image from 'next/image';
import clsx from 'clsx';

type UiHideContextType = {
  uiHide: boolean,
  setUiHide: React.Dispatch<React.SetStateAction<boolean>>
}
export const UiHideContext = createContext<UiHideContextType | null>(null);

export default function Hide() {
  const uiHideContext = useContext(UiHideContext);
  const page = useContext(PageContext);

  const hideChange = () => {
    uiHideContext?.setUiHide(prev => !prev);
  }

  return (
    <button className={clsx(
      styles.hide__button,
      !(page === pageList.mainMenu) && "cursor-target"
    )} onClick={hideChange}>
      <Image src={ButtonWrapper} alt="hide button" width={120} height={20} />
      <span>UI {uiHideContext?.uiHide ? "표시" : "숨김"}</span>
    </button>
  );
}