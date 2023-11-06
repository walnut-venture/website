import { Contacts, Container, Logo, P } from "components";
import { useContentfulData } from "hooks";
import { GetQueries } from "data";

import styles from "./footer.module.scss";

type Item = {
  copyright: string;
}

type TProps = {
  items: Item[];
}

export const Footer = () => {
  const { footer } = GetQueries();
  const data = useContentfulData<TProps>("footerCollection", footer);
  const isValidData = data?.items && data.items.length > 0;

  return (
    <Container>
      {
        isValidData &&
        <footer className={styles.component}>
          <div className={styles.contentWrapper}>
            <Logo className={styles.footerLogo} />
            <P className={styles.subtitle}>{data.items[0].copyright}</P>
          </div>
          <Contacts />
        </footer>
      }
    </Container>
  );
};
