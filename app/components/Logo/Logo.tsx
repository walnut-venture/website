import Image from "next/image";

import styles from "./logo.module.scss";
import logoSrc from "./img/WalnutLogo.svg";

export const Logo = () => {
  return <Image className={styles.logo} src={logoSrc} alt="Logo" />;
};
