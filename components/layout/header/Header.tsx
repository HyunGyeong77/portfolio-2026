"use client";

import {useMediaQuery} from '@/lib/hooks/useMediaQuery';
import HeaderMobile from './mobile/HeaderMobile';
import HeaderDesktop from './desktop/HeaderDesktop';

export default function Header() {
  const {width, isMobile} = useMediaQuery();

  if(width === null) return null;

  if(isMobile) {
    return <HeaderMobile />
  } else {
    return <HeaderDesktop />
  }
}