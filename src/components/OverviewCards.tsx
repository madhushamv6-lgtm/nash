import { MapPin, Navigation, TrendingUp } from "lucide-react";

interface OverviewCardsProps {
  totalJourneys: number;
  mostVisited: string;
  lastDestination: string;
}

export function OverviewCards({
  totalJourneys,
  mostVisited,
  lastDestination,
}: OverviewCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card
        title="Total Journeys"
        value={totalJourneys.toString()}
        icon={<Navigation className="w-5 h-5 text-mauve" />}
      />
      <Card
        title="Most Visited"
        value={mostVisited || "N/A"}
        icon={<TrendingUp className="w-5 h-5 text-pink" />}
      />
      <Card
        title="Last Destination"
        value={lastDestination || "N/A"}
        icon={<MapPin className="w-5 h-5 text-blush" />}
      />
    </div>
  );
}

function Card({
  title,
  value,
  icon,
}: {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-navy border border-prune/30 rounded-2xl p-6 shadow-lg relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-mauve/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-pink/80 uppercase tracking-wider">
          {title}
        </h3>
        <div className="p-2 bg-prune/10 rounded-lg">{icon}</div>
      </div>
      <div className="text-3xl font-bold text-blush">{value}</div>
    </div>
  );
}
