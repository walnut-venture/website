import { FunctionComponent, ReactNode } from "react";

import styles from "./containers.module.scss";

type TProps = {
  children: ReactNode;
}

export const Container: FunctionComponent<TProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};
