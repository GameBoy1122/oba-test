import "./globals.scss";
import { notFound } from "next/navigation";
import { createTranslator, NextIntlClientProvider } from "next-intl";
import { locales, defaultLocale } from "@/middlewares/next-intl-middleware";
import AlertProvider from "@/providers/alert-provider";
import { OBANavbar } from "@/components";
import DevMode from "@/utils/dev-mode";

interface Props {
  children: React.ReactNode;
  params: { locale: string };
  devMode: React.ReactNode;
}

export async function generateStaticParams() {
  return locales?.map((locale) => ({ locale }));
}

async function getMessages(locale: string) {
  try {
    return (await import(`../../../locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

async function getBootstrapJS() {
  try {
    return (await import(`../../utils/bootstrap`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateMetadata({ params: { locale } }: Props) {
  const messages = await getMessages(locale);

  // You can use the core (non-React) APIs when you have to use next-intl
  // outside of components. Potentially this will be simplified in the future
  // (see https://next-intl-docs.vercel.app/docs/next-13/server-components).
  const t = createTranslator({ locale, messages });

  return {
    title: "Landing Page",
  };
}

export default async function RootLayout({ children, params, devMode }: Props) {
  const messages = await getMessages(params?.locale);
  await getBootstrapJS();

  return (
    <html lang={params?.locale}>
      <head>
        {/* <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        /> */}
      </head>
      <body>
        <NextIntlClientProvider locale={params?.locale} messages={messages}>
          <main>
            <AlertProvider />
            <OBANavbar />
            {children}
            {devMode}
            <DevMode />
          </main>
        </NextIntlClientProvider>
        {/* <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
          crossOrigin="anonymous"
        /> */}
      </body>
    </html>
  );
}

const DevModeProvider = ({ devMode }: { devMode: React.ReactNode }) => {
  return devMode;
};
