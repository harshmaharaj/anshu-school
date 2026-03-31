import { useScrollReveal } from "@/hooks/useScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Users, ClipboardCheck, BookOpen, CreditCard, BarChart3, MessageSquare,
  ArrowRight, Star, Brain, Zap, CheckCircle2, ChevronLeft, ChevronRight,
  Sparkles, Bot, Eye, TrendingUp, Shield, Cpu, Network, Database
} from "lucide-react";
import { useState } from "react";

const stats = [
  { value: "10,000+", label: "Schools", color: "text-primary" },
  { value: "1M+", label: "Students Managed", color: "text-secondary" },
  { value: "50K+", label: "AI Insights Daily", color: "text-accent" },
  { value: "99.9%", label: "Platform Uptime", color: "text-primary" },
];

const features = [
  { icon: ClipboardCheck, title: "Smart Attendance", desc: "AI-powered facial recognition and automated tracking with real-time parent alerts.", color: "purple", iconColor: "text-primary" },
  { icon: BookOpen, title: "AI Gradebook", desc: "Intelligent grading with natural language feedback generation and performance prediction.", color: "blue", iconColor: "text-accent" },
  { icon: MessageSquare, title: "Communication Hub", desc: "AI-drafted announcements, sentiment analysis, and smart notification routing.", color: "green", iconColor: "text-secondary" },
  { icon: CreditCard, title: "Fee Management", desc: "Predictive collection analytics, automated reminders, and payment reconciliation.", color: "amber", iconColor: "text-[hsl(38_92%_50%)]" },
];

const aiCapabilities = [
  { icon: Brain, title: "Predictive Analytics", desc: "Forecast student performance and identify at-risk learners before issues arise." },
  { icon: Bot, title: "AI Teaching Assistant", desc: "Generate lesson plans, quiz questions, and personalized learning paths automatically." },
  { icon: Eye, title: "Behavioral Insights", desc: "Track engagement patterns and recommend interventions with contextual awareness." },
  { icon: Cpu, title: "Smart Automation", desc: "Automate 80% of administrative tasks — from report cards to parent communications." },
];

const testimonials = [
  { name: "Priya Sharma", role: "Principal, DPS Bangalore", quote: "EduFlow's AI reduced our admin workload by 60%. Teachers now spend time teaching, not managing spreadsheets.", avatar: "PS" },
  { name: "Rajesh Kumar", role: "Admin, St. Xavier's School", quote: "The predictive analytics caught 23 at-risk students early. Every single one improved by end of semester.", avatar: "RK" },
  { name: "Anita Desai", role: "Teacher, Modern Academy", quote: "AI-generated progress reports save me 8 hours every week. The quality is remarkable.", avatar: "AD" },
];

