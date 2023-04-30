import { Box, useTheme } from '@mui/material';

import GeographyChartComp from '../chart-components/GeographyChart';
import { tokens } from '../theme';
import Header from './Header';

const GeographyChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      ƒ
      <Header title="Geography" subtitle="Simple Geography Chart" />
      <Box height="75vh" border={`1px solid ${colors.grey[100]}`} borderRadius="4px">
        <GeographyChartComp />
      </Box>
    </Box>
  );
};

export default GeographyChart;
