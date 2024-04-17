import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from '@/styles/layout/_layout.module.css';
const Layout = ({ children }: { children: any }) => {
  return (
    <div className={`${styles.page_wrapper}`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
