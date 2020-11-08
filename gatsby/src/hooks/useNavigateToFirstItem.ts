import { useEffect } from 'react';
import useMobile from './useMobile';
import { navigate } from 'gatsby';

type Item = {
  name?: string;
  path?: {
    alias?: string;
  };
};

export const useNavigateToFirstItemOnDesktop = (
  items: Item[],
  langCode: string,
) => {
  const isMobile = useMobile(undefined, { defaultMatches: false, noSsr: true });
  useEffect(() => {
    if (!isMobile) {
      const collator = new Intl.Collator([langCode]);
      items.sort((a, b) => collator.compare(a.name, b.name));

      const firstItemSlug = items[0].path.alias;
      navigate(firstItemSlug);
    }
  }, [isMobile]);
};
