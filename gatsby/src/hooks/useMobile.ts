import { useTheme, useMediaQuery } from '@material-ui/core';

const useMobile = (
  key: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md',
): boolean => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down(key));
  return matches;
};

export default useMobile;
