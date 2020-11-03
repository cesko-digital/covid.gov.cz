import React from 'react';
import Breadcrumb from '@/components/breadcrumb';
import Link from '@/components/link';

interface IProps {
  title?: string;
  icon?: React.ReactNode;
  link?: string;
  breadcrumbs?: string;
  description?: string;
  region?: string;
  validFrom?: string;
  validTo?: string;
}

const ListCard: React.FC<IProps> = ({
  title,
  icon,
  link,
  breadcrumbs,
  description,
  region,
  validFrom,
  validTo,
}) => {
  return (
    <div className="card">
      <Link to={link}>{title}</Link>
    </div>
  );
};
export default ListCard;
