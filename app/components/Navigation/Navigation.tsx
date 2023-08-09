import Link from "next/link";
import { useTranslations } from "next-intl";

import styles from "./navigation.module.scss";

export const Navigation = () => {
  const t = useTranslations("Navigation");

  return (
    <nav className={styles.component}>
      <ul className={styles.nav}>
        <li>
          <Link href="#who-we-are" className={styles.link}>
            {t("whoWeAre")}
          </Link>
        </li>
        <li>
          <Link href="#services" className={styles.link}>
            {t("services")}
          </Link>
        </li>
        <li>
          <Link href="#team" className={styles.link}>
            {t("aboutUs")}
          </Link>
        </li>
        <li>
          <Link href="#methodology"  className={styles.link}>
            {t("methodology")}
          </Link>
        </li>
        <li>
          <Link href="#career" className={styles.link}>
            {t("career")}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
