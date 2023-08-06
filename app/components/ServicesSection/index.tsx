"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { H2, MainContainer, P, H3, ListItem, ScrollText } from "components";
import { useTranslations } from "next-intl";
import { useWindowSize } from "hooks";
gsap.registerPlugin(ScrollTrigger);

import styles from "./servicesSection.module.scss";
import ourServicesSrc from "./img/ourSevicesImage.jpg";
import ourServicesDetailSrc from "./img/ourSevicesDetailImage.jpg";

const ServicesSection = () => {
  const { isMobile } = useWindowSize();
  const t = useTranslations("Services");
  const blockRef = useRef(null);
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);

  useEffect(() => {
    const blockElement = blockRef.current;
    const firstElement = firstRef.current;
    const secondElement = secondRef.current;
    const thirdElement = thirdRef.current;

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: blockElement,
        start: "top",
        end: "+=1000",
        scrub: true,
        pin: true
      }
    });

    tl.from(firstElement, {
      opacity: 0,
      duration: 3,
      y: 200
    });

    tl.from(secondElement, {
      opacity: 0,
      duration: 3,
      y: 200
    });

    tl.from(thirdElement, {
      opacity: 0,
      duration: 3,
      y: 200
    });
  },[]);

  return (
    <MainContainer>
      <section id="services" className={styles.component} ref={blockRef}>
        <H2 className={styles.title}>{t("mainTitle")}</H2>
        <div className={styles.listContainer}>
          <P className={styles.listItem}>{t("firstTitle")}</P>
        </div>
        <div className={styles.servicesContainer}>
          <div className={styles.imageWrapper}>
            <Image className={styles.image} src={ourServicesSrc} alt="OurServices" fill />
          </div>
          <div className={styles.cardsContainer}>
            <div className={styles.servicesCard} ref={firstRef}>
              <P className={styles.number}>01.</P>
              <H3>{t("firstSubtitle")}</H3>
              <P className={styles.subtitle}>{t("firstText")}</P>
            </div>
            <div className={styles.servicesCard} ref={secondRef}>
              <P className={styles.number}>02.</P>
              <H3>{t("secondSubtitle")}</H3>
              <P className={styles.subtitle}>{t("secondText")}</P>
            </div>
            <div className={styles.servicesCard} ref={thirdRef}>
              <P className={styles.number}>03.</P>
              <H3>{t("thirdSubtitle")}</H3>
              <P className={styles.subtitle}>{t("thirdText")}</P>
            </div>
          </div>
        </div>
        <div className={styles.listContainer}>
          <P className={styles.listItem}>{t("secondTitle")}</P>
        </div>
        {
          isMobile ?
            <div className={styles.servicesDetailContainer}>
              <ScrollText>
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
              </ScrollText>
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
