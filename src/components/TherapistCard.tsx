import React from 'react';
import { Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

type TherapistCardProps = {
  expert: {
    name: string;
    profession: string;
    description: string;
    specialties: string[];
    imageUrl: string;
    phone: string;
    website: string;
  };
};

const TherapistCard: React.FC<TherapistCardProps> = ({ expert }) => {
  return (
    <Card
      hoverable
      style={{ marginBottom: '16px' }}
      cover={<img alt={expert.name} src={expert.imageUrl} />}
    >
      <Title level={4}>{expert.name}</Title>
      <Paragraph>{expert.profession}</Paragraph>
      <Paragraph>
        <strong>Specialties:</strong> {expert.specialties.join(', ')}
      </Paragraph>
      <Paragraph>{expert.description}</Paragraph>
      <Paragraph>
        <strong>Contact:</strong> {expert.phone} | <a href={expert.website}>Website</a>
      </Paragraph>
    </Card>
  );
};

export default TherapistCard;
