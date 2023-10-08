import { P } from "components";
import { useTranslations } from "next-intl";

import styles from "./contacts.module.scss";

export const Contacts = () => {
  const t = useTranslations("Footer");

  return (
    <address className={styles.component}>
      <P className={styles.title}>{t("title")}</P>
      <a href="https://maps.app.goo.gl/W9nwkCHHPaqMNart6" target="_blank" className={styles.subtitle}>Heiligkreuzgasse 16, 60313 Frankfurt am Main, Germany</a>
      <a className={styles.subtitle} href="mailto:office@walnut-vs.com">office@walnut-vs.com</a>
    </address>
  );
};
