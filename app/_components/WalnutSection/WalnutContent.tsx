import Image from "next/image";
import { Button, Container, H1, P } from "_components";

import styles from "./walnutSection.module.scss";
import arrowRightSrc from "./img/ArrowRight.svg";

export const WalnutContent = () => {
  return (
    <Container>
      <div className={styles.contentContainer}>
        <H1 className={styles.title}>Welcome to walnut venture studios</H1>
        <P className={styles.subtitle}>Empowering innovation and new business models in the financial sector. We design, build and scale the success stories of tomorrow.</P>
        <Button
          size="m"
        >
          Let{"\u2019"}s talk
          <Image src={arrowRightSrc} alt="Arrow" />
        </Button>
      </div>
    </Container>
  );
};
