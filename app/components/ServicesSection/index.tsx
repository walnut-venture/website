"use client";

import Image from "next/image";
import { H2, MainContainer, P, H3, ListItem, ShowMore } from "components";
import { useWindowSize, useContentfulData } from "hooks";
import { motion } from "framer-motion";
import { GET_SERVICES, GET_OUR_SERVICES_IN_DETAIL } from "data";

import styles from "./servicesSection.module.scss";

type Item = {
  title: string;
  subtitle: string;
  text:string;
  image: {
    url: string
  };
}

type TProps = {
  items: Item[];
}

const ServicesSection = () => {
  const { isMobile } = useWindowSize();
  const data = useContentfulData<TProps>("servicesCollection", GET_SERVICES);
  const details = useContentfulData<TProps>("ourServicesInDetailCollection", GET_OUR_SERVICES_IN_DETAIL);
  const isValidData = data?.items && data.items.length > 0;
  const isValidDetails = details?.items && details.items.length > 0;
  const ourServicesBgSrc = isValidData ? data.items[2].image.url : undefined;
  const ourServicesFinTech = isValidData ? data.items[1].image.url : undefined;
  const ourServicesSrc = isValidData ? data.items[0].image.url : undefined;
  const ourServicesDetailSrc = isValidDetails ? details.items[11].image.url : undefined;

  return (
    <MainContainer>
      <section id="services" className={styles.component}>
        {
          isValidData &&
          <H2 className={styles.title}>{data.items[2].title}</H2>
        }
        <div className={styles.servicesContainer}>
          {
            isMobile ?
              <div className={styles.servicesImages}>
                <div className={styles.imageWrapper}>
                  {
                    ourServicesBgSrc &&
                    <Image className={styles.image} src={ourServicesBgSrc} alt="OurServices" fill />
                  }
                </div>
                <div className={styles.imageWrapper}>
                  {
                    ourServicesFinTech &&
                    <Image className={styles.image} src={ourServicesFinTech} alt="OurServices" fill />
                  }
                </div>
                <div className={styles.imageWrapper}>
                  {
                    ourServicesSrc &&
                    <Image className={styles.image} src={ourServicesSrc} alt="OurServices" fill />
                  }
                </div>
              </div>
              :
              <div className={styles.imageWrapper}>
                {
                  ourServicesSrc &&
                  <Image className={styles.image} src={ourServicesSrc} alt="OurServices" fill />
                }
              </div>
          }
          {
            isValidData &&
            <div className={styles.cardsContainer}>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }} className={styles.servicesCard}>
                <P className={styles.number}>01.</P>
                <H3>{data.items[2].subtitle}</H3>
                <P className={styles.subtitle}>{data.items[2].text}</P>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }} className={styles.servicesCard}>
                <P className={styles.number}>02.</P>
                <H3>{data.items[1].subtitle}</H3>
                <P className={styles.subtitle}>{data.items[1].text}</P>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }} className={styles.servicesCard}>
                <P className={styles.number}>03.</P>
                <H3>{data.items[0].subtitle}</H3>
                <P className={styles.subtitle}>{data.items[0].text}</P>
              </motion.div>
            </div>
          }
        </div>
        <div className={styles.listContainer}>
          {
            isValidDetails &&
            <P className={styles.listItem}>{details.items[11].title}</P>
          }
        </div>
        {
          isMobile ?
            <div className={styles.servicesDetailContainer}>
              {
                isValidDetails &&
                  <div className={styles.servicesDetailWrapper}>
                    <ListItem>{details.items[10].title}</ListItem>
                    <ListItem className={styles.servicesSubtitle}>{details.items[9].title}</ListItem>
                    <ListItem className={styles.servicesSubtitle}>{details.items[8].title}</ListItem>
                    <ShowMore>
                      <ListItem>{details.items[7].title}</ListItem>
                      <ListItem className={styles.servicesSubtitle}>{details.items[6].title}</ListItem>
                      <ListItem className={styles.servicesSubtitle}>{details.items[5].title}</ListItem>
                      <ListItem className={styles.servicesSubtitle}>{details.items[4].title}</ListItem>
                      <ListItem className={styles.servicesSubtitle}>{details.items[3].title}</ListItem>
                      <ListItem className={styles.servicesSubtitle}>{details.items[2].title}</ListItem>
                    </ShowMore>
                  </div>
              }
              <div className={styles.mediaContent}>
                <div className={styles.detailImageWrapper}>
                  {
                    isValidDetails && ourServicesDetailSrc &&
                    <Image className={styles.image} src={ourServicesDetailSrc} alt="OurServices" fill />
                  }
                </div>
              </div>
            </div>
            :
            <div className={styles.servicesDetailContainer}>
              <div className={styles.servicesDetailWrapper}>
                <div className={styles.imageWrapper}>
                  {
                    isValidDetails && ourServicesDetailSrc &&
                    <Image className={styles.image} src={ourServicesDetailSrc} alt="OurServices" fill />
                  }
                </div>
                {
                  isValidDetails &&
                  <>
                    <ListItem className={styles.servicesSubtitle}>{details.items[9].title}</ListItem>
                    <ListItem className={styles.servicesSubtitle}>{details.items[8].title}</ListItem>
                    <ListItem className={styles.servicesSubtitle}>{details.items[7].title}</ListItem>
                    <ListItem className={styles.servicesSubtitle}>{details.items[6].title}</ListItem>
                    <ListItem className={styles.servicesSubtitle}>{details.items[5].title}</ListItem>
                    <ListItem className={styles.servicesSubtitle}>{details.items[4].title}</ListItem>
                    <ListItem className={styles.servicesSubtitle}>{details.items[3].title}</ListItem>
                    <ListItem className={styles.servicesSubtitle}>{details.items[2].title}</ListItem>
                  </>
                }
              </div>
            </div>
        }
      </section>
    </MainContainer>
  );
};

export default ServicesSection;
