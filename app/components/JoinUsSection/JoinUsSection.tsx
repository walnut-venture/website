import Image from "next/image";
import { MainContainer, H2, P, Button } from "components";

import styles from "./joinUsSection.module.scss";
import imageSrc from "./img/joinUsImage.jpg";
import arrowRightSrc from "../WalnutSection/img/ArrowRight.svg";

export const JoinUsSection = () => {
  return (
    <MainContainer>
      <section className={styles.component}>
        <div className={styles.titleWrapper}>
          <H2 className={styles.title}>Join us in shaping the future of finance</H2>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.subtitleWrapper}>
            <P>Whether you are a financial institution looking to innovate or a fintech start-up with a ground-breaking idea, walnut venture studios is your trusted partner in building ventures that disrupt the financial sector, drive growth, and transform the way finance works.</P>
            <P>Contact us today to explore how we can collaborate and unlock the full potential of your business. Together, let&apos;s shape the future of finance.</P>
            <Button
              className={styles.button}
              size="m"
            >
              Join
              <Image src={arrowRightSrc} alt="Arrow" />
            </Button>
          </div>
          <Image className={styles.image} src={imageSrc} alt="Image" />
        </div>
      </section>
    </MainContainer>
  );
};
