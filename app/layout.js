
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/contexts/AuthContext";
import LabDataProvider from "@/contexts/LabDataContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ByteForge",
  description: "A lab management software",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
      <LabDataProvider>
        <body className={inter.className}>{children}</body>
      </LabDataProvider>
      </AuthProvider>
    </html>
  );
}
