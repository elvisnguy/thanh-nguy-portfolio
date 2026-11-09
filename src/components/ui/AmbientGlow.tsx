import React from 'react';

export function AmbientGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(100vw,1200px)] h-[500px] bg-gradient-to-b from-white/[0.05] dark:from-white/[0.05] from-black/[0.03] via-transparent to-transparent blur-[140px]" />
      <div className="absolute top-[40%] -left-[100px] w-[min(80vw,500px)] h-[500px] bg-indigo-500/[0.04] blur-[160px] rounded-full" />
      <div className="absolute top-[70%] -right-[100px] w-[min(80vw,600px)] h-[600px] bg-sky-500/[0.04] blur-[160px] rounded-full" />
    </div>
  );
}
