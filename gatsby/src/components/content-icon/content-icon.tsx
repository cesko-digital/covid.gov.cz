import React, { FC } from 'react';
import classNames from 'classnames';

interface IProps {
  className?: string;
  code?: string;
}

const DEFAULT_CODE = 'folder';

export const ContentIcon: FC<IProps> = ({ className, code }) => {
  const iconClassName = classNames(className, 'material-icons');
  return <i className={iconClassName}>{code || DEFAULT_CODE}</i>;
};

export default ContentIcon;
