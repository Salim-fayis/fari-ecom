// src/pages/Contact.jsx
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
      
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div>
          <h2 className="text-xl font-bold mb-4">Get In Touch</h2>
          
          <div className="space-y-4 mb-6">
            <p className="text-gray-700">
              We welcome your inquiries and are happy to assist you with any questions about our products or services.
            </p>
            
            <div>
              <h3 className="font-medium">Address:</h3>
              <p className="text-gray-700">
                Room 308, Building A (Changjing Park West Plaza),<br />
                Master Mountain Road Po An,<br />
                Changshu, Jiangsu, China
              </p>
            </div>
            
            <div>
              <h3 className="font-medium">Email:</h3>
              <p className="text-gray-700">info@stodeer.com</p>
            </div>
            
            <div>
              <h3 className="font-medium">Phone:</h3>
              <p className="text-gray-700">+86 123 4567 8910</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-bold mb-4">Business Hours</h2>
            <table className="w-full text-gray-700">
              <tbody>
                <tr>
                  <td className="py-1">Monday - Friday:</td>
                  <td className="py-1">9:00 AM - 6:00 PM (CST)</td>
                </tr>
                <tr>
                  <td className="py-1">Saturday:</td>
                  <td className="py-1">10:00 AM - 4:00 PM (CST)</td>
                </tr>
                <tr>
                  <td className="py-1">Sunday:</td>
                  <td className="py-1">Closed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Contact Form */}
        <div>
          <h2 className="text-xl font-bold mb-4">Send Us a Message</h2>
          
          {formSubmitted ? (
            <div className="bg-green-100 text-green-700 p-4 rounded">
              <p className="font-medium">Thank you for your message!</p>
              <p>We have received your inquiry and will get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border p-2"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-1">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border p-2"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border p-2"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-1">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border p-2"
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit"
                  className="bg-black text-white px-6 py-2 hover:bg-gray-800"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;