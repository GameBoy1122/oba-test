// import './globals.css';

export const metadata = {
  title: "Login Page",
  description: "Generated by create next app",
};

interface Props {
  children: React.ReactNode;
  params: { locale: string };
}

export default function RootLayout({ children, params: { locale } }: Props) {
  return <div>{children}</div>;
}
