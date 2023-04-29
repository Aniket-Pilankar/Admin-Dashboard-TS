import { Box } from '@mui/material';

import BarChartComp from '../chart-components/BarChart';
import Header from './Header';

const BarChart = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChartComp />
      </Box>
    </Box>
  );
};

export default BarChart;
