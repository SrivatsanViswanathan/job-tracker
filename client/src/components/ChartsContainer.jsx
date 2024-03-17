import { useState } from 'react';
import BarChart from './BarChart';
import AreaChart from './AreaChart';
import ChartsContainerCSS from '../assets/styled-components/ChartsContainerCSS';
const ChartsContainer = ({ data }) => {
  const [barChart, setBarchart] = useState(true);
  return (
    <ChartsContainerCSS>
      <h4>Monthly Applications</h4>
      <button type='button' onClick={() => setBarchart(!barChart)}>
        {barChart ? 'Area Chart' : 'Bar Chart'}
      </button>
      {barChart ? (
        <BarChart data={data}></BarChart>
      ) : (
        <AreaChart data={data}></AreaChart>
      )}
    </ChartsContainerCSS>
  );
};

export default ChartsContainer;
