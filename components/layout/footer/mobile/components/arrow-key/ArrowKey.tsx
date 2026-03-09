import styles from './arrow-key.module.scss';
import Arrow from './components/arrow/Arrow';

export default function ArrowKey() {

  return (
    <div className={styles["arrow-key"]}>
      <Arrow isPrev={true} />
      <Arrow isPrev={false} />
    </div>
  );
}