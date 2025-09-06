import React, {useState} from 'react'
export default function Simulations(){
  const [log, setLog] = useState([])
  const simulateDelay = () => {
    setLog(l=>[`Simulated: Added 10 min delay to T101 - ${new Date().toLocaleTimeString()}`,...l])
  }
  const reroute = () => {
    setLog(l=>[`Simulated: Rerouted T202 to loop line - ${new Date().toLocaleTimeString()}`,...l])
  }
  return (
    <div>
      <h1 className="text-2xl font-bold">Simulations</h1>
      <div className="mt-4 flex gap-2">
        <button onClick={simulateDelay} className="px-3 py-2 bg-amber-500 text-white rounded">Simulate Delay</button>
        <button onClick={reroute} className="px-3 py-2 bg-indigo-600 text-white rounded">Reroute Train</button>
      </div>
      <div className="mt-4 space-y-2">
        {log.map((l,idx)=>(<div key={idx} className="p-2 bg-white rounded shadow text-sm">{l}</div>))}
      </div>
    </div>
  )
}
