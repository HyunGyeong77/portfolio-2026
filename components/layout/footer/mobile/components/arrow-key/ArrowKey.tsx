import styles from './arrow-key.module.scss';
import ArrowSvg from "./components/ArrowSvg";

export default function ArrowKey() {
  return (
    <div className={styles["arrow-key"]}>
      <button><ArrowSvg /></button>
      <button><ArrowSvg /></button>
    </div>
  );
}