"use client";

export function StatusBanner() {
  return (
    <div className="w-full flex justify-center my-8">
      
      <div className="relative group inline-flex items-center gap-3 rounded-full border border-(--border-color) bg-black/40 backdrop-blur-md px-5 py-2.5 shadow-lg shadow-blue-950/20 hover:border-blue-500/50 transition-all duration-300">
        
        <div className="absolute inset-0 rounded-full bg-blue-500/10 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 pointer-events-none" />

        <div className="relative flex h-2.5 w-2.5 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sky-500 shadow-[0_0_10px_#38bdf8]"></span>
        </div>

        <p className="text-xs text-zinc-300 font-medium tracking-wide select-none max-md:text-xl">
          Currently working on:{" "}
          <span className="text-sky-400 font-semibold underline underline-offset-4 decoration-sky-500/40 hover:decoration-sky-400 transition-colors">
            Portfolio Web Page
          </span>
        </p>
      </div>
    </div>
  );
}