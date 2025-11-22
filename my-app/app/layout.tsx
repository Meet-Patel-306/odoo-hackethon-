"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SuperTokensProvider } from "./components/supertokensProvider";
import { ComponentWrapper } from "./config/frontend";
import { SeparatorLine } from "../assets/images";
import Image from "next/image";
import Link from "next/link";

// import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "SuperTokens + Next.js",
  description: "SuperTokens demo app with shadcn + React Query + routing",
};

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} app-wrapper`}>
        <SuperTokensProvider>
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              {/* <Toaster /> */}
              <Sonner />

              {/* Your Global SuperTokens Layout */}
              {/* <div className="App app-container">
              <header>
                <nav className="header-container">
                  <Link href="/">
                    <img src="/ST.svg" alt="SuperTokens" />
                  </Link>
                  <ul className="header-container-right">
                    <li>
                      <a
                        href="https://supertokens.com/docs/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Docs
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/supertokens/create-supertokens-app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        CLI Repo
                      </a>
                    </li>
                  </ul>
                </nav>
              </header> */}

              <div className="fill" id="home-container">
                <ComponentWrapper>
                  {/* YOUR Sidebar Layout (shadcn) */}
                  <Layout>{children}</Layout>

                  {/* Footer */}
                  {/* <footer>
                    Built with ❤️ by the folks at{" "}
                    <a
                      href="https://supertokens.io"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      supertokens.com
                    </a>
                    .
                  </footer> */}

                  {/* <Image
                    className="separator-line"
                    src={SeparatorLine}
                    alt="separator"
                  /> */}
                </ComponentWrapper>
              </div>
              {/* </div> */}
            </TooltipProvider>
          </QueryClientProvider>
        </SuperTokensProvider>
      </body>
    </html>
  );
}
