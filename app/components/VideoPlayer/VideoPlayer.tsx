import { useContentfulData } from "hooks";
import { GetQueries } from "data";

import styles from "./videoPlayer.module.scss";

type Item = {
  video: {
    url: string
  };
}

type TProps = {
  items: Item[];
}

export const VideoPlayer = () => {
  const { walnutContent } = GetQueries();
  const data = useContentfulData<TProps>("walnutContentCollection", walnutContent);
  const isValidData = data?.items && data.items.length > 0;
  const videoSrc = isValidData ? data.items[0].video.url : undefined;

  return (
    <video
      src={videoSrc}
      muted
      playsInline
      autoPlay
      loop
      className={styles.component}
    />
  );
};
