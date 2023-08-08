import styles from "./videoPlayer.module.scss";

export const VideoPlayer = () => {
  const url = "/videos/video.mp4";

  return (
    <video
      src={url}
      muted
      playsInline
      autoPlay
      loop
      className={styles.component}
    />
  );
};
