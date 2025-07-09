// app/layout.tsx
import "./globals.css";
import { Figtree } from "next/font/google";

// adds font
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // Add desired weights
  variable: "--font-figtree",
  display: "swap",
});

export const metadata = {
  title: "Powered by Ember",
  description: "A digital agency for software & branding.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={figtree.variable}>{children}</body>
    </html>
  );
}
