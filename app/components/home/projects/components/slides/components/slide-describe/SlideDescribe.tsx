import styles from './slide-describe.module.scss';

type Props = {
  topDescribe: string
  btmDescribe: string
}

export default function SlideDescribe(props: Props) {
  const {topDescribe, btmDescribe} = props;

  return (
    <div className={styles["describe__wrap"]}>
      <span>{topDescribe}</span>
      <span>{btmDescribe}</span>
    </div>
  );
}