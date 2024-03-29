import { ChartsContainer, Header, StatsContainer } from '../components';
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const statsQuery = {
  queryKey: ['stats'],
  queryFn: async () => {
    const response = await customFetch.get('/jobs/stats');

    return response.data;
  },
};

export const statsLoader = (queryClient) => async () => {
  const data = await queryClient.ensureQueryData(statsQuery);
  return null;
};

const Stats = () => {
  // const { defaultStats, monthlyApplications } = useLoaderData();
  const { data } = useQuery(statsQuery);
  const { defaultStats, monthlyApplications } = data;

  return (
    <>
      <Header
        title='Stats'
        description='See the statistics of your job applications'
      ></Header>
      <StatsContainer defaultStats={defaultStats}></StatsContainer>
      {monthlyApplications?.length > 1 && (
        <ChartsContainer data={monthlyApplications}></ChartsContainer>
      )}
    </>
  );
};

export default Stats;
