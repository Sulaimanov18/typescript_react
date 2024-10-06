import { jsx as _jsx } from "react/jsx-runtime";
import { Input } from 'antd';
const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (_jsx(Input, { placeholder: "Search by name or specialty", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), style: { marginBottom: '20px', width: '400px' } }));
};
export default SearchBar;
