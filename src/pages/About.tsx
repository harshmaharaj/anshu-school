import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Heart, Target, Lightbulb, Users, MapPin, Mail, Phone,
  ArrowRight, Award, Globe2, BookOpen, Brain, Cpu, Bot, Zap
} from "lucide-react";

const values = [
  { icon: Brain, title: "AI-First", desc: "Every feature starts with intelligence — AI isn't bolted on, it's the foundation.", variant: "purple" },
  { icon: Heart, title: "Student-Centric", desc: "Every decision we make centers around improving outcomes for students.", variant: "green" },
  { icon: Target, title: "Radical Simplicity", desc: "Complex problems deserve elegant solutions anyone can use in minutes.", variant: "blue" },
  { icon: Lightbulb, title: "Open Innovation", desc: "We build in public, share our learnings, and grow with our community.", variant: "amber" },
];

const team = [
  { name: "Arjun Mehta", role: "CEO & Co-Founder", initials: "AM", focus: "Vision & Strategy" },
  { name: "Sneha Patel", role: "CTO & Co-Founder", initials: "SP", focus: "AI & Engineering" },
  { name: "Vikram Singh", role: "Head of Product", initials: "VS", focus: "Product Design" },
  { name: "Kavya Reddy", role: "Head of AI", initials: "KR", focus: "Machine Learning" },
  { name: "Rohan Gupta", role: "Head of Engineering", initials: "RG", focus: "Platform" },
  { name: "Meera Iyer", role: "Head of Success", initials: "MI", focus: "Customer Growth" },
];

const milestones = [
  { value: "2020", label: "Founded", variant: "purple" },
  { value: "15+", label: "Countries", variant: "blue" },
  { value: "200+", label: "Team Members", variant: "green" },
  { value: "10K+", label: "Schools", variant: "amber" },
];

const aiTimeline = [
  { year: "2020", title: "Foundation", desc: "Basic automation for attendance and grading", icon: Zap },
  { year: "2022", title: "Intelligence", desc: "Predictive analytics and NLP-powered feedback", icon: Brain },
  { year: "2024", title: "Autonomy", desc: "Self-learning models, autonomous workflows", icon: Bot },
  { year: "2026", title: "Prescience", desc: "Anticipatory AI that acts before you ask", icon: Cpu },
];

