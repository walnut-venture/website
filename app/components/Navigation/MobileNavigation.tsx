import Link from "next/link";
import { Button } from "components";
import { useContentfulData } from "hooks";
import { GetQueries } from "data";
import { sortContentByOrder } from "@/utils/sortContentByOrder";

import styles from "./navigation.module.scss";

type Item = {
  title: string;
  order: number;
}

type TProps = {
  items: Item[];
}

export const MobileNavigation = () => {
  const { navigation } = GetQueries();
  const data = useContentfulData<TProps>("navigationCollection", navigation);
  const isValidData = data?.items && data.items.length > 0;
  const sortedData = isValidData && data.items.sort(sortContentByOrder);

  return (
    <div className={styles.burgerMenu}>
      {
        sortedData &&
          <>
            <nav>
              <ul className={styles.burgerNav}>
                <li>
                  <Link href="#who-we-are" className={styles.link}>
                    {sortedData[0].title}
                  </Link>
                </li>
                <li>
                  <Link href="#services" className={styles.link}>
                    {sortedData[1].title}
                  </Link>
                </li>
                <li>
                  <Link href="#team" className={styles.link}>
                    {sortedData[2].title}
                  </Link>
                </li>
                <li>
                  <Link href="#methodology" className={styles.link}>
                    {sortedData[3].title}
                  </Link>
                </li>
                <li>
                  <Link href="#career" className={styles.link}>
                    {sortedData[4].title}
                  </Link>
                </li>
              </ul>
            </nav>
            <Link href="#contact-us" className={styles.button}>
              <Button
                size="s"
              >
                {sortedData[5].title}
              </Button>
            </Link>
          </>
      }
    </div>
  );
};
