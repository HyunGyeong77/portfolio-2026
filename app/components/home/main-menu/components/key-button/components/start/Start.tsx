import Button from '../button/Button';
import {useContext} from 'react';
import {PageChangeContext} from '@/app/components/ClientComponent';
import {pageList} from '@/lib/constants/constants';

export default function Start() {
  const pageChange = useContext(PageChangeContext);

  return (
    <Button content="시작하기" onClick={() => pageChange?.mainMenuHide(pageList.about)} />
  );
}