import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/customComponents/landingPage/Footer";
// import Navbar from "@/components/customComponents/Navbar/Navbar";
import { poppins } from '../app/font'

 


export const metadata: Metadata = {
  title: "hash13",
  description: "Linux World learning platform hash13",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${poppins.variable} antialiased`}
      >
  
        {children}
        <Footer></Footer>


      </body>
    </html>
  );
}
