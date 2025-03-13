"use client";

import styles from "./Navbar.module.scss";
import "../../globals.scss";

export default function Navbar({ isVisibleOnMobile }) {
  return (
    <div className={isVisibleOnMobile ? "" : "hide_on_narrow_screens"}>
      <div className={styles.navbar_wrapper}>
        <div className={styles.navbar}>
          <div>
            <a href="/">Home</a>
            <a href="/publications">Publications</a>
            <a href="/journal"><span className={styles.subnav}>Journal Pubs</span></a>
            <a href="/conference"><span className={styles.subnav}>Conference Pubs</span></a>
            <a href="/reports"><span className={styles.subnav}>Misc Reports</span></a>
            <a href="/software">Software</a>
          </div>
        </div>
      </div>
      <div className={styles.navbar_spacer} />
    </div>
  )
}
