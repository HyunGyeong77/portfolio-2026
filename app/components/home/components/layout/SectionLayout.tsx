import styles from './section-layout.module.scss';

export default function SectionLayout({children}: {children: React.ReactNode}) {
  return (
    <section className={styles.section}>
      {children}
    </section>
  );
}