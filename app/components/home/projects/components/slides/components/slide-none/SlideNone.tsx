import styles from './slide-none.module.scss';

export default function SlideNone() {
  return (
    <div className={styles["none__wrap"]}>
      <span>활동한 기록이 없습니다.</span>
    </div>
  );
}