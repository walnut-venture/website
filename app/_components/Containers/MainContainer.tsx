import { FunctionComponent, ReactNode } from "react";

import styles from "./containers.module.scss";

type TProps = {
  children: ReactNode;
}

export const MainContainer: FunctionComponent<TProps> = ({ children }) => {
  return (
    <div className={styles.mainContainer}>
      {children}
    </div>
  );
};
