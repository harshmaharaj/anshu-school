import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, X, ArrowRight, Sparkles } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    desc: "Perfect for small schools getting started",
    monthlyPrice: 0,
    yearlyPrice: 0,
    cta: "Start Free",
    popular: false,
    features: [
      { name: "Up to 100 students", included: true },
      { name: "Basic attendance tracking", included: true },
      { name: "Report card generation", included: true },
      { name: "Parent notifications", included: true },
      { name: "Fee management", included: false },
      { name: "AI analytics", included: false },
      { name: "Custom integrations", included: false },
      { name: "Dedicated support", included: false },
    ],
  },
  {
    name: "Professional",
    desc: "For growing schools that need more power",
    monthlyPrice: 299,
    yearlyPrice: 249,
    cta: "Get Started",
    popular: true,
    features: [
      { name: "Up to 1,000 students", included: true },
      { name: "Advanced attendance + biometric", included: true },
      { name: "Exam & gradebook suite", included: true },
      { name: "Parent & teacher messaging", included: true },
      { name: "Fee management + payments", included: true },
      { name: "AI analytics dashboard", included: true },
      { name: "Custom integrations", included: false },
      { name: "Dedicated support", included: false },
    ],
  },
  {
    name: "Enterprise",
    desc: "Unlimited scale with dedicated support",
    monthlyPrice: null,
    yearlyPrice: null,
    cta: "Contact Sales",
    popular: false,
    features: [
      { name: "Unlimited students", included: true },
      { name: "All Professional features", included: true },
      { name: "Multi-branch management", included: true },
      { name: "Custom workflows", included: true },
      { name: "Advanced API access", included: true },
      { name: "Priority AI insights", included: true },
      { name: "Custom integrations", included: true },
      { name: "Dedicated account manager", included: true },
    ],
  },
];

const faqs = [
  { q: "Is there really a free plan?", a: "Yes! The Starter plan is completely free for schools with up to 100 students. No credit card required, no time limits." },
  { q: "Can I switch plans later?", a: "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated." },
  { q: "What payment methods do you accept?", a: "We accept all major credit/debit cards, UPI, net banking, and bank transfers for annual plans." },
  { q: "Do you offer discounts for NGOs?", a: "Yes, we offer special pricing for non-profit schools and NGOs. Contact our sales team for details." },
  { q: "Is my data secure?", a: "We use enterprise-grade encryption, regular backups, and comply with all major data protection regulations including GDPR." },
  { q: "How does the annual billing work?", a: "Annual billing gives you 2 months free compared to monthly billing. You're billed once per year." },
];

const Pricing = () => {
  const containerRef = useScrollReveal();
  const [annual, setAnnual] = useState(true);

  return (
    <div ref={containerRef} className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden pt-32 pb-20">
        <div className="floating-blob w-80 h-80 bg-primary/30 top-0 right-0" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="reveal font-heading text-4xl md:text-6xl font-bold text-white mb-6">
            Simple, Transparent{" "}
            <span className="gradient-text">Pricing</span>
          </h1>
          <p className="reveal text-lg text-white/60 max-w-xl mx-auto">
            Start free, upgrade when you're ready. No hidden fees, no surprises.
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
              Annual <span className="text-xs text-secondary font-semibold ml-1">Save 17%</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tiers.map((tier, i) => (
              <div
                key={i}
                className={`reveal relative rounded-2xl border p-8 flex flex-col ${
                  tier.popular
                    ? "border-primary bg-card shadow-xl shadow-primary/10 scale-[1.02]"
                    : "border-border bg-card"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Most Popular
                  </div>
                )}
                <h3 className="font-heading text-xl font-bold mb-1">{tier.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{tier.desc}</p>
                <div className="mb-6">
                  {tier.monthlyPrice !== null ? (
                    <>
                      <span className="font-heading text-4xl font-bold">
                        ₹{annual ? tier.yearlyPrice : tier.monthlyPrice}
                      </span>
                      <span className="text-muted-foreground text-sm">/month</span>
                    </>
                  ) : (
                    <span className="font-heading text-3xl font-bold">Custom</span>
                  )}
                </div>
                <Button
                  className={`rounded-full mb-8 ${tier.popular ? "" : "variant-outline"}`}
                  variant={tier.popular ? "default" : "outline"}
                >
                  {tier.cta} <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
                <div className="space-y-3 flex-1">
                  {tier.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2.5 text-sm">
                      {f.included ? (
                        <Check className="w-4 h-4 text-secondary shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-muted-foreground/40 shrink-0" />
                      )}
                      <span className={f.included ? "" : "text-muted-foreground/60"}>{f.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto max-w-3xl">
          <div className="reveal text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="reveal">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-6 bg-card">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
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
