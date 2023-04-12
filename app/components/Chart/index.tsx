/** @format */

import { AreaChart, Area, YAxis } from "recharts";

interface Props {
  hourly: any;
}

export default function MyChart({ hourly }: Props) {
  const vals = hourly.map((hour: { temp: number }) => hour.temp);
  const max = Math.max(...vals);
  const min = Math.min(...vals);

  return (
    <AreaChart
      width={12 * 60}
      height={100}
      data={hourly}
      margin={{
        top: 20,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <Area
        type="monotone"
        dataKey="temp"
        stroke="none"
        fill="rgba(88, 121, 243, 0.15)"
        fillOpacity={1}
      />
      <YAxis width={0} domain={[min, max]} />
    </AreaChart>
  );
}
