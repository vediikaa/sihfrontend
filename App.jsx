import React, { useState } from 'react'
import Dashboard from './pages/Dashboard'
import LiveTraffic from './pages/LiveTraffic'
import Simulations from './pages/Simulations'
import Reports from './pages/Reports'
import Alerts from './pages/Alerts'

function Sidebar({setView, view}){
  const items = ['Dashboard','Live Traffic','Simulations','Reports','Alerts']
  return (
    <div className="w-64 bg-white border-r h-screen p-4">
      <h2 className="text-lg font-semibold mb-4">SIH Rail</h2>
      <nav className="flex flex-col gap-2">
        {items.map(it => (
          <button key={it} onClick={()=>setView(it)} className={`text-left px-3 py-2 rounded ${view===it ? 'bg-sky-600 text-white':'hover:bg-slate-100'}`}>
            {it}
          </button>
        ))}
      </nav>
    </div>
  )
}

export default function App(){
  const [view,setView] = useState('Dashboard')
  return (
    <div className="flex h-full">
      <Sidebar setView={setView} view={view} />
      <div className="flex-1 p-6 overflow-auto">
        {view==='Dashboard' && <Dashboard />}
        {view==='Live Traffic' && <LiveTraffic />}
        {view==='Simulations' && <Simulations />}
        {view==='Reports' && <Reports />}
        {view==='Alerts' && <Alerts />}
      </div>
    </div>
  )
}
