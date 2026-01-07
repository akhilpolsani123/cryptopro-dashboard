"use client"

import { Calendar, Download } from "lucide-react"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"

const data = [
  { date: "Jan 1", price: 42.5 },
  { date: "Jan 8", price: 43.2 },
  { date: "Jan 15", price: 41.8 },
  { date: "Jan 22", price: 44.5 },
  { date: "Jan 29", price: 43.0 },
  { date: "Feb 5", price: 45.2 },
  { date: "Feb 12", price: 43.8 },
  { date: "Feb 19", price: 44.5 },
  { date: "Feb 26", price: 41.2 },
  { date: "Mar 5", price: 39.5 },
  { date: "Mar 12", price: 42.0 },
  { date: "Mar 19", price: 44.8 },
  { date: "Mar 26", price: 45.5 },
  { date: "Apr 2", price: 43.9 },
  { date: "Apr 9", price: 46.2 },
  { date: "Apr 16", price: 44.5 },
  { date: "Apr 23", price: 47.8 },
  { date: "Apr 30", price: 49.2 },
  { date: "May 7", price: 48.5 },
  { date: "May 14", price: 47.2 },
  { date: "May 21", price: 46.8 },
  { date: "May 28", price: 45.0 },
  { date: "Jun 4", price: 46.5 },
  { date: "Jun 11", price: 45.8 },
  { date: "Jun 18", price: 47.2 },
  { date: "Jun 25", price: 46.0 },
  { date: "Jul 2", price: 48.5 },
  { date: "Jul 9", price: 50.2 },
  { date: "Jul 16", price: 51.8 },
  { date: "Jul 23", price: 49.5 },
  { date: "Jul 30", price: 52.0 },
  { date: "Aug 6", price: 50.8 },
  { date: "Aug 13", price: 49.2 },
  { date: "Aug 20", price: 51.5 },
  { date: "Aug 27", price: 53.8 },
  { date: "Sep 3", price: 54.5 },
  { date: "Sep 10", price: 53.2 },
  { date: "Sep 17", price: 52.0 },
  { date: "Sep 24", price: 54.8 },
  { date: "Oct 1", price: 52.5 },
  { date: "Oct 8", price: 55.2 },
  { date: "Oct 15", price: 57.0 },
  { date: "Oct 22", price: 56.5 },
  { date: "Oct 29", price: 54.8 },
  { date: "Nov 5", price: 56.0 },
  { date: "Nov 12", price: 58.5 },
  { date: "Nov 19", price: 59.2 },
  { date: "Nov 26", price: 62.5 },
  { date: "Dec 3", price: 65.0 },
  { date: "Dec 10", price: 66.8 },
  { date: "Dec 17", price: 68.5 },
  { date: "Dec 24", price: 67.2 },
  { date: "Dec 31", price: 69.0 },
  { date: "Jan 7", price: 71.5 },
  { date: "Jan 14", price: 69.8 },
  { date: "Jan 21", price: 72.5 },
  { date: "Jan 28", price: 74.0 },
  { date: "Feb 4", price: 72.5 },
  { date: "Feb 11", price: 75.8 },
  { date: "Feb 18", price: 73.2 },
  { date: "Feb 25", price: 74.5 },
  { date: "Mar 4", price: 72.8 },
  { date: "Mar 11", price: 70.5 },
  { date: "Mar 18", price: 73.0 },
  { date: "Mar 25", price: 75.5 },
  { date: "Apr 1", price: 74.2 },
  { date: "Apr 8", price: 76.5 },
  { date: "Apr 15", price: 78.0 },
  { date: "Apr 22", price: 75.8 },
  { date: "Apr 29", price: 79.5 },
  { date: "May 6", price: 80.2 },
  { date: "May 13", price: 78.5 },
  { date: "May 20", price: 81.0 },
  { date: "May 27", price: 79.8 },
  { date: "Jun 3", price: 82.5 },
  { date: "Jun 10", price: 80.0 },
  { date: "Jun 17", price: 83.2 },
  { date: "Jun 24", price: 81.5 },
  { date: "Jul 1", price: 78.5 },
  { date: "Jul 8", price: 80.2 },
  { date: "Jul 15", price: 79.0 },
]

export function PerformanceChart() {
  return (
    <div className="flex flex-col gap-6 p-6 bg-[#0D0D0D] rounded-2xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 md:gap-2 lg:gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-medium text-white">Performance</h2>
          <div className="flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] rounded-full border border-[#333]">
            <div className="w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center">
              <span className="text-[10px] font-bold text-white">₿</span>
            </div>
            <span className="text-sm font-medium text-white">BTC</span>
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-2 lg:gap-4">
          <div className="flex items-center bg-[#1A1A1A] rounded-lg p-1">
            {["1D", "1M", "3M", "6M", "1Y"].map((period) => (
              <button
                key={period}
                className={`px-3 md:px-2 lg:px-3 py-1 text-sm md:text-xs lg:text-sm rounded-md transition-colors ${
                  period === "6M" ? "bg-[#2A2A2A] text-white shadow-sm" : "text-gray-400 hover:text-white"
                }`}
              >
                {period}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 text-gray-400 hover:text-white bg-[#1A1A1A] rounded-lg transition-colors">
              <Calendar className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-white bg-[#1A1A1A] rounded-lg transition-colors">
              <Download className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#fb923c" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#fb923c" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1F1F1F" vertical={false} />
            <XAxis dataKey="date" hide />
            <YAxis
              domain={[35, 85]}
              orientation="left"
              tick={{ fill: "#666" }}
              axisLine={false}
              tickLine={false}
              ticks={[40, 50, 60, 70, 80]}
              tickFormatter={(value) => `$${value}k`}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-[#1A1A1A] border border-[#333] p-2 rounded-lg shadow-xl">
                      <p className="text-white font-medium">
                        ${payload[0].value?.toFixed(2)}k{" "}
                        <span className="text-gray-400 text-sm ml-2">{payload[0].payload.date}</span>
                      </p>
                    </div>
                  )
                }
                return null
              }}
            />

            <Area
              type="monotone"
              dataKey="price"
              stroke="#fb923c"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorPrice)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
