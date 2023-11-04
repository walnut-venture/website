import classNames from "classnames";
import { sanFrancisco } from "font/sanFrancisco";
import CookieConsent from "react-cookie-consent";
import { P } from "components";
import { useContentfulData } from "hooks";
import { GET_FOOTER } from "data";

import styles from "./cookieBanner.module.scss";

type Item = {
  cookieBanner: string;
}

type TProps = {
  items: Item[];
}

export const CookieBanner = () => {
  const data = useContentfulData<TProps>("footerCollection", GET_FOOTER);
  const isValidData = data?.items && data.items.length > 0;

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
      {
        isValidData &&
        <P className={styles.title}>{data.items[0].cookieBanner}</P>
      }
    </CookieConsent>
  );
};
