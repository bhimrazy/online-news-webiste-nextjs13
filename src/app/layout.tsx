import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "./header";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Online News App",
  description: "Online News app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="flex flex-col min-h-screen bg-gradient-to-tr from-[#f7e1cd] via-[#f9f4ec] to-[#fae3db] ">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
