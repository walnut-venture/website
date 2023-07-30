"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { H2, MainContainer, P, H3, ListItem } from "components";
import { useWindowSize } from "hooks";
gsap.registerPlugin(ScrollTrigger);

import styles from "./servicesSection.module.scss";
import ourServicesSrc from "./img/ourSevicesImage.jpg";
import ourServicesDetailSrc from "./img/ourSevicesDetailImage.jpg";

const ServicesSection = () => {
  const { isMobile } = useWindowSize();
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
        <H2 className={styles.title}>Services</H2>
        <div className={styles.listContainer}>
          <ListItem>Our services</ListItem>
        </div>
        <div className={styles.servicesContainer}>
          <div className={styles.imageWrapper}>
            <Image className={styles.image} src={ourServicesSrc} alt="OurServices" fill />
          </div>
          <div className={styles.cardsContainer}>
            <div className={styles.servicesCard} ref={firstRef}>
              <P className={styles.number}>01.</P>
              <H3>Venture ideation and validation</H3>
              <P className={styles.subtitle}>We collaborate with our financial partners to identify areas for disruption, explore new business models, and validate the feasibility of potential ventures. Through market research, customer insights, and financial analysis, we ensure that our ventures have a strong foundation for success.</P>
            </div>
            <div className={styles.servicesCard} ref={secondRef}>
              <P className={styles.number}>02.</P>
              <H3>Venture building and development</H3>
              <P className={styles.subtitle}>We transform validated concepts into scalable ventures, handling all aspects of product development, technology integration, compliance, and go-to-market strategy. Our experienced team ensures that the ventures are designed to meet the evolving needs of the financial industry.</P>
            </div>
            <div className={styles.servicesCard} ref={thirdRef}>
              <P className={styles.number}>03.</P>
              <H3>Venture growth and scaling</H3>
              <P className={styles.subtitle}>We provide ongoing support to accelerate the growth of our ventures. Leveraging our network, industry expertise, and access to capital, we help our ventures navigate challenges, expand their customer base, and achieve sustainable growth in the competitive financial sector.</P>
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
