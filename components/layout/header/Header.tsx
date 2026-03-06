"use client";

import {useMediaQuery} from '@/lib/hooks/useMediaQuery';
import HeaderMobile from './mobile/HeaderMobile';

export default function Header() {
  const {width, isMobile} = useMediaQuery();

  if(width === null) return null;

  if(isMobile) {
    return <HeaderMobile />
  }
}