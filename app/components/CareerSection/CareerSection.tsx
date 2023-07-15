import Image from "next/image";
import { Container, H2, P } from "components";

import styles from "./career.module.scss";
import firstImageSrc from "./img/careerFirstImage.jpg";
import secondImageSrc from "./img/careerSecondImage.jpg";
import thirdImageSrc from "./img/careerThirdImage.jpg";
import fourthImageSrc from "./img/careerFourthImage.jpg";

export const CareerSection = () => {
  return (
    <Container>
      <section className={styles.component}>
        <H2 className={styles.title}>Career</H2>
        <P className={styles.subtitle}>Hi there! We are glad you found us! We are looking for brilliant minds, who want to support  founders & corporate innovation heads from idea to scale.</P>
        <div className={styles.imagesContainer}>
          <div className={styles.imageWrapper}>
            <Image className={styles.image} src={firstImageSrc} alt="Image" fill />
          </div>
          <div className={styles.imageWrapper}>
            <Image className={styles.image} src={secondImageSrc} alt="Image" fill />
          </div>
          <div className={styles.imageWrapper}>
            <Image className={styles.image} src={thirdImageSrc} alt="Image" fill />
          </div>
          <div className={styles.imageWrapper}>
            <Image className={styles.image} src={fourthImageSrc} alt="Image" fill />
          </div>
        </div>
        <div className={styles.textContainer}>
          <P className={styles.text}>Are you passionate about building new ventures, new business models, products and leaving your mark on the industry? At walnut venture you will find a like minded team of highly motivated entrepreneurs.</P>
          <P className={styles.text}>
            We are always interested in hearing from new talents. Please send us your CV with a short intro e-mail to <a className={styles.email} href="mailto:loremipsum@gmail.com">loremipsum@gmail.com</a>.
          </P>
        </div>
      </section>
    </Container>
  );
};
