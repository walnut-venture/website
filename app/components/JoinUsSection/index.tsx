"use client";

import Image from "next/image";
import Link from "next/link";
import { MainContainer, H2, P, ArrowButton } from "components";
import { useWindowSize } from "hooks";

import styles from "./joinUsSection.module.scss";
import imageSrc from "./img/joinUsImage.jpg";

const JoinUsSection = () => {
  const { isMobile } = useWindowSize();

  return (
    <MainContainer>
      {
        isMobile ?
          <section className={styles.component}>
            <div className={styles.titleWrapper}>
              <H2 className={styles.title}>Join us in shaping the future of finance</H2>
            </div>
            <div className={styles.contentWrapper}>
              <div className={styles.subtitleWrapper}>
                <P>Whether you are a financial institution looking to innovate or a fintech start-up with a ground-breaking idea, walnut venture studios is your trusted partner in building ventures that disrupt the financial sector, drive growth, and transform the way finance works.</P>
                <P>Contact us today to explore how we can collaborate and unlock the full potential of your business. Together, let&apos;s shape the future of finance.</P>
                <Link href="#contact-us">
                  <ArrowButton>
                    Join
                  </ArrowButton>
                </Link>
              </div>
              <div className={styles.imageWrapper}>
                <Image className={styles.image} src={imageSrc} alt="Image" fill />
              </div>
            </div>
          </section>
          :
          <section className={styles.component}>
            <div className={styles.contentWrapper}>
              <div className={styles.imageWrapper}>
                <Image className={styles.image} src={imageSrc} alt="Image" fill />
              </div>
              <div className={styles.titleWrapper}>
                <H2 className={styles.title}>Join us in shaping the future of finance</H2>
              </div>
              <div className={styles.subtitleWrapper}>
                <P>Whether you are a financial institution looking to innovate or a fintech start-up with a ground-breaking idea, walnut venture studios is your trusted partner in building ventures that disrupt the financial sector, drive growth, and transform the way finance works.</P>
                <P className={styles.subtitle}>Contact us today to explore how we can collaborate and unlock the full potential of your business. Together, let&apos;s shape the future of finance.</P>
                <Link href="#contact-us" className={styles.button}>
                  <ArrowButton>
                    Join
                  </ArrowButton>
                </Link>
              </div>
            </div>
          </section>
      }
    </MainContainer>
  );
};

export default JoinUsSection;
