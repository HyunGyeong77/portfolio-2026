import styles from './github-link.module.scss';
import Link from 'next/link';
import MenuButtonSvg from '../MenuButtonSvg';

type Props = {
  href: string
  title: string
  content: string
}

export default function GithubLink(props: Props) {
  const {href, title, content} = props;

  return (
    <Link href={href} title={title} className={`${styles.link} cursor-target`}>
      <MenuButtonSvg />
      <div className={styles["link__content-box"]}>
        <p className={styles.link__content}>{content}</p>
      </div>
    </Link>
  );
}