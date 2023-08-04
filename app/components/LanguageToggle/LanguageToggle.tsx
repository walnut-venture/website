import Link from "next-intl/link";
import { P } from "components";

import styles from "./languageToggle.module.scss";

export const LanguageToggle = () => {
  return (
    <div className={styles.component}>
      <Link href="/" locale="en">
        <P className={styles.toggleItem}>EN</P>
      </Link>
      <P>/</P>
      <Link href="/" locale="de">
        <P className={styles.toggleItem}>DE</P>
      </Link>
    </div>
  );
};
