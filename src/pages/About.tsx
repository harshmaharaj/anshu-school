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
  ArrowRight, Award, Globe2, BookOpen
} from "lucide-react";

const values = [
  { icon: Heart, title: "Student First", desc: "Every decision we make centers around improving outcomes for students." },
  { icon: Target, title: "Simplicity", desc: "Complex problems deserve elegant, simple solutions that anyone can use." },
  { icon: Lightbulb, title: "Innovation", desc: "We constantly push boundaries with AI and modern technology." },
  { icon: Users, title: "Community", desc: "We build alongside educators, listening and learning from their needs." },
];

const team = [
  { name: "Arjun Mehta", role: "CEO & Co-Founder", initials: "AM" },
  { name: "Sneha Patel", role: "CTO & Co-Founder", initials: "SP" },
  { name: "Vikram Singh", role: "Head of Product", initials: "VS" },
  { name: "Kavya Reddy", role: "Head of Design", initials: "KR" },
  { name: "Rohan Gupta", role: "Head of Engineering", initials: "RG" },
  { name: "Meera Iyer", role: "Head of Customer Success", initials: "MI" },
];

const milestones = [
  { icon: Award, value: "2020", label: "Founded" },
  { icon: Globe2, value: "15+", label: "Countries" },
  { icon: Users, value: "200+", label: "Team Members" },
  { icon: BookOpen, value: "10K+", label: "Schools" },
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
      <section className="gradient-hero relative overflow-hidden pt-32 pb-20">
        <div className="floating-blob w-80 h-80 bg-primary/30 top-10 -right-20" />
        <div className="floating-blob w-60 h-60 bg-accent/20 bottom-0 left-10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="reveal font-heading text-4xl md:text-6xl font-bold text-white mb-6">
            Our Mission to{" "}
            <span className="gradient-text-warm">Transform Education</span>
          </h1>
          <p className="reveal text-lg text-white/60 max-w-2xl mx-auto">
            We believe every school deserves access to world-class technology. EduFlow makes it possible.
          </p>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="reveal flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {milestones.map((m, i) => (
              <div key={i} className="text-center flex flex-col items-center">
                <m.icon className="w-6 h-6 text-primary mb-2" />
                <p className="font-heading text-3xl font-bold">{m.value}</p>
                <p className="text-sm text-muted-foreground">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <div className="reveal text-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Our Story</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Born From a Simple Idea</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In 2020, our founders — both children of educators — witnessed firsthand how schools struggled with outdated administrative processes. Teachers spent more time on paperwork than teaching. Parents felt disconnected. Students deserved better.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              EduFlow was born to bridge that gap. Today, we serve over 10,000 schools across 15 countries, helping millions of students get the education experience they deserve — powered by technology that's intuitive, affordable, and transformative.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto">
          <div className="reveal text-center mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Our Values</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">What Drives Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="reveal p-6 rounded-2xl border border-border bg-card text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="reveal text-center mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Our Team</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Meet the People Behind EduFlow</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <div key={i} className="reveal p-6 rounded-2xl border border-border bg-card text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center mx-auto mb-4 font-heading font-bold text-lg">
                  {member.initials}
                </div>
                <h3 className="font-heading font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="reveal">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Contact Us</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">Have questions? We'd love to hear from you. Send us a message and we'll respond within 24 hours.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-sm">hello@eduflow.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium text-sm">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Office</p>
                    <p className="font-medium text-sm">Koramangala, Bangalore, India</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal">
              <form onSubmit={handleSubmit} className="p-8 rounded-2xl border border-border bg-card space-y-4">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <Input
                  placeholder="School Name"
                  value={formData.school}
                  onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                />
                <Textarea
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
                <Button type="submit" className="w-full rounded-full">
                  Send Message <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="reveal gradient-hero rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="floating-blob w-60 h-60 bg-accent/30 top-0 right-0" />
            <div className="relative z-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Join 10,000+ Schools Transforming Education
              </h2>
              <p className="text-white/60 mb-8 max-w-lg mx-auto">
                Start your journey with EduFlow today — it's free, fast, and designed for schools like yours.
              </p>
              <Button size="lg" className="rounded-full px-10 text-base">
                Get Started Free <ArrowRight className="w-4 h-4 ml-2" />
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
