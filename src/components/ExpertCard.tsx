import React from 'react';
import { Typography, Button } from 'antd';
import { Link } from 'react-router-dom';
import useWindowSize from '../hooks/useWindowSize'; // Adjust the path accordingly

const { Title, Paragraph } = Typography;

type ExpertCardProps = {
  expert: {
    id: string; 
    name: string;
    description: string;
    profession: string;
    imageUrl: string;
    specialties: string[];
    phone: string; 
    website: string; 
    location: string; 
    email: string; 
  };
};

const ExpertCard: React.FC<ExpertCardProps> = ({ expert }) => {
  const { width } = useWindowSize(); // Get window width

  // Determine button text size based on window width
  const buttonTextSize = width < 768 ? 'text-xs' : 'text-sm'; // Adjust the breakpoint as needed

  return (
    <Link to={`/expert/${expert.id}`}>
      <div 
        className="flex flex-col md:flex-row p-5 rounded-xl shadow-md bg-white transition-transform transform hover:scale-105 cursor-pointer"
        style={{ width: '100%', marginBottom: '16px' }} 
      >
        {/* Image on the left */}
        <img
          alt={expert.name}
          src={expert.imageUrl}
          className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-md mb-3 md:mb-0 mr-4" 
        />
        
        <div className="flex-grow">
          <div className="flex flex-col md:flex-row">
            <div className="md:flex-grow">
              <Title level={4} className="text-custom-blue mb-1">{expert.name}</Title>
              <Paragraph className="text-gray-600 text-xs mb-1">{expert.profession}</Paragraph>
              <Paragraph className='text-sm mb-1'>
                <strong>Specialties:</strong> {expert.specialties.join(', ')}
              </Paragraph>
            </div>
          </div>

          {/* Description centered below the name */}
          <Paragraph className='text-sm mb-2'>
            <strong>Description:</strong> {expert.description}
          </Paragraph>
        </div>

        {/* Phone and Email Section at the bottom */}
        <div className="flex flex-col md:ml-4 mt-2">
          <Paragraph className="flex items-center justify-center bg-blue-500 text-white p-2 rounded-md mb-2">
            {expert.phone}
          </Paragraph>
          <Button 
            type="primary" 
            onClick={() => window.open(`mailto:${expert.email}`)} 
            className={`mb-2 ${buttonTextSize} w-full`} 
            style={{ minWidth: '200px', height: '40px' }} 
          >
            Email
          </Button>
          {/* Hide the View button on mobile */}
          <div className="hidden md:block"> 
            <Button 
              type="default" 
              className={` ${buttonTextSize} w-full`} 
              style={{ minWidth: '200px', height: '40px' }} 
            >
              View
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExpertCard;
