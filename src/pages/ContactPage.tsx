import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here (send to backend, etc.)
    alert('Message sent!');
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Your Name"
          className="w-full p-2 border border-gray-200 rounded-lg"
        />
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Your Email"
          className="w-full p-2 border border-gray-200 rounded-lg"
        />
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Your Message"
          className="w-full p-2 border border-gray-200 rounded-lg"
          rows={5}
        />
        <button type="submit" className="bg-blue-500 text-white p-4 rounded-lg">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
