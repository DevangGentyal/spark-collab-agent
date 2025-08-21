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
    <div className="w-72 bg-white/95 border-r border-secondary/20 p-4 flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-lg font-medium text-secondary mb-1">Active Chats</h2>
        <p className="text-xs text-secondary/60 mb-4">{activeDeals.length} collaboration{activeDeals.length !== 1 ? 's' : ''}</p>
        <GlassButton 
          variant="ghost" 
          onClick={onNavigateToHome}
          className="w-full justify-start"
          size="sm"
        >
          <Home className="w-4 h-4 mr-2" />
          Back to Opportunities
        </GlassButton>
      </div>

      {/* Active Deals List */}
      <div className="flex-1 space-y-2 overflow-y-auto">
        {activeDeals.length === 0 ? (
          <div className="text-center py-8">
            <MessageCircle className="w-8 h-8 text-secondary/30 mx-auto mb-3" />
            <p className="text-secondary/50 text-xs">
              No active chats yet.
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
              <div
                onClick={() => window.location.href = `/chat/${deal.id}`}
                className={`
                  p-3 rounded-lg cursor-pointer transition-all text-left w-full
                  ${deal.id === currentDealId 
                    ? "bg-gradient-primary text-white" 
                    : "bg-white/80 hover:bg-white/90 border border-secondary/20"
                  }
                `}
              >
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Building className="w-3 h-3 flex-shrink-0" />
                    <span className="font-medium text-sm truncate">{deal.brandName}</span>
                  </div>
                  <p className={`text-xs line-clamp-2 ${
                    deal.id === currentDealId ? "text-white/90" : "text-secondary/70"
                  }`}>
                    {deal.summary}
                  </p>
                  <div className={`flex justify-between text-xs ${
                    deal.id === currentDealId ? "text-white/80" : "text-secondary/60"
                  }`}>
                    <span>{deal.budget.split(' - ')[0]}</span>
                    <span>{deal.deadline}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="mt-4 pt-4 border-t border-secondary/20">
        <div className="text-xs text-secondary/50 text-center">
          <p className="mb-1">AgenticAI</p>
          <p>AI collaboration agent</p>
        </div>
      </div>
    </div>
  )
}