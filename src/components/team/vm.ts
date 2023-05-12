import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useTheme } from '@mui/material';

import { RootState } from '../../redux/store';
import { fetchUser } from '../../redux/userProfileSlice';
import { tokens } from '../../theme';
import { useAppDispatch } from '../../utils/hooks';

export default function useTeamVM() {
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const mockDataTeam = useSelector((state: RootState) => state.user.user);

  useEffect(
    function initializePage() {
      setIsLoading(true);
      dispatch(fetchUser()).finally(() => setIsLoading(false));
    },
    [dispatch],
  );

  return { mockDataTeam, colors, isLoading };
}
