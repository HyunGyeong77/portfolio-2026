import styles from './content.module.scss';

export default function Content() {
  return (
    <div className={styles.content__wrap}>
      <p>{`저는 천재형 개발자는 아닙니다.\n대신 포기하지 않는 개발자입니다.`}</p>
      <p>{`이해가 될때까지 반복하고,\n익숙해질 때까지 구현합니다.`}</p>
      <p>{`꾸준함은 재능이 아니지만,\n제가 가장 믿는 능력입니다.`}</p>
    </div>
  );
}