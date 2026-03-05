import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  Clock,
  Loader2,
  Menu,
  MessageCircle,
  Phone,
  Scissors,
  Shield,
  Star,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { SiFacebook, SiInstagram, SiWhatsapp } from "react-icons/si";
import { useSubmitInquiry } from "./hooks/useQueries";

/* ─────────────────────────────────────────────────
   Scroll Reveal Hook
───────────────────────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    const revealEls = document.querySelectorAll(".reveal");
    for (const el of revealEls) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);
}

/* ─────────────────────────────────────────────────
   Navigation
───────────────────────────────────────────────── */
function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Why Us", href: "#whyus" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-obsidian/95 backdrop-blur-md shadow-[0_1px_0_0_oklch(var(--gold)/0.15)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNav("#home")}
          className="font-display text-gold text-2xl font-semibold tracking-wide hover:opacity-80 transition-opacity"
        >
          Drape Studio
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-ocid={`nav.link.${i + 1}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className="font-body text-sm font-medium tracking-widest uppercase text-ivory/75 hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden text-ivory/80 hover:text-gold transition-colors p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-obsidian-deep border-t border-gold/10">
          <ul className="flex flex-col py-4">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  data-ocid={`nav.link.${i + 1}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.href);
                  }}
                  className="block px-8 py-3 font-body text-sm font-medium tracking-widest uppercase text-ivory/75 hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

