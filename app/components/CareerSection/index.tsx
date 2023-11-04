import { H2, P, ImagesWrapper, MainContainer } from "components";
import { useContentfulData } from "hooks";
import { GET_CAREER } from "data";

import styles from "./career.module.scss";

type Item = {
  title: string;
  firstSubtitle: string;
  secondSubtitle: string;
  thirdSubtitle: string;
}

type TProps = {
  items: Item[];
}

const CareerSection = () => {
  const data = useContentfulData<TProps>("careerCollection", GET_CAREER);
  const isValidData = data?.items && data.items.length > 0;

  return (
    <MainContainer>
      {
        isValidData &&
        <section id="career" className={styles.component}>
          <H2 className={styles.title}>{data.items[0].title}</H2>
          <P className={styles.subtitle}>{data.items[0].firstSubtitle}</P>
          <ImagesWrapper />
          <div className={styles.textContainer}>
            <P className={styles.text}>{data.items[0].secondSubtitle}</P>
            <P className={styles.text}>
              {data.items[0].thirdSubtitle}<a className={styles.email} href="mailto:office@walnut-vs.com">office@walnut-vs.com</a>.
            </P>
          </div>
        </section>
      }
    </MainContainer>
  );
};

export default CareerSection;
