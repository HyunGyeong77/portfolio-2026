import styles from './key-button.module.scss';
import Menu from './components/menu/Menu';
import Start from './components/start/Start';

type Props = {
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export default function KeyButton(props: Props) {
  return (
    <div className={styles.wrap}>
      <Menu setIsOpenMenu={props.setIsOpenMenu} />
      <Start />
    </div>
  );
}