import React from 'react';
import { Input } from 'antd';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <Input
      placeholder="Search by name or specialty"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ marginBottom: '20px', width: '400px' }}
    />
  );
};

export default SearchBar;
