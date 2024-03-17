import StatItemCSS from '../assets/styled-components/StatItemCSS';

const StatItem = ({ count, title, icon, color, bcg }) => {
  return (
    <StatItemCSS color={color} bcg={bcg}>
      <header>
        <span className='count'>{count}</span>
        <span className='icon'>{icon}</span>
      </header>
      <h5 className='title'>{title}</h5>
    </StatItemCSS>
  );
};

export default StatItem;
