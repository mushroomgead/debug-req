"use client"
import { useState } from 'react';

const MyForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(JSON.stringify(formData), 'JSON.stringify(formData)');

    // try {
    //   const response = await fetch('/api/myEndpoint', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   if (!response.ok) {
    //     throw new Error('Request failed');
    //   }

    //   const responseData = await response.json();

    //   // Handle the response data as needed
    //   console.log('Response from server:', responseData);
    // } catch (error) {
    //   console.error('Error submitting form:', error.message);
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
