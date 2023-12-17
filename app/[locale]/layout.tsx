import classNames from "classnames";
import { ReactNode } from "react";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { nunitoSans } from "../font/nunitoSans";
import { NextIntlClientProvider } from "next-intl";
import "../styles/globals.css";

import styles from "../layout.module.scss";
import { Metadata } from "next";

interface Params {
  locale: string;
};

type Props = {
  children: ReactNode;
  params: Params
};

export function generateStaticParams() {
  return [{locale: "en-US"}, {locale: "de-DE"}];
};

export const metadata: Metadata = {
  title: 'Walnut venture studios',
  description: 'Empowering innovation and new business models in the financial sector. We design, build and scale the success stories of tomorrow.',
  keywords: 'fintech, company building, venture building, innovation, finance',
  themeColor: '#025c51',
};

export default async function RootLayout({
  children,
  params: {locale}
}: Props) {
  const activeLocalization = process.env.NEXT_PUBLIC_LOCALISATION === "true";

  return (
    <html lang={activeLocalization ? locale: "en-US"}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={classNames(styles.component, nunitoSans.className)}>
        <NextIntlClientProvider locale={locale}>
          {children}
        </NextIntlClientProvider>
        <SpeedInsights />
      </body>
    </html>
  );
};
