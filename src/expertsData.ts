export type Expert = {
    id: string;
    name: string;
    profession: string;
    description: string;
    specialties: string[];
    imageUrl: string;
    phone: string;
    website: string;
    location: string;
    bio: string;
    email: string;
};

const experts: Expert[] = [
    {
        id: '1',
        name: 'April Daugherty',
        profession: 'Psychologist',
        description: 'April specializes in anxiety, depression, and Cognitive Behavioral Therapy, helping clients overcome mental health challenges and thrive.',
        specialties: ['Anxiety', 'Depression', 'Cognitive Behavioral Therapy'],
        imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
        phone: '123-456-7890',
        website: 'https://example.com',
        location: 'Colleyville, TX',
        bio: 'A compassionate psychologist dedicated to helping clients overcome challenges.',
        email: 'april@example.com',
    },
    {
        id: '2',
        name: 'John Smith',
        profession: 'Marriage Counselor',
        description: 'John helps couples resolve conflicts and improve communication, fostering stronger emotional connections and healthier relationships.',
        specialties: ['Couples Therapy', 'Conflict Resolution'],
        imageUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
        phone: '987-654-3210',
        website: 'https://johnsmith.com',
        location: 'Dallas, TX',
        bio: 'An experienced marriage counselor helping couples build stronger relationships.',
        email: 'john@example.com',
    },
    {
        id: '3',
        name: 'Jane Doe',
        profession: 'Life Coach',
        description: 'Jane empowers clients to achieve personal and professional growth, offering guidance in personal development and career coaching.',
        specialties: ['Personal Development', 'Career Coaching'],
        imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
        phone: '234-567-8901',
        website: 'https://janedoe.com',
        location: 'Austin, TX',
        bio: 'A passionate life coach committed to guiding individuals toward personal growth.',
        email: 'jane@example.com',
    },
    {
        id: '4',
        name: 'Michael Johnson',
        profession: 'Business Coach',
        description: 'Michael advises entrepreneurs on business strategy and marketing, helping them achieve sustainable growth and long-term success.',
        specialties: ['Business Strategy', 'Marketing'],
        imageUrl: 'https://randomuser.me/api/portraits/men/4.jpg',
        phone: '345-678-9012',
        website: 'https://michaeljohnson.com',
        location: 'Houston, TX',
        bio: 'A business coach focused on strategies for success in the entrepreneurial world.',
        email: 'michael@example.com',
    },
    {
        id: '5',
        name: 'Emily Davis',
        profession: 'Financial Advisor',
        description: 'Emily offers personalized investment and retirement planning strategies to help clients achieve financial security and long-term goals.',
        specialties: ['Investment', 'Retirement Planning'],
        imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
        phone: '456-789-0123',
        website: 'https://emilydavis.com',
        location: 'San Antonio, TX',
        bio: 'A financial advisor dedicated to helping clients achieve their financial goals.',
        email: 'emily@example.com',
    },
];

export default experts;
