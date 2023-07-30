import { Container, H2, P, InfiniteSlider } from "components";

import styles from "./career.module.scss";

const CareerSection = () => {
  return (
    <section id="career" className={styles.component}>
      <Container>
        <H2 className={styles.title}>Career</H2>
        <P className={styles.subtitle}>Hi there! We are glad you found us! We are looking for brilliant minds, who want to support  founders & corporate innovation heads from idea to scale.</P>
      </Container>
      <InfiniteSlider />
      <Container>
        <div className={styles.textContainer}>
          <P className={styles.text}>Are you passionate about building new ventures, new business models, products and leaving your mark on the industry? At walnut venture you will find a like minded team of highly motivated entrepreneurs.</P>
          <P className={styles.text}>
            We are always interested in hearing from new talents. Please send us your CV with a short intro e-mail to <a className={styles.email} href="mailto:julian.verocai@verocaiconsulting.com">julian.verocai@verocaiconsulting.com</a>.
          </P>
        </div>
      </Container>
    </section>
  );
};

export default CareerSection;
