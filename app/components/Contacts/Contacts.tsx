import { P } from "components";

import styles from "./contacts.module.scss";

export const Contacts = () => {
  return (
    <address className={styles.component}>
      <P className={styles.title}>Contact</P>
      <P className={styles.subtitle}>Blodigweg 1, 6900 Bregenz, Austria</P>
      <a className={styles.subtitle} href="mailto:loremipsym@gmail.com">loremipsym@gmail.com</a>
    </address>
  );
};
