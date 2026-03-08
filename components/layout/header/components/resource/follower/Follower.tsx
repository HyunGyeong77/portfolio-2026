import Resource from '@layout/header/components/resource/Resource';
import FollowerSvg from '@layout/header/assets/svg/follower.svg';
import Plus from '@layout/header/assets/svg/plus.svg';
import {useGithubUser} from '@layout/header/hooks/useGithubUser';
import {githubLink} from '@/lib/constants/constants';

type Props = {
  bgWidth: number
  bgHeight: number
  linkWidth: number
  linkHeight: number
}

export default function Follower(props: Props) {
  const {bgWidth, bgHeight, linkWidth, linkHeight} = props;
  const {data, isLoading} = useGithubUser();

  return (
    <Resource 
      bg={{
        src: FollowerSvg,
        alt: "follower image",
        width: bgWidth,
        height: bgHeight
      }}
      link={{
        src: Plus,
        alt: "go to follow",
        width: linkWidth,
        height: linkHeight
      }}
      href={githubLink.profile}
      title="팔로우 하러가기"
      resource={data?.followers}
      isLoading={isLoading}
    />
  );
}