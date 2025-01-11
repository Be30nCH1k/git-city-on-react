import { useQuery } from '@tanstack/react-query';

const fetchAttractions = async () => {
  const response = await fetch('/api/attractions');
  return response.json();
};

export const useAttractions = () => {
  return useQuery(['attractions'], fetchAttractions);
};