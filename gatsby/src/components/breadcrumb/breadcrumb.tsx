import classNames from 'classnames';
import React from 'react';
import Link from '../link';
import classes from './breadcrumb.module.scss';

interface INavItem {
  title: string;
  url: string;
}

interface IProps {
  items: (string | INavItem)[];
  variant?: 'normal' | 'inverse';
}

const isNavItem = (item: any): item is INavItem => {
  return (item as INavItem).title !== undefined;
};

const getBreadcrumbClasses = (variant: IProps['variant']): string => {
  return classNames('breadcrumb', classes.breadcrumbContainer, {
    'breadcrumb--inverse': variant === 'inverse',
  });
};

const Breadcrumb: React.FC<IProps> = ({ items, variant = 'normal' }) => {
  const getItemClasses = (index: number): string => {
    return classNames('breadcrumb__item', classes.breadcrumbItem, {
      [classes.breadcrumbItemActive]: index === items.length - 1,
    });
  };

  return (
    <nav className="breadcrumbs" aria-label="breadcrumb">
      <ol className={getBreadcrumbClasses(variant)}>
        {items.map((item, index) => {
          return (
            <li
              key={`breadcrumb-item-${index}`}
              className={getItemClasses(index)}
            >
              {isNavItem(item) ? (
                <Link
                  to={item.url}
                  className="breadcrumb__link"
                  title={item.title}
                />
              ) : (
                <span className="breadcrumb__link">{item}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
