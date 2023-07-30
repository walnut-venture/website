import classNames from "classnames";
import { ReactNode } from "react";
import { sanFrancisco } from "./font/sanFrancisco";
import "./styles/globals.css";

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
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={classNames(styles.component, sanFrancisco.className)}>{children}</body>
    </html>
  );
};
