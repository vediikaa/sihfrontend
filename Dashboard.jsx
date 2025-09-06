import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  {time:'00:00', throughput:5},
  {time:'01:00', throughput:7},
  {time:'02:00', throughput:6},
  {time:'03:00', throughput:9},
  {time:'04:00', throughput:8},
]

export default function Dashboard(){
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded shadow">
          <div className="text-sm text-gray-500">Throughput</div>
          <div className="text-2xl font-semibold">120 trains/day</div>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <div className="text-sm text-gray-500">Avg Delay</div>
          <div className="text-2xl font-semibold">6.2 mins</div>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <div className="text-sm text-gray-500">Utilization</div>
          <div className="text-2xl font-semibold">78%</div>
        </div>
      </div>

      <div className="p-4 bg-white rounded shadow mt-4">
        <div className="text-sm text-gray-500 mb-2">Throughput (hourly)</div>
        <div style={{height:200}}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="throughput" stroke="#0ea5a2" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