/* ─────────────────────────────────────────────────
   Hero Section
───────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/generated/hero-zebra-blinds.dim_1600x900.jpg')`,
        }}
      />
      {/* Multi-layer dark overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian-deep/80 via-obsidian/65 to-obsidian-deep/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian-deep/30 via-transparent to-obsidian-deep/30" />

      {/* Subtle gold grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <div className="luxury-divider mb-8 max-w-xs mx-auto">
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold/80 whitespace-nowrap px-4">
            Kerala's Premier Window Studio
          </span>
        </div>

        <h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-ivory leading-[1.1] tracking-tight mb-6"
          style={{ textShadow: "0 2px 24px rgba(0,0,0,0.5)" }}
        >
          Transforming Spaces
          <br />
          <span className="text-gold">with Luxury</span>
          <br />
          Curtains & Blinds
        </h1>

        <p className="font-body text-base sm:text-lg md:text-xl text-ivory/70 tracking-wide mb-10 max-w-xl mx-auto">
          Premium fabrics.&ensp;Expert craftsmanship.&ensp;Timeless elegance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            type="button"
            data-ocid="hero.primary_button"
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gold text-obsidian-deep font-body font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:bg-gold-light hover:shadow-gold-glow active:scale-[0.98]"
          >
            Get Free Consultation
            <ChevronDown
              size={16}
              className="rotate-[-90deg] group-hover:translate-x-1 transition-transform"
            />
          </button>

          <button
            type="button"
            onClick={() =>
              document
                .querySelector("#products")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 px-8 py-4 border border-ivory/30 text-ivory/80 font-body font-medium text-sm tracking-widest uppercase hover:border-gold/60 hover:text-gold transition-all duration-300"
          >
            View Collections
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-10 bg-gradient-to-b from-gold/0 to-gold/60" />
        <ChevronDown size={14} className="text-gold/60" />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────
   About Section
───────────────────────────────────────────────── */
function AboutSection() {
  const highlights = [
    {
      icon: <Scissors size={22} />,
      title: "Custom-made Designs",
      desc: "Every piece crafted to fit your exact space and aesthetic vision.",
    },
    {
      icon: <Star size={22} />,
      title: "High-quality Fabrics",
      desc: "Sourced from premium suppliers — durable, beautiful, lasting.",
    },
    {
      icon: <Shield size={22} />,
      title: "Professional Installation",
      desc: "Expert technicians ensure perfect fit and finish every time.",
    },
    {
      icon: <Zap size={22} />,
      title: "Affordable Luxury",
      desc: "World-class quality made accessible without compromise.",
    },
  ];

  return (
    <section id="about" data-ocid="about.section" className="py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-5">
              Our Story
            </p>
            <h2 className="reveal font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6 gold-underline">
              About Drape Studio
            </h2>
            <div className="w-12 h-px bg-gold mt-4 mb-8" />
            <p className="reveal reveal-delay-1 font-body text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              Drape Studio is a premium curtain and blinds company based in
              Kerala, offering high-quality zebra blinds, roman blinds, PVC
              curtains, and customized fabric curtains.
            </p>
            <p className="reveal reveal-delay-2 font-body text-muted-foreground text-base md:text-lg leading-relaxed">
              We focus on craftsmanship, durability, and luxury finishing —
              bringing world-class window treatments to homes and spaces across
              Kerala. Every installation is a signature of our commitment to
              excellence.
            </p>
          </div>

          {/* Right: Highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((item, i) => (
              <div
                key={item.title}
                className={`reveal reveal-delay-${i + 1} group bg-white border border-border hover:border-gold/40 p-7 transition-all duration-300 hover:shadow-luxury`}
              >
                <div className="text-gold mb-4 group-hover:scale-110 transition-transform duration-200">
                  {item.icon}
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────
   Products Section
───────────────────────────────────────────────── */
function ProductsSection() {
  const products = [
    {
      name: "Zebra Blinds",
      image: "/assets/generated/product-zebra-blinds.dim_600x700.jpg",
      desc: "Sleek alternating sheer and solid fabric bands that offer precise light control with modern elegance.",
      tag: "Bestseller",
    },
    {
      name: "Roman Blinds",
      image: "/assets/generated/product-roman-blinds.dim_600x700.jpg",
      desc: "Timeless horizontal folds in premium linen and fabric, crafted for a refined, tailored look.",
      tag: "Classic",
    },
    {
      name: "PVC Curtains",
      image: "/assets/generated/product-pvc-curtains.dim_600x700.jpg",
      desc: "Durable, easy-care vinyl panels ideal for kitchens, offices, and humid spaces without compromising style.",
      tag: "Practical",
    },
    {
      name: "Premium Fabric Curtains",
      image: "/assets/generated/product-fabric-curtains.dim_600x700.jpg",
      desc: "Floor-to-ceiling drapes in sumptuous fabrics that frame your space with dramatic, luxurious presence.",
      tag: "Signature",
    },
    {
      name: "Motorized Blinds",
      image: "/assets/generated/product-motorized-blinds.dim_600x700.jpg",
      desc: "Smart motorized systems for effortless control of light and privacy at the touch of a button.",
      tag: "Smart",
    },
  ];

  return (
    <section id="products" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Curated Collections
          </p>
          <h2 className="reveal font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Collections
          </h2>
          <div className="luxury-divider max-w-xs mx-auto mt-6">
            <span className="text-gold/50 text-xs">✦</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, i) => (
            <article
              key={product.name}
              data-ocid={`products.item.${i + 1}`}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} group relative bg-ivory-warm overflow-hidden hover:shadow-luxury-lg transition-all duration-500 ${
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Tag */}
                <span className="absolute top-4 left-4 font-body text-[10px] font-semibold tracking-[0.2em] uppercase bg-obsidian/80 text-gold px-3 py-1 backdrop-blur-sm">
                  {product.tag}
                </span>
                {/* Hover gold bar */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-gold mb-2 group-hover:text-gold-dark transition-colors">
                  {product.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {product.desc}
                </p>
                <button
                  type="button"
                  onClick={() =>
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="mt-5 inline-flex items-center gap-1.5 font-body text-xs tracking-widest uppercase text-gold hover:text-gold-dark transition-colors group/link"
                >
                  Enquire Now
                  <span className="group-hover/link:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────
   Why Choose Us Section
───────────────────────────────────────────────── */
function WhyUsSection() {
  const features = [
    {
      icon: <Star size={20} />,
      title: "Premium Quality Materials",
      desc: "Only the finest fabrics and hardware, selected from trusted premium suppliers worldwide.",
    },
    {
      icon: <Scissors size={20} />,
      title: "Elegant Finishing",
      desc: "Meticulous attention to every hem, pleat, and seam — perfection is our standard.",
    },
    {
      icon: <Shield size={20} />,
      title: "Expert Craftsmanship",
      desc: "Years of mastery in bespoke window treatments, refined through countless installations.",
    },
    {
      icon: <Zap size={20} />,
      title: "Custom Design Support",
      desc: "Tailored to your space and vision — we consult, measure, and create just for you.",
    },
    {
      icon: <Clock size={20} />,
      title: "On-time Installation",
      desc: "Professional, punctual, and precise — your schedule is always respected.",
    },
  ];

  return (
    <section id="whyus" className="py-28 bg-obsidian relative overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 40px,
            oklch(var(--gold)) 40px,
            oklch(var(--gold)) 41px
          )`,
        }}
      />

      {/* Gold corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-gold/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-gold/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold/70 mb-4">
            The Drape Studio Promise
          </p>
          <h2 className="reveal font-display text-4xl md:text-5xl font-bold text-ivory mb-4">
            Why Choose Drape Studio
          </h2>
          <div className="luxury-divider max-w-xs mx-auto mt-6">
            <span className="text-gold/50 text-xs">✦</span>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <div
              key={feat.title}
              data-ocid={`whyus.item.${i + 1}`}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} group relative border border-gold/15 hover:border-gold/40 p-8 transition-all duration-300 hover:bg-obsidian-deep/50 ${
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-10 h-10 border border-gold/30 text-gold mb-6 group-hover:bg-gold group-hover:text-obsidian transition-all duration-300">
                {feat.icon}
              </div>

              {/* Number watermark */}
              <span className="absolute top-6 right-7 font-display text-5xl font-bold text-gold/[0.06] select-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3 className="font-display text-lg font-semibold text-ivory mb-3">
                {feat.title}
              </h3>
              <p className="font-body text-sm text-ivory/55 leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────
   Contact Section
───────────────────────────────────────────────── */
function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    requirement: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const mutation = useSubmitInquiry();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.location || !form.requirement)
      return;

    try {
      await mutation.mutateAsync(form);
      setSubmitted(true);
      setForm({ name: "", phone: "", location: "", requirement: "" });
    } catch {
      // error handled by mutation.isError
    }
  };

  return (
    <section id="contact" className="py-28 bg-ivory-warm">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Reach Out
          </p>
          <h2 className="reveal font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="reveal reveal-delay-1 font-body text-muted-foreground text-base max-w-md mx-auto mt-4">
            Ready to transform your space? Contact us for a free consultation or
            send us your requirements.
          </p>
        </div>

        {/* Quick contact buttons */}
        <div className="reveal flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="contact.primary_button"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20bc5c] text-white font-body font-semibold text-sm tracking-wider uppercase transition-all duration-200 hover:shadow-lg active:scale-[0.98]"
          >
            <SiWhatsapp size={18} />
            WhatsApp Us
          </a>
          <a
            href="tel:+919876543210"
            data-ocid="contact.secondary_button"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold hover:bg-gold-light text-obsidian-deep font-body font-semibold text-sm tracking-wider uppercase transition-all duration-200 hover:shadow-gold-glow active:scale-[0.98]"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>

        {/* Divider */}
        <div className="luxury-divider mb-14">
          <span className="font-body text-xs text-muted-foreground px-4">
            or send an inquiry
          </span>
        </div>

        {/* Form */}
        <div className="bg-white border border-border shadow-luxury p-8 md:p-12">
          {submitted ? (
            <div
              data-ocid="contact.success_state"
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <CheckCircle2 size={48} className="text-gold mb-4" />
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                Inquiry Received!
              </h3>
              <p className="font-body text-muted-foreground max-w-sm">
                Thank you for reaching out. Our team will get back to you within
                24 hours.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 font-body text-sm text-gold hover:text-gold-dark underline underline-offset-4 transition-colors"
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="font-body text-xs tracking-widest uppercase text-foreground/70"
                  >
                    Full Name <span className="text-gold">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    data-ocid="contact.input.1"
                    className="font-body border-border focus:border-gold focus:ring-gold/20 rounded-none h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="font-body text-xs tracking-widest uppercase text-foreground/70"
                  >
                    Phone Number <span className="text-gold">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765 43210"
                    data-ocid="contact.input.2"
                    className="font-body border-border focus:border-gold focus:ring-gold/20 rounded-none h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="location"
                  className="font-body text-xs tracking-widest uppercase text-foreground/70"
                >
                  Location <span className="text-gold">*</span>
                </Label>
                <Input
                  id="location"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  required
                  placeholder="Your city/area in Kerala"
                  data-ocid="contact.input.3"
                  className="font-body border-border focus:border-gold focus:ring-gold/20 rounded-none h-12"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="requirement"
                  className="font-body text-xs tracking-widest uppercase text-foreground/70"
                >
                  Your Requirement <span className="text-gold">*</span>
                </Label>
                <Textarea
                  id="requirement"
                  name="requirement"
                  value={form.requirement}
                  onChange={handleChange}
                  required
                  placeholder="Describe your requirement... (e.g., zebra blinds for 3 windows in living room)"
                  data-ocid="contact.textarea"
                  rows={4}
                  className="font-body border-border focus:border-gold focus:ring-gold/20 rounded-none resize-none"
                />
              </div>

              {/* States */}
              {mutation.isError && (
                <div
                  data-ocid="contact.error_state"
                  className="flex items-center gap-3 px-4 py-3 bg-destructive/10 border border-destructive/20 text-destructive text-sm font-body"
                >
                  <AlertCircle size={16} />
                  Something went wrong. Please try again or contact us directly.
                </div>
              )}

              {mutation.isPending && (
                <div
                  data-ocid="contact.loading_state"
                  className="flex items-center gap-3 px-4 py-3 bg-gold/10 border border-gold/20 text-foreground text-sm font-body"
                >
                  <Loader2 size={16} className="animate-spin text-gold" />
                  Sending your inquiry...
                </div>
              )}

              <button
                type="submit"
                disabled={mutation.isPending}
                data-ocid="contact.submit_button"
                className="w-full sm:w-auto px-10 py-4 bg-obsidian hover:bg-obsidian-deep text-ivory font-body font-semibold text-sm tracking-widest uppercase transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:shadow-luxury"
              >
                {mutation.isPending ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <MessageCircle size={16} />
                    Send Inquiry
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────
   Footer
───────────────────────────────────────────────── */
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-obsidian-deep border-t border-gold/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center mb-12">
          {/* Brand */}
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gold mb-3 tracking-wide">
            Drape Studio
          </h2>
          <p className="font-body text-sm italic text-ivory/45 tracking-[0.15em] mb-8">
            "Where Fabric Meets Elegance."
          </p>

          {/* Gold divider */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-px bg-gold/30" />
            <span className="text-gold/50 text-sm">✦</span>
            <div className="w-16 h-px bg-gold/30" />
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="footer.link.1"
              aria-label="Follow Drape Studio on Instagram"
              className="w-10 h-10 border border-gold/25 flex items-center justify-center text-ivory/50 hover:border-gold hover:text-gold transition-all duration-200"
            >
              <SiInstagram size={16} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="footer.link.2"
              aria-label="Follow Drape Studio on Facebook"
              className="w-10 h-10 border border-gold/25 flex items-center justify-center text-ivory/50 hover:border-gold hover:text-gold transition-all duration-200"
            >
              <SiFacebook size={16} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gold/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ivory/30 font-body">
          <span>© {year} Drape Studio. All rights reserved.</span>
          <span>
            Built with <span className="text-gold/60">♥</span> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/50 hover:text-gold transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────────
   App Root
───────────────────────────────────────────────── */
export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen font-body">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <WhyUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
