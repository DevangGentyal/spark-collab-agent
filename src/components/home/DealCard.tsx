import { motion } from "framer-motion"
import { Calendar, DollarSign, Tag, ToggleLeft, ToggleRight, MessageCircle } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { GlassButton } from "@/components/ui/glass-button"
import { Badge } from "@/components/ui/badge"

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

export default function DealCard({ deal, onToggle }: DealCardProps) {
  return (
    <GlassCard className="p-6 hover:shadow-float transition-all group">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        {/* Left Content */}
        <div className="flex-1 space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {deal.brandName}
              </h3>
              <Badge variant="secondary" className="mb-3">
                <Tag className="w-3 h-3 mr-1" />
                {deal.type}
              </Badge>
            </div>
          </div>
          
          <p className="text-muted-foreground leading-relaxed">
            {deal.summary}
          </p>
          
          {/* Deal Details */}
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <DollarSign className="w-4 h-4 text-success" />
              <span className="font-medium">{deal.budget}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4 text-warning" />
              <span>Due in {deal.deadline}</span>
            </div>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:min-w-[160px]">
          <GlassButton
            variant="toggle"
            onClick={onToggle}
            className={`${
              deal.isActive 
                ? 'bg-primary-soft border-primary text-primary' 
                : 'hover:border-primary/50'
            } transition-all`}
          >
            {deal.isActive ? (
              <>
                <ToggleRight className="w-4 h-4 mr-2" />
                Active
              </>
            ) : (
              <>
                <ToggleLeft className="w-4 h-4 mr-2" />
                Continue
              </>
            )}
          </GlassButton>
          
          {deal.isActive && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <GlassButton 
                variant="primary" 
                size="sm"
                onClick={() => window.location.href = `/chat/${deal.id}`}
                className="w-full lg:w-auto"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Open Chat
              </GlassButton>
            </motion.div>
          )}
        </div>
      </div>

      {/* Active Deal Indicator */}
      {deal.isActive && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          className="h-1 bg-gradient-primary rounded-full mt-4 origin-left"
        />
      )}
    </GlassCard>
  )
}