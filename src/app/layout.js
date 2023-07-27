import "./globals.css";
import { Inter } from "next/font/google";
import favicon from "../../public/favicon.ico";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alves Ferreira",
  description: "Escritório de Advocacia Alves Ferreira",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
