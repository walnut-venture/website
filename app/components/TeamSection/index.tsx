"use client";

import Image from "next/image";
import { H2, P, H3, ShowMore, Container } from "components";
import { useWindowSize, useContentfulData } from "hooks";
import { GetQueries } from "data";
import { sortContentByOrder } from "@/utils/sortContentByOrder";

import styles from "./teamSection.module.scss";
import linkedinSrc from "./img/linkedin.svg";
import classNames from "classnames";

type Item = {
  title: string;
  firstSubtitle:string;
  secondSubtitle: string;
  thirdSubtitle: string;
  fourthSubtitle: string;
  name: string;
  specialty: string;
  linkedinLink: string;
  order: number;
  image: {
    url: string
  };
}

type TProps = {
  items: Item[];
}

const TeamSection = () => {
  const { isMobile } = useWindowSize();
  const { aboutUs, employee } = GetQueries();
  const data = useContentfulData<TProps>("aboutUsCollection", aboutUs);
  const employees = useContentfulData<TProps>("employeeCollection", employee);
  const isValidData = data?.items && data.items.length > 0;
  const isValidEmployees = employees?.items && employees.items.length > 0;
  const sortedEmployees = isValidEmployees && employees.items.sort(sortContentByOrder);

  return (
    <Container maxWidth={1340}>
      {
        isValidData &&
        <section id="team" className={styles.component}>
          <H2 className={styles.title}>{data.items[0].title}</H2>
          <P className={styles.subtitle}>{data.items[0].firstSubtitle}</P>
          {
            sortedEmployees &&
              sortedEmployees.map((item, index) => (
                <div className={styles.employeeCard} key={item.name}>
                  <div className={classNames(styles.teamCard, index % 2 !== 0 && styles.oddCard)}>
                    <div className={styles.imageWrapper}>
                      <Image className={styles.image} src={item.image.url} alt={item.name} fill />
                    </div>
                    <div className={styles.teamTitle}>
                      <div className={styles.socialWrapper}>
                        <H3>{item.name}</H3>
                        {
                          item.linkedinLink &&
                          <a className={styles.socialLink} href={item.linkedinLink} target="_blank">
                            <Image className={styles.social} src={linkedinSrc} alt="Linkedin" />
                          </a>
                        }
                      </div>
                      <P>{item.specialty}</P>
                    </div>
                  </div>
                  <div className={styles.textContainer}>
                    {item.firstSubtitle && <P>{item.firstSubtitle}</P>}
                    {item.secondSubtitle && <P>{item.secondSubtitle}</P>}
                    {
                      !isMobile ?
                        <>
                          {item.thirdSubtitle &&<P>{item.thirdSubtitle}</P>}
                        </>
                        :
                        <>
                          {item.thirdSubtitle &&<ShowMore><P className={styles.text}>{item.thirdSubtitle}</P></ShowMore>}
                        </>
                    }
                  </div>
                </div>
              ))
          }
        </section>
      }
    </Container>
  );
};

export default TeamSection;
