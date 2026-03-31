import { useScrollReveal } from "@/hooks/useScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Users, ClipboardCheck, BookOpen, CreditCard, MessageSquare,
  Calendar, BarChart3, ArrowRight, Globe, Shield, Cloud,
  Smartphone, Bell, FileText, Brain, Bot, Zap, Cpu,
  Scan, TrendingUp, PieChart, Network
} from "lucide-react";
import featureStudentImg from "@/assets/feature-student-management.jpg";
import featureAttendanceImg from "@/assets/feature-attendance.jpg";
import featureGradebookImg from "@/assets/feature-gradebook.jpg";
import featureFeeImg from "@/assets/feature-fee-management.jpg";
import featureCommunicationImg from "@/assets/feature-communication.jpg";
import featureSchedulingImg from "@/assets/feature-scheduling.jpg";
import featureAnalyticsImg from "@/assets/feature-analytics.jpg";

const featureSections = [
  {
    icon: Users, title: "Student Management", variant: "purple",
    desc: "AI-powered student profiles with enrollment automation, predictive academic tracking, and intelligent record management.",
    highlights: ["AI enrollment screening", "Smart profile enrichment", "Academic trajectory prediction", "Automated parent portal"],
    aiFeature: "AI auto-generates student risk profiles from 40+ behavioral signals",
  },
  {
    icon: Scan, title: "Smart Attendance", variant: "blue",
    desc: "Facial recognition and geo-fenced check-ins with anomaly detection and automated parent notifications.",
    highlights: ["Facial recognition", "Real-time parent alerts", "Anomaly detection", "Attendance forecasting"],
    aiFeature: "Predicts absenteeism patterns 2 weeks in advance with 91% accuracy",
  },
  {
    icon: BookOpen, title: "AI Gradebook", variant: "green",
    desc: "Intelligent grading with NLP-powered feedback, auto-generated report cards, and performance clustering.",
    highlights: ["NLP feedback generation", "Auto-grading engine", "Performance clustering", "Adaptive assessments"],
    aiFeature: "Generates personalized improvement plans for every student automatically",
  },
  {
    icon: CreditCard, title: "Fee Management", variant: "amber",
    desc: "Predictive collection analytics, smart reminders, automated reconciliation, and payment gateway integration.",
    highlights: ["Collection prediction", "Smart reminders", "Auto-reconciliation", "Multi-gateway support"],
    aiFeature: "Predicts defaulters 30 days ahead and auto-triggers escalation workflows",
  },
  {
    icon: MessageSquare, title: "Communication Hub", variant: "purple",
    desc: "AI-drafted announcements with sentiment analysis, smart routing, and multi-channel delivery.",
    highlights: ["AI draft generation", "Sentiment analysis", "Smart routing", "Multi-channel delivery"],
    aiFeature: "AI writes personalized parent messages in 12 languages with cultural context",
  },
  {
    icon: Calendar, title: "Smart Scheduling", variant: "blue",
    desc: "Constraint-based AI scheduler with room optimization, conflict resolution, and substitute management.",
    highlights: ["AI optimization", "Conflict detection", "Room allocation", "Substitute matching"],
    aiFeature: "Reduces scheduling conflicts by 95% — solves in seconds what takes hours manually",
  },
  {
    icon: BarChart3, title: "Analytics Command Center", variant: "green",
    desc: "Real-time dashboards with predictive insights, anomaly detection, and natural language querying.",
    highlights: ["Predictive insights", "Natural language queries", "Custom dashboards", "Exportable reports"],
    aiFeature: "Ask questions in plain English — AI generates reports and visualizations instantly",
  },
];

const integrations = [
  { icon: Globe, name: "Google Workspace" },
  { icon: Cloud, name: "Microsoft 365" },
  { icon: Smartphone, name: "Mobile Apps" },
  { icon: Shield, name: "SSO / LDAP" },
  { icon: Bell, name: "SMS Gateway" },
  { icon: FileText, name: "ERP Systems" },
  { icon: PieChart, name: "Power BI" },
  { icon: Network, name: "Custom APIs" },
];

const Features = () => {
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef} className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 bg-card">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, hsl(262 80% 55%), transparent 70%)' }} />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-sm mb-6">
            <Brain className="w-3.5 h-3.5 text-primary" />
            <span className="font-mono-brand text-[10px] font-bold uppercase tracking-widest text-primary">7 AI-Powered Modules</span>
          </div>
          <h1 className="reveal text-4xl md:text-6xl font-light tracking-tight mb-6">
            Everything Your School <span className="gradient-text-purple font-semibold">Needs</span>
          </h1>
          <p className="reveal text-lg text-muted-foreground max-w-2xl mx-auto">
            Each module is built with AI at its core — not as an afterthought, but as the foundation.
          </p>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="section-padding">
        <div className="container mx-auto space-y-20">
          {featureSections.map((feature, i) => (
            <div key={i} className="reveal">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "" : ""}`}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="eyebrow text-primary mb-4">{feature.title}</div>
                  <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">{feature.title}</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{feature.desc}</p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {feature.highlights.map((h, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm p-2 rounded-lg bg-muted/50">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {h}
                      </div>
                    ))}
                  </div>
                  {/* AI callout */}
                  <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 flex items-start gap-3">
                    <Zap className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-mono-brand text-[10px] font-bold uppercase tracking-widest text-primary mb-1">AI Insight</p>
                      <p className="text-sm text-muted-foreground">{feature.aiFeature}</p>
                    </div>
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className={`card-${feature.variant} stripe-${feature.variant} rounded-2xl border p-10 min-h-[280px] flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 dot-pattern opacity-20" />
                    <feature.icon className="w-20 h-20 text-muted-foreground/20 relative z-10" />
                  </div>
                </div>
              </div>
              {i < featureSections.length - 1 && <div className="section-divider mt-20" />}
            </div>
          ))}
        </div>
      </section>

      {/* Integrations */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="reveal text-center mb-14">
            <div className="eyebrow justify-center text-primary mb-3">Integrations</div>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4">
              Connects to <span className="gradient-text-blue font-semibold">Your Stack</span>
            </h2>
          </div>
          <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {integrations.map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-3 p-6 rounded-xl border border-border bg-card hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 dot-pattern opacity-10" />
                <item.icon className="w-7 h-7 text-primary relative z-10" />
                <span className="text-xs font-semibold relative z-10">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="reveal rounded-2xl border border-primary/20 bg-card p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 dot-pattern opacity-30" />
            <div className="relative z-10">
              <div className="eyebrow justify-center text-primary mb-4">Demo</div>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
                See the AI <span className="gradient-text-purple font-semibold">In Action</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Book a personalized demo and discover how EduFlow can transform your school.</p>
              <Button size="lg" className="rounded-lg px-10 text-base gap-2">
                Book a Demo <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
