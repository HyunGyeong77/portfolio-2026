import {useMediaQuery} from "@/lib/hooks/useMediaQuery";
import FooterMobile from "./mobile/FooterMobile";

export default function Footer() {
  const {width, isMobile} = useMediaQuery();

  if(width === null) return null;

  if(isMobile) {
    return <FooterMobile />
  }
}