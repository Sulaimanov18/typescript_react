import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Button } from 'antd';
import experts from '../expertsData'; // Import the expert data

const { Title, Paragraph } = Typography;

const ExpertProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find the index of the expert by ID
  const initialIndex = experts.findIndex((expert) => expert.id === id);
  const [currentIndex, setCurrentIndex] = useState(initialIndex >= 0 ? initialIndex : 0);

  const expert = experts[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : experts.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < experts.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between mb-4 w-full md:max-w-2xl">
        <button 
          className="bg-white rounded-full shadow-md p-2 cursor-pointer hover:bg-gray-200" 
          onClick={handlePrev}
        >
          <span className="text-lg">❮</span>
        </button>
        <button 
          className="bg-white rounded-full shadow-md p-2 cursor-pointer hover:bg-gray-200" 
          onClick={handleNext}
        >
          <span className="text-lg">❯</span>
        </button>
      </div>
      <div className="flex flex-col md:flex-row p-4 md:max-w-2xl bg-white shadow-lg rounded-lg">
        <div className="flex-none md:w-1/3">
          <img 
            className="w-full h-auto object-cover rounded-l-lg"
            alt={expert.name} 
            src={expert.imageUrl} 
          />
        </div>
        <div className="flex-grow p-4">
          <Title level={2}>{expert.name}</Title>
          <Title level={4}>{expert.profession}</Title>
          <Paragraph>{expert.bio}</Paragraph>
          
          <Title level={5}>Specialties:</Title>
          <ul className="list-disc list-inside mb-4">
            {expert.specialties.map((specialty, index) => (
              <li key={index}>{specialty}</li>
            ))}
          </ul>

          <Paragraph>
            <strong>Location:</strong> {expert.location}
          </Paragraph>

          <Paragraph>
            <strong>Phone:</strong> {expert.phone}
          </Paragraph>

          <Button type="primary" onClick={() => window.open(`tel:${expert.phone}`)} className="mr-2">
            Call
          </Button>
          <Button type="link" onClick={() => window.open(expert.website)}>
            Visit Website
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExpertProfilePage;
