import { useState } from "react"
import HomePage from "@/components/home/HomePage"

interface Deal {
  id: string
  brandName: string
  summary: string
  budget: string
  deadline: string
  type: string
  isActive: boolean
}

export default function Home() {
  const [activeDeals, setActiveDeals] = useState<Deal[]>([])

  const handleDealActivate = (deal: Deal) => {
    setActiveDeals(prev => {
      const exists = prev.find(d => d.id === deal.id)
      if (exists) {
        return prev.map(d => d.id === deal.id ? deal : d)
      }
      return [...prev, deal]
    })
  }

  return (
    <HomePage 
      onDealActivate={handleDealActivate}
      activeDeals={activeDeals}
    />
  )
}