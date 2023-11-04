import Image from "next/image";
import { useWindowSize, useContentfulData } from "hooks";
import { GET_CAREER } from "data";

import styles from "./imagesWrapper.module.scss";

type Item = {
  firstImage: {url: string};
  secondImage: {url: string};
  thirdImage: {url: string};
  fourthImage: {url: string};
}

type TProps = {
  items: Item[];
}

export const ImagesWrapper = () => {
  const { isLaptopS } = useWindowSize();
  const data = useContentfulData<TProps>("careerCollection", GET_CAREER);
  const isValidData = data?.items && data.items.length > 0;
  const firstImageSrc = isValidData ? data.items[0].firstImage.url : undefined;
  const secondImageSrc = isValidData ? data.items[0].secondImage.url : undefined;
  const thirdImageSrc = isValidData ? data.items[0].thirdImage.url : undefined;
  const fourthImageSrc = isValidData ? data.items[0].fourthImage.url : undefined;

  return (
    <div className={styles.component}>
      {
        isLaptopS ?
          <div className={styles.flexContainer}>
            <div className={styles.imageWrapper}>
              {
                secondImageSrc &&
                <Image className={styles.image} src={secondImageSrc} alt="Image" fill />
              }
            </div>
          </div>
          :
          <div className={styles.imagesContainer}>
            <div className={styles.imageWrapper}>
              {
                firstImageSrc &&
                <Image className={styles.image} src={firstImageSrc} alt="Image" fill />
              }
            </div>
            <div className={styles.imageWrapper}>
              {
                secondImageSrc &&
                <Image className={styles.image} src={secondImageSrc} alt="Image" fill />
              }
            </div>
            <div className={styles.imageWrapper}>
              {
                thirdImageSrc &&
                <Image className={styles.image} src={thirdImageSrc} alt="Image" fill />
              }
            </div>
            <div className={styles.imageWrapper}>
              {
                fourthImageSrc &&
                <Image className={styles.image} src={fourthImageSrc} alt="Image" fill />
              }
            </div>
          </div>
      }
    </div>
  );
};
