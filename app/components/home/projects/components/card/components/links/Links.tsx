import styles from './links.module.scss';
import {useContext} from 'react';
import {PageContext} from '@/components/layout/header/components/stats/Stats';
import {pageList} from '@/lib/constants/constants';
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import LinkButton from './assets/svg/button.svg';

type Props = {
  url: string
  alt: string
  content: string
}

export default function Links(props: Props) {
  const {url, alt, content} = props;
  const page = useContext(PageContext);

  return (
    <Link href={url} target="_blank" className={clsx(
      styles.links__wrap,
      (page === pageList.projects) && "cursor-target"
    )}>
      <Image src={LinkButton} alt={alt} fill />
      <p>{content}</p>
    </Link>
  );
}