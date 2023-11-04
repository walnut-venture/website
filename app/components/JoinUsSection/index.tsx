"use client";

import Image from "next/image";
import Link from "next/link";
import { MainContainer, H2, P, ArrowButton } from "components";
import { useContentfulData, useWindowSize } from "hooks";
import { GET_JOIN_US } from "data";

import styles from "./joinUsSection.module.scss";

type Item = {
  title: string;
  firstSubtitle:string;
  secondSubtitle: string;
  button: string;
  image: {
    url: string
  };
}

type TProps = {
  items: Item[];
}

const JoinUsSection = () => {
  const { isMobile } = useWindowSize();
  const data = useContentfulData<TProps>("joinUsCollection", GET_JOIN_US);
  const isValidData = data?.items && data.items.length > 0;
  const imageSrc = isValidData ? data.items[0].image.url : undefined;

  return (
    <MainContainer>
      {
        isMobile ?
          <>
            {
              isValidData && imageSrc &&
              <section className={styles.component}>
                <div className={styles.titleWrapper}>
                  <H2 className={styles.title}>{data.items[0].title}</H2>
                </div>
                <div className={styles.contentWrapper}>
                  <div className={styles.subtitleWrapper}>
                    <P>{data.items[0].firstSubtitle}</P>
                    <P>{data.items[0].secondSubtitle}</P>
                    <Link href="#contact-us">
                      <ArrowButton>
                        {data.items[0].button}
                      </ArrowButton>
                    </Link>
                  </div>
                  <div className={styles.imageWrapper}>
                    <Image className={styles.image} src={imageSrc} alt="Image" fill />
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
                  <div className={styles.titleWrapper}>
                    <H2 className={styles.title}>{data.items[0].title}</H2>
                  </div>
                  <div className={styles.subtitleWrapper}>
                    <P>{data.items[0].firstSubtitle}</P>
                    <P className={styles.subtitle}>{data.items[0].secondSubtitle}</P>
                    <Link href="#contact-us" className={styles.button}>
                      <ArrowButton>
                        {data.items[0].button}
                      </ArrowButton>
                    </Link>
                  </div>
                </div>
              </section>
            }
          </>
      }
    </MainContainer>
  );
};

export default JoinUsSection;
