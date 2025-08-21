import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Zap, Brain } from "lucide-react"
import { GlassButton } from "@/components/ui/glass-button"
import { GlassCard } from "@/components/ui/glass-card"

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Import and add navigation at the top */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-secondary/20 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-medium text-secondary">
              AgenticAI
            </span>
          </div>
          <div className="flex space-x-3">
            <GlassButton variant="ghost" size="sm" onClick={() => window.location.href = '/registration'}>
              Sign Up
            </GlassButton>
            <GlassButton variant="primary" size="sm" onClick={() => window.location.href = '/home'}>
              Get Started
            </GlassButton>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-32 pt-40">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="mb-12">
            <motion.div
              className="w-20 h-20 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center mb-8 float-animation"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-10 h-10 text-white" />
            </motion.div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-light mb-6">
            <span className="text-secondary">
              Agentic AI
            </span>
            <br />
            <span className="text-secondary/70 font-extralight">Brand Collaboration</span>
          </h1>
          
          <p className="text-lg text-secondary/60 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            AI agents that discover, negotiate, and manage brand partnerships. 
            Focus on creating while we handle the business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GlassButton 
              variant="primary" 
              size="lg"
              onClick={() => window.location.href = '/registration'}
              className="group"
            >
              Start Collaborating
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </GlassButton>
            <GlassButton 
              variant="ghost" 
              size="lg"
              onClick={() => window.location.href = '/home'}
            >
              View Demo
            </GlassButton>
          </div>
        </motion.div>

        {/* Features Grid - Minimal and Clean */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: Brain,
              title: "AI Discovery",
              description: "Intelligent matching with brands aligned to your content and audience."
            },
            {
              icon: Zap,
              title: "Auto Negotiations",
              description: "AI handles contract discussions and pricing while you create."
            },
            {
              icon: Sparkles,
              title: "Seamless Management",
              description: "Track collaborations with real-time updates and automated workflows."
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -3 }}
            >
              <GlassCard className="p-6 text-center h-full hover:shadow-float transition-all bg-white/90 border border-secondary/20">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-medium mb-3 text-secondary">{feature.title}</h3>
                <p className="text-secondary/70 text-sm leading-relaxed font-light">{feature.description}</p>
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
          <GlassCard className="p-8 max-w-2xl mx-auto bg-white/90 border border-secondary/20">
            <h2 className="text-3xl font-light mb-4 text-secondary">
              Ready to Transform Your 
              <span className="text-secondary/80"> Collaborations?</span>
            </h2>
            <p className="text-lg text-secondary/60 mb-8 max-w-lg mx-auto font-light">
              Join creators who've automated partnerships and increased earnings.
            </p>
            <GlassButton 
              variant="primary" 
              size="lg"
              onClick={() => window.location.href = '/registration'}
              className="group"
            >
              Get Started Free
              <Sparkles className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
            </GlassButton>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
