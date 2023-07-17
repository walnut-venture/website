import Image from "next/image";
import { useContext } from "react";
import { BurgerContext } from "context";

import styles from "./walnutSection.module.scss";
import bgSrc from "./img/WalnutBackground.jpg";

export const WalnutBackground = () => {
  const { activeBurger, setActiveBurger } = useContext(BurgerContext);

  return (
    <section className={styles.component}>
      <Image className={styles.image} src={bgSrc} alt="Image" />
      {activeBurger &&
        <div className={styles.activeBurgerShadow}></div>
      }
    </section>
  );
};
