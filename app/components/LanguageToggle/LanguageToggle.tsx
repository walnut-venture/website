import Link from "next-intl/link";
import { P } from "components";
import { useLocale } from 'next-intl';

import styles from "./languageToggle.module.scss";
import classNames from "classnames";

export const LanguageToggle = () => {
  const providedLocale = useLocale();

  const toggleItemClassName = (locale: string) => classNames(styles.toggleItem, {
    [styles.activeToggleItem]: providedLocale === locale
  });

  return (
    <div className={styles.component}>
      <Link href="/" locale="en-US">
        <P className={toggleItemClassName('en-US')}>EN</P>
      </Link>
      <P>/</P>
      <Link href="/" locale="de-DE">
        <P className={toggleItemClassName('de-DE')}>DE</P>
      </Link>
    </div>
  );
};
