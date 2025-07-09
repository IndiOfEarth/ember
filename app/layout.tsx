// app/layout.tsx
import "./globals.css";
import localFont from "next/font/local";

// adds font
const emberFont = localFont({
  src: [
    {
      path: "./fonts/SoleilRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/SoleilBook.otf",
      weight: "500",
      style: "normal", // changed
    },
    {
      path: "./fonts/SoleilBold.otf",
      weight: "700",
      style: "normal", // changed
    },
    {
      path: "./fonts/SoleilLight.otf",
      weight: "300", // You can change weight to 300 to reflect "Light"
      style: "normal", // changed
    },
  ],
  variable: "--font-emberFont", // used in Tailwind via CSS variable
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
    <html lang="en" className={emberFont.variable}>
      <body>{children}</body>
    </html>
  );
}
