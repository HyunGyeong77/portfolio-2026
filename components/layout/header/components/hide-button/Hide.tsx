import styles from './hide.module.scss';
import ButtonWrapper from '@layout/assets/svg/button-wrapper.svg';
import {useContext, createContext} from 'react';
import Image from 'next/image';

type UiHideContextType = {
  uiHide: boolean,
  setUiHide: React.Dispatch<React.SetStateAction<boolean>>
}
export const UiHideContext = createContext<UiHideContextType | null>(null);

export default function Hide() {
  const uiHideContext = useContext(UiHideContext);

  const hideChange = () => {
    uiHideContext?.setUiHide(prev => !prev);
  }

  return (
    <button className={styles.hide__button} onClick={hideChange}>
      <Image src={ButtonWrapper} alt="hide button" width={120} height={20} />
      <span>UI {uiHideContext?.uiHide ? "표시" : "숨김"}</span>
    </button>
  );
}