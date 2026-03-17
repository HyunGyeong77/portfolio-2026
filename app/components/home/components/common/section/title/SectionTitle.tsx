import styles from './section-title.module.scss';

type Props = {
  title: string
}

export default function SectionTitle(props: Props) {
  const {title} = props;

  return (
    <div className={styles.title__wrap}>
      <h2 className={styles.title} data-testid="title">{title}</h2>
    </div>
  );
}