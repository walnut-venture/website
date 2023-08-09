import Image from "next/image";
import { useWindowSize } from "hooks";

import styles from "./imagesWrapper.module.scss";
import firstImageSrc from "./img/careerFirstImage.jpg";
import secondImageSrc from "./img/careerSecondImage.jpg";
import thirdImageSrc from "./img/careerThirdImage.jpg";
import fourthImageSrc from "./img/careerFourthImage.jpg";

export const ImagesWrapper = () => {
  const { isLaptopS } = useWindowSize();

  return (
    <div className={styles.component}>
      {
        isLaptopS ?
          <div className={styles.flexContainer}>
            <div className={styles.imageWrapper}>
              <Image className={styles.image} src={secondImageSrc} alt="Image" fill />
            </div>
          </div>
          :
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
      }
    </div>
  );
};
