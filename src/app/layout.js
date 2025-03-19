import { GoogleAnalytics } from '@next/third-parties/google'
import Layout from "../components/Layout/layout";
import '../globals.scss';

export const metadata = {
  description: "Zvika Ben-Haim — Homepage",
  verification: {
    google: "google3072e7ff2f031730",
  },
};
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Fredericka+the+Great&family=David+Libre&family=Merriweather:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
        <GoogleAnalytics gaId="G-R83Z59BP68" />
      </head>
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
