import { useTheme, useMediaQuery } from '@material-ui/core';

const useDesktop = (): boolean => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up('lg'));
};

export default useDesktop;
