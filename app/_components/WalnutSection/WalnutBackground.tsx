import Image from "next/image";

import styles from "./walnutSection.module.scss";
import bgSrc from "./img/WalnutBackground.jpg";

export const WalnutBackground = () => {
  return (
    <section className={styles.component}>
      <Image className={styles.image} src={bgSrc} alt="Image" />
    </section>
  );
};
