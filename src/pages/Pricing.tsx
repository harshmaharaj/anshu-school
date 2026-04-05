import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, X, ArrowRight, Sparkles, Brain, Zap } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    desc: "For small schools getting started with AI",
    monthlyPrice: 0, yearlyPrice: 0,
    cta: "Start Free", popular: false, variant: "blue",
    features: [
      { name: "Up to 100 students", included: true },
      { name: "Basic AI attendance", included: true },
      { name: "Report card generation", included: true },
      { name: "Parent notifications", included: true },
      { name: "AI gradebook", included: false },
      { name: "Predictive analytics", included: false },
      { name: "Custom integrations", included: false },
      { name: "Dedicated support", included: false },
    ],
  },
  {
    name: "Professional",
    desc: "Full AI power for growing schools",
    monthlyPrice: 299, yearlyPrice: 249,
    cta: "Get Started", popular: true, variant: "purple",
    features: [
      { name: "Up to 1,000 students", included: true },
      { name: "Advanced AI attendance", included: true },
      { name: "AI gradebook + feedback", included: true },
      { name: "Communication hub", included: true },
      { name: "Fee management + prediction", included: true },
      { name: "Predictive analytics", included: true },
      { name: "Custom integrations", included: false },
      { name: "Dedicated support", included: false },
    ],
  },
  {
    name: "Enterprise",
    desc: "Unlimited scale with dedicated AI models",
    monthlyPrice: null, yearlyPrice: null,
    cta: "Contact Sales", popular: false, variant: "red",
    features: [
      { name: "Unlimited students", included: true },
      { name: "All Professional features", included: true },
      { name: "Multi-branch management", included: true },
      { name: "Custom AI models", included: true },
      { name: "Advanced API access", included: true },
      { name: "White-label option", included: true },
      { name: "Custom integrations", included: true },
      { name: "Dedicated account manager", included: true },
    ],
  },
];

const faqs = [
  { q: "Is there really a free plan?", a: "Yes! The Starter plan is completely free for schools with up to 100 students. No credit card required, no time limits. AI features are included." },
  { q: "What AI features are included?", a: "All plans include basic AI capabilities. Professional unlocks predictive analytics, NLP feedback, and smart scheduling. Enterprise gets custom AI models trained on your school's data." },
  { q: "Can I switch plans later?", a: "Absolutely. Upgrade or downgrade anytime. Changes take effect immediately with prorated billing." },
  { q: "Is my data used to train AI?", a: "Your data is never shared across schools. Enterprise plans include isolated AI models trained exclusively on your institution's data." },
  { q: "What about data security?", a: "Enterprise-grade encryption, SOC 2 compliance, regular audits, and data residency options. GDPR and local regulation compliant." },
  { q: "How does annual billing work?", a: "Annual billing saves you 17% — equivalent to 2 months free. Billed once per year." },
];

const Pricing = () => {
  const containerRef = useScrollReveal();
  const [annual, setAnnual] = useState(true);

  return (
    <div ref={containerRef} className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 bg-card">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-sm mb-6">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="font-mono-brand text-[10px] font-bold uppercase tracking-widest text-primary">AI Included in Every Plan</span>
          </div>
          <h1 className="reveal text-4xl md:text-6xl font-light tracking-tight mb-6">
            Simple, Transparent <span className="gradient-text-purple font-semibold">Pricing</span>
          </h1>
          <p className="reveal text-lg text-muted-foreground max-w-xl mx-auto">
            Start free. Scale with AI. No hidden fees.
          </p>
        </div>
      </section>

      {/* Toggle + Cards */}
      <section className="section-padding -mt-10">
        <div className="container mx-auto">
          <div className="reveal flex items-center justify-center gap-3 mb-12">
            <span className={`text-sm font-medium ${!annual ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
            <Switch checked={annual} onCheckedChange={setAnnual} />
            <span className={`text-sm font-medium ${annual ? "text-foreground" : "text-muted-foreground"}`}>
              Annual
              <span className="font-mono-brand text-[10px] font-bold text-secondary ml-2 px-2 py-0.5 rounded-md bg-secondary/10 border border-secondary/20 uppercase tracking-wider">Save 17%</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {tiers.map((tier, i) => (
              <div key={i} className={`reveal relative card-${tier.variant} stripe-${tier.variant} rounded-2xl border p-8 flex flex-col overflow-hidden ${tier.popular ? "md:scale-[1.03] glow-purple" : ""}`}>
                <div className="absolute inset-0 dot-pattern opacity-15" />
                <div className="relative z-10 flex flex-col flex-1">
                  {tier.popular && (
                    <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 px-4 py-1 text-primary-foreground text-[10px] font-mono-brand font-bold rounded-b-lg uppercase tracking-widest" style={{ background: 'linear-gradient(135deg, hsl(262 80% 48%), hsl(275 85% 52%))' }}>
                      Most Popular
                    </div>
                  )}
                  <h3 className="font-bold text-xl mb-1 mt-3">{tier.name}</h3>
                  <p className="text-xs text-muted-foreground mb-6">{tier.desc}</p>
                  <div className="mb-6">
                    {tier.monthlyPrice !== null ? (
                      <>
                        <span className="font-mono-brand text-4xl font-extrabold">₹{annual ? tier.yearlyPrice : tier.monthlyPrice}</span>
                        <span className="text-muted-foreground text-sm">/month</span>
                      </>
                    ) : (
                      <span className="font-mono-brand text-3xl font-extrabold">Custom</span>
                    )}
                  </div>
                  <Button className="rounded-lg mb-8 gap-2" variant={tier.popular ? "default" : "outline"}>
                    {tier.cta} <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                  <div className="space-y-3 flex-1">
                    {tier.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-2.5 text-sm">
                        {f.included ? (
                          <Check className="w-4 h-4 text-secondary shrink-0" />
                        ) : (
                          <X className="w-4 h-4 text-muted-foreground/30 shrink-0" />
                        )}
                        <span className={f.included ? "" : "text-muted-foreground/50"}>{f.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Comparison */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="reveal text-center mb-12">
            <div className="eyebrow justify-center text-primary mb-3">AI Capabilities by Plan</div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">
              More AI at <span className="gradient-text-purple font-semibold">Every Tier</span>
            </h2>
          </div>
          <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { plan: "Starter", items: ["Basic attendance AI", "Simple report generation", "Email notifications"], icon: Zap, variant: "blue" },
              { plan: "Professional", items: ["Predictive analytics", "NLP feedback engine", "Smart scheduling", "Sentiment analysis", "AI-drafted comms"], icon: Brain, variant: "purple" },
              { plan: "Enterprise", items: ["Custom AI models", "Natural language queries", "Multi-branch AI", "Priority processing", "Dedicated ML pipeline"], icon: Sparkles, variant: "red" },
            ].map((tier, i) => (
              <div key={i} className={`card-${tier.variant} stripe-${tier.variant} rounded-2xl border p-6 relative overflow-hidden`}>
                <div className="absolute inset-0 dot-pattern opacity-15" />
                <div className="relative z-10">
                  <tier.icon className="w-5 h-5 text-primary mb-3" />
                  <h3 className="font-bold mb-4">{tier.plan}</h3>
                  <div className="space-y-2.5">
                    {tier.items.map((item, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <div className="reveal text-center mb-12">
            <div className="eyebrow justify-center text-primary mb-3">FAQ</div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">Common Questions</h2>
          </div>
          <div className="reveal">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-6 bg-card">
                  <AccordionTrigger className="text-left font-medium text-sm hover:no-underline">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
