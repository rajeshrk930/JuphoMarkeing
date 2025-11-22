import "./../styles/globals.css";
import React from "react";

export const metadata = {
  title: "Jupho — Performance Marketing",
  description: "Jupho — Meta Ads + WhatsApp Funnels. Get a free audit.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
