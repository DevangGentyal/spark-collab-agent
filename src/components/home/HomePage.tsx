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
    <div className="min-h-screen bg-gradient-automation p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            AgenticAI
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI-powered brand collaboration agent. Discover, negotiate, and manage partnerships seamlessly.
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
              <div className="max-w-md mx-auto mb-12">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20"></div>
                  <div className="relative w-32 h-32 mx-auto bg-gradient-primary rounded-full flex items-center justify-center float-animation">
                    <Sparkles className="w-16 h-16 text-primary-foreground" />
                  </div>
                </div>
                
                <h2 className="text-3xl font-semibold mb-4">Ready to Discover Deals?</h2>
                <p className="text-muted-foreground mb-8">
                  Our AI agent will scan for the best brand collaboration opportunities tailored to your profile.
                </p>
                
                <GlassButton 
                  variant="scan" 
                  size="xl"
                  onClick={handleScanDeals}
                  className="group"
                >
                  <Scan className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                  Scan for Deals
                  <Zap className="w-5 h-5 ml-3" />
                </GlassButton>
              </div>

              {/* Feature Cards */}
              <div className="grid md:grid-cols-3 gap-6 mt-16">
                {[
                  {
                    icon: Sparkles,
                    title: "AI-Powered Matching",
                    description: "Advanced algorithms match you with brands that align with your content and audience."
                  },
                  {
                    icon: Zap,
                    title: "Automated Negotiations",
                    description: "Let our AI handle initial negotiations and contract discussions for you."
                  },
                  {
                    icon: ArrowRight,
                    title: "Seamless Workflow",
                    description: "From discovery to payment, manage your entire collaboration pipeline."
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <GlassCard className="text-center p-6 hover:shadow-float transition-all">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                        <feature.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </GlassCard>
                  </motion.div>
                ))}
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
              <div className="mb-8 flex justify-between items-center">
                <div>
                  <h2 className="text-3xl font-semibold mb-2">Available Opportunities</h2>
                  <p className="text-muted-foreground">
                    Found {deals.length} collaboration opportunities matching your profile
                  </p>
                </div>
                <GlassButton variant="ghost" onClick={() => setHomeState("initial")}>
                  Scan Again
                </GlassButton>
              </div>

              <div className="grid gap-6">
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