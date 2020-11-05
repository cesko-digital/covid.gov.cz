import React, { FC } from 'react';

interface IProps {
  className?: string;
}

export const ContentIcon: FC<IProps> = ({ className }) => (
  <i className={className}>icon</i>
);

export default ContentIcon;
