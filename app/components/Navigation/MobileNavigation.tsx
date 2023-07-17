import Link from "next/link";
import { Button } from "components";

import styles from "./navigation.module.scss";

export const MobileNavigation = () => {
  return (
    <div className={styles.burgerMenu}>
      <nav>
        <ul className={styles.burgerNav}>
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
      <Button
        size="s"
      >
        Get in touch
      </Button>
    </div>
  );
};
