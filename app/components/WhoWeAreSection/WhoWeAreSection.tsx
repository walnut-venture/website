import { MainContainer, H2, P, H3 } from "components";
import { motion } from "framer-motion";
import { useContentfulData } from "hooks";
import { GetQueries } from "data";
import { IWhoWeAre } from "@/interfaces/IWhoWeAre";
import { sortContentByOrder } from "@/utils/sortContentByOrder";

import styles from "./whoWeAreSection.module.scss";

type TProps = {
  items: IWhoWeAre[];
}

export const WhoWeAreSection = () => {
  const { whoWeAre } = GetQueries();
  const data = useContentfulData<TProps>("whoWeAreCollection", whoWeAre);
  const isValidData = data?.items && data.items.length > 0;
  const sortedData = isValidData && data.items.sort(sortContentByOrder);

  return (
    <MainContainer>
      {
        sortedData &&
          <section id="who-we-are" className={styles.component}>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }}>
              <H2 className={styles.title}>{sortedData[0].title}</H2>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }} className={styles.contentItem} >
              <P className={styles.list}>{sortedData[0].subtitle}</P>
              <P className={styles.contentText}>{sortedData[0].text}</P>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }} className={styles.contentItem}>
              <P className={styles.list}>{sortedData[1].subtitle}</P>
              <div className={styles.contentText}>
                <H3 className={styles.contentSubtitle}>{sortedData[1].title}</H3>
                <P>{sortedData[1].text}</P>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }} className={styles.contentItem}>
              <div></div>
              <div className={styles.contentText}>
                <H3 className={styles.contentSubtitle}>{sortedData[2].title}</H3>
                <P>{sortedData[2].text}</P>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }} className={styles.contentItem}>
              <div></div>
              <div className={styles.contentText}>
                <H3 className={styles.contentSubtitle}>{sortedData[3].title}</H3>
                <P>{sortedData[3].text}</P>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }} className={styles.contentItem}>
              <div></div>
              <div className={styles.contentText}>
                <H3 className={styles.contentSubtitle}>{sortedData[4].title}</H3>
                <P>{sortedData[4].text}</P>
              </div>
            </motion.div>
          </section>
      }
    </MainContainer>
  );
};
