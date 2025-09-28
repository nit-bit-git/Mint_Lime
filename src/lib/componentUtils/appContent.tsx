"use client";

import { useLoader } from "@/lib/componentUtils/loader";

export function AppContent({ children }: { children: React.ReactNode }) {
  const { isLoading } = useLoader();
  
  return (
    <div 
      className={isLoading ? "pointer-events-none" : "pointer-events-auto"}
      style={{ isolation: 'isolate' }}
    >
      {children}
    </div>
  );
}