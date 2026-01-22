import "./globals.css";
import TermlyCMP from "./component/TermlyCMP";
import { Suspense } from "react";

const WEBSITE_UUID = "ca6469f2-8d74-409d-bfe7-83828d9d9286";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {children}
        <Suspense fallback={null}>
          <TermlyCMP 
            websiteUUID={WEBSITE_UUID}
            autoBlock={true}
          />
        </Suspense>
      </body>
    </html>
  );
}