const About = () => {
  const containerRef = useScrollReveal();
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", school: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    setFormData({ name: "", email: "", school: "", message: "" });
  };

  return (
    <div ref={containerRef} className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 bg-card">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, hsl(14 72% 55%), transparent 70%)' }} />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-sm mb-6">
            <span className="font-mono-brand text-[10px] font-bold uppercase tracking-widest text-primary">Our Story</span>
          </div>
          <h1 className="reveal text-4xl md:text-6xl font-light tracking-tight mb-6">
            Building the <span className="gradient-text-purple font-semibold">Future</span> of{" "}
            <span className="gradient-text-green font-semibold">Education</span>
          </h1>
          <p className="reveal text-lg text-muted-foreground max-w-2xl mx-auto">
            We believe every school deserves access to AI-powered technology. EduFlow makes it possible.
          </p>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-12 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-6">
            {milestones.map((m, i) => (
              <div key={i} className={`card-${m.variant} stripe-${m.variant} rounded-xl border p-6 text-center relative overflow-hidden`}>
                <div className="absolute inset-0 dot-pattern opacity-15" />
                <div className="relative z-10">
                  <p className="font-mono-brand text-3xl font-extrabold">{m.value}</p>
                  <p className="font-mono-brand text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-1">{m.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <div className="reveal text-center">
            <div className="eyebrow justify-center text-primary mb-4">Origin</div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">Born From a <span className="gradient-text-purple font-semibold">Simple Idea</span></h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In 2020, our founders — both children of educators — witnessed firsthand how schools struggled with outdated administrative processes. Teachers spent more time on paperwork than teaching. Parents felt disconnected. Students deserved better.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              EduFlow was born to bridge that gap with AI. Today, we serve over 10,000 schools across 15 countries, with our AI processing millions of data points daily to help every student reach their potential.
            </p>
          </div>
        </div>
      </section>

      {/* AI Evolution */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="reveal text-center mb-14">
            <div className="eyebrow justify-center text-primary mb-3">AI Journey</div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">Our <span className="gradient-text-purple font-semibold">AI Evolution</span></h2>
          </div>
          <div className="reveal grid grid-cols-1 md:grid-cols-4 gap-4">
            {aiTimeline.map((item, i) => (
              <div key={i} className="card-purple stripe-purple rounded-xl border p-6 relative overflow-hidden text-center">
                <div className="absolute inset-0 dot-pattern opacity-15" />
                <div className="relative z-10">
                  <item.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                  <p className="font-mono-brand text-lg font-extrabold text-primary">{item.year}</p>
                  <p className="font-bold text-sm mt-1">{item.title}</p>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="reveal text-center mb-14">
            <div className="eyebrow justify-center text-primary mb-3">Values</div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">What <span className="gradient-text-purple font-semibold">Drives Us</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <div key={i} className={`reveal card-${v.variant} stripe-${v.variant} rounded-2xl border p-6 text-center relative overflow-hidden hover:-translate-y-1 transition-all duration-300`}>
                <div className="absolute inset-0 dot-pattern opacity-15" />
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold mb-2">{v.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="reveal text-center mb-14">
            <div className="eyebrow justify-center text-primary mb-3">Team</div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">The People Behind <span className="gradient-text-purple font-semibold">EduFlow</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <div key={i} className="reveal card-purple rounded-xl border p-6 text-center relative overflow-hidden hover:border-primary/20 transition-colors">
                <div className="absolute inset-0 dot-pattern opacity-10" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 font-mono-brand font-bold text-sm text-primary-foreground" style={{ background: 'linear-gradient(135deg, hsl(262 80% 48%), hsl(275 85% 52%))' }}>
                    {member.initials}
                  </div>
                  <h3 className="font-bold text-sm">{member.name}</h3>
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                  <p className="font-mono-brand text-[9px] font-bold uppercase tracking-widest text-primary mt-2 px-2 py-0.5 rounded bg-primary/10 inline-block">{member.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="reveal">
              <div className="eyebrow text-primary mb-4">Contact</div>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">Get in <span className="gradient-text-purple font-semibold">Touch</span></h2>
              <p className="text-muted-foreground mb-8">Have questions? We'd love to hear from you.</p>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: "hello@eduflow.ai" },
                  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
                  { icon: MapPin, label: "Office", value: "Koramangala, Bangalore, India" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-mono-brand text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{item.label}</p>
                      <p className="font-medium text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal">
              <form onSubmit={handleSubmit} className="p-8 rounded-2xl border border-border bg-card space-y-4 relative overflow-hidden">
                <div className="absolute inset-0 dot-pattern opacity-10" />
                <div className="relative z-10 space-y-4">
                  <Input placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="rounded-lg" />
                  <Input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="rounded-lg" />
                  <Input placeholder="School Name" value={formData.school} onChange={(e) => setFormData({ ...formData, school: e.target.value })} className="rounded-lg" />
                  <Textarea placeholder="Your Message" rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required className="rounded-lg" />
                  <Button type="submit" className="w-full rounded-lg gap-2">
                    Send Message <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="reveal rounded-2xl border border-primary/20 bg-card p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 dot-pattern opacity-30" />
            <div className="relative z-10">
              <div className="eyebrow justify-center text-primary mb-4">Join Us</div>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
                Join 10,000+ Schools <span className="gradient-text-purple font-semibold">Transforming Education</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Start your AI-powered journey with EduFlow today.</p>
              <Button size="lg" className="rounded-lg px-10 text-base gap-2">
                Get Started Free <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
