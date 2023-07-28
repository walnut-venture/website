import { P } from "components";

import styles from "./contacts.module.scss";

export const Contacts = () => {
  return (
    <address className={styles.component}>
      <P className={styles.title}>Contact</P>
      <P className={styles.subtitle}>Blodigweg 1, 6900 Bregenz, Austria</P>
      <a className={styles.subtitle} href="mailto:julian.verocai@verocaiconsulting.com">julian.verocai@verocaiconsulting.com</a>
    </address>
  );
};
