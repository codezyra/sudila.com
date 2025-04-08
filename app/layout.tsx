// app/layout.tsx
import { inter } from "@/components/fonts";
import "@/components/global.css";
import Providers from "@/components/providers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sudila Jayasekara",
  description: "Sudila Jayasekara's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
