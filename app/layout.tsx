import { ClerkProvider } from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/header"; // client component
import "./globals.css";
import { dark } from "@clerk/themes";
import { NavMain } from "@/components/landing/nav-main";
import { SearchModal } from "@/components/landing/searchbar"; // client component

export const metadata = {
  title: "My App",
  description: "Using Clerk & Next.js",
};

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <nav className="flex items-center justify-between px-6 py-4 h-16">
            {/* Kiri: Logo dan NavMain */}
            <div className="flex items-center space-x-4">
              <div className="text-xl font-bold">MyLogo</div> {/* Dummy logo */}
              <NavMain />
            </div>

            {/* Kanan: SearchModal dan Header */}
            <div className="flex items-center space-x-6">
              <SearchModal />
              <Header />
            </div>
          </nav>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
