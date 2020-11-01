import React, { useMemo } from 'react';
import classnames from 'classnames';
import { Link as TranslateLink } from 'gatsby-plugin-react-i18next';

interface Props {
  label: string;
  to: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

const ABSOLUTE_URL_REGEX = new RegExp('^(?:[a-z]+:)?//', 'i');

const Link: React.FC<Props> = ({ children, label, to, className, onClick }) => {
  // FIXME: udelat porovnavani domeny, je potreba vyresit SSR
  const isExternal = useMemo(() => {
    return ABSOLUTE_URL_REGEX.test(to);
  }, [to]);

  const commonProps = {
    className: classnames({
      external: isExternal,
      [className]: className,
    }),
    title: label,
    'aria-label': label,
  };

  const handleExternalLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // TODO: Add Analytics {@link hooks/useAnalytics}
    onClick?.(e)
  }

  const handleInternalLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Analytics is handled by Gatsby @see {@link config/gatsby-browser onRouteUpdate}
    onClick?.(e)
  }

  return !isExternal ? (
    <TranslateLink onClick={handleInternalLinkClick} to={to} {...commonProps}>
      {children || label}
    </TranslateLink>
  ) : (
    <a href={to} onClick={handleExternalLinkClick} target="_blank" {...commonProps}>
      {children || label}
    </a>
  );
};

export default Link;
