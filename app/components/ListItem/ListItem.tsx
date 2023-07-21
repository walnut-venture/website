import Image from "next/image";
import { FunctionComponent } from "react";
import { P } from "components";

import styles from "./listItem.module.scss";
import ellipseSrc from "./img/ellipse.svg";

type TProps = {
  children: string;
};

export const ListItem:FunctionComponent<TProps> = ({ children }) => {
  return (
    <div className={styles.component}>
      <Image className={styles.image} src={ellipseSrc} alt="Ellipse" />
      <P className={styles.title}>{children}</P>
    </div>
  );
};
