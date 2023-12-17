import { FunctionComponent, ReactNode } from "react";

import styles from "./containers.module.scss";

type TProps = {
  children: ReactNode;
  maxWidth?: number;
}

export const Container: FunctionComponent<TProps> = ({ children, maxWidth }) => {
  return (
    <div className={styles.container} style={{maxWidth}}>
      {children}
    </div>
  );
};
