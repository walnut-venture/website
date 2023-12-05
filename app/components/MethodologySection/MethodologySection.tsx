import { H2, H3, P, Container } from "components";
import { useWindowSize, useContentfulData } from "hooks";
import { GetQueries } from "data";
import { sortContentByOrder } from "@/utils/sortContentByOrder";

import styles from "./methodologySection.module.scss";

type Item = {
  title: string;
  firstBlockSubtitle: string;
  secondBlockSubtitle: string;
  firstSubtitle: string;
  secondSubtitle: string;
  thirdSubtitle: string;
  fourthSubtitle: string;
  phaseSubtitle: string;
  order: number;
}

type TProps = {
  items: Item[];
}

export const MethodologySection = () => {
  const { isLaptopL } = useWindowSize();
  const { methodology, methodologyCard } = GetQueries();
  const data = useContentfulData<TProps>("methodologyCollection", methodology);
  const cards = useContentfulData<TProps>("methodologyCardCollection", methodologyCard);
  const isValidData = data?.items && data.items.length > 0;
  const isValidCards = cards?.items && cards.items.length > 0;
  const sortedCards = isValidCards && cards.items.sort(sortContentByOrder);

  return (
    <Container>
      {
        isValidData && sortedCards &&
        <section id="methodology" className={styles.component}>
          <div className={styles.titleWrapper}>
            <H2>{data.items[0].title}</H2>
            <H3 className={styles.subtitle}>{data.items[0].firstBlockSubtitle}</H3>
            <P className={styles.text}>{data.items[0].secondBlockSubtitle}</P>
          </div>
          {
            isLaptopL ?
              <>
                <div className={styles.cardsContainer}>
                  <div className={styles.firstCard}>
                    <div className={styles.firstContent}>
                      <H3 className={styles.cardTitle}>{sortedCards[0].title}</H3>
                      <P className={styles.cardText}>{sortedCards[0].firstSubtitle}</P>
                      <P className={styles.cardText}>{sortedCards[0].secondSubtitle}</P>
                    </div>
                  </div>
                  <div className={styles.secondCard}>
                    <div className={styles.secondContent}>
                      <H3 className={styles.cardTitle}>{sortedCards[1].title}</H3>
                      <P className={styles.cardText}>{sortedCards[1].firstSubtitle}</P>
                      <P className={styles.cardText}>{sortedCards[1].secondSubtitle}</P>
                      <P className={styles.cardText}>{sortedCards[1].thirdSubtitle}</P>
                    </div>
                  </div>
                </div>
                <div className={styles.phaseContainer}>
                  <div className={styles.firstPhase}>
                    <H3 className={styles.phaseTitle}>{sortedCards[0].phaseSubtitle}</H3>
                  </div>
                  <div className={styles.secondPhase}>
                    <H3 className={styles.phaseTitle}>{sortedCards[1].phaseSubtitle}</H3>
                  </div>
                </div>
                <div className={styles.cardsContainer}>
                  <div className={styles.thirdCard}>
                    <div className={styles.thirdContent}>
                      <H3 className={styles.cardTitle}>{sortedCards[2].title}</H3>
                      <P className={styles.cardText}>{sortedCards[2].firstSubtitle}</P>
                      <P className={styles.cardText}>{sortedCards[2].secondSubtitle}</P>
                      <P className={styles.cardText}>{sortedCards[2].thirdSubtitle}</P>
                      <P className={styles.cardText}>{sortedCards[2].fourthSubtitle}</P>
                    </div>
                  </div>
                  <div className={styles.fourthCard}>
                    <div className={styles.fourthContent}>
                      <H3 className={styles.cardTitle}>{sortedCards[3].title}</H3>
                      <P className={styles.cardText}>{sortedCards[3].firstSubtitle}</P>
                      <P className={styles.cardText}>{sortedCards[3].secondSubtitle}</P>
                      <P className={styles.cardText}>{sortedCards[3].thirdSubtitle}</P>
                      <P className={styles.cardText}>{sortedCards[3].fourthSubtitle}</P>
                    </div>
                  </div>
                </div>
                <div className={styles.phaseContainer}>
                  <div className={styles.thirdPhase}>
                    <H3 className={styles.phaseTitle}>{sortedCards[2].phaseSubtitle}</H3>
                  </div>
                  <div className={styles.fourthPhase}>
                    <H3 className={styles.phaseTitle}>{sortedCards[3].phaseSubtitle}</H3>
                  </div>
                </div>
              </>
              :
              <>
                <div className={styles.cardsContainer}>
                  <div className={styles.firstCard}>
                    <div className={styles.firstContent}>
                      <H3 className={styles.cardTitle}>{sortedCards[0].title}</H3>
                      <P className={styles.cardText}>{sortedCards[0].firstSubtitle}</P>
                      <P className={styles.cardText}>{sortedCards[0].secondSubtitle}</P>
                    </div>
                  </div>
                  <div className={styles.secondCard}>
                    <div className={styles.secondContent}>
                      <H3 className={styles.cardTitle}>{sortedCards[1].title}</H3>
                      <P className={styles.cardText}>{sortedCards[1].firstSubtitle}</P>
                      <P className={styles.cardText}>{sortedCards[1].secondSubtitle}</P>
                      <P className={styles.cardText}>{sortedCards[1].thirdSubtitle}</P>
                    </div>
                  </div>
                  <div className={styles.thirdCard}>
                    <div className={styles.thirdContent}>
                      <H3 className={styles.cardTitle}>{sortedCards[2].title}</H3>
                      <P className={styles.cardText}>{sortedCards[2].firstSubtitle}</P>
                      <P className={styles.cardText}>{sortedCards[2].secondSubtitle}</P>
                      <P className={styles.cardText}>{sortedCards[2].thirdSubtitle}</P>
                      <P className={styles.cardText}>{sortedCards[2].fourthSubtitle}</P>
                    </div>
                  </div>
                  <div className={styles.fourthCard}>
                    <div className={styles.fourthContent}>
                      <H3 className={styles.cardTitle}>{sortedCards[3].title}</H3>
                      <P className={styles.cardText}>{sortedCards[3].firstSubtitle}</P>
                      <P className={styles.cardText}>{sortedCards[3].secondSubtitle}</P>
                      <P className={styles.cardText}>{sortedCards[3].thirdSubtitle}</P>
                      <P className={styles.cardText}>{sortedCards[3].fourthSubtitle}</P>
                    </div>
                  </div>
                </div>
                <div className={styles.phaseContainer}>
                  <div className={styles.firstPhase}>
                    <H3 className={styles.phaseTitle}>{sortedCards[0].phaseSubtitle}</H3>
                  </div>
                  <div className={styles.secondPhase}>
                    <H3 className={styles.phaseTitle}>{sortedCards[1].phaseSubtitle}</H3>
                  </div>
                  <div className={styles.thirdPhase}>
                    <H3 className={styles.phaseTitle}>{sortedCards[2].phaseSubtitle}</H3>
                  </div>
                  <div className={styles.fourthPhase}>
                    <H3 className={styles.phaseTitle}>{sortedCards[3].phaseSubtitle}</H3>
                  </div>
                </div>
              </>
          }
        </section>
      }
    </Container>
  );
};
