import React from 'react';
import styles from './sponsor-us.module.css';
import Header from '../components/Header';

const SponsorUs = () => {
  return (
    <div className={styles.fullPageBackground}>
      <div className={styles.content}>
        <div className={styles.formWrapper}>
          <h1 className={styles.title}>Sponsorship Inquiry</h1>
          <form className={styles.form}>
            <label htmlFor="name" className={styles.label}>Name:</label>
            <input type="text" id="name" name="name" required className={styles.input} />

            <label htmlFor="email" className={styles.label}>Email:</label>
            <input type="email" id="email" name="email" required className={styles.input} />

            <label htmlFor="message" className={styles.label}>Message:</label>
            <textarea id="message" name="message" rows="4" required className={styles.textarea}></textarea>

            <button type="submit" className={styles.button}>Send</button>
          </form>
        </div>
      </div>
    </div> 
  );
};

export default SponsorUs;
