import { MainContainer, H2, P, H3 } from "components";

import styles from "./whoWeAreSection.module.scss";

export const WhoWeAreSection = () => {
  return (
    <MainContainer>
      <section id="who-we-are" className={styles.component}>
        <H2 className={styles.title}>Who we are?</H2>
        <div className={styles.contentWrapper}>
          <P className={styles.gridTitle}>Our vision</P>
          <P>We envision a financial landscape that embraces digital transformation, fosters financial inclusion, and delivers cutting-edge solutions to businesses and customers alike. By combining the expertise and resources of established financial institutions with the agility and innovation of start-ups, we aim to drive meaningful change and empower the finance industry for the digital age.</P>
          <P className={styles.gridTitle}>What sets us apart</P>
          <div>
            <H3 className={styles.gridSubtitle}>Deep financial expertise</H3>
            <P>With a team of seasoned professionals who possess extensive experience in the financial sector, we understand the complexities and challenges of the industry. Our deep domain knowledge allows us to identify opportunities and create ventures that address key pain points and emerging trends.</P>
          </div>
          <div className={styles.subtitleWrapper}>
            <H3 className={styles.gridSubtitle}>Deep financial expertise</H3>
            <P>With a team of seasoned professionals who possess extensive experience in the financial sector, we understand the complexities and challenges of the industry. Our deep domain knowledge allows us to identify opportunities and create ventures that address key pain points and emerging trends.</P>
          </div>
        </div>
      </section>
    </MainContainer>
  );
};
