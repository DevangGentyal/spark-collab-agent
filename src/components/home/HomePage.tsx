import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Scan, Sparkles, Zap, ArrowRight } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { GlassButton } from "@/components/ui/glass-button"
import ScanningAnimation from "./ScanningAnimation"
import DealCard from "./DealCard"

type HomeState = "initial" | "scanning" | "deals"

interface Deal {
  id: string
  brandName: string
  summary: string
  budget: string
  deadline: string
  type: string
  isActive: boolean
}

const mockDeals: Deal[] = [
  {
    id: "1",
    brandName: "TechFlow",
    summary: "Looking for tech reviewers to showcase our new AI-powered productivity suite",
    budget: "$2,500 - $5,000",
    deadline: "2 weeks",
    type: "Product Review",
    isActive: false
  },
  {
    id: "2", 
    brandName: "EcoLife",
    summary: "Sustainable lifestyle brand seeking authentic content creators for eco-friendly products",
    budget: "$1,500 - $3,000",
    deadline: "3 weeks", 
    type: "Lifestyle Content",
    isActive: false
  },
  {
    id: "3",
    brandName: "FitnessPro",
    summary: "New fitness app launch - need fitness influencers for workout demonstration videos",
    budget: "$3,000 - $7,500",
    deadline: "1 week",
    type: "Fitness Demo",
    isActive: false
  }
]

interface HomePageProps {
  onDealActivate: (deal: Deal) => void
  activeDeals: Deal[]
}

export default function HomePage({ onDealActivate, activeDeals }: HomePageProps) {
  const [homeState, setHomeState] = useState<HomeState>("initial")
  const [deals, setDeals] = useState<Deal[]>([])

  const handleScanDeals = () => {
    setHomeState("scanning")
    
    // Simulate scanning delay
    setTimeout(() => {
      setDeals(mockDeals)
      setHomeState("deals")
    }, 3000)
  }

  const handleDealToggle = (dealId: string) => {
    const deal = deals.find(d => d.id === dealId)
    if (deal) {
      const updatedDeal = { ...deal, isActive: !deal.isActive }
      setDeals(deals.map(d => d.id === dealId ? updatedDeal : d))
      if (updatedDeal.isActive) {
        onDealActivate(updatedDeal)
      }
    }
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Minimal Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-black text-secondary mb-6">
            Discovery Board
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            AI-curated collaboration opportunities tailored for you
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {homeState === "initial" && (
            <motion.div
              key="initial"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="text-center"
            >
              <div className="max-w-lg mx-auto text-center">
                <div className="relative mb-12">
                  <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-10"></div>
                  <div className="relative w-24 h-24 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center float-animation">
                    <Sparkles className="w-12 h-12 text-white" />
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-secondary mb-4">Ready to Discover?</h2>
                <p className="text-lg text-foreground/70 mb-12 max-w-lg mx-auto">
                  Scan for AI-curated collaboration opportunities
                </p>
                
                <button
                  onClick={handleScanDeals}
                  className="bg-gradient-primary text-white px-12 py-5 text-xl font-bold rounded-xl shadow-glow hover:shadow-float transition-all duration-300 flex items-center gap-3 mx-auto group"
                >
                  <Scan className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  Scan for Opportunities
                </button>
              </div>
            </motion.div>
          )}

          {homeState === "scanning" && (
            <motion.div
              key="scanning"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ScanningAnimation />
            </motion.div>
          )}

          {homeState === "deals" && (
            <motion.div
              key="deals"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-secondary mb-4">Opportunities</h2>
                <p className="text-foreground/70 mb-8">
                  {deals.length} premium matches found
                </p>
                <button
                  onClick={() => setHomeState("initial")}
                  className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-bold shadow-glow hover:shadow-float transition-all duration-300"
                >
                  Scan Again
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {deals.map((deal, index) => (
                  <motion.div
                    key={deal.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <DealCard 
                      deal={deal} 
                      onToggle={() => handleDealToggle(deal.id)}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}