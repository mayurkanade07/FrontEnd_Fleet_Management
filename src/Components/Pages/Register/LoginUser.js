import React, { useState } from 'react';
import './RegistrationForm.css';
import * as yup from 'yup';
import { Container } from 'react-bootstrap';

const schema = yup.object().shape({
  first_name: yup.string().required('First name is required'),
  last_name: yup.string().required('Last name is required'),
  email_id: yup.string().email('Invalid email format').required('Email is required'),
  mobile_number: yup.string().required('Mobile number is required'),
  address: yup.string().required('Address is required'),
  driving_license_no: yup.string().required('Driving License No. is required'),
  passport_no: yup.string().required('Passport No. is required'),
  state: yup.string().required('State is required'),
  city: yup.string().required('City is required'),
});

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email_id: '',
    mobile_number: '',
    address: '',
    driving_license_no: '',
    passport_no: '',
    state: '',
    city: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    console.log('Form submitted:', formData);

    try {
      await schema.validate(formData, { abortEarly: false });
      setErrors({});
      const response = await fetch('http://localhost:8080//api/user/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form data sent successfully');
        // Handle success scenario here
      } else {
        console.error('Failed to send form data');
        // Handle error scenario here
      }
    } catch (validationErrors) {
      const newErrors = {};
      validationErrors.inner.forEach(error => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    }
  };

  return (
    <Container fluid className="registration-bg-container">
    <div className="registration-form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email_id">Email</label>
          <input
            type="email"
            id="email_id"
            name="email_id"
            value={formData.email_id}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="mobile_number">Mobile Number</label>
          <input
            type="text"
            id="mobile_number"
            name="mobile_number"
            value={formData.mobile_number}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="aadhaar">Aadhaar Number</label>
          <input
            type="text"
            id="aadhaar"
            name="aadhaar"
            value={formData.aadhaar}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="driving_license_no">Driving License No.</label>
          <input
            type="text"
            id="driving_license_no"
            name="driving_license_no"
            value={formData.driving_license_no}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="passport_no">Passport No.</label>
          <input
            type="text"
            id="passport_no"
            name="passport_no"
            value={formData.passport_no}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </Container>
  );
};

export default RegistrationForm;
