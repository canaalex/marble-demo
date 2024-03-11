import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LegendProps,
  TooltipProps,
} from "recharts";

export const ResponsiveLineChart = () => {
  const data = [
    {
      name: "Oct 2022",
      line1: 15000,
      line2: 15000,
      amt: 2400,
    },
    {
      name: "Dec 2022",
      line1: 14500,
      line2: 14000,
      amt: 2210,
    },
    {
      name: "Feb 2023",
      line1: 10000,
      line2: 16000,
      amt: 2290,
    },
    {
      name: "Apr 2023",
      line1: 9500,
      line2: 17000,
      amt: 2000,
    },
    {
      name: "Jun 2023",
      line1: 12000,
      line2: 10000,
      amt: 2181,
    },
    {
      name: "Aug 2023",
      line1: 8000,
      line2: 11000,
      amt: 2500,
    },
    {
      name: "Oct 2023",
      line1: 19000,
      line2: 17000,
      amt: 2100,
    },
    {
      name: "Dec 2023",
      line1: 25000,
      line2: 12000,
      amt: 2000,
    },
  ];

  const renderLegend: React.FC<LegendProps> = ({ payload }) => {
    return (
      <div
        style={{
          display: "flex",
          gap: 5,
          marginTop: 15,
        }}
      >
        {payload?.map((entry, index) => (
          <div
            key={`item-${index}`}
            style={{
              marginRight: "10px",
              display: "flex",
              padding: "5px 10px",
              alignItems: "center",
              backgroundColor: "rgba(246, 246, 247, 1)",
              borderRadius: 2,
            }}
          >
            <div
              style={{
                backgroundColor: entry.color,
                width: "10px",
                height: "2px",
                marginRight: "5px",
                borderRadius: 10,
              }}
            />
            <span>{entry.value}</span>
          </div>
        ))}
      </div>
    );
  };

  const formatYAxisTick = (value: number) => {
    if (value === 0) {
      return "0";
    }
    return value / 1000 + "K";
  };

  const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
    active,
    payload,
    label,
  }) => {
    if (active && payload && payload.length) {
      const entry1 = payload.find((entry) => entry.dataKey === "line1");
      const entry2 = payload.find((entry) => entry.dataKey === "line2");

      if (entry1 && entry2) {
        const value1 = entry1.value;
        const value2 = entry2.value;
        const color1 = entry1.stroke;
        const color2 = entry2.stroke;

        return (
          <div
            style={{
              background: "#fff",
              padding: "10px",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: "10px",
                  height: "2px",
                  backgroundColor: color1,
                  marginRight: "10px",
                }}
              />
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 400,
                }}
              >
                {label}
              </span>
              <span
                style={{
                  fontSize: "10px",
                  marginLeft: "10px",
                  fontWeight: 500,
                }}
              >
                {value1}
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: "10px",
                  height: "2px",
                  backgroundColor: color2,
                  marginRight: "10px",
                }}
              />
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 400,
                }}
              >
                {label}
              </span>
              <span
                style={{
                  fontSize: "10px",
                  marginLeft: "10px",
                  fontWeight: 500,
                }}
              >
                {value2}
              </span>
            </div>
          </div>
        );
      }
    }

    return null;
  };
  return (
    <ResponsiveContainer height={220} width="100%">
      <LineChart
        width={400}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 10,
          left: -20,
          bottom: 5,
        }}
      >
        <CartesianGrid stroke="#f1f1f1" vertical={false} />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fontWeight: 400, color: "#676767" }}
          tickMargin={12}
        />
        <YAxis
          ticks={[0, 20000, 40000]}
          tickFormatter={formatYAxisTick}
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fontWeight: 400, color: "#676767" }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          content={(props: any) => renderLegend(props)}
          wrapperStyle={{
            left: 375,
            fontSize: 12,
            fontWeight: 400,
            color: "rgba(112, 112, 122, 1)",
          }}
          verticalAlign="bottom"
          layout="vertical"
        />
        <Line
          type="monotone"
          dataKey="line1"
          stroke="rgba(72, 154, 210, 1)"
          dot={false}
          strokeWidth={2}
          name="Oct 1, 2022 - Feb 21, 2024"
        />
        <Line
          type="monotone"
          dataKey="line2"
          stroke="rgba(111, 194, 243, 1)"
          dot={false}
          strokeDasharray="4"
          strokeWidth={2}
          name="Oct 1, 2022 - Feb 21, 2024"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
