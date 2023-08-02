"use client";

import Image from "next/image";
import { MainContainer, H2, P, H3, ShowMore } from "components";
import { useTranslations } from "next-intl";
import { useWindowSize } from "hooks";

import styles from "./teamSection.module.scss";
import teamSEOSrc from "./img/teamCEOImage.jpg";

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
            <H3>{t("name")}</H3>
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
