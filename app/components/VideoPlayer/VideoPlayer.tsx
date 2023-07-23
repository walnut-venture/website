import { useState } from "react";

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
    <div>
      <video
        src={url}
        muted
        playsInline
        autoPlay
        onEnded={playNextVideo}
      />
    </div>
  );
};
