"use client";

import Image from "next/image";
import { MainContainer, H2, P, H3, ShowMore } from "components";
import { useWindowSize } from "hooks";

import styles from "./teamSection.module.scss";
import teamSEOSrc from "./img/teamCEOImage.jpg";
import teamCTOSrc from "./img/teamCTOImage.jpg";

const TeamSection = () => {
  const { isMobile } = useWindowSize();

  return (
    <MainContainer>
      <section id="team" className={styles.component}>
        <H2 className={styles.title}>Team</H2>
        <P className={styles.subtitle}>At walnut ventures, we believe in reshaping the financial landscape by embracing cutting-edge technologies, driving digital transformation, and fostering entrepreneurial spirit. With our deep industry expertise and forward-thinking approach, we are at the forefront of revolutionizing finance for the digital age.</P>
        <div className={styles.teamCard}>
          <div className={styles.imageWrapper}>
            <Image className={styles.image} src={teamSEOSrc} alt="TeamSEO" fill />
          </div>
          <div className={styles.teamTitle}>
            <H3>Julian Verocai</H3>
            <P>Julian is the founder and CEO of walnut venture studios.</P>
          </div>
        </div>
        {
          isMobile ?
            <div className={styles.textContainer}>
              <P>He is a dynamic and accomplished finance and technology executive with a proven track record of driving innovation and growth in the financial sector. With a strong background in finance, coupled with a deep understanding of emerging technologies, Julian possesses a unique blend of strategic vision and hands-on leadership.</P>
              <P>Julian&apos;s passion for entrepreneurship and his keen eye for market opportunities have allowed him to forge strategic partnerships, creating synergies between traditional financial institutions and agile fintech start-ups.</P>
              <P>Julian has professional experience in working for large international banking groups, as well as deep regulatory and monetary policy know-how from his working experience at the European Central Bank in Frankfurt. He has consulted for many years international banks on various innovation projects (ESG platforms, neo bank projects, core-banking system migration and many more).</P>
            </div>
            :
            <div className={styles.textContainer}>
              <P>He is a dynamic and accomplished finance and technology executive with a proven track record of driving innovation and growth in the financial sector. With a strong background in finance, coupled with a deep understanding of emerging technologies, Julian possesses a unique blend of strategic vision and hands-on leadership.</P>
              <P>Julian&apos;s passion for entrepreneurship and his keen eye for market opportunities have allowed him to forge strategic partnerships, creating synergies between traditional financial institutions and agile fintech start-ups.</P>
              <ShowMore />
            </div>
        }
        {
          isMobile ?
            <>
              <div className={styles.teamCard}>
                <div className={styles.teamTitle}>
                  <H3>Raja Kathiresan</H3>
                  <P>Raja is the CTO of walnut venture studios and an entrepreneur in residence.</P>
                </div>
                <div className={styles.imageWrapper}>
                  <Image className={styles.image} src={teamCTOSrc} alt="TeamSEO" fill />
                </div>
              </div>
              <div className={styles.textContainer}>
                <P>He has more than 22 years of experience as a leader and startup builder in the banking industry. Raja is passionate about bringing ideas, technology and people together to deliver exceptional customer and investor value.</P>
                <P>He is the ex-COO of a fintech banking app in CEE region, where he was responsible for building the startup from scratch covering front to back solutions. Raja has wide experience ranging from technology, operations, customer care, financial planning and regulatory setup.</P>
              </div>
            </>
            :
            <>
              <div className={styles.teamCard}>
                <div className={styles.teamTitle}>
                  <div className={styles.imageWrapper}>
                    <Image className={styles.image} src={teamCTOSrc} alt="TeamSEO" fill />
                  </div>
                  <H3>Raja Kathiresan</H3>
                  <P>Raja is the CTO of walnut venture studios and an entrepreneur in residence.</P>
                </div>
              </div>
              <div className={styles.textContainer}>
                <P>He has more than 22 years of experience as a leader and startup builder in the banking industry. Raja is passionate about bringing ideas, technology and people together to deliver exceptional customer and investor value.</P>
                <P>He is the ex-COO of a fintech banking app in CEE region, where he was responsible for building the startup from scratch covering front to back solutions. Raja has wide experience ranging from technology, operations, customer care, financial planning and regulatory setup.</P>
              </div>
            </>
        }
      </section>
    </MainContainer>
  );
};

export default TeamSection;
