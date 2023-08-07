import classNames from "classnames";
import Image from "next/image";
import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import { P } from "components";

import styles from "./listItem.module.scss";
import ellipseSrc from "./img/ellipse.svg";

type TProps = {
  children: string;
  className?: string;
};

export const ListItem:FunctionComponent<TProps> = ({
  children,
  className: propsClassName
}) => {
  const listClassName = classNames(styles.component, propsClassName);

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }} className={listClassName}>
      <Image className={styles.image} src={ellipseSrc} alt="Ellipse" />
      <P>{children}</P>
    </motion.div>
  );
};
