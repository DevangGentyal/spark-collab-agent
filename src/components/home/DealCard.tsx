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
    <div className="professional-glass rounded-xl p-6 hover:shadow-float transition-all duration-300 group">
      {/* Header: Type and Date */}
      <div className="flex justify-between items-start mb-4">
        <span className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
          {deal.type}
        </span>
        <span className="text-xs text-muted-foreground bg-secondary/10 text-secondary px-2 py-1 rounded-md font-medium">
          {getReceivedDate()}
        </span>
      </div>
      
      {/* Deal Title - Orange Heading */}
      <h3 className="text-lg font-bold text-secondary mb-2 group-hover:text-secondary/80 transition-colors">
        {deal.brandName}
      </h3>
      
      {/* Company Info */}
      <div className="mb-4">
        <p className="text-sm text-foreground/80 line-clamp-2 leading-relaxed">
          {deal.summary}
        </p>
      </div>
      
      {/* Budget Section - Highlighted */}
      <div className="mb-6">
        <div className="flex items-center gap-3 p-4 bg-gradient-primary rounded-lg shadow-glow">
          <DollarSign className="w-5 h-5 text-white" />
          <span className="font-bold text-white text-base">{deal.budget}</span>
        </div>
      </div>
      
      {/* Continue Button - Black Primary */}
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
          deal.isActive 
            ? 'bg-secondary text-white shadow-glow' 
            : 'bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-float'
        }`}
      >
        {deal.isActive ? (
          <>
            <Rocket className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            Active Chat
          </>
        ) : (
          <>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            Continue
          </>
        )}
      </button>
      
      {/* Active Deal Indicator */}
      {deal.isActive && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          className="h-1 bg-gradient-primary rounded-full mt-4 origin-left"
        />
      )}
    </div>
  )
}