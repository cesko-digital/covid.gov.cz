import useMobile from './useMobile';

export const useBackgroundImageStyle = () => {
  const isMobile = useMobile(undefined, { noSsr: true }); // it always returns false for the first time
  const imageUrl = isMobile
    ? '/images/covid-portal-mobile.jpg'
    : '/images/covid-portal.jpg';

  return {
    backgroundImage: `url('${imageUrl}')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    backgroundSize: '100%',
    // Background might jump on iOS phones. This solves it:
    backFaceVisibility: 'hidden',
    transform: 'translate3d(0, 0, 0)',
  };
};
