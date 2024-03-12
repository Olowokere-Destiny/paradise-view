"use client";
import store from "@/redux/store";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Provider } from "react-redux";
import Header from "@/components/navbar/Header";
import Footer from "@/components/footer/Footer";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <html lang="en" className="scroll-smooth">
        <body className={poppins.className}>
          <Header />
          <ProgressBar
            height="3px"
            color="#7c6a46"
            options={{ showSpinner: false }}
            shallowRouting
          />
          {children}
          <Footer />
        </body>
      </html>
    </Provider>
  );
}
