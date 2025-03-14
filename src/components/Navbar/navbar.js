"use client";

import Link from "next/link";
import styles from "./Navbar.module.scss";
import "../../globals.scss";

export default function Navbar({ isVisibleOnMobile }) {
  return (
    <div className={isVisibleOnMobile ? "" : "hide_on_narrow_screens"}>
      <div className={styles.navbar_wrapper}>
        <div className={styles.navbar}>
          <div>
            <Link href="/">Home</Link>
            <Link href="/publications">Publications</Link>
            <Link href="/journal"><span className={styles.subnav}>Journal Pubs</span></Link>
            <Link href="/conference"><span className={styles.subnav}>Conference Pubs</span></Link>
            <Link href="/reports"><span className={styles.subnav}>Misc Reports</span></Link>
            <Link href="/software">Software</Link>
          </div>
        </div>
      </div>
      <div className={styles.navbar_spacer} />
    </div>
  )
}
