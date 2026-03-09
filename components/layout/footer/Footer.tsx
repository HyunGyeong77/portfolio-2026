import {useMediaQuery} from "@/lib/hooks/useMediaQuery";
import FooterMobile from "./mobile/FooterMobile";
import FooterDesktop from "./desktop/FooterDesktop";

export default function Footer() {
  const {width, isMobile, isTablet} = useMediaQuery();

  if(width === null) return null;

  if(isMobile || isTablet) {
    return <FooterMobile />
  } else {
    return <FooterDesktop />
  }
}