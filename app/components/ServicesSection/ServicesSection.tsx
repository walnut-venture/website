import Image from "next/image";
import { H2, MainContainer, P, H3 } from "components";

import styles from "./servicesSection.module.scss";
import ourServicesSrc from "./img/ourSevicesImage.jpg";
import ourServicesDetailSrc from "./img/ourSevicesDetailImage.jpg";

export const ServicesSection = () => {
  return (
    <MainContainer>
      <section className={styles.component}>
        <H2 className={styles.title}>Services</H2>
        <P className={styles.servicesTitle}>Our services</P>
        <div className={styles.servicesContainer}>
          <div className={styles.imageWrapper}>
            <Image className={styles.image} src={ourServicesSrc} alt="OurServices" fill />
          </div>
          <div className={styles.cardsContainer}>
            <div className={styles.servicesCard}>
              <P className={styles.number}>01.</P>
              <H3>Venture ideation and validation</H3>
              <P className={styles.subtitle}>We collaborate with our financial partners to identify areas for disruption, explore new business models, and validate the feasibility of potential ventures. Through market research, customer insights, and financial analysis, we ensure that our ventures have a strong foundation for success.</P>
            </div>
            <div className={styles.servicesCard}>
              <P className={styles.number}>02.</P>
              <H3>Venture ideation and validation</H3>
              <P className={styles.subtitle}>We collaborate with our financial partners to identify areas for disruption, explore new business models, and validate the feasibility of potential ventures. Through market research, customer insights, and financial analysis, we ensure that our ventures have a strong foundation for success.</P>
            </div>
          </div>
        </div>
        <P className={styles.servicesTitle}>Our services in detail</P>
        <div className={styles.servicesDetailContainer}>
          <div className={styles.servicesDetailWrapper}>
            <P>Fast designing, building and scaling of disruptive and innovative business models in the financial sector</P>
            <P className={styles.servicesSubtitle}>Advising financial institutions on digital transformation strategies</P>
            <P>Company building and applying lean start-up methodology</P>
          </div>
          <div className={styles.imageWrapper}>
            <Image className={styles.image} src={ourServicesDetailSrc} alt="OurServices" fill />
          </div>
        </div>
      </section>
    </MainContainer>
  );
};
