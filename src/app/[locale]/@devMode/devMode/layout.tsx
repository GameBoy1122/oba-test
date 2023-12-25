// import './globals.css';

export default async function RootLayout({
  children,
}: // devMode,
{
  children: React.ReactNode;
  //   dipChip: React.ReactNode;
}) {
  return <div>{children}</div>;
}
