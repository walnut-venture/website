import Image from "next/image";
import { H2, H3, P, Container } from "components";
import { useWindowSize } from "hooks";
import { useTranslations } from "next-intl";

import styles from "./methodologySection.module.scss";

export const MethodologySection = () => {
  const { isLaptopL } = useWindowSize();
  const t = useTranslations("Methodology");

  return (
    <Container>
      <section id="methodology" className={styles.component}>
        <div className={styles.titleWrapper}>
          <H2>{t("mainTitle")}</H2>
          <H3 className={styles.subtitle}>{t("firstSubtitle")}</H3>
          <P>{t("firstText")}</P>
        </div>
        {
          isLaptopL ?
            <>
              <div className={styles.cardsContainer}>
                <div className={styles.firstCard}>
                  <div className={styles.firstContent}>
                    <H3 className={styles.cardTitle}>{t("secondSubtitle")}</H3>
                    <P className={styles.cardText}>{t("researchFirst")}</P>
                    <P className={styles.cardText}>{t("researchSecond")}</P>
                  </div>
                </div>
                <div className={styles.secondCard}>
                  <div className={styles.secondContent}>
                    <H3 className={styles.cardTitle}>{t("thirdSubtitle")}</H3>
                    <P className={styles.cardText}>{t("studyFirst")}</P>
                    <P className={styles.cardText}>{t("studySecond")}</P>
                    <P className={styles.cardText}>{t("studyThird")}</P>
                  </div>
                </div>
              </div>
              <div className={styles.phaseContainer}>
                <div className={styles.firstPhase}>
                  <H3 className={styles.phaseTitle}>{t("firstPhase")}</H3>
                </div>
                <div className={styles.secondPhase}>
                  <H3 className={styles.phaseTitle}>{t("secondPhase")}</H3>
                </div>
              </div>
              <div className={styles.cardsContainer}>
                <div className={styles.thirdCard}>
                  <div className={styles.thirdContent}>
                    <H3 className={styles.cardTitle}>{t("fourthSubtitle")}</H3>
                    <P className={styles.cardText}>{t("preparationFirst")}</P>
                    <P className={styles.cardText}>{t("preparationSecond")}</P>
                    <P className={styles.cardText}>{t("preparationThird")}</P>
                    <P className={styles.cardText}>{t("preparationFourth")}</P>
                  </div>
                </div>
                <div className={styles.fourthCard}>
                  <div className={styles.fourthContent}>
                    <H3 className={styles.cardTitle}>{t("fifthSubtile")}</H3>
                    <P className={styles.cardText}>{t("scalingFirst")}</P>
                    <P className={styles.cardText}>{t("scalingSecond")}</P>
                    <P className={styles.cardText}>{t("scalingThird")}</P>
                    <P className={styles.cardText}>{t("scalingFourth")}</P>
                  </div>
                </div>
              </div>
              <div className={styles.phaseContainer}>
                <div className={styles.thirdPhase}>
                  <H3 className={styles.phaseTitle}>{t("thirdPhase")}</H3>
                </div>
                <div className={styles.fourthPhase}>
                  <H3 className={styles.phaseTitle}>{t("fourthPhase")}</H3>
                </div>
              </div>
            </>
            :
            <>
              <div className={styles.cardsContainer}>
                <div className={styles.firstCard}>
                  <div className={styles.firstContent}>
                    <H3 className={styles.cardTitle}>{t("secondSubtitle")}</H3>
                    <P className={styles.cardText}>{t("researchFirst")}</P>
                    <P className={styles.cardText}>{t("researchSecond")}</P>
                  </div>
                </div>
                <div className={styles.secondCard}>
                  <div className={styles.secondContent}>
                    <H3 className={styles.cardTitle}>{t("thirdSubtitle")}</H3>
                    <P className={styles.cardText}>{t("studyFirst")}</P>
                    <P className={styles.cardText}>{t("studySecond")}</P>
                    <P className={styles.cardText}>{t("studyThird")}</P>
                  </div>
                </div>
                <div className={styles.thirdCard}>
                  <div className={styles.thirdContent}>
                    <H3 className={styles.cardTitle}>{t("fourthSubtitle")}</H3>
                    <P className={styles.cardText}>{t("preparationFirst")}</P>
                    <P className={styles.cardText}>{t("preparationSecond")}</P>
                    <P className={styles.cardText}>{t("preparationThird")}</P>
                    <P className={styles.cardText}>{t("preparationFourth")}</P>
                  </div>
                </div>
                <div className={styles.fourthCard}>
                  <div className={styles.fourthContent}>
                    <H3 className={styles.cardTitle}>{t("fifthSubtile")}</H3>
                    <P className={styles.cardText}>{t("scalingFirst")}</P>
                    <P className={styles.cardText}>{t("scalingSecond")}</P>
                    <P className={styles.cardText}>{t("scalingThird")}</P>
                    <P className={styles.cardText}>{t("scalingFourth")}</P>
                  </div>
                </div>
              </div>
              <div className={styles.phaseContainer}>
                <div className={styles.firstPhase}>
                  <H3 className={styles.phaseTitle}>{t("firstPhase")}</H3>
                </div>
                <div className={styles.secondPhase}>
                  <H3 className={styles.phaseTitle}>{t("secondPhase")}</H3>
                </div>
                <div className={styles.thirdPhase}>
                  <H3 className={styles.phaseTitle}>{t("thirdPhase")}</H3>
                </div>
                <div className={styles.fourthPhase}>
                  <H3 className={styles.phaseTitle}>{t("fourthPhase")}</H3>
                </div>
              </div>
            </>
        }
      </section>
    </Container>
  );
};
