import Image from "next/image";

import styles from "./infiniteSlider.module.scss";
import firstImageSrc from "./img/careerFirstImage.jpg";
import secondImageSrc from "./img/careerSecondImage.jpg";
import thirdImageSrc from "./img/careerThirdImage.jpg";
import fourthImageSrc from "./img/careerFourthImage.jpg";
import fifthImageSrc from "./img/careerFifthImage.jpg";
import sixthImageSrc from "./img/careerSixthImage.jpg";
import seventhImageSrc from "./img/careerSeventhImage.jpg";
import eightImageSrc from "./img/careerEighthImage.jpg";

export const InfiniteSlider = () => {
  return (
    <div className={styles.component}>
      <div className={styles.sliderTrack}>
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
        <div className={styles.imageWrapper}>
          <Image className={styles.image} src={fifthImageSrc} alt="Image" fill />
        </div>
        <div className={styles.imageWrapper}>
          <Image className={styles.image} src={sixthImageSrc} alt="Image" fill />
        </div>
        <div className={styles.imageWrapper}>
          <Image className={styles.image} src={seventhImageSrc} alt="Image" fill />
        </div>
        <div className={styles.imageWrapper}>
          <Image className={styles.image} src={eightImageSrc} alt="Image" fill />
        </div>
      </div>
      <div className={styles.sliderTrack}>
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
        <div className={styles.imageWrapper}>
          <Image className={styles.image} src={fifthImageSrc} alt="Image" fill />
        </div>
        <div className={styles.imageWrapper}>
          <Image className={styles.image} src={sixthImageSrc} alt="Image" fill />
        </div>
        <div className={styles.imageWrapper}>
          <Image className={styles.image} src={seventhImageSrc} alt="Image" fill />
        </div>
        <div className={styles.imageWrapper}>
          <Image className={styles.image} src={eightImageSrc} alt="Image" fill />
        </div>
      </div>
    </div>
  );
};
