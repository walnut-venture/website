"use client";

import Image from "next/image";
import { H2, P, H3, ListItem, ShowMore, Container } from "components";
import { useWindowSize, useContentfulData } from "hooks";
import { motion } from "framer-motion";
import { GetQueries } from "data";
import { sortContentByOrder } from "@/utils/sortContentByOrder";

import styles from "./servicesSection.module.scss";

type Item = {
  title: string;
  subtitle: string;
  text:string;
  image: {
    url: string
  };
  order: number;
}

type TProps = {
  items: Item[];
}

const ServicesSection = () => {
  let count = 1;
  const { isMobile } = useWindowSize();
  const { services, ourServicesInDetail } = GetQueries();
  const data = useContentfulData<TProps>("servicesCollection", services);
  const details = useContentfulData<TProps>("ourServicesInDetailCollection", ourServicesInDetail);
  const isValidData = data?.items && data.items.length > 0;
  const isValidDetails = details?.items && details.items.length > 0;
  const sortedData = isValidData && data.items.sort(sortContentByOrder);
  const sortedDetails = isValidDetails && details.items.sort(sortContentByOrder);

  return (
    <Container>
      <section id="services" className={styles.component}>
        {
          sortedData &&
            <H2 className={styles.title}>{sortedData[0].title}</H2>
        }
        <div className={styles.servicesContainer}>
          {
            !isMobile ?
              <div className={styles.servicesImages}>
                {
                  sortedData &&
                    sortedData.map((card) => (
                      <div key={card.subtitle} className={styles.imageWrapper}>
                        <Image className={styles.image} src={card.image.url} alt="OurServices" fill />
                      </div>
                    ))
                }
              </div>
              :
              <div className={styles.imageWrapper}>
                {
                  sortedData &&
                    <Image className={styles.image} src={sortedData[0].image.url} alt="OurServices" fill />
                }
              </div>
          }
          {
            sortedData &&
              <div className={styles.cardsContainer}>
                {
                  sortedData.map((card) => (
                    <motion.div key={card.subtitle} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }} className={styles.servicesCard}>
                      <P className={styles.number}>{`0 ${count++}.`}</P>
                      <H3>{card.subtitle}</H3>
                      <P className={styles.subtitle}>{card.text}</P>
                    </motion.div>
                  ))
                }
              </div>
          }
        </div>
        <div className={styles.listContainer}>
          {
            sortedDetails &&
              <P className={styles.listItem}>{sortedDetails[0].title}</P>
          }
        </div>
        {
          !isMobile ?
            <div className={styles.servicesDetailContainer}>
              {
                sortedDetails &&
                  <div className={styles.servicesDetailWrapper}>
                    {
                      sortedDetails.slice(1, 4).map((detail, index) => (
                        <ListItem key={index} className={index === 0 ? '' : styles.servicesSubtitle}>
                          {detail.title}
                        </ListItem>
                      ))
                    }
                    <ShowMore>
                      {
                        sortedDetails.slice(4).map((detail, index) => (
                          <ListItem key={index} className={styles.servicesSubtitle}>
                            {detail.title}
                          </ListItem>
                        ))}
                    </ShowMore>
                  </div>
              }
              <div className={styles.mediaContent}>
                <div className={styles.detailImageWrapper}>
                  {
                    sortedDetails &&
                      <Image className={styles.image} src={sortedDetails[0].image.url} alt="OurServices" fill />
                  }
                </div>
              </div>
            </div>
            :
            <div className={styles.servicesDetailContainer}>
              {
                sortedDetails &&
                  <div className={styles.servicesDetailWrapper}>
                    <div className={styles.imageWrapper}>
                      <Image className={styles.image} src={sortedDetails[0].image.url} alt="OurServices" fill />
                    </div>
                    {
                      sortedDetails.map((card) => (
                        <ListItem key={card.title} className={styles.servicesSubtitle}>{card.title}</ListItem>
                      ))
                    }
                  </div>
              }
            </div>
        }
      </section>
    </Container>
  );
};

export default ServicesSection;
