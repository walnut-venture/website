import { Container, H2, P, ImagesWrapper } from "components";
import { useTranslations } from "next-intl";

import styles from "./career.module.scss";

const CareerSection = () => {
  const t = useTranslations("Career");

  return (
    <Container>
      <section id="career" className={styles.component}>
        <H2 className={styles.title}>{t("mainTitle")}</H2>
        <P className={styles.subtitle}>{t("firstText")}</P>
        <ImagesWrapper />
        <div className={styles.textContainer}>
          <P className={styles.text}>{t("secondText")}</P>
          <P className={styles.text}>
            {t("thirdText")}<a className={styles.email} href="mailto:office@walnut-vs.com">office@walnut-vs.com</a>.
          </P>
        </div>
      </section>
    </Container>
  );
};

export default CareerSection;
