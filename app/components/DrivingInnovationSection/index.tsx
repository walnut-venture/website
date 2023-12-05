"use client";

import Image from "next/image";
import { H2, P, Container } from "components";
import { useContentfulData, useWindowSize } from "hooks";
import { GetQueries } from "data";

import styles from "./drivingInnovationSection.module.scss";

type Item = {
  title: string;
  firstSubtitle:string;
  secondSubtitle: string;
  image: {
    url: string
  };
}

type TProps = {
  items: Item[];
}

const DrivingInnovationSection = () => {
  const { isMobile } = useWindowSize();
  const { drivingInnovation } = GetQueries();
  const data = useContentfulData<TProps>("drivingInnovationCollection", drivingInnovation);
  const isValidData = data?.items && data.items.length > 0;
  const imageSrc = isValidData ? data.items[0].image.url : undefined;

  return (
    <Container>
      {
        !isMobile ?
          <>
            {
              isValidData && imageSrc &&
              <section className={styles.component}>
                <H2 className={styles.title}>{data.items[0].title}</H2>
                <div className={styles.contentWrapper}>
                  <div className={styles.imageWrapper}>
                    <Image className={styles.image} src={imageSrc} alt="Image" fill />
                  </div>
                  <div className={styles.subtitleWrapper}>
                    <P>{data.items[0].firstSubtitle}</P>
                    <P>{data.items[0].secondSubtitle}</P>
                  </div>
                </div>
              </section>
            }
          </>
          :
          <>
            {
              isValidData && imageSrc &&
              <section className={styles.component}>
                <div className={styles.contentWrapper}>
                  <div className={styles.imageWrapper}>
                    <Image className={styles.image} src={imageSrc} alt="Image" fill />
                  </div>
                  <H2 className={styles.title}>{data.items[0].title}</H2>
                  <div className={styles.subtitleWrapper}>
                    <P>{data.items[0].firstSubtitle}</P>
                    <P>{data.items[0].secondSubtitle}</P>
                  </div>
                </div>
              </section>
            }
          </>
      }
    </Container>
  );
};

export default DrivingInnovationSection;
