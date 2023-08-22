"use client";

import Image from "next/image";
import { MainContainer, H2, P, H3, ShowMore } from "components";
import { useTranslations } from "next-intl";
import { useWindowSize } from "hooks";

import styles from "./teamSection.module.scss";
import teamSEOSrc from "./img/teamCEOImage.jpg";
import linkedinSrc from "./img/linkedin.svg";

const TeamSection = () => {
  const { isMobile } = useWindowSize();
  const t = useTranslations("AboutUs");

  return (
    <MainContainer>
      <section id="team" className={styles.component}>
        <H2 className={styles.title}>{t("mainTitle")}</H2>
        <P className={styles.subtitle}>{t("firstText")}</P>
        <div className={styles.teamCard}>
          <div className={styles.imageWrapper}>
            <Image className={styles.image} src={teamSEOSrc} alt="TeamSEO" fill />
          </div>
          <div className={styles.teamTitle}>
            <div className={styles.socialWrapper}>
              <H3>{t("name")}</H3>
              <a className={styles.socialLink} href="https://www.linkedin.com/in/julian-verocai-30b1a582/" target="_blank">
                <Image className={styles.social} src={linkedinSrc} alt="Linkedin" />
              </a>
            </div>
            <P>{t("speciality")}</P>
          </div>
        </div>
        {
          isMobile ?
            <div className={styles.textContainer}>
              <P>{t("secondText")}</P>
              <P>{t("thirdText")}</P>
              <P>{t("fourthText")}</P>
            </div>
            :
            <div className={styles.textContainer}>
              <P>{t("secondText")}</P>
              <P>{t("thirdText")}</P>
              <ShowMore />
            </div>
        }
      </section>
    </MainContainer>
  );
};

export default TeamSection;
