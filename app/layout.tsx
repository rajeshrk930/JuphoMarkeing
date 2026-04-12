import "./../styles/globals.css";
import React from "react";

export const metadata = {
  title: "ClickBoost — Performance Marketing",
  description: "ClickBoost — Meta Ads + WhatsApp Funnels. Get a free audit.",
  icons: {
    icon: "/clickboost-fav.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const isProd = process.env.NODE_ENV === 'production';

  return (
    <html lang="en">
      <head>
        {/* Meta Pixel Code - enabled only in production and when NEXT_PUBLIC_META_PIXEL_ID is set */}
        {isProd && META_PIXEL_ID ? (
          <>
            <script
              dangerouslySetInnerHTML={{
                __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '${META_PIXEL_ID}');fbq('track', 'PageView');`,
              }}
            />
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
              />
            </noscript>
          </>
        ) : null}
      </head>
      <body className="bg-bg">
        {children}
      </body>
    </html>
  );
}
