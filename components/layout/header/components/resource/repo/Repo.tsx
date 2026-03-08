import Resource from '@layout/header/components/resource/Resource';
import Repositories from '@layout/header/assets/svg/repositories.svg';
import Link from '@layout/header/assets/svg/link.svg';
import {useGithubUser} from '@layout/header/hooks/useGithubUser';
import {githubLink} from '@/lib/constants/constants';

type Props = {
  bgWidth: number
  bgHeight: number
  linkWidth: number
  linkHeight: number
}

export default function Repo(props: Props) {
  const {bgWidth, bgHeight, linkWidth, linkHeight} = props;
  const {data, isLoading} = useGithubUser();

  return (
    <Resource 
      bg={{
        src: Repositories,
        alt: "repositories image",
        width: bgWidth,
        height: bgHeight
      }}
      link={{
        src: Link,
        alt: "go to more",
        width: linkWidth,
        height: linkHeight
      }}
      href={githubLink.repository}
      title="레포지토리 보러가기"
      resource={data?.public_repos}
      isLoading={isLoading}
    />
  );
}