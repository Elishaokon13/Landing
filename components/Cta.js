import { useState } from 'react';

const GlassmorphismForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showModal, setShowModal] = useState(false); // State to control the visibility of the modal

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
    <p className="text-base lg:text-xl font-medium text-gray-500 text-center">
        Have you attended
      </p>
      <p className=" text-3xl lg:text-5xl font-semibold text-[#059a75] text-center mt-3">
        TGC 1.0?
      </p>
    <form className="bg-[#059a75] bg-opacity-40 p-8 rounded-md max-w-md mx-auto mb-20">
      <h1 className="text-2xl text-[#059a75] font-bold mb-4">We would love your feedback</h1>
      <div className="mb-4">
        <label className="block text-[059a75] text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="w-full bg-[#0c442a] bg-opacity-10 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-[059a75] text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="w-full bg-[#0c442a] bg-opacity-10 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-[#0c442a] text-sm font-bold mb-2" htmlFor="message">
          What would you like us to cover at TGC 2.0?
        </label>
        <textarea
          className="w-full bg-[#0c442a] bg-opacity-10 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button
        className="bg-[#059a75] hover:bg-[#0c442a] text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
    {showModal && (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white w-1/2 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Success!</h2>
          <p>Your response has been sent successfully.</p>
          <button
            className="mt-4 bg-[#0c442a] hover:bg-[#0c442a] text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
        </div>
      </div>
    )}
    </div>
  );
};

export default GlassmorphismForm;
