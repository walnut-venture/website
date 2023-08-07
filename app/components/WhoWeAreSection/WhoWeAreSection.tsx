import { MainContainer, H2, P, H3 } from "components";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import styles from "./whoWeAreSection.module.scss";

export const WhoWeAreSection = () => {
  const t = useTranslations("WhoWeAre");

  return (
    <MainContainer>
      <section id="who-we-are" className={styles.component}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }}>
          <H2 className={styles.title}>{t("mainTitle")}</H2>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }} className={styles.contentItem} >
          <P className={styles.list}>{t("firstTitle")}</P>
          <P className={styles.contentText}>{t("firstText")}</P>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }} className={styles.contentItem}>
          <P className={styles.list}>{t("secondTitle")}</P>
          <div className={styles.contentText}>
            <H3 className={styles.contentSubtitle}>{t("firstSubtitle")}</H3>
            <P>{t("secondText")}</P>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }} className={styles.contentItem}>
          <div></div>
          <div className={styles.contentText}>
            <H3 className={styles.contentSubtitle}>{t("secondSubtitle")}</H3>
            <P>{t("thirdText")}</P>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }} className={styles.contentItem}>
          <div></div>
          <div className={styles.contentText}>
            <H3 className={styles.contentSubtitle}>{t("thirdSubtitle")}</H3>
            <P>{t("fourthText")}</P>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }} className={styles.contentItem}>
          <div></div>
          <div className={styles.contentText}>
            <H3 className={styles.contentSubtitle}>{t("fourthSubtitle")}</H3>
            <P>{t("fifthText")}</P>
          </div>
        </motion.div>
      </section>
    </MainContainer>
  );
};
