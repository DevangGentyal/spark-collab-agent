import { motion } from "framer-motion"
import { Home, MessageCircle, Building } from "lucide-react"
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

interface ChatSidebarProps {
  activeDeals: Deal[]
  currentDealId: string
  onNavigateToHome: () => void
}

export default function ChatSidebar({ activeDeals, currentDealId, onNavigateToHome }: ChatSidebarProps) {
  return (
    <div className="w-80 bg-background/80 backdrop-blur-md border-r p-6 flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Active Collaborations</h2>
        <GlassButton 
          variant="ghost" 
          onClick={onNavigateToHome}
          className="w-full justify-start"
        >
          <Home className="w-4 h-4 mr-3" />
          Back to Home
        </GlassButton>
      </div>

      {/* Active Deals List */}
      <div className="flex-1 space-y-3">
        {activeDeals.length === 0 ? (
          <div className="text-center py-8">
            <MessageCircle className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground text-sm">
              No active collaborations yet. Return to home to discover deals.
            </p>
          </div>
        ) : (
          activeDeals.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassButton
                variant={deal.id === currentDealId ? "primary" : "ghost"}
                onClick={() => window.location.href = `/chat/${deal.id}`}
                className={`
                  w-full justify-start p-4 h-auto flex-col items-start space-y-2
                  ${deal.id === currentDealId ? "ring-2 ring-primary/20" : ""}
                `}
              >
                <div className="flex items-center space-x-2 w-full">
                  <Building className="w-4 h-4 flex-shrink-0" />
                  <span className="font-medium truncate">{deal.brandName}</span>
                </div>
                <p className="text-xs opacity-70 line-clamp-2 text-left">
                  {deal.summary}
                </p>
                <div className="flex justify-between w-full text-xs opacity-60">
                  <span>{deal.budget}</span>
                  <span>{deal.deadline}</span>
                </div>
              </GlassButton>
            </motion.div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="mt-6 pt-6 border-t">
        <div className="text-xs text-muted-foreground text-center">
          <p className="mb-2">AgenticAI</p>
          <p>Powered by AI collaboration agents</p>
        </div>
      </div>
    </div>
  )
}