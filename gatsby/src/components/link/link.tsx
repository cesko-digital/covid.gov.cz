import React, { useMemo } from 'react';
import classnames from 'classnames';
import { Link as OriginalLink } from 'gatsby';
import I18n, { TRoute } from '@/components/i18n';

interface Props {
  label?: string;
  to: string;
  className?: string;
  activeClassName?: string;
  partiallyActive?: boolean;
  noTR?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const ABSOLUTE_URL_REGEX = new RegExp('^(?:[a-z]+:)?//', 'i');

const Link: React.FC<Props> = ({
  children,
  label,
  to,
  className,
  onClick,
  activeClassName,
  partiallyActive,
  noTR,
}) => {
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

  return !isExternal ? (
    <OriginalLink
      onClick={handleInternalLinkClick}
      to={noTR ? to : TRoute(to)}
      activeClassName={activeClassName}
      partiallyActive={partiallyActive}
      {...commonProps}
    >
      {children || label}
    </OriginalLink>
  ) : (
    <a
      href={to}
      onClick={handleExternalLinkClick}
      target="_blank"
      rel="noreferrer"
      {...commonProps}
    >
      {children || label}
    </a>
  );
};

export default Link;
