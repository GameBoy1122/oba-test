// import './globals.css';

import { SelectedAppNavbar } from '@/components';

export const metadata = {
  title: 'Landing Page',
  description: 'Generated by create next app',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SelectedAppNavbar />
      {children}
    </div>
  );
}
