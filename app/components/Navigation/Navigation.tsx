import Link from "next/link";

import styles from "./navigation.module.scss";

export const Navigation = () => {
  return (
    <nav className={styles.component}>
      <ul className={styles.nav}>
        <li>
          <Link href="#">
            Who we are
          </Link>
        </li>
        <li>
          <Link href="#">
            Services
          </Link>
        </li>
        <li>
          <Link href="#">
            Team
          </Link>
        </li>
        <li>
          <Link href="#">
            Career
          </Link>
        </li>
      </ul>
    </nav>
  );
};
