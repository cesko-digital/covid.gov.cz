import useMobile from '@/hooks/useMobile';
import classNames from 'classnames';
import React from 'react';
import Col from '../col';
import SearchBox from '../search-box';
import classes from './desktop-top-content.module.scss';

interface IProps {
  title: string;
  subtitle?: string;
  searchQuery?: string;
  showSearch?: boolean;
}

const DesktopTopContent: React.FC<IProps> = ({
  title,
  subtitle,
  showSearch = true,
}) => {
  const isMobile = useMobile();

  if (isMobile) {
    return null;
  }

  return (
    <>
      <div
        className={classNames(
          'd-flex',
          'flex-column',
          'justify-content-center',
          'align-items-center',
          classes.desktopTopContent,
        )}
      >
        {title && <h2 className={classes.title}>{title}</h2>}
        {showSearch && (
          <Col col={10} colMd={8} colLg={4} colXl={3}>
            <SearchBox />
          </Col>
        )}
        {subtitle && <p className={classes.subtitle}>{subtitle}</p>}
      </div>
    </>
  );
};

export default DesktopTopContent;
