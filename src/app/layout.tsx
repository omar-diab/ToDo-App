import type { Metadata } from "next";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "To Do App",
  description: "To Do App for managing tasks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ToastContainer theme="light" position="top-center"/>
        <main className="container mx-auto p-10">{children}</main>
      </body>
    </html>
  );
}
