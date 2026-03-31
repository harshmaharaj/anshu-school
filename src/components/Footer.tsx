import { Link } from "react-router-dom";
import { GraduationCap, Github, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="flex items-center gap-2 font-bold text-lg mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-primary-foreground" />
            </div>
            EduFlow
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            AI-native school management platform empowering educators with intelligent automation and actionable insights.
          </p>
          <div className="flex gap-2 mt-5">
            {[Twitter, Linkedin, Youtube, Github].map((Icon, i) => (
              <a key={i} href="#" className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>

        {[
          { title: "Product", links: ["Features", "Pricing", "Integrations", "Changelog"] },
          { title: "Company", links: ["About", "Careers", "Blog", "Contact"] },
          { title: "Resources", links: ["Documentation", "API Reference", "Community", "Status"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-mono-brand text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">{col.title}</h4>
            <div className="flex flex-col gap-2.5">
              {col.links.map((item) => (
                <a key={item} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{item}</a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="section-divider mt-12 mb-8" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">© 2026 EduFlow. All rights reserved.</p>
        <div className="flex gap-6">
          {["Terms", "Privacy", "Cookies"].map((item) => (
            <a key={item} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">{item}</a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
