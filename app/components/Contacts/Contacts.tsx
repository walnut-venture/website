import { P } from "components";
import { useContentfulData } from "hooks";
import { GetQueries } from "data";

import styles from "./contacts.module.scss";

type Item = {
  title: string;
}

type TProps = {
  items: Item[];
}

export const Contacts = () => {
  const { footer } = GetQueries();
  const data = useContentfulData<TProps>("footerCollection", footer);
  const isValidData = data?.items && data.items.length > 0;

  return (
    <address className={styles.component}>
      {
        isValidData &&
        <P className={styles.title}>{data.items[0].title}</P>
      }
      <div className={styles.wrapper}>
        <div className={styles.contact}>
          <P className={styles.title}>Austria</P>
          <P className={styles.cityTitle}>Bregenz</P>
          <a href="https://maps.app.goo.gl/Ac3FD1BYerJ9yefSA" target="_blank" className={styles.subtitle}>Blodigweg 2<br />6900 Bregenz</a>
          <a className={styles.subtitle} href="mailto:office@walnut-vs.com">office@walnut-vs.com</a>
        </div>
        <div className={styles.contact}>
          <P className={styles.title}>Germany</P>
          <P className={styles.cityTitle}>Frankfurt am Main</P>
          <a href="https://maps.app.goo.gl/W9nwkCHHPaqMNart6" target="_blank" className={styles.subtitle}>Heiligkreuzgasse 16<br />60313 Frankfurt am Main</a>
          <a className={styles.subtitle} href="mailto:office@walnut-vs.com">office@walnut-vs.com</a>
        </div>
      </div>
    </address>
  );
};
