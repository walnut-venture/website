import { P } from "components";
import { useTranslations } from "next-intl";

import styles from "./contacts.module.scss";

export const Contacts = () => {
  const t = useTranslations("Footer");

  return (
    <address className={styles.component}>
      <P className={styles.title}>{t("title")}</P>
      <P className={styles.subtitle}>Blodigweg 1, 6900 Bregenz, Austria</P>
      <a className={styles.subtitle} href="mailto:office@walnut-vs.com">office@walnut-vs.com</a>
    </address>
  );
};