const Index = () => {
  const containerRef = useScrollReveal();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <div ref={containerRef} className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="hero-dark dark:hero-dark relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32 bg-card">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        
        {/* Orb decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, hsl(262 80% 55%), transparent 70%)' }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-sm mb-8">
              <span className="font-mono-brand text-[10px] font-bold uppercase tracking-widest text-primary">AI-Native</span>
              <span className="w-1 h-1 rounded-full bg-primary" />
              <span className="text-muted-foreground text-xs">School Management OS</span>
            </div>
            
            <h1 className="reveal text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 leading-[1.08]">
              The <span className="gradient-text-purple font-semibold">Intelligent</span> School{" "}
              <span className="gradient-text-blue font-semibold">Operating System</span>
            </h1>
            
            <p className="reveal text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              AI-powered platform that automates administration, predicts outcomes, and empowers educators — transforming how schools operate.
            </p>
            
            <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="rounded-lg px-8 text-base gap-2">
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-lg px-8 text-base gap-2">
                <Sparkles className="w-4 h-4" /> See AI in Action
              </Button>
            </div>
          </div>

          {/* Dashboard mockup */}
          <div className="reveal mt-16 max-w-4xl mx-auto">
            <div className="rounded-2xl border border-border bg-card dot-pattern p-2 glow-purple">
              <div className="rounded-xl bg-card p-6">
                {/* Mini toolbar */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-[hsl(38_92%_50%)]/60" />
                    <div className="w-3 h-3 rounded-full bg-secondary/60" />
                  </div>
                  <div className="flex-1 h-6 rounded-md bg-muted/50 max-w-xs mx-auto" />
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { label: "Total Students", value: "2,847", icon: Users, change: "+12%", variant: "purple" },
                    { label: "AI Attendance", value: "94.2%", icon: ClipboardCheck, change: "+3.2%", variant: "green" },
                    { label: "Fee Collection", value: "₹12.4L", icon: CreditCard, change: "+8%", variant: "blue" },
                    { label: "Risk Alerts", value: "23", icon: TrendingUp, change: "-15%", variant: "amber" },
                  ].map((item, i) => (
                    <div key={i} className={`card-${item.variant} stripe-${item.variant} rounded-xl border p-4 relative overflow-hidden`}>
                      <div className="absolute inset-0 dot-pattern opacity-30" />
                      <div className="relative z-10">
                        <item.icon className="w-4 h-4 text-muted-foreground mb-2" />
                        <p className="font-mono-brand text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{item.label}</p>
                        <p className="font-mono-brand text-2xl font-extrabold mt-1">{item.value}</p>
                        <span className="font-mono-brand text-xs text-secondary font-bold">{item.change}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-12 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className={`font-mono-brand text-3xl md:text-4xl font-extrabold ${s.color}`}>{s.value}</p>
                <p className="font-mono-brand text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="reveal text-center mb-14">
            <div className="eyebrow justify-center text-primary mb-3">Core Modules</div>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4">
              Powered by <span className="gradient-text-purple font-semibold">AI at Every Layer</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Every module is infused with intelligent automation — not bolted on, but built from the ground up.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <div key={i} className={`reveal card-${f.color} stripe-${f.color} rounded-2xl border p-6 relative overflow-hidden hover:-translate-y-1 transition-all duration-300 group`}>
                <div className="absolute inset-0 dot-pattern opacity-20" />
                <div className="relative z-10">
                  <div className={`w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center mb-4 ${f.iconColor}`}>
                    <f.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  <div className="mt-4 font-mono-brand text-[9px] font-bold uppercase tracking-widest text-secondary flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    AI-Powered
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="eyebrow text-primary mb-4">AI Engine</div>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
                Not Just <span className="gradient-text-purple font-semibold">Smart.</span>{" "}
                <span className="gradient-text-green font-semibold">Prescient.</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our AI doesn't just analyze — it anticipates. Built on education-specific models trained on millions of data points across 10,000+ schools.
              </p>
              <div className="space-y-4">
                {aiCapabilities.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/20 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <item.icon className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <p className="font-bold text-sm mb-1">{item.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Orb visualization */}
            <div className="reveal flex justify-center">
              <div className="relative w-72 h-72">
                {/* Rings */}
                <div className="absolute inset-0 rounded-full border border-primary/5 animate-pulse-ring" />
                <div className="absolute inset-6 rounded-full border border-primary/10" />
                <div className="absolute inset-12 rounded-full border border-primary/15" />
                
                {/* Core orb */}
                <div className="absolute inset-16 rounded-full flex flex-col items-center justify-center glow-purple" style={{ background: 'linear-gradient(135deg, hsl(262 80% 48%), hsl(275 85% 52%))' }}>
                  <Brain className="w-8 h-8 text-white mb-1" />
                  <span className="font-mono-brand text-[8px] font-bold text-white/80 uppercase tracking-widest">EduFlow AI</span>
                </div>

                {/* Orbiting icons */}
                {[
                  { icon: Database, delay: "0s" },
                  { icon: Network, delay: "-3s" },
                  { icon: Shield, delay: "-6s" },
                  { icon: Cpu, delay: "-9s" },
                ].map((item, i) => (
                  <div key={i} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit" style={{ animationDelay: item.delay }}>
                    <div className="w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center">
                      <item.icon className="w-3.5 h-3.5 text-primary" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Metrics */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="reveal text-center mb-14">
            <div className="eyebrow justify-center text-primary mb-3">Impact</div>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight">
              Measurable <span className="gradient-text-green font-semibold">Results</span>
            </h2>
          </div>
          <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { value: "60%", label: "Admin Time Saved", sub: "vs. manual processes", variant: "purple" },
              { value: "3.2×", label: "Faster Decisions", sub: "with AI-powered insights", variant: "green" },
              { value: "94%", label: "Prediction Accuracy", sub: "student performance model", variant: "blue" },
            ].map((item, i) => (
              <div key={i} className={`card-${item.variant} stripe-${item.variant} rounded-2xl border p-8 text-center relative overflow-hidden`}>
                <div className="absolute inset-0 dot-pattern opacity-20" />
                <div className="relative z-10">
                  <p className="font-mono-brand text-4xl font-extrabold gradient-text-purple">{item.value}</p>
                  <p className="font-bold text-sm mt-2">{item.label}</p>
                  <p className="font-mono-brand text-[10px] text-muted-foreground mt-1">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="reveal text-center mb-14">
            <div className="eyebrow justify-center text-primary mb-3">Testimonials</div>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight">Trusted by <span className="gradient-text-purple font-semibold">Educators</span></h2>
          </div>
          <div className="reveal max-w-2xl mx-auto">
            <div className="relative rounded-2xl border border-border bg-card p-8 md:p-10 card-purple stripe-purple overflow-hidden">
              <div className="absolute inset-0 dot-pattern opacity-20" />
              <div className="relative z-10">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[hsl(38_92%_50%)] text-[hsl(38_92%_50%)]" />
                  ))}
                </div>
                <p className="text-base leading-relaxed mb-6 italic text-muted-foreground">"{testimonials[currentTestimonial].quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-mono-brand text-xs font-bold text-primary-foreground" style={{ background: 'linear-gradient(135deg, hsl(262 80% 48%), hsl(275 85% 52%))' }}>
                    {testimonials[currentTestimonial].avatar}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{testimonials[currentTestimonial].name}</p>
                    <p className="font-mono-brand text-[10px] text-muted-foreground uppercase tracking-wider">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
                <div className="flex gap-2 mt-6">
                  <button onClick={() => setCurrentTestimonial((p) => (p - 1 + testimonials.length) % testimonials.length)} className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button onClick={() => setCurrentTestimonial((p) => (p + 1) % testimonials.length)} className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="reveal rounded-2xl border border-primary/20 bg-card p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 dot-pattern opacity-30" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, hsl(262 80% 55%), transparent 70%)' }} />
            <div className="relative z-10">
              <div className="eyebrow justify-center text-primary mb-4">Get Started</div>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
                Ready to Transform Your <span className="gradient-text-purple font-semibold">School?</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Join thousands of schools already using AI to revolutionize education management.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                <Input placeholder="Enter your email" className="rounded-lg" />
                <Button className="rounded-lg px-8 whitespace-nowrap">Get Started</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
