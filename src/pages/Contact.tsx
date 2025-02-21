import React, { useState, ChangeEvent, FormEvent } from 'react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validate = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Submit logic (e.g., send data to a server, email service, etc.)
    console.log('Form submitted:', { name, email, message });

    alert('Thank you! Your message has been sent.');
    setName('');
    setEmail('');
    setMessage('');
    setErrors({});
  };

  return (
    <section className="contact">
      <h2>Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        {/* NAME */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input 
            type="text"
            id="name"
            name="name"
            placeholder='Your Name'
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        {/* EMAIL */}
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Your Email'
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        {/* MESSAGE */}
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder='Your Message'
            rows={4}
            value={message}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
            required
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
