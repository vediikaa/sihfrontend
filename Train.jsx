import React from 'react'
export default function Train({color='#0ea5a2', id}){
  return (
    <svg width="110" height="48" viewBox="0 0 110 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="6" width="106" height="30" rx="6" fill={color} />
      <rect x="10" y="12" width="44" height="18" rx="3" fill="#ffffff" opacity="0.15" />
      <circle cx="30" cy="44" r="5" fill="#0f172a" />
      <circle cx="80" cy="44" r="5" fill="#0f172a" />
    </svg>
  )
}
