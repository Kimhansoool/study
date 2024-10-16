import Script from 'next/script';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=G-PHFP05LQV4" />
      <Script
        id="script"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-PHFP05LQV4');
        `,
        }}
      /> */}
      <body>{children}</body>
    </html>
  );
}
