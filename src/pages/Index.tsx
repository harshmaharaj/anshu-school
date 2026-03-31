import { useScrollReveal } from "@/hooks/useScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Users, ClipboardCheck, BookOpen, CreditCard, BarChart3, MessageSquare,
  Play, ArrowRight, Star, Sparkles, Brain, Zap, CheckCircle2, ChevronLeft, ChevronRight
} from "lucide-react";
import { useState } from "react";

const stats = [
  { value: "10,000+", label: "Schools" },
  { value: "1M+", label: "Students" },
  { value: "50K+", label: "Teachers" },
  { value: "99.9%", label: "Uptime" },
];

const features = [
  { icon: ClipboardCheck, title: "Smart Attendance", desc: "Automated tracking with real-time alerts to parents and admins.", color: "text-primary" },
  { icon: BookOpen, title: "Exam & Gradebook", desc: "Create exams, auto-grade, and generate detailed report cards.", color: "text-secondary" },
  { icon: MessageSquare, title: "Communication Hub", desc: "Instant announcements, parent-teacher chat, and notifications.", color: "text-accent" },
  { icon: CreditCard, title: "Fee Management", desc: "Online payments, automated reminders, and receipt generation.", color: "text-primary" },
];

const testimonials = [
  { name: "Priya Sharma", role: "Principal, DPS Bangalore", quote: "EduFlow transformed how we manage our school. Everything from attendance to fee collection is seamless now.", avatar: "PS" },
  { name: "Rajesh Kumar", role: "Admin, St. Xavier's School", quote: "The analytics dashboard gives us insights we never had before. Decision-making is now data-driven.", avatar: "RK" },
  { name: "Anita Desai", role: "Teacher, Modern Academy", quote: "Communication with parents has improved dramatically. The app is intuitive and saves me hours every week.", avatar: "AD" },
];

const Index = () => {
  const containerRef = useScrollReveal();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <div ref={containerRef} className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="floating-blob w-96 h-96 bg-primary/40 -top-20 -right-20" />
        <div className="floating-blob w-72 h-72 bg-secondary/30 bottom-10 left-10" />
        <div className="floating-blob w-60 h-60 bg-accent/20 top-1/2 left-1/3" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-white/80 mb-8">
              <Sparkles className="w-4 h-4 text-accent" />
              AI-Powered School Management
            </div>
            <h1 className="reveal font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Transform Your{" "}
              <span className="gradient-text">School Management</span>
            </h1>
            <p className="reveal text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              The all-in-one platform that simplifies administration, empowers teachers, and engages parents — all powered by smart technology.
            </p>
            <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="rounded-full px-8 text-base animate-pulse-glow">
                Get Started Free <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 text-base border-white/20 text-white hover:bg-white/10">
                <Play className="w-4 h-4 mr-2" /> Watch Demo
              </Button>
            </div>
          </div>

          {/* Dashboard mockup */}
          <div className="reveal mt-16 max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-2">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 min-h-[300px] flex items-center justify-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                  {[
                    { label: "Total Students", value: "2,847", icon: Users, change: "+12%" },
                    { label: "Attendance", value: "94.2%", icon: ClipboardCheck, change: "+3%" },
                    { label: "Fee Collection", value: "₹12.4L", icon: CreditCard, change: "+8%" },
                    { label: "Avg Grade", value: "B+", icon: BarChart3, change: "+5%" },
                  ].map((item, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-4 text-white">
                      <item.icon className="w-5 h-5 text-primary mb-2" />
                      <p className="text-xs text-white/50">{item.label}</p>
                      <p className="font-heading text-xl font-bold">{item.value}</p>
                      <span className="text-xs text-secondary">{item.change}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="reveal flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="font-heading text-3xl md:text-4xl font-bold text-primary">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="reveal text-center mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Features</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Everything You Need</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Powerful tools designed specifically for modern schools to manage every aspect of education.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="reveal group p-6 rounded-2xl border border-border bg-card hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${f.color}`}>
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto">
          <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Brain className="w-4 h-4" /> AI-Powered
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Smart Analytics That{" "}
                <span className="gradient-text">Drive Results</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our AI engine analyzes student performance, predicts at-risk students, and provides actionable insights to improve learning outcomes across your institution.
              </p>
              <div className="space-y-4">
                {["Predictive student performance analytics", "Automated report generation", "Smart scheduling optimization", "Real-time anomaly detection"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="glass rounded-2xl p-6 bg-gradient-to-br from-primary/5 to-secondary/5">
                <div className="space-y-4">
                  {[
                    { label: "Student Performance Index", value: "87%", bar: "w-[87%]", color: "bg-primary" },
                    { label: "Attendance Consistency", value: "94%", bar: "w-[94%]", color: "bg-secondary" },
                    { label: "Parent Engagement", value: "76%", bar: "w-[76%]", color: "bg-accent" },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="font-semibold">{item.value}</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${item.color} ${item.bar}`} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2 p-3 rounded-lg bg-secondary/10 text-secondary text-sm">
                  <Zap className="w-4 h-4" />
                  <span>AI suggests: Focus on parent engagement workshops</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="reveal text-center mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Testimonials</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold">Loved by Educators</h2>
          </div>
          <div className="reveal max-w-2xl mx-auto">
            <div className="relative bg-card rounded-2xl border border-border p-8 md:p-10">
              <Star className="w-8 h-8 text-accent mb-4" />
              <p className="text-lg leading-relaxed mb-6">"{testimonials[currentTestimonial].quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-heading font-bold text-sm">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm">{testimonials[currentTestimonial].name}</p>
                  <p className="text-xs text-muted-foreground">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
              <div className="flex gap-2 mt-6">
                <button onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)} className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)} className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="reveal gradient-hero rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="floating-blob w-60 h-60 bg-primary/30 -top-10 -right-10" />
            <div className="floating-blob w-40 h-40 bg-secondary/20 bottom-0 left-10" />
            <div className="relative z-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Ready to Modernize Your School?</h2>
              <p className="text-white/60 mb-8 max-w-lg mx-auto">Join thousands of schools already using EduFlow. Start for free, no credit card required.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                <Input placeholder="Enter your email" className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-full" />
                <Button className="rounded-full px-8 whitespace-nowrap">Get Started</Button>
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
