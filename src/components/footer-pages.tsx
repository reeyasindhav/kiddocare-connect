import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Heart,
  HelpCircle,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppShell, TrustBadge } from "@/components/kiddocare";

export function AboutPage() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Trust First",
      description:
        "Every caregiver is verified through background checks, reference calls, and safety training. We believe trust should be earned and visible.",
    },
    {
      icon: Heart,
      title: "Care-Centered",
      description:
        "We design for the moments that matter — first days, sick days, date nights, and everything in between. Real care for real families.",
    },
    {
      icon: Star,
      title: "Community Driven",
      description:
        "Parents help parents. Our review system and community standards ensure every recommendation comes from genuine experience.",
    },
  ];

  const team = [
    { name: "Elena Rodriguez", role: "Co-founder & CEO", initials: "ER" },
    { name: "Marcus Chen", role: "Co-founder & CTO", initials: "MC" },
    { name: "Sarah Okafor", role: "Head of Safety", initials: "SO" },
    { name: "James Park", role: "Head of Community", initials: "JP" },
  ];

  return (
    <AppShell>
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-sand via-sand to-mint/30">
          <div className="mx-auto max-w-[1320px] px-5 py-16 lg:px-8 lg:py-24">
            <div className="max-w-2xl">
              <p className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-coral">
                <span className="h-px w-5 bg-coral" />
                Our story
              </p>
              <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
                We're building care families can count on
              </h1>
              <p className="mt-5 text-base leading-7 text-ink/60">
                Kiddocare was founded by parents who understood the stress of finding reliable childcare. We've built the platform we wished existed — transparent, safe, and centered on real relationships.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-surface">
          <div className="mx-auto max-w-[1320px] px-5 py-16 lg:px-8 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="font-display text-3xl font-bold tracking-tight text-ink">
                  Our mission
                </h2>
                <p className="mt-4 text-base leading-7 text-ink/60">
                  Every family deserves access to childcare they can trust completely. We're removing the guesswork from finding care by making safety transparent, reviews authentic, and connections meaningful.
                </p>
                <p className="mt-4 text-base leading-7 text-ink/60">
                  Since launching in 2022, we've helped over 15,000 families find their perfect caregiver match. But we're just getting started — our goal is to make quality childcare accessible in every neighborhood.
                </p>
              </div>
              <div className="rounded-2xl bg-mint p-8">
                <blockquote className="font-display text-xl font-bold leading-relaxed text-teal">
                  "We believe every child deserves care from someone who's not just qualified, but truly exceptional. And every parent deserves the peace of mind that comes with knowing."
                </blockquote>
                <p className="mt-4 text-sm font-semibold text-teal/80">— Elena Rodriguez, Co-founder</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-sand">
          <div className="mx-auto max-w-[1320px] px-5 py-16 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-ink">Our values</h2>
              <p className="mt-4 text-base text-ink/60">
                The principles that guide every decision we make.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {values.map((value) => (
                <div key={value.title} className="rounded-2xl bg-surface p-6 ring-1 ring-ink/10">
                  <span className="grid size-12 place-items-center rounded-xl bg-mint text-teal">
                    <value.icon size={22} />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold">{value.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/60">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-subtle">
          <div className="mx-auto max-w-[1320px] px-5 py-16 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-ink">Meet the team</h2>
              <p className="mt-4 text-base text-ink/60">
                Parents, engineers, and childcare experts working together.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <div key={member.name} className="rounded-2xl bg-surface p-6 text-center ring-1 ring-ink/10">
                  <span className="mx-auto grid size-16 place-items-center rounded-full bg-mint font-display text-xl font-bold text-teal">
                    {member.initials}
                  </span>
                  <h3 className="mt-4 font-display font-bold">{member.name}</h3>
                  <p className="mt-1 text-sm text-ink/55">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </AppShell>
  );
}

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const contactMethods = [
    {
      icon: Mail,
      title: "Email us",
      description: "We respond within 24 hours",
      value: "hello@kiddocare.com",
    },
    {
      icon: Phone,
      title: "Call us",
      description: "Mon-Fri, 9am-6pm EST",
      value: "(718) 555-0142",
    },
    {
      icon: MapPin,
      title: "Visit us",
      description: "Brooklyn, New York",
      value: "123 Care Street, Brooklyn, NY 11201",
    },
  ];

  return (
    <AppShell>
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-sand via-sand to-mint/30">
          <div className="mx-auto max-w-[1320px] px-5 py-16 lg:px-8 lg:py-24">
            <div className="max-w-2xl">
              <p className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-coral">
                <span className="h-px w-5 bg-coral" />
                Get in touch
              </p>
              <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
                We're here to help
              </h1>
              <p className="mt-5 text-base leading-7 text-ink/60">
                Have a question about finding care, your account, or anything else? Our team is ready to assist you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="bg-surface">
          <div className="mx-auto max-w-[1320px] px-5 py-16 lg:px-8 lg:py-24">
            <div className="grid gap-6 md:grid-cols-3">
              {contactMethods.map((method) => (
                <div key={method.title} className="rounded-2xl bg-sand p-6 ring-1 ring-ink/10">
                  <span className="grid size-12 place-items-center rounded-xl bg-mint text-teal">
                    <method.icon size={22} />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold">{method.title}</h3>
                  <p className="mt-1 text-sm text-ink/55">{method.description}</p>
                  <p className="mt-3 font-semibold text-teal">{method.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-sand">
          <div className="mx-auto max-w-[1320px] px-5 py-16 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-2xl">
              <div className="rounded-2xl bg-surface p-6 ring-1 ring-ink/10 sm:p-8">
                <h2 className="font-display text-2xl font-bold">Send us a message</h2>
                <p className="mt-2 text-sm text-ink/60">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                {submitted ? (
                  <div className="mt-6 rounded-xl bg-mint p-6 text-center">
                    <Check className="mx-auto text-teal" size={32} />
                    <h3 className="mt-3 font-display text-lg font-bold">Message sent!</h3>
                    <p className="mt-1 text-sm text-ink/60">
                      Thank you for reaching out. We'll respond within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="mt-6 space-y-4"
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-ink/50">
                          First name
                        </span>
                        <input
                          required
                          type="text"
                          className="h-12 w-full rounded-xl bg-sand px-4 text-sm outline-none ring-1 ring-ink/10 focus:ring-2 focus:ring-teal"
                          placeholder="Your first name"
                        />
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-ink/50">
                          Last name
                        </span>
                        <input
                          required
                          type="text"
                          className="h-12 w-full rounded-xl bg-sand px-4 text-sm outline-none ring-1 ring-ink/10 focus:ring-2 focus:ring-teal"
                          placeholder="Your last name"
                        />
                      </label>
                    </div>
                    <label className="block">
                      <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-ink/50">
                        Email address
                      </span>
                      <input
                        required
                        type="email"
                        className="h-12 w-full rounded-xl bg-sand px-4 text-sm outline-none ring-1 ring-ink/10 focus:ring-2 focus:ring-teal"
                        placeholder="you@example.com"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-ink/50">
                        How can we help?
                      </span>
                      <select className="h-12 w-full rounded-xl bg-sand px-4 text-sm outline-none ring-1 ring-ink/10 focus:ring-2 focus:ring-teal">
                        <option>Finding a caregiver</option>
                        <option>Account support</option>
                        <option>Safety concern</option>
                        <option>Partnership inquiry</option>
                        <option>Other</option>
                      </select>
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-ink/50">
                        Message
                      </span>
                      <textarea
                        required
                        rows={4}
                        className="w-full resize-none rounded-xl bg-sand p-4 text-sm outline-none ring-1 ring-ink/10 focus:ring-2 focus:ring-teal"
                        placeholder="Tell us more about your question..."
                      />
                    </label>
                    <Button
                      type="submit"
                      className="h-12 rounded-xl bg-coral px-6 font-bold text-sand hover:bg-coral/90"
                    >
                      Send message <ArrowRight size={16} />
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </AppShell>
  );
}

export function PrivacyPage() {
  const sections = [
    {
      title: "Information We Collect",
      content:
        "We collect information you provide directly, including your name, email, phone number, address, and payment details. We also collect profile information for caregivers, including qualifications, certifications, and work history.",
    },
    {
      title: "How We Use Your Information",
      content:
        "We use your information to facilitate connections between families and caregivers, process payments, communicate updates, improve our services, and ensure platform safety. We never sell your personal data to third parties.",
    },
    {
      title: "Information Sharing",
      content:
        "We share information only as necessary to provide our services: between matched families and caregivers, with payment processors, and with background check providers. Profile information visible to other users is limited to what's needed for care decisions.",
    },
    {
      title: "Data Security",
      content:
        "We implement industry-standard security measures including encryption, access controls, and regular security audits. Payment information is processed by PCI-compliant partners and never stored on our servers.",
    },
    {
      title: "Your Rights",
      content:
        "You have the right to access, correct, or delete your personal data. You can export your data, adjust privacy settings, or close your account at any time. Contact us for assistance with any privacy requests.",
    },
    {
      title: "Cookies & Tracking",
      content:
        "We use essential cookies for site functionality and optional analytics cookies to improve our service. You can manage cookie preferences through your browser settings or our cookie consent tool.",
    },
    {
      title: "Children's Privacy",
      content:
        "Our service is not directed to children under 13. We do not knowingly collect information from children. Caregiver profiles of minors are only created with verifiable parental consent.",
    },
    {
      title: "Changes to This Policy",
      content:
        "We may update this policy periodically. Significant changes will be communicated via email or in-app notification. Continued use after changes constitutes acceptance of the updated policy.",
    },
  ];

  return (
    <AppShell>
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-sand via-sand to-mint/30">
          <div className="mx-auto max-w-[1320px] px-5 py-16 lg:px-8 lg:py-24">
            <div className="max-w-2xl">
              <p className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-coral">
                <span className="h-px w-5 bg-coral" />
                Legal
              </p>
              <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
                Privacy Policy
              </h1>
              <p className="mt-5 text-base leading-7 text-ink/60">
                Your privacy matters to us. This policy explains how we collect, use, and protect your personal information.
              </p>
              <p className="mt-3 text-sm text-ink/45">Last updated: September 1, 2026</p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="bg-surface">
          <div className="mx-auto max-w-[1320px] px-5 py-16 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-3xl">
              <div className="space-y-8">
                {sections.map((section, index) => (
                  <div key={section.title}>
                    <h2 className="font-display text-xl font-bold text-ink">
                      {index + 1}. {section.title}
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-ink/60">{section.content}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 rounded-2xl bg-mint p-6">
                <h3 className="font-display font-bold text-teal">Questions about privacy?</h3>
                <p className="mt-2 text-sm text-ink/60">
                  Contact our privacy team at{" "}
                  <a href="mailto:privacy@kiddocare.com" className="font-semibold text-teal underline">
                    privacy@kiddocare.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </AppShell>
  );
}

export function TermsPage() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content:
        "By accessing or using Kiddocare, you agree to be bound by these Terms of Service. If you do not agree, please do not use our platform. These terms apply to all users, including parents, guardians, and caregivers.",
    },
    {
      title: "Platform Services",
      content:
        "Kiddocare provides a platform connecting families with caregivers. We facilitate introductions, bookings, and payments but are not a childcare agency. Caregivers are independent contractors, not employees of Kiddocare.",
    },
    {
      title: "User Accounts",
      content:
        "You must provide accurate information when creating an account. You are responsible for maintaining account security and all activity under your account. False information may result in account termination.",
    },
    {
      title: "Bookings & Payments",
      content:
        "Bookings are subject to caregiver availability. Payments are processed through our secure platform. Cancellation policies vary by booking type and are disclosed before confirmation. Service fees are non-refundable.",
    },
    {
      title: "User Conduct",
      content:
        "Users agree to treat each other with respect, provide accurate information, and comply with applicable laws. Discrimination, harassment, or fraudulent behavior will result in immediate account suspension.",
    },
    {
      title: "Safety & Vetting",
      content:
        "While we conduct background checks and verify credentials, we cannot guarantee caregiver behavior. Families should exercise their own judgment and follow our safety guidelines. Report any concerns immediately.",
    },
    {
      title: "Limitation of Liability",
      content:
        "Kiddocare provides the platform 'as is' and is not liable for caregiver actions, omissions, or outcomes. Our liability is limited to the fees paid in the preceding 12 months. This does not exclude liability for gross negligence or fraud.",
    },
    {
      title: "Termination",
      content:
        "Either party may terminate their account at any time. We reserve the right to suspend or terminate accounts that violate these terms. Upon termination, outstanding payments remain due and payable.",
    },
  ];

  return (
    <AppShell>
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-sand via-sand to-mint/30">
          <div className="mx-auto max-w-[1320px] px-5 py-16 lg:px-8 lg:py-24">
            <div className="max-w-2xl">
              <p className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-coral">
                <span className="h-px w-5 bg-coral" />
                Legal
              </p>
              <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
                Terms of Service
              </h1>
              <p className="mt-5 text-base leading-7 text-ink/60">
                These terms govern your use of Kiddocare's platform and services. Please read them carefully.
              </p>
              <p className="mt-3 text-sm text-ink/45">Last updated: September 1, 2026</p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="bg-surface">
          <div className="mx-auto max-w-[1320px] px-5 py-16 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-3xl">
              <div className="space-y-8">
                {sections.map((section, index) => (
                  <div key={section.title}>
                    <h2 className="font-display text-xl font-bold text-ink">
                      {index + 1}. {section.title}
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-ink/60">{section.content}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 rounded-2xl bg-mint p-6">
                <h3 className="font-display font-bold text-teal">Need clarification?</h3>
                <p className="mt-2 text-sm text-ink/60">
                  Contact our legal team at{" "}
                  <a href="mailto:legal@kiddocare.com" className="font-semibold text-teal underline">
                    legal@kiddocare.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </AppShell>
  );
}

export function ForCaregiversPage() {
  const benefits = [
    {
      title: "Set your own rates",
      description: "You decide what to charge. Most caregivers earn $20-35/hr on our platform.",
    },
    {
      title: "Choose your schedule",
      description: "Work when you want. Set your availability and only accept bookings that fit.",
    },
    {
      title: "Get paid quickly",
      description: "Payments are processed within 24 hours of completed bookings. No chasing invoices.",
    },
    {
      title: "Build your reputation",
      description: "Collect reviews from happy families and grow your profile organically.",
    },
    {
      title: "Safety support",
      description: "Our team vets every family and provides 24/7 support for any issues.",
    },
    {
      title: "Grow your skills",
      description: "Access free training, certifications, and resources to advance your career.",
    },
  ];

  const requirements = [
    "Must be 18 years or older",
    "Valid government-issued ID",
    "Pass a background check",
    "At least 1 year of childcare experience",
    "Two professional references",
    "Commitment to Kiddocare's safety standards",
  ];

  return (
    <AppShell>
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-teal via-teal to-teal/80">
          <div className="mx-auto max-w-[1320px] px-5 py-16 lg:px-8 lg:py-24">
            <div className="max-w-2xl">
              <p className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-sand/70">
                <span className="h-px w-5 bg-sand/70" />
                For caregivers
              </p>
              <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-sand sm:text-5xl">
                Share your care with families who value it
              </h1>
              <p className="mt-5 text-base leading-7 text-sand/75">
                Join a community of trusted caregivers. Set your own rates, choose your hours, and make a real difference in families' lives.
              </p>
              <div className="mt-8">
                <Button
                  asChild
                  className="h-12 rounded-full bg-coral px-8 font-bold text-sand hover:bg-coral/90"
                >
                  <Link to="/signup">
                    Apply to join <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-surface">
          <div className="mx-auto max-w-[1320px] px-5 py-16 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-ink">
                Why caregivers love Kiddocare
              </h2>
              <p className="mt-4 text-base text-ink/60">
                We built our platform with caregivers in mind. Here's what makes us different.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="rounded-2xl bg-sand p-6 ring-1 ring-ink/10">
                  <Check className="text-teal" size={24} />
                  <h3 className="mt-4 font-display text-base font-bold">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/60">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="bg-subtle">
          <div className="mx-auto max-w-[1320px] px-5 py-16 lg:px-8 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="font-display text-3xl font-bold tracking-tight text-ink">
                  What you'll need to join
                </h2>
                <p className="mt-4 text-base text-ink/60">
                  We keep our standards high to ensure the best experience for everyone. Here's what we look for in caregivers.
                </p>
                <div className="mt-8 space-y-4">
                  {requirements.map((req) => (
                    <div key={req} className="flex items-center gap-3">
                      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-mint">
                        <Check size={14} className="text-teal" />
                      </span>
                      <span className="text-sm font-semibold">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl bg-teal p-8 text-sand">
                <h3 className="font-display text-2xl font-bold">Ready to get started?</h3>
                <p className="mt-3 text-sm leading-6 text-sand/75">
                  The application takes about 10 minutes. Once approved, you can start accepting bookings within 48 hours.
                </p>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 rounded-xl bg-sand/10 p-3">
                    <span className="grid size-8 place-items-center rounded-full bg-sand/20 text-sm font-bold">1</span>
                    <span className="text-sm">Submit your application</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl bg-sand/10 p-3">
                    <span className="grid size-8 place-items-center rounded-full bg-sand/20 text-sm font-bold">2</span>
                    <span className="text-sm">Complete verification</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl bg-sand/10 p-3">
                    <span className="grid size-8 place-items-center rounded-full bg-sand/20 text-sm font-bold">3</span>
                    <span className="text-sm">Start accepting bookings</span>
                  </div>
                </div>
                <Button
                  asChild
                  className="mt-6 h-12 w-full rounded-xl bg-coral font-bold text-sand hover:bg-coral/90"
                >
                  <Link to="/signup">Apply now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </AppShell>
  );
}

export function HelpPage() {
  const categories = [
    {
      title: "Getting Started",
      articles: [
        "How do I create an account?",
        "How do I search for caregivers?",
        "What areas does Kiddocare serve?",
        "Is Kiddocare free for parents?",
      ],
    },
    {
      title: "Booking & Payments",
      articles: [
        "How do I book a caregiver?",
        "What's the cancellation policy?",
        "How does payment work?",
        "Can I get a refund?",
      ],
    },
    {
      title: "Safety & Trust",
      articles: [
        "How are caregivers verified?",
        "What if I have a safety concern?",
        "How do reviews work?",
        "What insurance coverage is provided?",
      ],
    },
    {
      title: "Account & Settings",
      articles: [
        "How do I update my profile?",
        "How do I change my password?",
        "How do I delete my account?",
        "How do notification preferences work?",
      ],
    },
  ];

  const popularFaqs = [
    {
      question: "How do I find a caregiver near me?",
      answer:
        "Use the search bar on our homepage to enter your location and preferred date. You'll see verified caregivers in your area with their availability, rates, and reviews. You can filter by experience, specialties, and more.",
    },
    {
      question: "What if a caregiver cancels?",
      answer:
        "If a caregiver cancels, we'll immediately notify you and help find a replacement. If we can't find a suitable alternative, you'll receive a full refund. We also maintain a list of backup caregivers for emergencies.",
    },
    {
      question: "How do I know caregivers are safe?",
      answer:
        "Every caregiver completes identity verification, background checks, and reference calls before joining. We also verify certifications like CPR and first aid. Reviews from other parents provide additional accountability.",
    },
    {
      question: "Can I meet a caregiver before booking?",
      answer:
        "Absolutely! We encourage meet-and-greets. You can message any caregiver through our platform to schedule a video call or in-person meeting before committing to a booking.",
    },
  ];

  return (
    <AppShell>
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-sand via-sand to-mint/30">
          <div className="mx-auto max-w-[1320px] px-5 py-16 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-coral">
                <span className="h-px w-5 bg-coral" />
                Help Center
              </p>
              <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
                How can we help?
              </h1>
              <p className="mt-5 text-base leading-7 text-ink/60">
                Find answers to common questions about using Kiddocare, booking caregivers, and managing your account.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="bg-surface">
          <div className="mx-auto max-w-[1320px] px-5 py-16 lg:px-8 lg:py-24">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => (
                <div key={category.title} className="rounded-2xl bg-sand p-6 ring-1 ring-ink/10">
                  <span className="grid size-10 place-items-center rounded-xl bg-mint text-teal">
                    <HelpCircle size={20} />
                  </span>
                  <h3 className="mt-4 font-display font-bold">{category.title}</h3>
                  <ul className="mt-3 space-y-2">
                    {category.articles.map((article) => (
                      <li key={article}>
                        <Link to="/help" className="text-sm text-ink/60 hover:text-teal">
                          {article}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular FAQs */}
        <section className="bg-subtle">
          <div className="mx-auto max-w-[1320px] px-5 py-16 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-ink">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-base text-ink/60">
                Quick answers to the questions we hear most often.
              </p>
            </div>
            <div className="mx-auto mt-12 max-w-3xl divide-y divide-ink/10 rounded-2xl bg-surface ring-1 ring-ink/10">
              {popularFaqs.map((faq) => (
                <details key={faq.question} className="group p-6">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-left font-display font-bold text-ink marker:content-['']">
                    {faq.question}
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-mint text-teal transition-transform group-open:rotate-45">
                      <span className="text-lg leading-none">+</span>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-ink/60">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-sand">
          <div className="mx-auto max-w-[1320px] px-5 py-16 lg:px-8 lg:py-24">
            <div className="rounded-2xl bg-teal p-8 text-center sm:p-12">
              <h2 className="font-display text-2xl font-bold text-sand sm:text-3xl">
                Still have questions?
              </h2>
              <p className="mt-3 text-sand/75">
                Our support team is available 7 days a week to help you.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  asChild
                  className="h-12 rounded-full bg-coral px-6 font-bold text-sand hover:bg-coral/90"
                >
                  <Link to="/contact">
                    <Mail size={16} />
                    Contact us
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-full border-sand/40 bg-transparent px-6 font-bold text-sand hover:bg-sand/10"
                >
                  <Link to="/safety">Safety information</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </AppShell>
  );
}
