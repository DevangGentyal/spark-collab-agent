import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Zap, Brain } from "lucide-react"
import { GlassButton } from "@/components/ui/glass-button"
import { GlassCard } from "@/components/ui/glass-card"

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-automation">
      {/* Navigation */}
      <nav className="p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              AgenticAI
            </span>
          </div>
          <div className="flex space-x-4">
            <GlassButton variant="ghost" onClick={() => window.location.href = '/registration'}>
              Sign Up
            </GlassButton>
            <GlassButton variant="primary" onClick={() => window.location.href = '/home'}>
              Get Started
            </GlassButton>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="mb-8">
            <motion.div
              className="w-24 h-24 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center mb-8 float-animation"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-12 h-12 text-primary-foreground" />
            </motion.div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Agentic AI
            </span>
            <br />
            <span className="text-foreground">Brand Collaboration</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Let our AI agents discover, negotiate, and manage brand partnerships for you. 
            Focus on creating content while we handle the business side.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GlassButton 
              variant="primary" 
              size="xl"
              onClick={() => window.location.href = '/registration'}
              className="group"
            >
              Start Collaborating
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </GlassButton>
            <GlassButton 
              variant="ghost" 
              size="xl"
              onClick={() => window.location.href = '/home'}
            >
              View Demo
            </GlassButton>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Brain,
              title: "AI-Powered Discovery",
              description: "Our agents scan thousands of brands to find perfect collaboration matches for your niche and audience."
            },
            {
              icon: Zap,
              title: "Automated Negotiations",
              description: "Let AI handle contract discussions, pricing negotiations, and deal structuring while you focus on creativity."
            },
            {
              icon: Sparkles,
              title: "Seamless Management",
              description: "Track all collaborations in one place with real-time updates, automated invoicing, and performance analytics."
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <GlassCard className="p-8 text-center h-full hover:shadow-float transition-all">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <GlassCard className="p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Collaborations?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of creators who've automated their brand partnerships and increased their earnings by 3x.
            </p>
            <GlassButton 
              variant="primary" 
              size="xl"
              onClick={() => window.location.href = '/registration'}
              className="group"
            >
              Get Started Free
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </GlassButton>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
