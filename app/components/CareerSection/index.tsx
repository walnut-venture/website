import { Container, H2, P, InfiniteSlider } from "components";
import { useTranslations } from "next-intl";

import styles from "./career.module.scss";

const CareerSection = () => {
  const t = useTranslations("Career");

  return (
    <section id="career" className={styles.component}>
      <Container>
        <H2 className={styles.title}>{t("mainTitle")}</H2>
        <P className={styles.subtitle}>{t("firstText")}</P>
      </Container>
      <InfiniteSlider />
      <Container>
        <div className={styles.textContainer}>
          <P className={styles.text}>{t("secondText")}</P>
          <P className={styles.text}>
            {t("thirdText")}<a className={styles.email} href="mailto:julian.verocai@verocaiconsulting.com">julian.verocai@verocaiconsulting.com</a>.
          </P>
        </div>
      </Container>
    </section>
  );
};

export default CareerSection;
