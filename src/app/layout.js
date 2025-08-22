import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import SidebarMolecule from "@/components/Molecules/SidebarMolecule";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "WIP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <div className="grid grid-cols-[16rem_1fr] h-screen w-screen">
            <SidebarMolecule />
            <main className="bg-background text-foreground p-6 w-full h-full">
              {children}
            </main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
