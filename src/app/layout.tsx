import type { Metadata, Viewport } from "next";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import { fontVariables } from "@/fonts";
import { Providers } from "@/components/providers/Providers";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "EU Prime Serwis - International Recruitment Agency",
  description: "International Recruitment Agency in Europe"
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfaf7" },
    { media: "(prefers-color-scheme: dark)", color: "#151a21" }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontVariables} font-sans antialiased`}>
        <Providers>
          <Layout className="flex-1">{children}</Layout>
          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              duration: 4000,
              style: {
                background: "var(--popover)",
                color: "var(--popover-foreground)",
                border: "1px solid var(--border)",
                borderRadius: "14px",
                boxShadow: "var(--elev-2)",
                fontSize: "14px",
                padding: "12px 16px"
              },
              success: {
                iconTheme: { primary: "var(--primary)", secondary: "var(--primary-foreground)" }
              },
              error: {
                iconTheme: { primary: "var(--destructive)", secondary: "#fff" }
              }
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
