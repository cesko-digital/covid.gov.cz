import React, { useMemo } from 'react';
import classnames from 'classnames';
import { Link as OriginalLink } from 'gatsby';
import { useCurrentLanguage } from '../i18n';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  dataTestId?: string;
  activeClassName?: string;
  partiallyActive?: boolean;
  noLanguageCodePrefix?: boolean;
}

const ABSOLUTE_URL_REGEX = new RegExp('^(?:[a-z]+:)?//', 'i');

const Link: React.FC<Props> = ({
  children,
  title,
  to,
  dataTestId,
  className,
  onClick,
  activeClassName,
  partiallyActive,
  noLanguageCodePrefix,
  ...rest
}) => {
  const currentLanguage = useCurrentLanguage();
  // FIXME: udelat porovnavani domeny, je potreba vyresit SSR
  const isExternal = useMemo(() => {
    return ABSOLUTE_URL_REGEX.test(to);
  }, [to]);

  const commonProps = {
    className: classnames({
      external: isExternal,
      [className]: className,
    }),
    title,
    'aria-label': title,
    'data-testid': dataTestId,
  };

  const handleExternalLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // TODO: Add Analytics {@link hooks/useAnalytics}
    if (onClick) {
      onClick(e);
    }
  };

  const handleInternalLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Analytics is handled by Gatsby @see {@link config/gatsby-browser onRouteUpdate}
    if (onClick) {
      onClick(e);
    }
  };

  const getTo = () => {
    if (noLanguageCodePrefix || currentLanguage === 'cs') {
      return to;
    }
    return `/${currentLanguage}${to}`;
  };

  return !isExternal ? (
    <OriginalLink
      onClick={handleInternalLinkClick}
      to={getTo()}
      activeClassName={activeClassName}
      partiallyActive={partiallyActive}
      {...commonProps}
      {...rest}
    >
      {children || title}
    </OriginalLink>
  ) : (
    <a
      href={to}
      onClick={handleExternalLinkClick}
      rel="noreferrer"
      {...commonProps}
      {...rest}
    >
      {children || title}
    </a>
  );
};

export default Link;
