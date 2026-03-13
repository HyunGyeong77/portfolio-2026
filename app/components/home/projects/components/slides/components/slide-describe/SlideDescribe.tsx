import styles from './slide-describe.module.scss';

export default function SlideDescribe() {
  return (
    <div className={styles["describe__wrap"]}>
      <span>PC : 마우스 휠 또는 키보드 (↑위, ↓아래)</span>
      <span>모바일 : 손가락으로 위/아래 드래그</span>
    </div>
  );
}