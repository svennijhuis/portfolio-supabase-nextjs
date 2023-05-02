import "../styles/globals.css";
import { openGraphImage } from "./shared-metadata";
import SupabaseProvider from "@/context/supabase-provider";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Sven Nijhuis",
    template: "%s | Sven Nijhuis",
  },
  description:
    "This is my personal portfolio, created to showcase who I am and where I aspire to go.",
  applicationName: "Sven Nijhuis portfolio",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "cmd",
    "supabase",
    "portfolio",
    "sven",
    "nijhuis",
    "svennijhuis",
    "svennijhuis.io",
    "svennijhuis",
    "Amsterdam",
    "Netherlands",
    "Nederland",
    "hva",
  ],
  authors: [
    { name: "Sven Nijhuis" },
    { name: "Sven Nijhuis", url: "www.svennijhuis.io" },
  ],
  colorScheme: "light dark",
  creator: "Sven Nijhuis",
  publisher: "Sven Nijhuis",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    ...openGraphImage,
    title: "Sven Nijhuis",
    description:
      "This is my personal portfolio, created to showcase who I am and where I aspire to go.",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  category: "technology portfolio",
  twitter: {
    card: "summary_large_image",
    title: "Sven Nijhuis portfolio",
    description:
      "This is my personal portfolio, created to showcase who I am and where I aspire to go.",
    creator: "@sven_nijhuis",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.className} lang="en">
      <body>
        <SupabaseProvider>{children}</SupabaseProvider>
      </body>
    </html>
  );
}
