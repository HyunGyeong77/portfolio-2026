import {useMediaQuery} from "@/lib/hooks/useMediaQuery";
import NavigationMobile from "./mobile/navigationMobile";
import NavigationDesktop from "./desktop/NavigationDesktop";

export default function Navigation() {
  const {width, isMobile} = useMediaQuery();

  if(!width) return null;

  if(isMobile) {
    return <NavigationMobile />
  } else {
    return <NavigationDesktop />
  }
}