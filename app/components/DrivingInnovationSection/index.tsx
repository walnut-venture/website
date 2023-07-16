"use client";

import Image from "next/image";
import { MainContainer, H2, P } from "components";
import { useWindowSize } from "hooks";

import styles from "./drivingInnovationSection.module.scss";
import imageSrc from "./img/innovationImage.jpg";

const DrivingInnovationSection = () => {
  const { isMobile } = useWindowSize();

  return (
    <MainContainer>
      {
        isMobile ?
          <section className={styles.component}>
            <H2 className={styles.title}>Driving innovation and growth in finance</H2>
            <div className={styles.contentWrapper}>
              <div className={styles.imageWrapper}>
                <Image className={styles.image} src={imageSrc} alt="Image" fill />
              </div>
              <div className={styles.subtitleWrapper}>
                <P>Walnut venture studios is a leading corporate venture builder focusing on revolutionizing the financial sector through innovation, technology, and entrepreneurship.</P>
                <P>We partner with established financial institutions, fintech companies, and forward-thinking organizations to create disruptive ventures that shape the future of finance. Our headquarter is at the tripoint in Bregenz, Austria and we have a branch in Vienna.</P>
              </div>
            </div>
          </section>
          :
          <section className={styles.component}>
            <div className={styles.contentWrapper}>
              <div className={styles.imageWrapper}>
                <Image className={styles.image} src={imageSrc} alt="Image" fill />
              </div>
              <H2 className={styles.title}>Driving innovation and growth in finance</H2>
              <div className={styles.subtitleWrapper}>
                <P>Walnut venture studios is a leading corporate venture builder focusing on revolutionizing the financial sector through innovation, technology, and entrepreneurship.</P>
                <P>We partner with established financial institutions, fintech companies, and forward-thinking organizations to create disruptive ventures that shape the future of finance. Our headquarter is at the tripoint in Bregenz, Austria and we have a branch in Vienna.</P>
              </div>
            </div>
          </section>
      }
    </MainContainer>
  );
};

export default DrivingInnovationSection;
