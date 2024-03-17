import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa';
import StatsContainerCSS from '../assets/styled-components/StatsContainerCSS';
import StatItem from './StatItem';
const StatsContainer = ({ defaultStats }) => {
  const stats = [
    {
      title: 'pending applications',
      count: defaultStats?.pending || 0,
      icon: <FaSuitcaseRolling></FaSuitcaseRolling>,
      color: '#f59e0b',
      bcg: '#fef3c7',
    },
    {
      title: 'interviews schedules',
      count: defaultStats?.interview || 0,
      icon: <FaCalendarCheck></FaCalendarCheck>,
      color: '#647acb',
      bcg: '#e0e8f9',
    },
    {
      title: 'jobs declined',
      count: defaultStats?.declined || 0,
      icon: <FaBug></FaBug>,
      color: '#d66a6a',
      bcg: '#ffeeee',
    },
  ];
  return (
    <StatsContainerCSS>
      {stats.map((item) => {
        return <StatItem key={item.title} {...item}></StatItem>;
      })}
    </StatsContainerCSS>
  );
};

export default StatsContainer;
