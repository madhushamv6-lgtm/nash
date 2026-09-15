import { TravelLogEntry } from "../types";
import { format } from "date-fns";
import { Briefcase, Dumbbell, GraduationCap, MapPin } from "lucide-react";
import { cn } from "../lib/utils";

interface TravelLogTableProps {
  logs: TravelLogEntry[];
}

export function TravelLogTable({ logs }: TravelLogTableProps) {
  const getDestinationIcon = (destination: string) => {
    switch (destination.toLowerCase()) {
      case "college":
        return <GraduationCap className="w-4 h-4 text-mauve" />;
      case "work":
        return <Briefcase className="w-4 h-4 text-pink" />;
      case "gym":
        return <Dumbbell className="w-4 h-4 text-prune" />;
      default:
        return <MapPin className="w-4 h-4 text-blush" />;
    }
  };

  return (
    <div className="bg-navy border border-prune/30 rounded-2xl p-6 shadow-lg h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-blush">Travel History</h2>
        <span className="text-sm font-medium px-3 py-1 bg-prune/20 text-pink rounded-full border border-prune/30">
          Latest First
        </span>
      </div>

      <div className="flex-1 overflow-auto pr-2 custom-scrollbar">
        {logs.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center p-8 border border-dashed border-prune/30 rounded-xl">
            <div className="w-16 h-16 bg-prune/10 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-8 h-8 text-pink/50" />
            </div>
            <p className="text-lg font-medium text-pink/80 mb-1">
              No journeys recorded yet.
            </p>
            <p className="text-sm text-pink/50 max-w-[250px]">
              Final confirmed destinations will appear here once recorded by the
              device.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {logs.map((log, index) => {
              // Parse date to make it more readable if valid
              let displayDate = log.date;
              try {
                const parsedDate = new Date(log.date);
                if (!isNaN(parsedDate.getTime())) {
                  displayDate = format(parsedDate, "dd MMM yyyy");
                }
              } catch (e) {
                // fallback to raw date
              }

              return (
                <div
                  key={log.id}
                  className={cn(
                    "flex items-center justify-between p-4 rounded-xl border transition-all duration-300 hover:-translate-y-0.5",
                    index === 0
                      ? "bg-gradient-to-r from-prune/20 to-transparent border-mauve/40 shadow-[0_0_15px_rgba(189,142,137,0.1)]"
                      : "bg-navy border-prune/20 hover:border-prune/50"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-[#1a233a] rounded-lg border border-prune/20 shadow-inner">
                      {getDestinationIcon(log.destination)}
                    </div>
                    <div>
                      <h3 className="font-medium text-blush">
                        {log.destination}
                      </h3>
                      <div className="flex items-center gap-2 text-sm mt-0.5">
                        <span className="text-pink/70">{displayDate}</span>
                        <span className="w-1 h-1 rounded-full bg-prune"></span>
                        <span className="text-pink/50">{log.time}</span>
                      </div>
                    </div>
                  </div>
                  {index === 0 && (
                    <span className="text-xs font-semibold px-2 py-1 bg-mauve/20 text-mauve rounded-md border border-mauve/30">
                      NEW
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
