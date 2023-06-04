import { useState } from 'react';

const GlassmorphismForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/xjvdqwel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Form submission successful
        console.log('Form submitted successfully!');
      } else {
        // Form submission failed
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('An error occurred while submitting the form:', error);
    }
  };

  return (
    <form className="bg-white bg-opacity-20 p-8 rounded-md max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">We would love your feedback</h1>
      <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="w-full bg-white bg-opacity-10 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="w-full bg-white bg-opacity-10 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
          Tell us what you think about our TGC? What are you expecting in the future?
        </label>
        <textarea
          className="w-full bg-white bg-opacity-10 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
};

export default GlassmorphismForm;
