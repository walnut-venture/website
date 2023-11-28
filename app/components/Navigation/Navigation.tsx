import Link from "next/link";
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

export const Navigation = () => {
  const { navigation } = GetQueries();
  const data = useContentfulData<TProps>("navigationCollection", navigation);
  const isValidData = data?.items && data.items.length > 0;
  const sortedData = isValidData && data.items.sort(sortContentByOrder);

  return (
    <nav className={styles.component}>
      {
        sortedData &&
          <>
            <ul className={styles.nav}>
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
          </>
      }
    </nav>
  );
};
