import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MainContainer, H2, P, H3 } from "components";
import { useTranslations } from "next-intl";
gsap.registerPlugin(ScrollTrigger);

import styles from "./whoWeAreSection.module.scss";


export const WhoWeAreSection = () => {
  const t = useTranslations("WhoWeAre");
  const blockRef = useRef(null);
  const titleRef = useRef(null);
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const fourthRef = useRef(null);
  const fifthRef = useRef(null);

  useEffect(() => {
    const blockElement = blockRef.current;
    const titleElement = titleRef.current;
    const firstElement = firstRef.current;
    const secondElement = secondRef.current;
    const thirdElement = thirdRef.current;
    const fourthElement = fourthRef.current;
    const fifthElement = fifthRef.current;

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: blockElement,
        start: "top",
        end: "+=1000",
        scrub: true,
        pin: true
      }
    });

    tl.from(titleElement, {
      opacity: 0,
      duration: 3,
      y: 200
    });

    tl.from(firstElement, {
      opacity: 0,
      duration: 3,
      y: 200
    });

    tl.from(secondElement, {
      opacity: 0,
      duration: 3,
      y: 200
    });

    tl.from(thirdElement, {
      opacity: 0,
      duration: 3,
      y: 200
    });

    tl.from(fourthElement, {
      opacity: 0,
      duration: 3,
      y: 200
    });

    tl.from(fifthElement, {
      opacity: 0,
      duration: 3,
      y: 200
    });
  },[]);

  return (
    <MainContainer>
      <section id="who-we-are" className={styles.component} ref={blockRef}>
        <div ref={titleRef}>
          <H2 className={styles.title}>{t("mainTitle")}</H2>
        </div>
        <div className={styles.contentItem} ref={firstRef}>
          <P className={styles.list}>{t("firstTitle")}</P>
          <P className={styles.contentText}>{t("firstText")}</P>
        </div>
        <div className={styles.contentItem} ref={secondRef}>
          <P className={styles.list}>{t("secondTitle")}</P>
          <div className={styles.contentText}>
            <H3 className={styles.contentSubtitle}>{t("firstSubtitle")}</H3>
            <P>{t("secondText")}</P>
          </div>
        </div>
        <div className={styles.contentItem} ref={thirdRef}>
          <div></div>
          <div className={styles.contentText}>
            <H3 className={styles.contentSubtitle}>{t("secondSubtitle")}</H3>
            <P>{t("thirdText")}</P>
          </div>
        </div>
        <div className={styles.contentItem} ref={fourthRef}>
          <div></div>
          <div className={styles.contentText}>
            <H3 className={styles.contentSubtitle}>{t("thirdSubtitle")}</H3>
            <P>{t("fourthText")}</P>
          </div>
        </div>
        <div className={styles.contentItem} ref={fifthRef}>
          <div></div>
          <div className={styles.contentText}>
            <H3 className={styles.contentSubtitle}>{t("fourthSubtitle")}</H3>
            <P>{t("fifthText")}</P>
          </div>
        </div>
      </section>
    </MainContainer>
  );
};
