import styles from './client-component.module.scss';
import Loading from '@common/loading/Loading';
import Header from '@layout/header/Header';

export default function ClientComponent() {
  return (
    <div className={styles.wrap}>
      <Loading />
      <Header />
      <main></main>
    </div>
  );
}