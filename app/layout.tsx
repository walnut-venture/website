import classNames from "classnames";
import { ReactNode } from "react";
import { sanFrancisco } from "./_font/sanFrancisco";
import "./_styles/globals.css";

import styles from "./layout.module.scss";

export const metadata = {
  title: 'Walnut venture studios',
  description: 'Empowering innovation and new business models in the financial sector. We design, build and scale the success stories of tomorrow.'
};

export default function RootLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={classNames(styles.component, sanFrancisco.className)}>{children}</body>
    </html>
  );
};
