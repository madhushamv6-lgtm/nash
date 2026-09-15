import { Activity } from "lucide-react";

export function Header() {
  return (
    <header className="mb-10 text-center md:text-left flex flex-col md:flex-row items-center justify-between border-b border-prune/30 pb-6">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-mauve/10 rounded-2xl border border-mauve/20">
          <Activity className="w-8 h-8 text-pink" />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-blush">
            SMART EXIT GUARDIAN
          </h1>
          <p className="text-pink/80 mt-1 font-medium tracking-wide">
            Your Intelligent Departure Companion
          </p>
        </div>
      </div>
      <div className="mt-4 md:mt-0 px-4 py-2 bg-navy/50 border border-prune/30 rounded-full flex items-center gap-2 shadow-inner">
        <div className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)] animate-pulse" />
        <span className="text-sm font-medium text-blush/80">System Online</span>
      </div>
    </header>
  );
}
