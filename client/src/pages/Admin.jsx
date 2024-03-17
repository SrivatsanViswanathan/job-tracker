import { FaSuitcaseRolling, FaCalendarCheck } from 'react-icons/fa';
import { useLoaderData, redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import StatsContainerCSS from '../assets/styled-components/StatsContainerCSS';
import { toast } from 'react-toastify';
import { StatItem } from '../components';

export const adminLoader = async () => {
  try {
    const response = await customFetch.get('/users/admin/app-stats');
    return response.data;
  } catch (error) {
    toast.error('You are not authorized to view this page');
    return redirect('/dashboard');
  }
};

const Admin = () => {
  const { users, jobs } = useLoaderData();
  return (
    <StatsContainerCSS>
      <StatItem
        title='current users'
        count={users}
        color='#39b949'
        bcg='#fcefc7'
        icon={<FaSuitcaseRolling></FaSuitcaseRolling>}
      ></StatItem>
      <StatItem
        title='total jobs'
        count={jobs}
        color='#647acb'
        bcg='#e0e8f9'
        icon={<FaCalendarCheck></FaCalendarCheck>}
      ></StatItem>
    </StatsContainerCSS>
  );
};

export default Admin;
