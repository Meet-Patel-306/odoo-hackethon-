"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />

        <main className="flex-1 flex flex-col">
          <header className="h-16 border-b border-primary/30 flex items-center px-6 bg-card/50 backdrop-blur-sm">
            <SidebarTrigger className="mr-4" />

            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-sm">
                SM
              </div>

              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                StockMaster
              </h1>
            </div>
          </header>

          <div className="flex-1 p-6 overflow-auto">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
