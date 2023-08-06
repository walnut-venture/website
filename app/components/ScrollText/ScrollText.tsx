import { ReactNode } from "react";
import { useSpring, animated, useScroll } from "@react-spring/web";

import styles from "./scrollText.module.scss";

interface Props {
  children: ReactNode
};

export const ScrollText = ({ children }: Props) => {
  const [ animationStyles, animationApi ] = useSpring(() => {
    y: "100%";
  });

  const { scrollYProgress } = useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      if (scrollYProgress > 0.7) {
        animationApi.start({ y: '0' })
      } else {
        animationApi.start({ y: '100%' })
      }
    },
    default: {
      immediate: true,
    }
  });

  return (
    <div className={styles.component}>
      <animated.div style={animationStyles}>{children}</animated.div>
    </div>
  );
};
