import { useContext } from "react";
import { BurgerContext } from "context";
import { VideoPlayer } from "components";
import { videoUrls } from "data";

import styles from "./walnutSection.module.scss";

export const WalnutBackground = () => {
  const { activeBurger, setActiveBurger } = useContext(BurgerContext);

  return (
    <section className={styles.component}>
      <VideoPlayer videoUrls={videoUrls} />
      {activeBurger &&
        <div className={styles.activeBurgerShadow}></div>
      }
    </section>
  );
};
