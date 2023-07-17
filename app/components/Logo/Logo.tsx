import classNames from "classnames";
import Image from "next/image";
import { FunctionComponent } from "react";

import styles from "./logo.module.scss";
import logoSrc from "./img/WalnutLogo.svg";

type TProps = {
  className?: string;
};

export const Logo: FunctionComponent<TProps> = ({ className: propsClassName }) => {
  const logoClassName = classNames(styles.logo, propsClassName);

  return <Image className={logoClassName} src={logoSrc} alt="Logo" />;
};
