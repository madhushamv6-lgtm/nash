import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { DestinationStats } from "../types";

interface DestinationChartProps {
  data: DestinationStats[];
}

const COLORS = ["#BD8E89", "#E5C5C1", "#7F6269", "#F4E1E0"];

export function DestinationChart({ data }: DestinationChartProps) {
  if (data.length === 0) {
    return (
      <div className="bg-navy border border-prune/30 rounded-2xl p-6 shadow-lg h-full flex flex-col">
        <h2 className="text-xl font-semibold text-blush mb-6">
          Destination Frequency
        </h2>
        <div className="flex-1 flex items-center justify-center">
          <p className="text-pink/60">No data available for chart.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-navy border border-prune/30 rounded-2xl p-6 shadow-lg h-full flex flex-col">
      <h2 className="text-xl font-semibold text-blush mb-6">
        Destination Frequency
      </h2>
      <div className="flex-1 min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#0E1627",
                borderColor: "#7F6269",
                color: "#F4E1E0",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
              itemStyle={{ color: "#F4E1E0" }}
              formatter={(value: number, name: string, props: any) => {
                const total = data.reduce((acc, curr) => acc + curr.value, 0);
                const percent = ((value / total) * 100).toFixed(0);
                return [`${value} journeys (${percent}%)`, name];
              }}
            />
            <Legend
              verticalAlign="bottom"
              height={36}
              iconType="circle"
              formatter={(value) => <span className="text-blush/90 ml-1">{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
