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
          
          <h1 className="text-6xl md:text-8xl font-black mb-8">
            <span className="text-secondary">
              AgenticAI
            </span>
            <br />
            <span className="text-foreground font-medium">Brand Collaboration</span>
          </h1>
          
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-16 leading-relaxed">
            AI agents that discover, negotiate, and manage brand partnerships. 
            Focus on creating while we handle the business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => window.location.href = '/registration'}
              className="bg-gradient-primary text-white px-12 py-5 text-xl font-bold rounded-xl shadow-glow hover:shadow-float transition-all duration-300 flex items-center gap-3 mx-auto group"
            >
              Start Collaborating
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => window.location.href = '/home'}
              className="bg-primary text-primary-foreground px-12 py-5 text-xl font-bold rounded-xl hover:bg-primary/90 transition-all duration-300"
            >
              View Demo
            </button>
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
                <h3 className="text-lg font-bold mb-3 text-secondary">{feature.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{feature.description}</p>
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
            <h2 className="text-3xl font-bold mb-6 text-secondary">
              Ready to Transform Your Collaborations?
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-lg mx-auto">
              Join creators who've automated partnerships and increased earnings.
            </p>
            <button
              onClick={() => window.location.href = '/registration'}
              className="bg-gradient-primary text-white px-12 py-4 text-xl font-bold rounded-xl shadow-glow hover:shadow-float transition-all duration-300 flex items-center gap-3 mx-auto group"
            >
              Get Started Free
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </button>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
