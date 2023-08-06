import classNames from "classnames";
import { ReactNode } from "react";
import { sanFrancisco } from "../font/sanFrancisco";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import "../styles/globals.css";

import styles from "../layout.module.scss";

interface Params {
  locale: string;
};

type Props = {
  children: ReactNode;
  params: Params
};

export function generateStaticParams() {
  return [{locale: "en"}, {locale: "de"}];
};

export const metadata = {
  title: 'Walnut venture studios',
  description: 'Empowering innovation and new business models in the financial sector. We design, build and scale the success stories of tomorrow.',
  keywords: 'fintech, company building, venture building, innovation, finance'
};

export default async function RootLayout({
  children,
  params: {locale}
}: Props) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  };

  return (
    <html lang={locale}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={classNames(styles.component, sanFrancisco.className)}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
};