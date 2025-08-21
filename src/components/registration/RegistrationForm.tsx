import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, User, DollarSign, Palette, FileText } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { GlassButton } from "@/components/ui/glass-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

const steps = [
  {
    id: 1,
    title: "Basic Info",
    icon: User,
    description: "Tell us about yourself"
  },
  {
    id: 2,
    title: "Budget Range",
    icon: DollarSign,
    description: "Set your collaboration budget"
  },
  {
    id: 3,
    title: "Content Type",
    icon: Palette,
    description: "What content do you create?"
  },
  {
    id: 4,
    title: "Preferences",
    icon: FileText,
    description: "Invoicing and collaboration preferences"
  }
]

export default function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    minBudget: "",
    maxBudget: "",
    contentTypes: "",
    domain: "",
    autoInvoicing: false,
    paymentTerms: "",
    notes: ""
  })

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-automation py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Welcome to AgenticAI
          </h1>
          <p className="text-xl text-muted-foreground">
            Set up your profile to start collaborating with brands
          </p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex justify-between mb-8"
        >
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center flex-1">
              <div className={`
                w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all
                ${currentStep >= step.id 
                  ? 'bg-gradient-primary text-primary-foreground shadow-glow' 
                  : 'bg-muted text-muted-foreground'
                }
              `}>
                <step.icon className="w-5 h-5" />
              </div>
              <div className="text-center">
                <p className="text-sm font-medium">{step.title}</p>
                <p className="text-xs text-muted-foreground hidden sm:block">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className={`
                  absolute h-0.5 w-full mt-6 transition-all
                  ${currentStep > step.id ? 'bg-primary' : 'bg-border'}
                `} 
                style={{ 
                  left: `${(index + 1) * 25}%`, 
                  width: `${100 / steps.length}%`,
                  top: '24px',
                  zIndex: -1
                }} />
              )}
            </div>
          ))}
        </motion.div>

        {/* Form Content */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <GlassCard className="p-8">
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold mb-6">Basic Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Enter your full name"
                      className="rounded-xl"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email"
                      className="rounded-xl"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="company">Company/Brand (Optional)</Label>
                    <Input 
                      id="company" 
                      placeholder="Your company or personal brand"
                      className="rounded-xl"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold mb-6">Budget Range</h2>
                <p className="text-muted-foreground mb-6">
                  Set your preferred collaboration budget range to help match you with suitable brands.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="minBudget">Minimum Budget</Label>
                    <Select value={formData.minBudget} onValueChange={(value) => setFormData({...formData, minBudget: value})}>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue placeholder="Select minimum" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="500">$500</SelectItem>
                        <SelectItem value="1000">$1,000</SelectItem>
                        <SelectItem value="2500">$2,500</SelectItem>
                        <SelectItem value="5000">$5,000</SelectItem>
                        <SelectItem value="10000">$10,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="maxBudget">Maximum Budget</Label>
                    <Select value={formData.maxBudget} onValueChange={(value) => setFormData({...formData, maxBudget: value})}>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue placeholder="Select maximum" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2500">$2,500</SelectItem>
                        <SelectItem value="5000">$5,000</SelectItem>
                        <SelectItem value="10000">$10,000</SelectItem>
                        <SelectItem value="25000">$25,000</SelectItem>
                        <SelectItem value="unlimited">No Limit</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold mb-6">Content & Domain</h2>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="domain">Primary Domain/Industry</Label>
                    <Select value={formData.domain} onValueChange={(value) => setFormData({...formData, domain: value})}>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue placeholder="Select your primary domain" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="lifestyle">Lifestyle</SelectItem>
                        <SelectItem value="fashion">Fashion</SelectItem>
                        <SelectItem value="fitness">Fitness</SelectItem>
                        <SelectItem value="food">Food & Beverage</SelectItem>
                        <SelectItem value="travel">Travel</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="entertainment">Entertainment</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contentTypes">Content Types You Create</Label>
                    <Textarea 
                      id="contentTypes"
                      placeholder="e.g., YouTube videos, Instagram posts, blog articles, podcast episodes..."
                      className="rounded-xl min-h-[100px]"
                      value={formData.contentTypes}
                      onChange={(e) => setFormData({...formData, contentTypes: e.target.value})}
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold mb-6">Preferences</h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 border rounded-xl">
                    <div className="space-y-1">
                      <p className="font-medium">Auto-Invoicing</p>
                      <p className="text-sm text-muted-foreground">
                        Automatically generate invoices when deals are completed
                      </p>
                    </div>
                    <Switch 
                      checked={formData.autoInvoicing}
                      onCheckedChange={(checked) => setFormData({...formData, autoInvoicing: checked})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="paymentTerms">Payment Terms</Label>
                    <Select value={formData.paymentTerms} onValueChange={(value) => setFormData({...formData, paymentTerms: value})}>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue placeholder="Select payment terms" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="net15">Net 15</SelectItem>
                        <SelectItem value="net30">Net 30</SelectItem>
                        <SelectItem value="net45">Net 45</SelectItem>
                        <SelectItem value="immediate">Immediate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea 
                      id="notes"
                      placeholder="Any special requirements or preferences..."
                      className="rounded-xl min-h-[100px]"
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t">
              <GlassButton 
                variant="ghost" 
                onClick={prevStep}
                disabled={currentStep === 1}
              >
                Previous
              </GlassButton>
              
              <GlassButton 
                variant={currentStep === 4 ? "primary" : "default"} 
                onClick={currentStep === 4 ? () => window.location.href = '/home' : nextStep}
                className="min-w-[120px]"
              >
                {currentStep === 4 ? 'Complete Setup' : 'Next'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </GlassButton>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  )
}