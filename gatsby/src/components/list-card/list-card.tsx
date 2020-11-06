import React from 'react';
import Button from '@/components/button';
import Link from '@/components/link';
import I18n from '@/components/i18n';

interface IProps {
  title: string;
  link: string;
  description: string;
}

const ListCard: React.FC<IProps> = ({ title, description, link }) => (
  <Link to={link} className="card p-2 mb-2  text-decoration-none">
    <h2 className="font-weight-medium mb-1">{title}</h2>
    <div className="d-flex justify-content-between align-items-end">
      <p className="m-0 color-gray">{description}</p>
      <div>
        <Button text={I18n('detail')} variant="outline" />
      </div>
    </div>
  </Link>
);

export default ListCard;
