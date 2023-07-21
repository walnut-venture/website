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
      contentStyle={{width: 1000}}
    >
      <P>We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you&apos;ve provided to them or that they&apos;ve collected from your use of their services.</P>
    </CookieConsent>
  );
};
