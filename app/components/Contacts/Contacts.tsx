import { P } from "components";

import styles from "./contacts.module.scss";

type Item = {
  title: string;
}

type TProps = {
  items: Item[];
}

export const Contacts = () => {
  return (
    <address className={styles.component}>
      <div className={styles.wrapper}>
        <div className={styles.contact}>
          <P className={styles.title}>AUSTRIA</P>
          <P className={styles.cityTitle}>Blodigweg 2</P>
          <a href="https://maps.app.goo.gl/Ac3FD1BYerJ9yefSA" target="_blank" className={styles.subtitle}>6900 Bregenz</a>
          <a className={styles.subtitle} href="mailto:office@walnut-vs.com">office@walnut-vs.com</a>
        </div>
        <div className={styles.contact}>
          <P className={styles.title}>GERMANY</P>
          <P className={styles.cityTitle}>Heiligkreuzgasse 16</P>
          <a href="https://maps.app.goo.gl/W9nwkCHHPaqMNart6" target="_blank" className={styles.subtitle}>60313 Frankfurt am Main</a>
          <a className={styles.subtitle} href="mailto:office@walnut-vs.com">office@walnut-vs.com</a>
        </div>
      </div>
    </address>
  );
};
