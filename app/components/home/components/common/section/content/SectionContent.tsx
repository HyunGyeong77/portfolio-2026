import styles from './section-content.module.scss';

export default function SectionContent({children}: {children: React.ReactNode}) {
  return (
    <div className={styles.content__wrap} data-testid="content">
      {children}
    </div>
  );
}