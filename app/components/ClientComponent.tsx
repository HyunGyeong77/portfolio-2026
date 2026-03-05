import styles from './client-component.module.scss';
import Loading from '@common/loading/Loading';

export default function ClientComponent() {
  return (
    <div className={styles.wrap}>
      <Loading />
      <main></main>
    </div>
  );
}