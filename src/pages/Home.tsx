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
    <div className="flex min-h-screen bg-white">
      {/* Sidebar for Active Deals */}
      {activeDeals.length > 0 && (
        <div className="w-80 bg-white/95 border-r border-secondary/20 p-4 pt-24">
          <h3 className="text-lg font-medium text-secondary mb-4">Active Chats</h3>
          <div className="space-y-2">
            {activeDeals.map((deal) => (
              <div 
                key={deal.id}
                onClick={() => window.location.href = `/chat/${deal.id}`}
                className="p-3 bg-white/80 border border-secondary/20 rounded-lg cursor-pointer hover:bg-white/90 transition-all"
              >
                <div className="font-medium text-sm text-secondary">{deal.brandName}</div>
                <div className="text-xs text-secondary/60 truncate">{deal.summary}</div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Main Content */}
      <div className="flex-1">
        <HomePage 
          onDealActivate={handleDealActivate}
          activeDeals={activeDeals}
        />
      </div>
    </div>
  )
}