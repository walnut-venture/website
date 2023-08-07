"use client";

import Image from "next/image";
import { H2, MainContainer, P, H3, ListItem } from "components";
import { useTranslations } from "next-intl";
import { useWindowSize } from "hooks";
import { motion } from "framer-motion";

import styles from "./servicesSection.module.scss";
import ourServicesSrc from "./img/ourSevicesImage.jpg";
import ourServicesDetailSrc from "./img/ourSevicesDetailImage.jpg";

const ServicesSection = () => {
  const { isMobile } = useWindowSize();
  const t = useTranslations("Services");

  return (
    <MainContainer>
      <section id="services" className={styles.component}>
        <H2 className={styles.title}>{t("mainTitle")}</H2>
        <div className={styles.listContainer}>
          <P className={styles.listItem}>{t("firstTitle")}</P>
        </div>
        <div className={styles.servicesContainer}>
          <div className={styles.imageWrapper}>
            <Image className={styles.image} src={ourServicesSrc} alt="OurServices" fill />
          </div>
          <div className={styles.cardsContainer}>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }} className={styles.servicesCard}>
              <P className={styles.number}>01.</P>
              <H3>{t("firstSubtitle")}</H3>
              <P className={styles.subtitle}>{t("firstText")}</P>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }} className={styles.servicesCard}>
              <P className={styles.number}>02.</P>
              <H3>{t("secondSubtitle")}</H3>
              <P className={styles.subtitle}>{t("secondText")}</P>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }} className={styles.servicesCard}>
              <P className={styles.number}>03.</P>
              <H3>{t("thirdSubtitle")}</H3>
              <P className={styles.subtitle}>{t("thirdText")}</P>
            </motion.div>
          </div>
        </div>
        <div className={styles.listContainer}>
          <P className={styles.listItem}>{t("secondTitle")}</P>
        </div>
        {
          isMobile ?
            <div className={styles.servicesDetailContainer}>
              <div className={styles.servicesDetailWrapper}>
                <ListItem>{t("firstDetail")}</ListItem>
                <ListItem className={styles.servicesSubtitle}>{t("secondDetail")}</ListItem>
                <ListItem className={styles.servicesSubtitle}>{t("thirdDetail")}</ListItem>
                <ListItem className={styles.servicesSubtitle}>{t("fourthDetail")}</ListItem>
                <ListItem className={styles.servicesSubtitle}>{t("fifthDetail")}</ListItem>
                <ListItem className={styles.servicesSubtitle}>{t("sixthDetail")}</ListItem>
                <ListItem className={styles.servicesSubtitle}>{t("seventhDetail")}</ListItem>
                <ListItem className={styles.servicesSubtitle}>{t("eightDetail")}</ListItem>
              </div>
              <div className={styles.imageWrapper}>
                <Image className={styles.image} src={ourServicesDetailSrc} alt="OurServices" fill />
              </div>
            </div>
            :
            <div className={styles.servicesDetailContainer}>
              <div className={styles.servicesDetailWrapper}>
                <div className={styles.imageWrapper}>
                  <Image className={styles.image} src={ourServicesDetailSrc} alt="OurServices" fill />
                </div>
                <ListItem className={styles.servicesSubtitle}>{t("secondDetail")}</ListItem>
                <ListItem className={styles.servicesSubtitle}>{t("thirdDetail")}</ListItem>
                <ListItem className={styles.servicesSubtitle}>{t("fourthDetail")}</ListItem>
                <ListItem className={styles.servicesSubtitle}>{t("fifthDetail")}</ListItem>
                <ListItem className={styles.servicesSubtitle}>{t("sixthDetail")}</ListItem>
                <ListItem className={styles.servicesSubtitle}>{t("seventhDetail")}</ListItem>
                <ListItem className={styles.servicesSubtitle}>{t("eightDetail")}</ListItem>
              </div>
            </div>
        }
      </section>
    </MainContainer>
  );
};

export default ServicesSection;
