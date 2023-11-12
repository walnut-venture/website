import classNames from "classnames";
import { nunitoSans } from "font/nunitoSans";
import CookieConsent from "react-cookie-consent";
import { P } from "components";
import { useContentfulData } from "hooks";
import { GetQueries } from "data";

import styles from "./cookieBanner.module.scss";

type Item = {
  cookieBanner: string;
}

type TProps = {
  items: Item[];
}

export const CookieBanner = () => {
  const { footer } = GetQueries();
  const data = useContentfulData<TProps>("footerCollection", footer);
  const isValidData = data?.items && data.items.length > 0;

  return (
    <CookieConsent
      disableStyles={true}
      location="bottom"
      buttonText="Accept"
      cookieName="cookieConsent"
      expires={150}
      containerClasses={styles.container}
      buttonClasses={classNames(styles.button, nunitoSans.className)}
      contentStyle={{width: 1200}}
    >
      {
        isValidData &&
        <P className={styles.title}>{data.items[0].cookieBanner}</P>
      }
    </CookieConsent>
  );
};
