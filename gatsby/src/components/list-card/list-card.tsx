import React from 'react';
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

const ListCard: React.FC<IProps> = ({ title, link }) => {
  return (
    <div className="card">
      <Link to={link}>{title}</Link>
    </div>
  );
};

export default ListCard;
