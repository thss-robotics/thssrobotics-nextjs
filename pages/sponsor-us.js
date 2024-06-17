// pages/sponsor-us.js
import React from 'react';
import styles from './sponsor-us.module.css';
import { Box, useMediaQuery, useTheme, IconButton, Button } from '@mui/material';
import Header from '../components/Header.js';

const SponsorUs = () => {
  return (  
    <div>
        <div className={styles.container}>    
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
  );
};

export default SponsorUs;