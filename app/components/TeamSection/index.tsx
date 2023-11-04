"use client";

import Image from "next/image";
import { MainContainer, H2, P, H3, ShowMore } from "components";
import { useWindowSize, useContentfulData } from "hooks";
import { GET_ABOUT_US } from "data";

import styles from "./teamSection.module.scss";
import linkedinSrc from "./img/linkedin.svg";

type Item = {
  title: string;
  firstSubtitle:string;
  secondSubtitle: string;
  thirdSubtitle: string;
  fourthSubtitle: string;
  name: string;
  specialty: string;
  image: {
    url: string
  };
}

type TProps = {
  items: Item[];
}

const TeamSection = () => {
  const { isMobile } = useWindowSize();
  const data = useContentfulData<TProps>("aboutUsCollection", GET_ABOUT_US);
  const isValidData = data?.items && data.items.length > 0;
  const teamSEOSrc = isValidData ? data.items[0].image.url : undefined;

  return (
    <MainContainer>
      {
        isValidData && teamSEOSrc &&
        <section id="team" className={styles.component}>
          <H2 className={styles.title}>{data.items[0].title}</H2>
          <P className={styles.subtitle}>{data.items[0].firstSubtitle}</P>
          <div className={styles.teamCard}>
            <div className={styles.imageWrapper}>
              <Image className={styles.image} src={teamSEOSrc} alt="TeamSEO" fill />
            </div>
            <div className={styles.teamTitle}>
              <div className={styles.socialWrapper}>
                <H3>{data.items[0].name}</H3>
                <a className={styles.socialLink} href="https://www.linkedin.com/in/julian-verocai-30b1a582/" target="_blank">
                  <Image className={styles.social} src={linkedinSrc} alt="Linkedin" />
                </a>
              </div>
              <P>{data.items[0].specialty}</P>
            </div>
          </div>
          {
            isMobile ?
              <div className={styles.textContainer}>
                <P>{data.items[0].secondSubtitle}</P>
                <P>{data.items[0].thirdSubtitle}</P>
                <P>{data.items[0].fourthSubtitle}</P>
              </div>
              :
              <div className={styles.textContainer}>
                <P>{data.items[0].secondSubtitle}</P>
                <P>{data.items[0].thirdSubtitle}</P>
                <ShowMore><P className={styles.text}>{data.items[0].fourthSubtitle}</P></ShowMore>
              </div>
          }
        </section>
      }
    </MainContainer>
  );
};

export default TeamSection;
