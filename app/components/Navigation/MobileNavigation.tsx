import Link from "next/link";
import { Button } from "components";

import styles from "./navigation.module.scss";

export const MobileNavigation = () => {
  return (
    <div className={styles.burgerMenu}>
      <nav>
        <ul className={styles.burgerNav}>
          <li>
            <Link href="#who-we-are"  className={styles.link}>
              Who we are
            </Link>
          </li>
          <li>
            <Link href="#services"  className={styles.link}>
              Services
            </Link>
          </li>
          <li>
            <Link href="#team"  className={styles.link}>
              Team
            </Link>
          </li>
          <li>
            <Link href="#career"  className={styles.link}>
              Career
            </Link>
          </li>
        </ul>
      </nav>
      <Link href="#contact-us" className={styles.button}>
        <Button
          size="s"
        >
          Get in touch
        </Button>
      </Link>
    </div>
  );
};
