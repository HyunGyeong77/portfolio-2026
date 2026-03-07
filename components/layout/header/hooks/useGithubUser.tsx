"use client";

import {useQuery} from '@tanstack/react-query';
import {getGithubUser} from '@layout/header/api/github-api';

export function useGithubUser() {
  return useQuery({
    queryKey: ['user'],
    queryFn: getGithubUser,
    staleTime: 1000 * 60 * 5
  });
}