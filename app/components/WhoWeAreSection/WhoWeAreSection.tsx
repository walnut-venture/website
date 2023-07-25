import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MainContainer, H2, P, H3, ListItem } from "components";
gsap.registerPlugin(ScrollTrigger);

import styles from "./whoWeAreSection.module.scss";


export const WhoWeAreSection = () => {
  const blockRef = useRef(null);
  const titleRef = useRef(null);
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);

  useEffect(() => {
    const blockElement = blockRef.current;
    const firstElement = firstRef.current;
    const secondElement = secondRef.current;
    const thirdElement = thirdRef.current;

    // let tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: blockElement,
    //     start: "center",
    //     end: "+=1000",
    //     markers: true,
    //     scrub: true,
    //     pin: true
    //   }
    // });

    // tl.from(secondElement, {
    //   opacity: 0,
    //   duration: 3,
    //   y: 50
    // });

    // tl.from(thirdElement, {
    //   opacity: 0,
    //   duration: 3,
    //   y: 50
    // });
  },[]);

  return (
    <MainContainer>
      <section id="who-we-are" className={styles.component} ref={blockRef}>
        <div ref={titleRef}>
          <H2 className={styles.title}>Who we are?</H2>
        </div>
        <div className={styles.contentItem} ref={firstRef}>
          <ListItem className={styles.list}>Our vision</ListItem>
          <P className={styles.contentText}>We envision a financial landscape that embraces digital transformation, fosters financial inclusion, and delivers cutting-edge solutions to businesses and customers alike. By combining the expertise and resources of established financial institutions with the agility and innovation of start-ups, we aim to drive meaningful change and empower the finance industry for the digital age.</P>
        </div>
        <div className={styles.contentItem} ref={secondRef}>
          <ListItem className={styles.list}>What sets us apart</ListItem>
          <div className={styles.contentText}>
            <H3 className={styles.contentSubtitle}>Deep financial expertise</H3>
            <P>With a team of seasoned professionals who possess extensive experience in the financial sector, we understand the complexities and challenges of the industry. Our deep domain knowledge allows us to identify opportunities and create ventures that address key pain points and emerging trends.</P>
          </div>
        </div>
        <div className={styles.contentItem} ref={thirdRef}>
          <div></div>
          <div className={styles.contentText}>
            <H3 className={styles.contentSubtitle}>Deep financial expertise</H3>
            <P>With a team of seasoned professionals who possess extensive experience in the financial sector, we understand the complexities and challenges of the industry. Our deep domain knowledge allows us to identify opportunities and create ventures that address key pain points and emerging trends.</P>
          </div>
        </div>
      </section>
    </MainContainer>
  );
};
