import { useScrollReveal } from "@/hooks/useScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Users, ClipboardCheck, BookOpen, CreditCard, MessageSquare,
  Calendar, BarChart3, ArrowRight, Puzzle, Globe, Shield, Cloud,
  Smartphone, Bell, FileText, TrendingUp
} from "lucide-react";

const featureSections = [
  {
    icon: Users,
    title: "Student Management",
    desc: "Comprehensive student profiles with enrollment tracking, academic history, health records, and parent information — all in one place.",
    highlights: ["Digital enrollment forms", "Student profile dashboard", "Academic records archive", "Parent portal access"],
    color: "bg-primary/10 text-primary",
  },
  {
    icon: ClipboardCheck,
    title: "Attendance Tracking",
    desc: "Automated attendance with biometric & app-based check-in, instant parent notifications, and detailed analytics.",
    highlights: ["Biometric integration", "Real-time parent alerts", "Leave management", "Attendance analytics"],
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: BookOpen,
    title: "Exam & Gradebook",
    desc: "Create exams, manage question banks, auto-grade assessments, and generate beautiful report cards in minutes.",
    highlights: ["Question bank builder", "Auto-grading engine", "Report card generator", "Performance tracking"],
    color: "bg-accent/10 text-accent",
  },
  {
    icon: CreditCard,
    title: "Fee Management",
    desc: "Accept online payments, send automated reminders, generate receipts, and track fee collection in real time.",
    highlights: ["Online payment gateway", "Automated reminders", "Digital receipts", "Collection dashboard"],
    color: "bg-primary/10 text-primary",
  },
  {
    icon: MessageSquare,
    title: "Communication Hub",
    desc: "Send announcements, enable parent-teacher messaging, share circulars, and keep everyone connected.",
    highlights: ["Broadcast announcements", "1-on-1 messaging", "Circular distribution", "Push notifications"],
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Calendar,
    title: "Timetable & Scheduling",
    desc: "Drag-and-drop timetable builder with conflict detection, substitute management, and room allocation.",
    highlights: ["Drag-and-drop builder", "Conflict detection", "Substitute management", "Room allocation"],
    color: "bg-accent/10 text-accent",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    desc: "Rich insights and visualizations for student performance, attendance trends, fee collection, and institutional KPIs.",
    highlights: ["Custom dashboards", "Trend analysis", "Exportable reports", "AI-powered insights"],
    color: "bg-primary/10 text-primary",
  },
];

const integrations = [
  { icon: Globe, name: "Google Workspace" },
  { icon: Cloud, name: "Microsoft 365" },
  { icon: Smartphone, name: "Mobile Apps" },
  { icon: Shield, name: "SSO/LDAP" },
  { icon: Bell, name: "SMS Gateway" },
  { icon: FileText, name: "ERP Systems" },
  { icon: TrendingUp, name: "Analytics" },
  { icon: Puzzle, name: "Custom APIs" },
];

const Features = () => {
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef} className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden pt-32 pb-20">
        <div className="floating-blob w-80 h-80 bg-primary/30 -top-20 right-10" />
        <div className="floating-blob w-60 h-60 bg-secondary/20 bottom-0 left-20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="reveal font-heading text-4xl md:text-6xl font-bold text-white mb-6">
            Everything Your School{" "}
            <span className="gradient-text">Needs</span>
          </h1>
          <p className="reveal text-lg text-white/60 max-w-2xl mx-auto">
            A comprehensive suite of tools designed to handle every aspect of school management — from admissions to analytics.
          </p>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="section-padding">
        <div className="container mx-auto space-y-24">
          {featureSections.map((feature, i) => (
            <div key={i} className={`reveal grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-4 ${feature.color}`}>
                  <feature.icon className="w-4 h-4" />
                  {feature.title}
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">{feature.title}</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">{feature.desc}</p>
                <div className="grid grid-cols-2 gap-3">
                  {feature.highlights.map((h, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {h}
                    </div>
                  ))}
                </div>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="rounded-2xl border border-border bg-gradient-to-br from-muted/50 to-muted p-8 min-h-[250px] flex items-center justify-center">
                  <feature.icon className="w-20 h-20 text-muted-foreground/30" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integrations */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto">
          <div className="reveal text-center mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Integrations</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Works With Your Tools</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Seamlessly integrates with the platforms you already use.</p>
          </div>
          <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {integrations.map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-3 p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <item.icon className="w-8 h-8 text-primary" />
                <span className="text-sm font-medium">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="reveal gradient-hero rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="floating-blob w-60 h-60 bg-accent/30 -top-10 -left-10" />
            <div className="relative z-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">See It In Action</h2>
              <p className="text-white/60 mb-8 max-w-lg mx-auto">Book a personalized demo and discover how EduFlow can transform your school.</p>
              <Button size="lg" className="rounded-full px-10 text-base">
                Book a Demo <ArrowRight className="w-4 h-4 ml-2" />
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
