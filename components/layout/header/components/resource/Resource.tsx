import styles from './resource.module.scss';
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from 'next/image';
import Link from 'next/link';

type ImageType = {
  src: StaticImport
  alt: string
  width: number
  height: number
}

type Props = {
  bg: ImageType
  link: ImageType
  href: string
  title: string
  resource: string | undefined
  isLoading: boolean
}

export default function Resource(props: Props) { 
  const {bg, link, href, title, resource, isLoading} = props;

  return (
    <div className={styles.resource}>
      <Image src={bg.src} alt={bg.alt} width={bg.width} height={bg.height} loading="eager" unoptimized />
      <div className={styles.resource__box}>
        <p>{isLoading ? "로딩중.." : resource}</p>
        <Link className={styles.resource__link} href={href} title={title} target="_blank">
          <Image src={link.src} alt={link.alt} width={link.width} height={link.height} loading="eager" unoptimized />
        </Link>
      </div>
    </div>
  );
}