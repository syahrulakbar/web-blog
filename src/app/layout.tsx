import { AuthProvider, Footer, Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Blog",
  description: "Learn NEXT JS and TypeScript",
  icons: {
    icon: "/1.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <main className="container">
            <Navbar />
            {children}
            <Footer />
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
