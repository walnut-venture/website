import Link from "next/link";

import styles from "./navigation.module.scss";

export const Navigation = () => {
  return (
    <nav className={styles.component}>
      <ul className={styles.nav}>
        <li>
          <Link href="#who-we-are" className={styles.link}>
            Who we are
          </Link>
        </li>
        <li>
          <Link href="#services" className={styles.link}>
            Services
          </Link>
        </li>
        <li>
          <Link href="#team" className={styles.link}>
            Team
          </Link>
        </li>
        <li>
          <Link href="#career" className={styles.link}>
            Career
          </Link>
        </li>
      </ul>
    </nav>
  );
};
