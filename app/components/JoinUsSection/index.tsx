"use client";

import Image from "next/image";
import Link from "next/link";
import { MainContainer, H2, P, ArrowButton } from "components";
import { useTranslations } from "next-intl";
import { useWindowSize } from "hooks";

import styles from "./joinUsSection.module.scss";
import imageSrc from "./img/joinUsImage.jpg";

const JoinUsSection = () => {
  const { isMobile } = useWindowSize();
  const t = useTranslations("JoinUs");

  return (
    <MainContainer>
      {
        isMobile ?
          <section className={styles.component}>
            <div className={styles.titleWrapper}>
              <H2 className={styles.title}>{t("title")}</H2>
            </div>
            <div className={styles.contentWrapper}>
              <div className={styles.subtitleWrapper}>
                <P>{t("firstSubtitle")}</P>
                <P>{t("secondSubtitle")}</P>
                <Link href="#contact-us">
                  <ArrowButton>
                    {t("button")}
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
                <H2 className={styles.title}>{t("title")}</H2>
              </div>
              <div className={styles.subtitleWrapper}>
                <P>{t("firstSubtitle")}</P>
                <P className={styles.subtitle}>{t("secondSubtitle")}</P>
                <Link href="#contact-us" className={styles.button}>
                  <ArrowButton>
                    {t("button")}
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
