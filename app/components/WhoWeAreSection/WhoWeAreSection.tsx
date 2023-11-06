import { MainContainer, H2, P, H3 } from "components";
import { motion } from "framer-motion";
import { useContentfulData } from "hooks";
import { GetQueries } from "data";

import styles from "./whoWeAreSection.module.scss";

type Item = {
  title: string;
  subtitle:string;
  text: string;
}

type TProps = {
  items: Item[];
}

export const WhoWeAreSection = () => {
  const { whoWeAre } = GetQueries();
  const data = useContentfulData<TProps>("whoWeAreCollection", whoWeAre);
  const isValidData = data?.items && data.items.length > 0;

  return (
    <MainContainer>
      {
        isValidData &&
          <section id="who-we-are" className={styles.component}>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }}>
              <H2 className={styles.title}>{data.items[4].title}</H2>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }} className={styles.contentItem} >
              <P className={styles.list}>{data.items[4].subtitle}</P>
              <P className={styles.contentText}>{data.items[4].text}</P>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }} className={styles.contentItem}>
              <P className={styles.list}>{data.items[3].subtitle}</P>
              <div className={styles.contentText}>
                <H3 className={styles.contentSubtitle}>{data.items[3].title}</H3>
                <P>{data.items[3].text}</P>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }} className={styles.contentItem}>
              <div></div>
              <div className={styles.contentText}>
                <H3 className={styles.contentSubtitle}>{data.items[2].title}</H3>
                <P>{data.items[2].text}</P>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }} className={styles.contentItem}>
              <div></div>
              <div className={styles.contentText}>
                <H3 className={styles.contentSubtitle}>{data.items[1].title}</H3>
                <P>{data.items[1].text}</P>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }} className={styles.contentItem}>
              <div></div>
              <div className={styles.contentText}>
                <H3 className={styles.contentSubtitle}>{data.items[0].title}</H3>
                <P>{data.items[0].text}</P>
              </div>
            </motion.div>
          </section>
      }
    </MainContainer>
  );
};
