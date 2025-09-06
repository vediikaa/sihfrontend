import React from 'react'
import Train from '../ui/Train'

export default function LiveTraffic(){
  const trains = [
    {id:'T101', color:'#0ea5a2', delay:0},
    {id:'T202', color:'#f97316', delay:20},
    {id:'T303', color:'#60a5fa', delay:5},
  ]
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Live Traffic</h1>
      <div className="p-4 bg-white rounded shadow">
        <div className="text-sm text-gray-500 mb-2">Section visual</div>
        <div className="track p-4 relative">
          {trains.map((t,idx)=> (
            <div key={t.id} style={{animationDelay:`${idx*2}s`}} className="train train-anim" title={t.id}>
              <Train color={t.color} id={t.id} />
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {trains.map(t=> (
          <div key={t.id} className="p-3 bg-white rounded shadow">
            <div className="font-medium">{t.id}</div>
            <div className="text-sm text-gray-500">Delay: {t.delay} mins</div>
          </div>
        ))}
      </div>
    </div>
  )
}
