import {useState, useContext, useEffect} from 'react';
import {PageContext} from '../../header/components/stats/Stats';
import {pageList} from '@/lib/constants/constants';

export function useButtonDisabled(): {isLastPage: boolean} {
  const page = useContext(PageContext);
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    setIsLastPage(page === pageList.projects);
  }, [page]);

  return {isLastPage: isLastPage};
}