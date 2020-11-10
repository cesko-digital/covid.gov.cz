import { useTheme, useMediaQuery, Options } from '@material-ui/core';

const useMobile = (
  key: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'sm',
  options?: Options,
): boolean => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down(key), options);
  // return true during SSR
  if (typeof window === 'undefined') {
    return true;
  }
  return matches;
};

export default useMobile;
