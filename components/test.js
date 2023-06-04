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
        setShowModal(true); // Show the modal on successful form submission
      } else {
        // Form submission failed
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('An error occurred while submitting the form:', error);
    }
  };

  return (
    <div>
      <form className="bg-white bg-opacity-20 p-8 rounded-md max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Contact Form</h1>
        {/* Form inputs */}
        {/* ... */}
        <button
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
      
    </div>
  );
};

export default GlassmorphismForm;
