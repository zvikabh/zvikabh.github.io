'use client';

import { useEffect, useRef } from 'react';
import clsx from 'clsx';

import styles from './Header.module.scss';
import '../../globals.scss';

export default function Header({ isNavbarVisible, setIsNavbarVisible }) {
  const titleRef = useRef(null);
  useEffect(() => {
    titleRef.current.textContent = document.title.replace(' — Zvika Ben-Haim', '');
  }, []);
  return (
    <div className={styles.header_root}>
      <div className={styles.header_wrapper}>
        <div className={styles.header}>
          <div className={styles.header_left}>
            <div 
                className={clsx(styles.hamburger_icon, 'hide_on_wide_screens')}
                onClick={() => setIsNavbarVisible(!isNavbarVisible)}>
              ☰
            </div>
            <div className={styles.title} ref={titleRef} />
          </div>
          <div className="hide_on_narrow_screens">
            <div className={styles.header_right}>
              <a href="/">Home</a>
              <a href="/publications">Publications</a>
              <a href="/software">Software</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.header_spacer} />
    </div>
  )
}
