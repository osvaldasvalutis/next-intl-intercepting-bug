import {ReactNode} from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';

import { routing } from "../../routing"

type Props = {
  children: ReactNode;
  modal: ReactNode;
  params: {locale: string};
};

export default async function LocaleLayout({
  children,
  modal,
  params: {locale}
}: Props) {
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <head>
        <title>next-intl-bug-repro-app-router</title>
      </head>

      <body>
        {children}

        {modal}
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
