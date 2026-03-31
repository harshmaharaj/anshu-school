import { Link } from "react-router-dom";
import { GraduationCap, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="gradient-hero text-white">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="flex items-center gap-2 font-heading font-bold text-xl mb-4">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary-foreground" />
            </div>
            EduFlow
          </Link>
          <p className="text-sm text-white/60 leading-relaxed">
            Empowering schools with modern technology to streamline management and enhance learning outcomes.
          </p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-primary/30 transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Product</h4>
          <div className="flex flex-col gap-2.5">
            {["Features", "Pricing", "Integrations", "Updates"].map((item) => (
              <a key={item} href="#" className="text-sm text-white/60 hover:text-white transition-colors">{item}</a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Company</h4>
          <div className="flex flex-col gap-2.5">
            {["About Us", "Careers", "Blog", "Contact"].map((item) => (
              <a key={item} href="#" className="text-sm text-white/60 hover:text-white transition-colors">{item}</a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Support</h4>
          <div className="flex flex-col gap-2.5">
            {["Help Center", "Documentation", "Community", "Privacy Policy"].map((item) => (
              <a key={item} href="#" className="text-sm text-white/60 hover:text-white transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/40">© 2026 EduFlow. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="text-sm text-white/40 hover:text-white/70 transition-colors">Terms</a>
          <a href="#" className="text-sm text-white/40 hover:text-white/70 transition-colors">Privacy</a>
          <a href="#" className="text-sm text-white/40 hover:text-white/70 transition-colors">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
