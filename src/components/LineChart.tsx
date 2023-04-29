import { Box } from '@mui/material';

import LineChartComp from '../chart-components/LineChart';
import Header from './Header';

const LineChart = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChartComp />
      </Box>
    </Box>
  );
};

export default LineChart;
