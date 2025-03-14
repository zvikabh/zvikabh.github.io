"use client";

import { useState } from 'react';

import Navbar from "../Navbar/navbar";
import Header from "../Header/header";
import styles from "./layout.module.scss";

export default function Layout({ children }) {
  const [isNavbarVisibleOnMobile, setIsNavbarVisibleOnMobile] = useState(false);

  return (
    <>
      <Header
          isNavbarVisible={isNavbarVisibleOnMobile} 
          setIsNavbarVisible={setIsNavbarVisibleOnMobile} />
      <div className={styles.main_wrapper}>
        <Navbar isVisibleOnMobile={isNavbarVisibleOnMobile} />
        <div className={styles.main_pane}>
          {children}
        </div>
      </div>
    </>
  )
}
