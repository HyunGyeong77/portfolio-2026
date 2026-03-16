import {useMediaQuery} from "@/lib/hooks/useMediaQuery";
import FooterMobile from "./mobile/FooterMobile";
import FooterDesktop from "./desktop/FooterDesktop";

export default function Footer() {
  const {width, isDesktop} = useMediaQuery();
  if(width === null) return null;

  return (
    <>
      <FooterMobile isDesktop={isDesktop} />
      <FooterDesktop isDesktop={isDesktop} />
    </>
  );
}