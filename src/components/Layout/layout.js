"use client";

import { useState } from 'react';

import Navbar from "../Navbar/navbar";
import Header from "../Header/header";
import TitleProvider from "../../contexts/TitleContext";
import styles from "./layout.module.scss";

export default function Layout({ children }) {
  const [isNavbarVisibleOnMobile, setIsNavbarVisibleOnMobile] = useState(false);

  return (
    <TitleProvider>
      <Header
          isNavbarVisible={isNavbarVisibleOnMobile} 
          setIsNavbarVisible={setIsNavbarVisibleOnMobile} />
      <div className={styles.main_wrapper}>
        <Navbar
            isVisibleOnMobile={isNavbarVisibleOnMobile}
            setIsNavbarVisible={setIsNavbarVisibleOnMobile} />
        <div className={styles.main_pane}>
          {children}
        </div>
      </div>
    </TitleProvider>
  )
}
