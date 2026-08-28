import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tixel — Session Agenda",
  description: "Session agenda for Tixel",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
