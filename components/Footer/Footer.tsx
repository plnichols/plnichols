import React, { ReactElement } from 'react';
import Socials from '../Socials/Socials';
import styles from './Footer.module.scss';

const Footer = (): ReactElement => {
  const currentYear: number = new Date().getFullYear();

  return (
    <div className={styles.footer}>
      <div className={styles.left}>&copy; {currentYear} Pierre Luc Nichols</div>
      <div className={styles.right}>
        <Socials />
      </div>
    </div>
  );
};

export default Footer;
