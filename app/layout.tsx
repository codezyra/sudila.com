import { inter } from "@/components/fonts";
import "@/components/global.css";
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
    <html lang="en">
      <body className={`${inter.className} antialiased p-8 `}>
        <div>{children}</div>
      </body>
    </html>
  );
}
