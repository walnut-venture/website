"use client";

import Image from "next/image";
import { MainContainer, H2, P } from "components";
import { useWindowSize } from "hooks";
import { useTranslations } from "next-intl";

import styles from "./drivingInnovationSection.module.scss";
import imageSrc from "./img/innovationImage.jpg";

const DrivingInnovationSection = () => {
  const { isMobile } = useWindowSize();
  const t = useTranslations("DrivingInnovation");

  return (
    <MainContainer>
      {
        isMobile ?
          <section className={styles.component}>
            <H2 className={styles.title}>{t("title")}</H2>
            <div className={styles.contentWrapper}>
              <div className={styles.imageWrapper}>
                <Image className={styles.image} src={imageSrc} alt="Image" fill />
              </div>
              <div className={styles.subtitleWrapper}>
                <P>{t("firstSubtitle")}</P>
                <P>{t("secondSubtitle")}</P>
              </div>
            </div>
          </section>
          :
          <section className={styles.component}>
            <div className={styles.contentWrapper}>
              <div className={styles.imageWrapper}>
                <Image className={styles.image} src={imageSrc} alt="Image" fill />
              </div>
              <H2 className={styles.title}>{t("title")}</H2>
              <div className={styles.subtitleWrapper}>
                <P>{t("firstSubtitle")}</P>
                <P>{t("secondSubtitle")}</P>
              </div>
            </div>
          </section>
      }
    </MainContainer>
  );
};

export default DrivingInnovationSection;
