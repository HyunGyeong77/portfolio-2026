import {useMediaQuery} from "@/lib/hooks/useMediaQuery";
import NavigationMobile from "./mobile/NavigationMobile";

export default function Navigation() {
  const {width, isMobile} = useMediaQuery();

  if(!width) return null;

  if(isMobile) {
    return <NavigationMobile />
  }
}