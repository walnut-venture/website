import Image from "next/image";
import { ArrowButton, Container, H1, P } from "components";

import styles from "./walnutSection.module.scss";

export const WalnutContent = () => {
  return (
    <Container>
      <div className={styles.contentContainer}>
        <H1 className={styles.title}>Welcome to walnut venture studios</H1>
        <P className={styles.subtitle}>Empowering innovation and new business models in the financial sector. We design, build and scale the success stories of tomorrow.</P>
        <ArrowButton>
          Let&apos;s talk
        </ArrowButton>
      </div>
    </Container>
  );
};
