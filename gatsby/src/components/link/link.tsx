import React, { useMemo } from 'react';
import classnames from 'classnames';
import { Link as TranslateLink } from 'gatsby-plugin-react-i18next';

interface Props {
  label: string;
  to: string;
}

const ABSOLUTE_URL_REGEX = new RegExp('^(?:[a-z]+:)?//', 'i');

const Link: React.FC<Props> = ({ label, to }) => {
  // FIXME: udelat porovnavani domeny, je potreba vyresit SSR
  const isExternal = useMemo(() => {
    return ABSOLUTE_URL_REGEX.test(to);
  }, [to]);

  return (
    <TranslateLink
      to={to}
      className={classnames({
        external: isExternal,
      })}
      title={label}
      aria-label={label}
      target={isExternal && '_blank'}
    >
      {label}
    </TranslateLink>
  );
};

export default Link;
