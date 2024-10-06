import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, Typography } from 'antd';
const { Title, Paragraph } = Typography;
const TherapistCard = ({ expert }) => {
    return (_jsxs(Card, { hoverable: true, style: { marginBottom: '16px' }, cover: _jsx("img", { alt: expert.name, src: expert.imageUrl }), children: [_jsx(Title, { level: 4, children: expert.name }), _jsx(Paragraph, { children: expert.profession }), _jsxs(Paragraph, { children: [_jsx("strong", { children: "Specialties:" }), " ", expert.specialties.join(', ')] }), _jsx(Paragraph, { children: expert.description }), _jsxs(Paragraph, { children: [_jsx("strong", { children: "Contact:" }), " ", expert.phone, " | ", _jsx("a", { href: expert.website, children: "Website" })] })] }));
};
export default TherapistCard;
