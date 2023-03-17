import Link from "next/link";
import React from "react";
import styles from "../styles/A.module.css";

function A({ children, href }) {
  return (
    <Link href={href} className={styles.link}>
      {children}
    </Link>
  );
}

export default A;
