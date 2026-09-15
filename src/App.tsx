/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useMemo, useState } from "react";
import { Header } from "./components/Header";
import { OverviewCards } from "./components/OverviewCards";
import { DestinationChart } from "./components/DestinationChart";
import { TravelLogTable } from "./components/TravelLogTable";
import { mockTravelLogs } from "./data";
import { DestinationStats } from "./types";

export default function App() {
  // Simulating state for future API connection
  const [logs] = useState(mockTravelLogs);

  // Derived calculations for Overview Cards
  const totalJourneys = logs.length;

  const destinationCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    logs.forEach((log) => {
      counts[log.destination] = (counts[log.destination] || 0) + 1;
    });
    return counts;
  }, [logs]);

  const mostVisited = useMemo(() => {
    if (Object.keys(destinationCounts).length === 0) return "N/A";
    return Object.keys(destinationCounts).reduce((a, b) =>
      destinationCounts[a] > destinationCounts[b] ? a : b
    );
  }, [destinationCounts]);

  const lastDestination = logs.length > 0 ? logs[0].destination : "N/A";

  // Data for the Donut Chart
  const chartData: DestinationStats[] = useMemo(() => {
    return Object.entries(destinationCounts)
      .map(([name, value]) => ({
        name,
        value,
        color: "", // Handled inside DestinationChart component via COLORS array
      }))
      .sort((a, b) => b.value - a.value); // Sort by highest frequency
  }, [destinationCounts]);

  return (
    <div className="min-h-screen bg-navy text-blush font-sans p-4 md:p-8 lg:p-12 relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-mauve/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-prune/5 rounded-full blur-[150px] pointer-events-none translate-y-1/3" />

      <div className="max-w-6xl mx-auto relative z-10">
        <Header />

        <main>
          <OverviewCards
            totalJourneys={totalJourneys}
            mostVisited={mostVisited}
            lastDestination={lastDestination}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 h-[400px] lg:h-[500px]">
              <DestinationChart data={chartData} />
            </div>
            <div className="lg:col-span-2 h-[400px] lg:h-[500px]">
              <TravelLogTable logs={logs} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
