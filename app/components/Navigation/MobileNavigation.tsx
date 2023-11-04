import Link from "next/link";
import { Button } from "components";
import { useContentfulData } from "hooks";
import { GET_NAVIGATION } from "data";

import styles from "./navigation.module.scss";

type Item = {
  title: string;
}

type TProps = {
  items: Item[];
}

export const MobileNavigation = () => {
  const data = useContentfulData<TProps>("navigationCollection", GET_NAVIGATION);
  const isValidData = data?.items && data.items.length > 0;

  return (
    <div className={styles.burgerMenu}>
      {
        isValidData &&
          <>
            <nav>
              <ul className={styles.burgerNav}>
                <li>
                  <Link href="#who-we-are" className={styles.link}>
                    {data.items[5].title}
                  </Link>
                </li>
                <li>
                  <Link href="#services" className={styles.link}>
                    {data.items[4].title}
                  </Link>
                </li>
                <li>
                  <Link href="#team" className={styles.link}>
                    {data.items[3].title}
                  </Link>
                </li>
                <li>
                  <Link href="#methodology" className={styles.link}>
                    {data.items[2].title}
                  </Link>
                </li>
                <li>
                  <Link href="#career" className={styles.link}>
                    {data.items[1].title}
                  </Link>
                </li>
              </ul>
            </nav>
            <Link href="#contact-us" className={styles.button}>
              <Button
                size="s"
              >
                {data.items[0].title}
              </Button>
            </Link>
          </>
      }
    </div>
  );
};
