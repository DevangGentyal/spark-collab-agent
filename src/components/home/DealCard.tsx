import { motion } from "framer-motion"
import { DollarSign, ArrowRight, Rocket } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { GlassButton } from "@/components/ui/glass-button"

interface Deal {
  id: string
  brandName: string
  summary: string
  budget: string
  deadline: string
  type: string
  isActive: boolean
}

interface DealCardProps {
  deal: Deal
  onToggle: () => void
}

// Mock received date for demo
const getReceivedDate = () => {
  const today = new Date()
  const daysAgo = Math.floor(Math.random() * 7) + 1
  const receivedDate = new Date(today.setDate(today.getDate() - daysAgo))
  return receivedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

export default function DealCard({ deal, onToggle }: DealCardProps) {
  return (
    <GlassCard className="p-4 hover:shadow-float transition-all group bg-white/90 border border-secondary/20">
      {/* Header with Date */}
      <div className="flex justify-between items-start mb-3">
        <div className="text-xs text-secondary/60">
          {deal.type}
        </div>
        <div className="text-xs text-secondary/50 bg-secondary/5 px-2 py-1 rounded-md">
          {getReceivedDate()}
        </div>
      </div>
      
      {/* Deal Title & Company */}
      <div className="mb-3">
        <h3 className="text-lg font-medium text-secondary mb-1 group-hover:text-secondary/80 transition-colors">
          {deal.brandName}
        </h3>
        <p className="text-xs text-secondary/70 line-clamp-2 leading-relaxed">
          {deal.summary}
        </p>
      </div>
      
      {/* Budget - Highlighted */}
      <div className="mb-4">
        <div className="flex items-center gap-2 p-3 bg-gradient-primary rounded-lg">
          <DollarSign className="w-4 h-4 text-white" />
          <span className="font-semibold text-white text-sm">{deal.budget}</span>
        </div>
      </div>
      
      {/* Continue Button - Main Action */}
      <GlassButton
        variant="toggle"
        onClick={onToggle}
        className={`w-full justify-center group/btn ${
          deal.isActive 
            ? 'bg-secondary text-white border-secondary shadow-glow' 
            : 'bg-white/80 hover:bg-secondary hover:text-white border-secondary/30'
        } transition-all duration-300`}
        size="sm"
      >
        {deal.isActive ? (
          <>
            <Rocket className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
            Active
          </>
        ) : (
          <>
            <ArrowRight className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
            Continue
          </>
        )}
      </GlassButton>
      
      {/* Active Deal Indicator */}
      {deal.isActive && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          className="h-0.5 bg-gradient-primary rounded-full mt-3 origin-left"
        />
      )}
    </GlassCard>
  )
}