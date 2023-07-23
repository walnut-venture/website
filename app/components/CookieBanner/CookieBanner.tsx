import classNames from "classnames";
import { sanFrancisco } from "font/sanFrancisco";
import CookieConsent from "react-cookie-consent";
import { P } from "components";

import styles from "./cookieBanner.module.scss";

export const CookieBanner = () => {
  return (
    <CookieConsent
      disableStyles={true}
      location="bottom"
      buttonText="Accept"
      cookieName="cookieConsent"
      expires={150}
      containerClasses={styles.container}
      buttonClasses={classNames(styles.button, sanFrancisco.className)}
      contentStyle={{width: 1200}}
    >
      <P className={styles.title}>We use analytics cookies to collect anonymous data about how you interact with our website.</P>
    </CookieConsent>
  );
};
