import { Contacts, Container, Logo, P } from "components";
import { useTranslations } from "next-intl";

import styles from "./footer.module.scss";

export const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <Container>
      <footer className={styles.component}>
        <div className={styles.contentWrapper}>
          <Logo className={styles.footerLogo} />
          <P className={styles.subtitle}>{t("text")}</P>
        </div>
        <Contacts />
      </footer>
    </Container>
  );
};
