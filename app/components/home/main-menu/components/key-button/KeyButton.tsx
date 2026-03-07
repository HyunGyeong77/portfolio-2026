import styles from './key-button.module.scss';
import Menu from './components/menu/Menu';
import Start from './components/start/Start';

export default function KeyButton() {
  return (
    <div className={styles.wrap}>
      <Menu />
      <Start />
    </div>
  );
}