import { useState } from "react";
import styles from "./videoPlayer.module.scss";

const videoUrls = [
  "/videos/globalStockMarkets.mp4",
  "/videos/greenSmock.mp4",
  "/videos/walnutCracking.mp4"
];

export const VideoPlayer = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [url, setUrl] = useState(videoUrls[currentVideo]);

  const playNextVideo = () => {
    const nextVideoIdx = (currentVideo + 1) % videoUrls.length;
    setCurrentVideo(nextVideoIdx);
    setUrl(videoUrls[nextVideoIdx]);
  };

  return (
    <video
      src={url}
      muted
      playsInline
      autoPlay
      onEnded={playNextVideo}
      className={styles.component}
    />
  );
};
