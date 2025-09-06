import React from 'react'
export default function Alerts(){
  const alerts = [
    {id:1, text:'Signal fault near junction 5', level:'High'},
    {id:2, text:'Freight delay expected', level:'Medium'}
  ]
  return (
    <div>
      <h1 className="text-2xl font-bold">Alerts</h1>
      <div className="mt-4 space-y-2">
        {alerts.map(a=>(
          <div key={a.id} className="p-3 bg-white rounded shadow flex items-center justify-between">
            <div>{a.text}</div>
            <div className="text-sm text-gray-500">{a.level}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
