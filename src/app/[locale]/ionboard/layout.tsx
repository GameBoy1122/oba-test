// import './globals.css';
import { BackNavigation, Navbar } from "@/components";

export const metadata = {
  title: "iOnboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar
        bgStyle="image"
        left={<BackNavigation title="กลับสู่หน้าหลัก" />}
      />
      {children}
    </div>
  );
}
