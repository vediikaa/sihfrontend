import React from 'react'
export default function Reports(){
  const reports = [
    {id:1, title:'Daily Summary', date:'2025-09-05'},
    {id:2, title:'Peak Hour Analysis', date:'2025-09-04'},
  ]
  return (
    <div>
      <h1 className="text-2xl font-bold">Reports</h1>
      <div className="mt-4 grid gap-3">
        {reports.map(r=>(
          <div key={r.id} className="p-3 bg-white rounded shadow">
            <div className="font-medium">{r.title}</div>
            <div className="text-sm text-gray-500">{r.date}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
