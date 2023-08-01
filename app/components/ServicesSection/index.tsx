"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { H2, MainContainer, P, H3, ListItem } from "components";
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
          <ListItem>{t("firstTitle")}</ListItem>
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
          <ListItem>Our services in detail</ListItem>
        </div>
        {
          isMobile ?
            <div className={styles.servicesDetailContainer}>
              <div className={styles.servicesDetailWrapper}>
                <P>Fast designing, building and scaling of disruptive and innovative business models in the financial sector</P>
                <P className={styles.servicesSubtitle}>Advising financial institutions on digital transformation strategies</P>
                <P className={styles.servicesSubtitle}>Company building and applying lean start-up methodology</P>
                <P className={styles.servicesSubtitle}>IT consulting & advisory (we are experts on core banking systems and have established strong relationship to all core banking provider in DACH region)</P>
                <P className={styles.servicesSubtitle}>Business development & advisory for market entry into DACH region</P>
                <P className={styles.servicesSubtitle}>Advisory on regulatory topics for financial institutions</P>
                <P className={styles.servicesSubtitle}>ESG consulting</P>
                <P className={styles.servicesSubtitle}>Fund-raising for start-ups</P>
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
                <P className={styles.servicesSubtitle}>Fast designing, building and scaling of disruptive and innovative business models in the financial sector</P>
                <P className={styles.servicesSubtitle}>Advising financial institutions on digital transformation strategies</P>
                <P>Company building and applying lean start-up methodology</P>
              </div>
            </div>
        }
      </section>
    </MainContainer>
  );
};

export default ServicesSection;
