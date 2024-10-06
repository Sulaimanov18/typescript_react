import React from 'react';
import { Layout, Typography } from 'antd';

const { Header } = Layout;
const { Title } = Typography;

const TherapistHeader: React.FC = () => {
  return (
    <Header style={{ backgroundColor: '#f0f2f5', padding: '10px 20px' }}>
      <Title level={2} style={{ color: '#333', margin: 0 }}>
        Therapists in Austin, TX
      </Title>
    </Header>
  );
};

export default TherapistHeader;
