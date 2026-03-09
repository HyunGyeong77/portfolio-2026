import styles from './prev.module.scss';
import ArrowSvg from "../ArrowSvg";

type Props = {
  isFocusPosible: () => false | string
}

export default function Prev(props: Props) {
  const {isFocusPosible} = props;

  return (
    <button className={`${styles.prev} ${isFocusPosible()}`}><ArrowSvg /></button>
  );
}