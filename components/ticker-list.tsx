"use client"

import { ArrowUp, ArrowDown, ChevronsUpDown } from "lucide-react"
import { Area, AreaChart, ResponsiveContainer } from "recharts"

const data = [
  {
    id: "BTC",
    name: "Bitcoin",
    qty: 0.15,
    price: 67420,
    invested: 8500,
    current: 10113,
    returns: 1613,
    trend: "up",
    chartData: [
      { value: 100 },
      { value: 105 },
      { value: 108 },
      { value: 112 },
      { value: 115 },
      { value: 113 },
      { value: 118 },
      { value: 122 },
      { value: 119 },
      { value: 125 },
      { value: 130 },
    ],
  },
  {
    id: "ETH",
    name: "Ethereum",
    qty: 4.5,
    price: 3280,
    invested: 12500,
    current: 14760,
    returns: 2260,
    trend: "up",
    chartData: [
      { value: 100 },
      { value: 110 },
      { value: 115 },
      { value: 120 },
      { value: 118 },
      { value: 125 },
      { value: 130 },
      { value: 128 },
      { value: 135 },
      { value: 140 },
      { value: 145 },
    ],
  },
  {
    id: "SOL",
    name: "Solana",
    qty: 85,
    price: 142,
    invested: 10200,
    current: 12070,
    returns: 1870,
    trend: "up",
    chartData: [
      { value: 100 },
      { value: 102 },
      { value: 108 },
      { value: 105 },
      { value: 112 },
      { value: 115 },
      { value: 118 },
      { value: 120 },
      { value: 122 },
      { value: 125 },
      { value: 128 },
    ],
  },
]

export function TickerList() {
  return (
    <div className="bg-[#0D0D0D] rounded-2xl p-6">
      <table className="w-full">
        <thead>
          <tr className="text-[#919191] text-sm border-b border-transparent">
            <th className="pb-4 text-left font-medium pl-2">
              <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
                Asset
                <ChevronsUpDown className="h-4 w-4" />
              </div>
            </th>
            <th className="pb-4 text-left font-medium w-[120px]"></th>
            <th className="pb-4 text-right font-medium">Qty.</th>
            <th className="pb-4 text-right font-medium">Mkt. Price</th>
            <th className="pb-4 text-right font-medium">Invested</th>
            <th className="pb-4 text-right font-medium">Current</th>
            <th className="pb-4 text-right font-medium pr-2">Returns</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className={`group transition-colors border-b border-transparent last:border-0 ${
                item.id === "BTC" ? "bg-[#1A1A1A]" : "hover:bg-[#1A1A1A]"
              }`}
            >
              <td className="py-4 pl-2 rounded-l-xl">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-white">{item.name}</span>
                  <span className="text-[#919191] text-xs">{item.id}</span>
                </div>
              </td>
              <td className="py-4">
                <div className="h-10 w-24">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={item.chartData}>
                      <defs>
                        <linearGradient id={`gradient-${item.id}`} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor={item.trend === "up" ? "#22c55e" : "#ef4444"} stopOpacity={0.3} />
                          <stop offset="100%" stopColor={item.trend === "up" ? "#22c55e" : "#ef4444"} stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke={item.trend === "up" ? "#22c55e" : "#ef4444"}
                        strokeWidth={2}
                        fill={`url(#gradient-${item.id})`}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </td>
              <td className="py-4 text-right text-white font-medium">{item.qty}</td>
              <td className="py-4 text-right text-white font-medium">${item.price.toLocaleString()}</td>
              <td className="py-4 text-right text-white font-medium">${item.invested.toLocaleString()}</td>
              <td
                className={`py-4 text-right font-medium ${item.trend === "up" ? "text-[#4ADE80]" : "text-[#F87171]"}`}
              >
                ${item.current.toLocaleString()}
              </td>
              <td
                className={`py-4 text-right font-medium pr-2 rounded-r-xl ${item.trend === "up" ? "text-[#4ADE80]" : "text-[#F87171]"}`}
              >
                <div className="flex items-center justify-end gap-1">
                  {item.trend === "up" ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
                  +${item.returns.toLocaleString()}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
