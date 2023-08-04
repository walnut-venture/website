import Image from "next/image";
import { H2, H3, P, MainContainer } from "components";
import { useWindowSize } from "hooks";
import { useTranslations } from "next-intl";

import styles from "./methodologySection.module.scss";
import arrowSrc from "./img/arrowIcon.svg";

export const MethodologySection = () => {
  const { isMobile } = useWindowSize();
  const t = useTranslations("Methodology");

  return (
    <MainContainer>
      <section className={styles.component}>
        <div className={styles.titleWrapper}>
          <H2>{t("mainTitle")}</H2>
          <H3 className={styles.subtitle}>{t("firstSubtitle")}</H3>
          <P>{t("firstText")}</P>
        </div>
        <div className={styles.firstBlock}>
          <div className={styles.container}>
            <div className={styles.bgCard}>
              <H3 className={styles.cardTitle}>{t("secondSubtitle")}</H3>
              <P>{t("researchFirst")}</P>
              <P>{t("researchSecond")}</P>
            </div>
            <div className={styles.card}>
              <H3 className={styles.cardTitle}>{t("thirdSubtitle")}</H3>
              <P>{t("studyFirst")}</P>
              <P>{t("studySecond")}</P>
              <P>{t("studyThird")}</P>
            </div>
          </div>
        </div>
        <div className={styles.secondBlock}>
          <div className={styles.container}>
            <div className={styles.card}>
              <H3 className={styles.cardTitle}>{t("fourthSubtitle")}</H3>
              <P>{t("preparationFirst")}</P>
              <P>{t("preparationSecond")}</P>
              <P>{t("preparationThird")}</P>
              <P>{t("preparationFourth")}</P>
            </div>
            <div className={styles.bgCard}>
              <H3 className={styles.cardTitle}>{t("fifthSubtile")}</H3>
              <P>{t("scalingFirst")}</P>
              <P>{t("scalingSecond")}</P>
              <P>{t("scalingThird")}</P>
              <P>{t("scalingFourth")}</P>
            </div>
          </div>
        </div>
        {
          isMobile ?
            <div className={styles.phaseContainer}>
              <div className={styles.phaseWrapper}>
                <H3>{t("firstPhase")}</H3>
                <Image className={styles.image} src={arrowSrc} alt="ArrowIcon" />
              </div>
              <div className={styles.phaseWrapper}>
                <H3>{t("secondPhase")}</H3>
                <Image className={styles.image} src={arrowSrc} alt="ArrowIcon" />
              </div>
              <div className={styles.phaseWrapper}>
                <H3>{t("thirdPhase")}</H3>
                <Image className={styles.image} src={arrowSrc} alt="ArrowIcon" />
              </div>
              <H3>{t("fourthPhase")}</H3>
            </div>
            :
            <div className={styles.phaseContainer}>
              <div className={styles.firstPhaseBlock}>
                <div className={styles.phaseWrapper}>
                  <H3>{t("firstPhase")}</H3>
                  <Image className={styles.image} src={arrowSrc} alt="ArrowIcon" />
                </div>
                <div className={styles.phaseWrapper}>
                  <H3>{t("secondPhase")}</H3>
                </div>
              </div>
              <div className={styles.lastPhaseBlock}>
                <div className={styles.phaseWrapper}>
                  <H3>{t("thirdPhase")}</H3>
                  <Image className={styles.image} src={arrowSrc} alt="ArrowIcon" />
                </div>
                <H3>{t("fourthPhase")}</H3>
              </div>
            </div>
        }
      </section>
    </MainContainer>
  );
};
