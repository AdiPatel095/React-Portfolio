import React, { useState, ChangeEvent, FormEvent } from 'react';

const Contact: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (!/\S+@\S+\.\S+/.test(newEmail)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || error) {
      alert('Please enter a valid email address.');
      return;
    }
    console.log('Submitted email:', email);
    alert('Thank you! Your email has been submitted.');
    setEmail('');
  };

  return (
    <section className="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
