import '@mantine/core/styles.css';

import React from 'react';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { theme } from '../theme';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <style>{`
    @font-face {
      font-family: 'Core Sans C';
      src: url('/fonts/CoreSansC-45Regular.woff') format('woff2'),
           url('/fonts/CoreSansC-45Regular.woff') format('woff');
      font-weight: 400;
      font-style: normal;
    }
    @font-face {
      font-family: 'Core Sans C';
      src: url('/fonts/CoreSansC-55Medium.woff') format('woff2'),
           url('/fonts/CoreSansC-55Medium.woff') format('woff');
      font-weight: 700;
      font-style: normal;
    }
  `}</style>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
