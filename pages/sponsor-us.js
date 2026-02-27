import React, { useState, useRef } from 'react';
import styles from './sponsor-us.module.css';
import emailjs from '@emailjs/browser';

const SponsorUs = () => {
  // State hooks for each input field
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [company, setCompany] = useState('');
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const form = useRef(); // Ref for the form

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submit action
    setSubmitStatus(null);

    // Send the email using EmailJS
    emailjs.sendForm('service_nicrg79', 'template_rsehyri', form.current, '65MyIy8ifNN-8trRr')
      .then((result) => {
        console.log('Email sent!', result.text);
        setSubmitStatus('success');
        setName('');
        setEmail('');
        setMessage('');
        setCompany('');
      })
      .catch((error) => {
        console.error('Failed to send email.', error.text);
        setSubmitStatus('error');
      });
  };

  return (
    <div className={styles.fullPageBackground}>
      {/* ... */}
      <div className={styles.content}>
        <div className={styles.formWrapper}>
          <h1 className={styles.title}>Sponsorship Inquiry</h1>
          <p className={styles.emailLink}>
            Or email us directly at{' '}
            <a href="mailto:thssrobotics@gmail.com" className={styles.mailtoLink}>thssrobotics@gmail.com</a>
          </p>
          <form ref={form} className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="name" className={styles.label}>Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
              className={styles.input} 
            />

            <label htmlFor="email" className={styles.label}>Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              className={styles.input} 
            />
            
            <label htmlFor="company" className={styles.label}>Company:</label>
            <input 
              type="company" 
              id="company" 
              name="company" 
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required 
              className={styles.input} 
            />


            <label htmlFor="message" className={styles.label}>Message:</label>
            <textarea 
              id="message" 
              name="message" 
              rows="6" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required 
              className={styles.textarea}
            ></textarea>

            <button type="submit" className={styles.button}>Send</button>
            {submitStatus === 'success' && (
              <p className={styles.statusMessage} style={{ color: 'var(--success, green)' }}>Message sent successfully.</p>
            )}
            {submitStatus === 'error' && (
              <p className={styles.statusMessage} style={{ color: 'var(--error, #c00)' }}>
                Failed to send. Please try again later or contact us directly at{' '}
                <a href="mailto:thssrobotics@gmail.com" className={styles.mailtoLink}>thssrobotics@gmail.com</a>.
              </p>
            )}
          </form>
        </div>
      </div>
    </div> 
  );
};

export default SponsorUs;
