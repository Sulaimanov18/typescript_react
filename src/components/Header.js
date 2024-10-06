import { jsx as _jsx } from "react/jsx-runtime";
import { Layout, Typography } from 'antd';
const { Header } = Layout;
const { Title } = Typography;
const TherapistHeader = () => {
    return (_jsx(Header, { style: { backgroundColor: '#f0f2f5', padding: '10px 20px' }, children: _jsx(Title, { level: 2, style: { color: '#333', margin: 0 }, children: "Therapists in Austin, TX" }) }));
};
export default TherapistHeader;
