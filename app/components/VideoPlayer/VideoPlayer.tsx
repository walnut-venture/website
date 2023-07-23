import { useEffect, useRef, useState } from "react";

type Props = {
  videoUrls: string[];
}

export const VideoPlayer = ({ videoUrls }: Props) => {
  const [ currentVideoIndex, setCurrentVideoIndex ] = useState(0);
  const videoRef = useRef(null);

  const playNextVideo = () => {
    if (currentVideoIndex < videoUrls.length - 1) {
      setCurrentVideoIndex((prevIndex) => prevIndex + 1);
    } else {
      setCurrentVideoIndex(0);
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    const onVideoEnded = () => {
      playNextVideo();
    };

    videoElement.addEventListener("ended", onVideoEnded);

    return () => {
      videoElement.removeEventListener("ended", onVideoEnded);
    };
  }, [currentVideoIndex]);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <div>
      {videoUrls.map((url, index) => (
        <video
          key={index}
          src={url}
          autoPlay={index === currentVideoIndex}
          loop
          muted
          playsInline
          style={{ display: index === currentVideoIndex ? "block" : "none" }}
          ref={videoRef}
        />
      ))}
    </div>
  );
};
