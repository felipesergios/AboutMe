import React from "react";
import styles from "../styles/Home.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <h1 className={styles.logo}>The infrastructure guy</h1>
        <ul className={styles.nav}>
          <li>Entre em contato</li>
        </ul>
      </nav>
    </header>
  );
}
