import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Baby,
  CalendarCheck,
  CalendarDays,
  Check,
  Clock3,
  DollarSign,
  Heart,
  HelpingHand,
  HelpCircle,
  MapPin,
  MessageCircle,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { bookings, caregivers, messages, primaryCaregiver } from "@/lib/mock-data";
import {
  AppShell,
  AuthForm,
  CaregiverCard,
  FilterBar,
  PageFrame,
  TrustBadge,
  WeekCalendar,
} from "@/components/kiddocare";

const testimonials = [
  {
    id: "t1",
    name: "Maya Thompson",
    role: "Mother of two, Brooklyn",
    quote:
      "Kiddocare made finding someone we trust feel effortless. Amara is now part of our family.",
    rating: 5,
    image: "MT",
  },
  {
    id: "t2",
    name: "David Chen",
    role: "Father of three, Park Slope",
    quote:
      "The vetting process gave us real peace of mind. We knew exactly who was walking through our door.",
    rating: 5,
    image: "DC",
  },
  {
    id: "t3",
    name: "Sarah Williams",
    role: "Single mother, Fort Greene",
    quote:
      "Being able to read real parent reviews and see verified badges made all the difference.",
    rating: 5,
    image: "SW",
  },
];

const services = [
  {
    icon: Baby,
    title: "Nanny & Newborn Care",
    description: "Experienced caregivers specialized in newborns, infants, and postpartum support.",
    tags: ["Newborns", "Twins", "Overnight", "Sleep training"],
  },
  {
    icon: HelpingHand,
    title: "Babysitting & Tutoring",
    description: "Reliable sitters who bring homework help, crafts, and a calm presence.",
    tags: ["After-school", "Homework help", "Arts & crafts", "Weekends"],
  },
  {
    icon: Heart,
    title: "Special Needs Care",
    description: "Trained caregivers providing patient, structured support for children with additional needs.",
    tags: ["Sensory play", "Therapy support", "One-on-one", "IEP experience"],
  },
  {
    icon: Users,
    title: "Outdoor & Active Play",
    description: "High-energy caregivers who keep kids moving, curious, and engaged outdoors.",
    tags: ["Outdoor play", "Sports", "Bilingual", "Adventure"],
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Tell us what you need",
    description: "Share your location, schedule, and the type of care your family is looking for.",
    icon: Search,
  },
  {
    step: "02",
    title: "Browse trusted profiles",
    description: "Compare verified caregivers with real parent reviews, badges, and availability.",
    icon: Users,
  },
  {
    step: "03",
    title: "Connect & book",
    description: "Message caregivers, ask questions, and book the one that feels right.",
    icon: CalendarCheck,
  },
];

const stats = [
  { value: "2,400+", label: "Verified caregivers" },
  { value: "15,000+", label: "Families matched" },
  { value: "4.9", label: "Average rating" },
  { value: "98%", label: "Would recommend" },
];

const faqs = [
  {
    question: "How are caregivers verified?",
    answer:
      "Every caregiver completes identity verification, background checks, and relevant safety training before joining Kiddocare. We also verify references from families they've worked with.",
  },
  {
    question: "Can I meet a caregiver before booking?",
    answer:
      "Absolutely! You can message any caregiver through our platform to ask questions, schedule a video call, or arrange an in-person meet-and-greet before committing to a booking.",
  },
  {
    question: "What if a booking doesn't work out?",
    answer:
      "We offer a satisfaction guarantee. If a caregiver isn't the right fit, we'll help you find a replacement at no additional cost. Our support team is available 7 days a week.",
  },
  {
    question: "How much does Kiddocare cost?",
    answer:
      "It's free for parents to browse profiles and message caregivers. Caregivers set their own rates (typically $18–$35/hr), and we add a small service fee to cover platform and insurance costs.",
  },
];

export function DiscoveryPage() {
  return (
    <AppShell active="discover">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sand via-sand to-mint/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-[1320px] px-5 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="kc-rise">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-coral/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-coral">
                <span className="h-1.5 w-1.5 rounded-full bg-coral" />
                Trusted by 15,000+ families
              </p>
              <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
                Find care that feels like{" "}
                <span className="text-teal">family</span>
              </h1>
              <p className="mt-5 max-w-lg text-base leading-7 text-ink/60 sm:text-lg">
                Compare trusted local caregivers by experience, availability, and real parent reviews. Every profile is verified, every match is thoughtful.
              </p>
              <div className="mt-8">
                <FilterBar />
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-ink/55">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={15} className="text-teal" />
                  Background checked
                </span>
                <span className="flex items-center gap-1.5">
                  <Star size={15} fill="currentColor" className="text-coral" />
                  4.9 avg rating
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={15} className="text-teal" />
                  50+ neighborhoods
                </span>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl bg-mint/40" />
              <div className="relative grid gap-4">
                <div className="rounded-2xl bg-surface p-5 shadow-xl ring-1 ring-ink/10">
                  <div className="flex items-center gap-3">
                    <img
                      src={caregivers[0].image}
                      alt={caregivers[0].name}
                      className="size-14 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-display font-bold">{caregivers[0].name}</h3>
                        <TrustBadge>Verified</TrustBadge>
                      </div>
                      <p className="text-xs text-ink/55">{caregivers[0].role}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-display text-lg font-bold text-coral">${caregivers[0].rate}/hr</p>
                      <p className="text-xs text-ink/45">{caregivers[0].distance}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-coral">
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <span className="ml-2 text-xs font-bold text-ink">{caregivers[0].rating}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-teal p-5 text-sand">
                    <ShieldCheck size={24} />
                    <p className="mt-3 font-display text-2xl font-bold">2,400+</p>
                    <p className="text-xs text-sand/70">Verified caregivers</p>
                  </div>
                  <div className="rounded-2xl bg-coral p-5 text-sand">
                    <Heart size={24} />
                    <p className="mt-3 font-display text-2xl font-bold">15K+</p>
                    <p className="text-xs text-sand/70">Happy families</p>
                  </div>
                </div>
                <div className="rounded-2xl bg-surface p-4 shadow-lg ring-1 ring-ink/10">
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-full bg-mint text-teal">
                      <Check size={18} />
                    </span>
                    <div>
                      <p className="text-sm font-bold">Booking confirmed</p>
                      <p className="text-xs text-ink/50">Amara · Tomorrow, 3:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-ink/10 bg-surface">
        <div className="mx-auto max-w-[1320px] px-5 py-10 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl font-bold text-teal sm:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm text-ink/55">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-sand">
        <div className="mx-auto max-w-[1320px] px-5 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-coral">
              <span className="h-px w-5 bg-coral" />
              How it works
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Finding care in three simple steps
            </h2>
            <p className="mt-4 text-base text-ink/60">
              We've made it easy to find the right caregiver for your family. No guesswork, no stress.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {howItWorks.map((item, index) => (
              <div
                key={item.step}
                className="relative rounded-2xl bg-surface p-6 ring-1 ring-ink/10"
              >
                <span className="absolute -top-3 left-6 rounded-full bg-coral px-3 py-1 text-[10px] font-bold text-sand">
                  Step {item.step}
                </span>
                <span className="mt-2 grid size-12 place-items-center rounded-xl bg-mint text-teal">
                  <item.icon size={22} />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/60">{item.description}</p>
                {index < howItWorks.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-1/2 hidden size-6 -translate-y-1/2 text-ink/20 md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-subtle">
        <div className="mx-auto max-w-[1320px] px-5 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-coral">
              <span className="h-px w-5 bg-coral" />
              Our services
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Care for every family's needs
            </h2>
            <p className="mt-4 text-base text-ink/60">
              From newborn care to after-school support, find specialized caregivers for every stage.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="kc-lift rounded-2xl bg-surface p-6 ring-1 ring-ink/10"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-mint text-teal">
                  <service.icon size={22} />
                </span>
                <h3 className="mt-4 font-display text-base font-bold">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/60">{service.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-sand px-2 py-0.5 text-[10px] font-semibold text-ink/55 ring-1 ring-ink/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Caregivers Section */}
      <section className="bg-sand">
        <div className="mx-auto max-w-[1320px] px-5 py-16 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-coral">
                <span className="h-px w-5 bg-coral" />
                Featured caregivers
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Top-rated caregivers near you
              </h2>
              <p className="mt-3 max-w-lg text-sm text-ink/60">
                Handpicked caregivers with outstanding reviews and verified credentials.
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-ink/15 font-bold text-ink"
            >
              <Link to="/caregivers">
                View all caregivers <ArrowRight size={15} />
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {caregivers.map((caregiver) => (
              <CaregiverCard key={caregiver.id} caregiver={caregiver} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Safety Section */}
      <section className="bg-teal">
        <div className="mx-auto max-w-[1320px] px-5 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-sand/70">
                <span className="h-px w-5 bg-sand/70" />
                Safety first
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-sand sm:text-4xl">
                Every profile, clearly checked
              </h2>
              <p className="mt-4 text-base leading-7 text-sand/75">
                Identity, references, and safety training are reviewed before a caregiver joins Kiddocare. We believe trust should be visible, not assumed.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { title: "Identity verified", desc: "Government ID and background checks" },
                  { title: "References checked", desc: "Real feedback from real families" },
                  { title: "Safety trained", desc: "CPR, first aid, and childcare certifications" },
                  { title: "Ongoing reviews", desc: "Community feedback after every booking" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-sand/20">
                      <Check size={14} className="text-sand" />
                    </span>
                    <div>
                      <p className="font-bold text-sand">{item.title}</p>
                      <p className="text-sm text-sand/65">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                asChild
                className="mt-8 rounded-full bg-coral px-6 font-bold text-sand hover:bg-coral/90"
              >
                <Link to="/safety">
                  Learn about our safety process <ArrowRight size={15} />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4">
              <div className="rounded-2xl bg-sand/10 p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <span className="grid size-12 place-items-center rounded-xl bg-sand/20">
                    <ShieldCheck size={24} className="text-sand" />
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold text-sand">Background Checked</p>
                    <p className="text-sm text-sand/65">Verified by Checkr</p>
                  </div>
                  <Check size={20} className="ml-auto text-mint" />
                </div>
              </div>
              <div className="rounded-2xl bg-sand/10 p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <span className="grid size-12 place-items-center rounded-xl bg-sand/20">
                    <Star size={24} className="text-sand" />
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold text-sand">5.0 Rating</p>
                    <p className="text-sm text-sand/65">34 parent reviews</p>
                  </div>
                  <Check size={20} className="ml-auto text-mint" />
                </div>
              </div>
              <div className="rounded-2xl bg-sand/10 p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <span className="grid size-12 place-items-center rounded-xl bg-sand/20">
                    <Heart size={24} className="text-sand" />
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold text-sand">CPR Certified</p>
                    <p className="text-sm text-sand/65">First aid trained</p>
                  </div>
                  <Check size={20} className="ml-auto text-mint" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-sand">
        <div className="mx-auto max-w-[1320px] px-5 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-coral">
              <span className="h-px w-5 bg-coral" />
              What parents say
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Loved by families everywhere
            </h2>
            <p className="mt-4 text-base text-ink/60">
              Real stories from real parents who found their perfect match on Kiddocare.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.id}
                className="rounded-2xl bg-surface p-6 ring-1 ring-ink/10"
              >
                <div className="flex gap-1 text-coral">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-6 text-ink/70">"{testimonial.quote}"</p>
                <div className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-4">
                  <span className="grid size-10 place-items-center rounded-full bg-mint font-display text-sm font-bold text-teal">
                    {testimonial.image}
                  </span>
                  <div>
                    <p className="text-sm font-bold">{testimonial.name}</p>
                    <p className="text-xs text-ink/50">{testimonial.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-subtle">
        <div className="mx-auto max-w-[1320px] px-5 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-coral">
              <span className="h-px w-5 bg-coral" />
              FAQ
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Questions? We've got answers
            </h2>
            <p className="mt-4 text-base text-ink/60">
              Everything you need to know about finding care on Kiddocare.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-3xl divide-y divide-ink/10 rounded-2xl bg-surface ring-1 ring-ink/10">
            {faqs.map((faq) => (
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

      {/* CTA Section */}
      <section className="bg-coral">
        <div className="mx-auto max-w-[1320px] px-5 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-sand sm:text-4xl">
              Ready to find your family's perfect match?
            </h2>
            <p className="mt-4 text-base text-sand/80">
              Join thousands of parents who've found trusted childcare through Kiddocare. It's free to get started.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                asChild
                className="h-12 rounded-full bg-sand px-8 font-bold text-ink hover:bg-sand/90"
              >
                <Link to="/signup">
                  Create free account <ArrowRight size={16} />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full border-sand/40 bg-transparent px-8 font-bold text-sand hover:bg-sand/10"
              >
                <Link to="/caregivers">Browse caregivers</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </AppShell>
  );
}

export function CaregiversPage() {
  return (
    <AppShell active="caregivers">
      <PageFrame
        eyebrow="The local care network"
        title="Caregivers parents come back to"
        description="Read real parent feedback, check the details, and choose someone who feels right for your family."
      >
        <div className="mb-6 flex flex-wrap gap-2">
          <span className="rounded-full bg-teal px-3 py-2 text-xs font-bold text-sand">
            All caregivers
          </span>
          <span className="rounded-full bg-surface px-3 py-2 text-xs font-bold text-ink/60 ring-1 ring-ink/10">
            Highest rated
          </span>
          <span className="rounded-full bg-surface px-3 py-2 text-xs font-bold text-ink/60 ring-1 ring-ink/10">
            Available today
          </span>
          <span className="rounded-full bg-surface px-3 py-2 text-xs font-bold text-ink/60 ring-1 ring-ink/10">
            Specialist care
          </span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {caregivers.map((caregiver) => (
            <CaregiverCard key={caregiver.id} caregiver={caregiver} />
          ))}
        </div>
      </PageFrame>
    </AppShell>
  );
}

export function CaregiverProfilePage({ caregiverId }: { caregiverId: string }) {
  const caregiver = caregivers.find((item) => item.id === caregiverId) ?? primaryCaregiver;
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const availabilityCalendar = [
    { day: "Mon", date: "10", status: "open" },
    { day: "Tue", date: "11", status: "open" },
    { day: "Wed", date: "12", status: "booked" },
    { day: "Thu", date: "13", status: "open" },
    { day: "Fri", date: "14", status: "open" },
    { day: "Sat", date: "15", status: "booked" },
    { day: "Sun", date: "16", status: "open" },
  ];

  const similarCaregivers = caregivers.filter((c) => c.id !== caregiver.id).slice(0, 3);

  return (
    <AppShell active="caregivers">
      <main className="mx-auto max-w-[1320px] px-5 py-8 lg:px-8 lg:py-10">
        <Link to="/caregivers" className="text-sm font-bold text-teal">
          ← Back to caregivers
        </Link>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_380px]">
          <section className="rounded-2xl bg-surface p-6 ring-1 ring-ink/10 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <img
                src={caregiver.image}
                alt={`${caregiver.name} profile`}
                className="size-28 rounded-2xl object-cover"
              />
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="font-display text-3xl font-bold">{caregiver.name}</h1>
                  <TrustBadge>Trusted profile</TrustBadge>
                </div>
                <p className="mt-2 text-sm text-ink/55">
                  {caregiver.role} · {caregiver.neighborhood}
                </p>
                <div className="mt-3 flex items-center gap-3 text-sm">
                  <span className="inline-flex items-center gap-1 font-bold text-coral">
                    <Star size={15} fill="currentColor" />
                    {caregiver.rating}
                  </span>
                  <span className="text-ink/50">{caregiver.reviews} parent reviews</span>
                  <span className="text-ink/50">{caregiver.experience} experience</span>
                </div>
              </div>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-mint p-4">
                <ShieldCheck className="text-teal" size={20} />
                <p className="mt-3 text-xs font-bold text-teal">{caregiver.badges[0]}</p>
              </div>
              <div className="rounded-xl bg-mint p-4">
                <Check className="text-teal" size={20} />
                <p className="mt-3 text-xs font-bold text-teal">{caregiver.badges[1]}</p>
              </div>
              <div className="rounded-xl bg-mint p-4">
                <Clock3 className="text-teal" size={20} />
                <p className="mt-3 text-xs font-bold text-teal">Replies in under an hour</p>
              </div>
            </div>
            <h2 className="mt-8 font-display text-xl font-bold">
              About {caregiver.name.split(" ")[0]}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-ink/65">{caregiver.bio}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {caregiver.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-sand px-3 py-2 text-xs font-bold text-ink/60 ring-1 ring-ink/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Availability Calendar */}
            <div className="mt-8 border-t border-ink/10 pt-6">
              <h2 className="font-display text-xl font-bold">Availability</h2>
              <div className="mt-4 grid grid-cols-7 gap-2">
                {availabilityCalendar.map((day) => (
                  <button
                    key={day.date}
                    onClick={() => day.status === "open" && setSelectedDate(day.date)}
                    disabled={day.status === "booked"}
                    className={`grid h-16 place-items-center rounded-xl text-center transition-colors ${selectedDate === day.date ? "bg-coral text-sand" : day.status === "open" ? "bg-mint text-teal hover:bg-mint/70" : "bg-ink/5 text-ink/35 cursor-not-allowed"}`}
                  >
                    <span className="text-[9px] font-bold tracking-wide">{day.day}</span>
                    <span className="font-display text-sm font-bold">{day.date}</span>
                  </button>
                ))}
              </div>
              <p className="mt-3 text-xs text-ink/50">
                {selectedDate ? `Selected: June ${selectedDate}` : "Click an available date to select"}
              </p>
            </div>

            <div className="mt-8 border-t border-ink/10 pt-6">
              <h2 className="font-display text-xl font-bold">What parents say</h2>
              <div className="mt-4 rounded-xl bg-sand p-5">
                <div className="flex items-center gap-1 text-coral">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
                <p className="mt-3 text-sm leading-6 text-ink/70">
                  "Warm, communicative, and exactly the calm presence our evenings needed."
                </p>
                <p className="mt-3 text-xs font-bold text-ink/45">- Maya, parent in Brooklyn</p>
              </div>
              <div className="mt-4 rounded-xl bg-sand p-5">
                <div className="flex items-center gap-1 text-coral">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
                <p className="mt-3 text-sm leading-6 text-ink/70">
                  "Professional and caring. Our kids always look forward to days with {caregiver.name.split(" ")[0]}!"
                </p>
                <p className="mt-3 text-xs font-bold text-ink/45">- David, parent in Park Slope</p>
              </div>
            </div>
          </section>
          <aside className="space-y-5">
            <div className="sticky top-24 rounded-2xl bg-teal p-6 text-sand">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-sand/65">
                From ${caregiver.rate} / hour
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold">
                See if it feels like a match.
              </h2>
              <p className="mt-2 text-sm leading-6 text-sand/75">
                Message {caregiver.name.split(" ")[0]} or request a time that works for your family.
              </p>
              <div className="mt-6 space-y-3">
                <Button
                  asChild
                  className="h-12 w-full rounded-xl bg-coral font-bold text-sand hover:bg-coral/90"
                >
                  <Link to="/bookings/new">
                    Book now <ArrowRight size={16} />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 w-full rounded-xl border-sand/30 bg-transparent font-bold text-sand hover:bg-sand/10"
                >
                  <Link to="/messages">
                    <MessageCircle size={16} />
                    Send a message
                  </Link>
                </Button>
              </div>
            </div>
          </aside>
        </div>

        {/* Similar Caregivers */}
        {similarCaregivers.length > 0 && (
          <div className="mt-10">
            <h2 className="font-display text-xl font-bold">Similar caregivers</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {similarCaregivers.map((c) => (
                <CaregiverCard key={c.id} caregiver={c} />
              ))}
            </div>
          </div>
        )}
      </main>
    </AppShell>
  );
}

export function BookingsPage() {
  return (
    <AppShell active="bookings">
      <PageFrame
        eyebrow="Your care plan"
        title="Bookings"
        description="Keep every upcoming care moment in one calm, clear place."
        action={
          <Button asChild className="rounded-xl bg-coral font-bold text-sand hover:bg-coral/90">
            <Link to="/bookings/new">
              Find care <ArrowRight size={15} />
            </Link>
          </Button>
        }
      >
        <div className="grid gap-4">
          {bookings.map((booking) => (
            <article
              key={booking.id}
              className="flex flex-col gap-5 rounded-2xl bg-surface p-5 ring-1 ring-ink/10 sm:flex-row sm:items-center"
            >
              <img
                src={booking.caregiver.image}
                alt={`${booking.caregiver.name} profile`}
                className="size-16 rounded-xl object-cover"
              />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="font-display text-lg font-bold">{booking.type}</h2>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${booking.status === "Confirmed" ? "bg-mint text-teal" : "bg-coral/10 text-coral"}`}
                  >
                    {booking.status}
                  </span>
                </div>
                <p className="mt-1 text-sm text-ink/55">
                  With {booking.caregiver.name} · {booking.date} · {booking.time}
                </p>
              </div>
              <span className="font-display text-lg font-bold">{booking.total}</span>
            </article>
          ))}
        </div>
      </PageFrame>
    </AppShell>
  );
}

export function NewBookingPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <AppShell>
      <PageFrame
        eyebrow="Request care"
        title="Plan a care moment"
        description="Choose a caregiver, share the essentials, and send a request in under two minutes."
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
            className="rounded-2xl bg-surface p-6 ring-1 ring-ink/10 sm:p-8"
          >
            <h2 className="font-display text-xl font-bold">Your request</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-ink/50">
                  Caregiver
                </span>
                <select className="h-12 w-full rounded-xl bg-sand px-4 text-sm font-semibold outline-none ring-1 ring-ink/10">
                  <option>Amara Reynolds</option>
                  <option>Devon Marsh</option>
                  <option>Priya Nair</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-ink/50">
                  Date
                </span>
                <input
                  required
                  type="date"
                  className="h-12 w-full rounded-xl bg-sand px-4 text-sm font-semibold outline-none ring-1 ring-ink/10"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-ink/50">
                  Start time
                </span>
                <input
                  required
                  type="time"
                  className="h-12 w-full rounded-xl bg-sand px-4 text-sm font-semibold outline-none ring-1 ring-ink/10"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-ink/50">
                  End time
                </span>
                <input
                  required
                  type="time"
                  className="h-12 w-full rounded-xl bg-sand px-4 text-sm font-semibold outline-none ring-1 ring-ink/10"
                />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-ink/50">
                A note for your caregiver
              </span>
              <textarea
                rows={4}
                placeholder="Tell them about your children, routine, or anything helpful..."
                className="w-full resize-none rounded-xl bg-sand p-4 text-sm outline-none ring-1 ring-ink/10"
              />
            </label>
            {submitted ? (
              <div className="mt-5 rounded-xl bg-mint p-4 text-sm font-bold text-teal">
                <Check className="mb-2" size={18} />
                Request sent. We’ll let you know when Amara replies.
              </div>
            ) : (
              <Button
                type="submit"
                className="mt-5 h-12 rounded-xl bg-coral px-6 font-bold text-sand hover:bg-coral/90"
              >
                Send booking request <ArrowRight size={16} />
              </Button>
            )}
          </form>
          <WeekCalendar interactive />
        </div>
      </PageFrame>
    </AppShell>
  );
}

export function MessagesPage() {
  const [selectedThread, setSelectedThread] = useState<string | null>(null);
  const [messageInput, setMessageInput] = useState("");
  const [threadData, setThreadData] = useState(messages);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const activeThread = threadData.find((t) => t.id === selectedThread);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [activeThread?.messages.length]);

  useEffect(() => {
    if (selectedThread) {
      setThreadData((prev) =>
        prev.map((t) => (t.id === selectedThread ? { ...t, unread: false } : t)),
      );
    }
  }, [selectedThread]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim() || !selectedThread) return;

    const newMessage = {
      id: `msg-${Date.now()}`,
      sender: "user" as const,
      text: messageInput.trim(),
      time: new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
    };

    setThreadData((prev) =>
      prev.map((t) =>
        t.id === selectedThread
          ? {
              ...t,
              messages: [...t.messages, newMessage],
              preview: messageInput.trim(),
              time: "Just now",
            }
          : t,
      ),
    );
    setMessageInput("");
  };

  const handleBack = () => {
    setSelectedThread(null);
  };

  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (selectedThread && activeThread) {
      const lastMessage = activeThread.messages[activeThread.messages.length - 1];
      if (lastMessage?.sender === "user") {
        const timer = setTimeout(() => {
          setIsTyping(true);
          setTimeout(() => setIsTyping(false), 2000);
        }, 1000);
        return () => clearTimeout(timer);
      }
    }
    setIsTyping(false);
  }, [activeThread?.messages.length, selectedThread]);

  return (
    <AppShell active="messages">
      <main className="mx-auto flex max-w-[1320px] flex-1 flex-col px-5 py-6 lg:px-8 lg:py-8">
        <div className="mb-6">
          <h1 className="font-display text-2xl font-bold tracking-tight text-ink">Messages</h1>
          <p className="mt-1 text-sm text-ink/55">
            Your conversations with caregivers
          </p>
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-1 overflow-hidden rounded-2xl bg-surface ring-1 ring-ink/10 lg:grid-cols-[340px_1fr]">
          {/* Conversation List */}
          <div
            className={`flex flex-col border-ink/10 bg-surface lg:border-r ${selectedThread ? "hidden lg:flex" : "flex"}`}
          >
            <div className="border-b border-ink/10 p-4">
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/35" />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  className="h-10 w-full rounded-xl bg-sand pl-10 pr-4 text-sm outline-none ring-1 ring-ink/10 focus:ring-2 focus:ring-teal"
                />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              {threadData.map((thread) => (
                <button
                  key={thread.id}
                  onClick={() => setSelectedThread(thread.id)}
                  className={`flex w-full items-start gap-3 border-b border-ink/5 p-4 text-left transition-colors hover:bg-sand ${selectedThread === thread.id ? "bg-mint/50" : ""}`}
                >
                  <img
                    src={thread.caregiver.image}
                    alt={thread.caregiver.name}
                    className="size-12 shrink-0 rounded-xl object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h2 className={`font-display text-sm ${thread.unread ? "font-bold" : "font-semibold"}`}>
                        {thread.caregiver.name}
                      </h2>
                      <span className="shrink-0 text-[11px] text-ink/40">{thread.time}</span>
                    </div>
                    <p className={`mt-0.5 truncate text-xs ${thread.unread ? "font-semibold text-ink" : "text-ink/50"}`}>
                      {thread.preview}
                    </p>
                  </div>
                  {thread.unread && (
                    <span className="mt-1 size-2.5 shrink-0 rounded-full bg-coral" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Chat View */}
          <div
            className={`flex min-h-0 flex-1 flex-col ${selectedThread ? "flex" : "hidden lg:flex"}`}
          >
            {activeThread ? (
              <>
                {/* Chat Header */}
                <div className="flex shrink-0 items-center gap-3 border-b border-ink/10 p-4">
                  <button
                    onClick={handleBack}
                    className="grid size-8 place-items-center rounded-full hover:bg-ink/5 lg:hidden"
                    aria-label="Back to conversations"
                  >
                    <ArrowLeft size={18} />
                  </button>
                  <img
                    src={activeThread.caregiver.image}
                    alt={activeThread.caregiver.name}
                    className="size-10 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <h2 className="font-display text-sm font-bold">{activeThread.caregiver.name}</h2>
                    <p className="text-xs text-ink/50">{activeThread.caregiver.role}</p>
                  </div>
                  <Link
                    to="/caregivers/$caregiverId"
                    params={{ caregiverId: activeThread.caregiver.id }}
                    className="rounded-lg px-3 py-1.5 text-xs font-semibold text-teal hover:bg-mint/50"
                  >
                    View profile
                  </Link>
                </div>

                {/* Messages */}
                <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-4">
                  <div className="flex min-h-full flex-col justify-end gap-3">
                    {activeThread.messages.map((msg, index) => {
                      const isLast = index === activeThread.messages.length - 1;
                      return (
                        <div
                          key={msg.id}
                          className={`flex w-full ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div className="max-w-[75%]">
                            <div
                              className={`rounded-2xl px-4 py-2.5 ${
                                msg.sender === "user"
                                  ? "bg-coral text-sand rounded-br-md"
                                  : "bg-sand text-ink ring-1 ring-ink/10 rounded-bl-md"
                              }`}
                            >
                              <p className="text-sm leading-relaxed">{msg.text}</p>
                            </div>
                            <div className={`mt-1 flex items-center gap-1 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                              <p className={`text-[10px] ${msg.sender === "user" ? "text-ink/40" : "text-ink/35"}`}>
                                {msg.time}
                              </p>
                              {msg.sender === "user" && isLast && (
                                <span className="text-[10px] font-semibold text-teal">Read</span>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    {/* Typing indicator */}
                    {isTyping && (
                      <div className="flex w-full justify-start">
                        <div className="rounded-2xl rounded-bl-md bg-sand px-4 py-3 ring-1 ring-ink/10">
                          <div className="flex gap-1">
                            <span className="size-2 animate-bounce rounded-full bg-ink/30" style={{ animationDelay: "0ms" }} />
                            <span className="size-2 animate-bounce rounded-full bg-ink/30" style={{ animationDelay: "150ms" }} />
                            <span className="size-2 animate-bounce rounded-full bg-ink/30" style={{ animationDelay: "300ms" }} />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Message Input */}
                <form
                  onSubmit={handleSendMessage}
                  className="shrink-0 border-t border-ink/10 p-4"
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      placeholder="Type a message..."
                      className="h-11 flex-1 rounded-xl bg-sand px-4 text-sm outline-none ring-1 ring-ink/10 focus:ring-2 focus:ring-teal"
                    />
                    <Button
                      type="submit"
                      disabled={!messageInput.trim()}
                      className="h-11 rounded-xl bg-coral px-4 font-bold text-sand hover:bg-coral/90 disabled:opacity-50"
                    >
                      <Send size={16} />
                    </Button>
                  </div>
                </form>
              </>
            ) : (
              <div className="flex flex-1 flex-col items-center justify-center p-8 text-center">
                <span className="grid size-16 place-items-center rounded-2xl bg-mint text-teal">
                  <MessageCircle size={28} />
                </span>
                <h2 className="mt-4 font-display text-lg font-bold">Your messages</h2>
                <p className="mt-2 max-w-sm text-sm text-ink/55">
                  Select a conversation from the list to start chatting with a caregiver.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </AppShell>
  );
}

export function DashboardPage() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  const upcomingBookings = bookings.filter((b) => b.status === "Confirmed" || b.status === "Pending");
  const unreadCount = messages.filter((m) => m.unread).length;
  const totalSpent = bookings.reduce((sum, b) => sum + parseInt(b.total.replace("$", "")), 0);

  const quickStats = [
    { label: "Upcoming bookings", value: upcomingBookings.length.toString(), icon: CalendarDays, color: "bg-teal text-sand" },
    { label: "Unread messages", value: unreadCount.toString(), icon: MessageCircle, color: "bg-coral text-sand" },
    { label: "Saved caregivers", value: caregivers.length.toString(), icon: Heart, color: "bg-mint text-teal" },
    { label: "Total spent", value: `$${totalSpent}`, icon: Sparkles, color: "bg-ink text-sand" },
  ];

  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const schedule = [
    { day: "Mon", hasBooking: false },
    { day: "Tue", hasBooking: false },
    { day: "Wed", hasBooking: true, type: "After-school" },
    { day: "Thu", hasBooking: true, type: "Overnight" },
    { day: "Fri", hasBooking: false },
    { day: "Sat", hasBooking: true, type: "After-school" },
    { day: "Sun", hasBooking: false },
  ];

  return (
    <AppShell>
      <main className="mx-auto max-w-[1320px] px-5 py-6 lg:px-8 lg:py-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-coral">
              {getGreeting()}, Emma
            </p>
            <h1 className="mt-1 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Your care dashboard
            </h1>
            <p className="mt-1 text-sm text-ink/55">
              Everything you need for the week ahead, in one place.
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              asChild
              className="rounded-xl bg-coral px-4 text-sm font-bold text-sand hover:bg-coral/90"
            >
              <Link to="/bookings/new">
                <CalendarDays size={16} />
                Book care
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-xl border-ink/15 px-4 text-sm font-bold text-ink"
            >
              <Link to="/messages">
                <MessageCircle size={16} />
                Messages
              </Link>
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {quickStats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-surface p-4 ring-1 ring-ink/10">
              <div className="flex items-center justify-between">
                <span className={`grid size-9 place-items-center rounded-lg ${stat.color}`}>
                  <stat.icon size={18} />
                </span>
              </div>
              <p className="mt-3 font-display text-2xl font-bold text-ink">{stat.value}</p>
              <p className="text-xs text-ink/50">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Next Booking Card */}
            {upcomingBookings[0] && (
              <section className="rounded-2xl bg-teal p-6 text-sand">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-sand/65">
                      Next booking
                    </p>
                    <h2 className="mt-2 font-display text-xl font-bold sm:text-2xl">
                      {upcomingBookings[0].type} with {upcomingBookings[0].caregiver.name.split(" ")[0]}
                    </h2>
                    <p className="mt-1 text-sm text-sand/75">
                      {upcomingBookings[0].date} · {upcomingBookings[0].time}
                    </p>
                  </div>
                  <span className="rounded-full bg-sand/20 px-2.5 py-1 text-[10px] font-bold">
                    {upcomingBookings[0].status}
                  </span>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <img
                    src={upcomingBookings[0].caregiver.image}
                    alt={upcomingBookings[0].caregiver.name}
                    className="size-12 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-bold">{upcomingBookings[0].caregiver.name}</p>
                    <p className="text-xs text-sand/65">{upcomingBookings[0].caregiver.role}</p>
                  </div>
                  <span className="font-display text-lg font-bold">{upcomingBookings[0].total}</span>
                </div>
                <div className="mt-6 flex gap-2">
                  <Button
                    asChild
                    className="rounded-xl bg-coral px-4 text-sm font-bold text-sand hover:bg-coral/90"
                  >
                    <Link to="/bookings">
                      View details <ArrowRight size={15} />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-xl border-sand/30 bg-transparent text-sm font-bold text-sand hover:bg-sand/10"
                  >
                    <Link to="/messages">
                      <MessageCircle size={15} />
                      Message
                    </Link>
                  </Button>
                </div>
              </section>
            )}

            {/* All Bookings */}
            <section className="rounded-2xl bg-surface p-5 ring-1 ring-ink/10">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-lg font-bold">Your bookings</h2>
                <div className="flex gap-1 rounded-lg bg-sand p-1">
                  <button
                    onClick={() => setActiveTab("upcoming")}
                    className={`rounded-md px-3 py-1 text-xs font-semibold transition-colors ${activeTab === "upcoming" ? "bg-surface text-ink shadow-sm" : "text-ink/50"}`}
                  >
                    Upcoming
                  </button>
                  <button
                    onClick={() => setActiveTab("past")}
                    className={`rounded-md px-3 py-1 text-xs font-semibold transition-colors ${activeTab === "past" ? "bg-surface text-ink shadow-sm" : "text-ink/50"}`}
                  >
                    Past
                  </button>
                </div>
              </div>
              <div className="mt-4 space-y-3">
                {activeTab === "upcoming" ? (
                  upcomingBookings.length > 0 ? (
                    upcomingBookings.map((booking) => (
                      <div
                        key={booking.id}
                        className="flex items-center gap-3 rounded-xl bg-sand p-3"
                      >
                        <img
                          src={booking.caregiver.image}
                          alt={booking.caregiver.name}
                          className="size-11 rounded-lg object-cover"
                        />
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="text-sm font-bold">{booking.type}</h3>
                            <span
                              className={`rounded-full px-2 py-0.5 text-[9px] font-bold ${booking.status === "Confirmed" ? "bg-mint text-teal" : "bg-coral/10 text-coral"}`}
                            >
                              {booking.status}
                            </span>
                          </div>
                          <p className="truncate text-xs text-ink/50">
                            {booking.caregiver.name} · {booking.date} · {booking.time}
                          </p>
                        </div>
                        <span className="font-display font-bold">{booking.total}</span>
                      </div>
                    ))
                  ) : (
                    <p className="py-6 text-center text-sm text-ink/40">No upcoming bookings</p>
                  )
                ) : (
                  <p className="py-6 text-center text-sm text-ink/40">No past bookings</p>
                )}
              </div>
              <Button
                asChild
                variant="ghost"
                className="mt-3 w-full text-sm font-semibold text-teal"
              >
                <Link to="/bookings">
                  View all bookings <ArrowRight size={14} />
                </Link>
              </Button>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Weekly Schedule */}
            <section className="rounded-2xl bg-surface p-5 ring-1 ring-ink/10">
              <h2 className="font-display text-lg font-bold">This week</h2>
              <div className="mt-4 grid grid-cols-7 gap-1">
                {weekDays.map((day, index) => (
                  <div key={day} className="text-center">
                    <p className="text-[10px] font-bold text-ink/40">{day}</p>
                    <div
                      className={`mx-auto mt-1 grid size-8 place-items-center rounded-full text-xs font-bold ${schedule[index].hasBooking ? "bg-coral text-sand" : "bg-sand text-ink/50"}`}
                    >
                      {10 + index}
                    </div>
                    {schedule[index].hasBooking && (
                      <p className="mt-1 truncate text-[8px] font-semibold text-coral">
                        {schedule[index].type}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Recent Messages */}
            <section className="rounded-2xl bg-surface p-5 ring-1 ring-ink/10">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-lg font-bold">Recent messages</h2>
                {unreadCount > 0 && (
                  <span className="grid size-5 place-items-center rounded-full bg-coral text-[10px] font-bold text-sand">
                    {unreadCount}
                  </span>
                )}
              </div>
              <div className="mt-4 space-y-3">
                {messages.slice(0, 3).map((thread) => (
                  <Link
                    key={thread.id}
                    to="/messages"
                    className="flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-sand"
                  >
                    <img
                      src={thread.caregiver.image}
                      alt={thread.caregiver.name}
                      className="size-10 rounded-lg object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className={`text-sm ${thread.unread ? "font-bold" : "font-semibold"}`}>
                          {thread.caregiver.name}
                        </h3>
                        <span className="text-[10px] text-ink/40">{thread.time}</span>
                      </div>
                      <p className={`truncate text-xs ${thread.unread ? "font-medium text-ink" : "text-ink/50"}`}>
                        {thread.preview}
                      </p>
                    </div>
                    {thread.unread && <span className="size-2 rounded-full bg-coral" />}
                  </Link>
                ))}
              </div>
              <Button
                asChild
                variant="ghost"
                className="mt-3 w-full text-sm font-semibold text-teal"
              >
                <Link to="/messages">
                  Open messages <ArrowRight size={14} />
                </Link>
              </Button>
            </section>

            {/* Saved Caregivers */}
            <section className="rounded-2xl bg-surface p-5 ring-1 ring-ink/10">
              <h2 className="font-display text-lg font-bold">Saved caregivers</h2>
              <div className="mt-4 space-y-3">
                {caregivers.slice(0, 3).map((caregiver) => (
                  <div key={caregiver.id} className="flex items-center gap-3">
                    <img
                      src={caregiver.image}
                      alt={caregiver.name}
                      className="size-10 rounded-lg object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <Link
                        to="/caregivers/$caregiverId"
                        params={{ caregiverId: caregiver.id }}
                        className="text-sm font-bold hover:text-teal"
                      >
                        {caregiver.name}
                      </Link>
                      <p className="text-xs text-ink/50">{caregiver.role}</p>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-coral">
                      <Star size={12} fill="currentColor" />
                      <span className="font-bold">{caregiver.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                asChild
                variant="ghost"
                className="mt-3 w-full text-sm font-semibold text-teal"
              >
                <Link to="/caregivers">
                  Browse all <ArrowRight size={14} />
                </Link>
              </Button>
            </section>
          </div>
        </div>
      </main>
    </AppShell>
  );
}

export function AuthPage({ mode }: { mode: "login" | "signup" }) {
  return (
    <div className="min-h-screen bg-sand">
      <main className="mx-auto grid min-h-screen max-w-[1320px] items-center gap-8 px-5 py-10 lg:grid-cols-[1fr_420px] lg:px-8">
        <div className="max-w-xl">
          <Link to="/" className="mb-8 inline-flex items-center gap-3" aria-label="Kiddocare home">
            <span className="grid size-10 place-items-center rounded-[10px] bg-teal font-display text-lg font-extrabold text-sand">
              K
            </span>
            <span className="font-display text-lg font-bold tracking-tight text-ink">kiddocare</span>
          </Link>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-coral">
            {mode === "login" ? "Welcome back" : "Join the care circle"}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
            Childcare feels lighter when you don't do it alone.
          </h1>
          <p className="mt-5 text-base leading-7 text-ink/60">
            {mode === "login"
              ? "Pick up where you left off, with your trusted care network close by."
              : "Build a trusted care network with transparent profiles, real availability, and parent-to-parent insight."}
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            <TrustBadge>Verified caregivers</TrustBadge>
            <TrustBadge>Real parent reviews</TrustBadge>
          </div>
        </div>
        <div className="rounded-2xl bg-surface p-6 ring-1 ring-ink/10 sm:p-8">
          <h2 className="font-display text-2xl font-bold">
            {mode === "login" ? "Log in" : "Create your account"}
          </h2>
          <p className="mt-2 text-sm text-ink/55">
            {mode === "login" ? "Your care plan is waiting." : "Free for parents and guardians."}
          </p>
          <div className="mt-6">
            <AuthForm mode={mode} />
          </div>
          <p className="mt-5 text-center text-xs text-ink/50">
            {mode === "login" ? "New to Kiddocare? " : "Already have an account? "}
            <Link to={mode === "login" ? "/signup" : "/auth"} className="font-bold text-teal">
              {mode === "login" ? "Create one" : "Log in"}
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}

export function SafetyPage() {
  return (
    <AppShell>
      <PageFrame
        eyebrow="The Kiddocare standard"
        title="Trust should be visible"
        description="Our safety process gives parents the context to make confident choices, not just a green checkmark."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "Identity first",
              body: "Every caregiver confirms who they are before creating a profile.",
            },
            {
              icon: Check,
              title: "Safety trained",
              body: "Background checks and relevant first-aid training are surfaced on every profile.",
            },
            {
              icon: Heart,
              title: "Community watched",
              body: "Reviews come from families who have actually connected through Kiddocare.",
            },
          ].map(({ icon: Icon, title, body }) => (
            <article key={title} className="rounded-2xl bg-surface p-6 ring-1 ring-ink/10">
              <span className="grid size-11 place-items-center rounded-xl bg-mint text-teal">
                <Icon size={21} />
              </span>
              <h2 className="mt-5 font-display text-lg font-bold">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-ink/55">{body}</p>
            </article>
          ))}
        </div>
      </PageFrame>
    </AppShell>
  );
}

export function SettingsPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  useEffect(() => {
    const isAuth = window.localStorage.getItem("kiddocare-demo-auth") === "true";
    setAuthenticated(isAuth);
    if (!isAuth) {
      setShowLoginPrompt(true);
    }
  }, []);

  if (!authenticated) {
    return (
      <AppShell>
        <main className="mx-auto max-w-[1320px] px-5 py-16 lg:px-8">
          <div className="mx-auto max-w-md text-center">
            <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-mint text-teal">
              <ShieldCheck size={28} />
            </span>
            <h1 className="mt-6 font-display text-2xl font-bold text-ink">Please log in first</h1>
            <p className="mt-3 text-sm text-ink/60">
              You need to be logged in to access your account settings.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button
                asChild
                className="rounded-xl bg-coral font-bold text-sand hover:bg-coral/90"
              >
                <Link to="/auth">
                  Log in
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-xl border-ink/15 font-bold text-ink"
              >
                <Link to="/signup">
                  Create account
                </Link>
              </Button>
            </div>
          </div>

          <AlertDialog open={showLoginPrompt} onOpenChange={setShowLoginPrompt}>
            <AlertDialogContent className="max-w-sm">
              <AlertDialogHeader>
                <AlertDialogTitle>Login Required</AlertDialogTitle>
                <AlertDialogDescription>
                  Please log in to access your account settings and manage your preferences.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction asChild>
                  <Link to="/auth" className={buttonVariants()}>
                    Log in
                  </Link>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </main>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <PageFrame
        eyebrow="Your preferences"
        title="Settings"
        description="Keep your family details and communication preferences up to date."
      >
        <div className="max-w-2xl space-y-4">
          <section className="rounded-2xl bg-surface p-6 ring-1 ring-ink/10">
            <h2 className="font-display text-lg font-bold">Parent profile</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <label>
                <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-ink/50">
                  First name
                </span>
                <input
                  defaultValue="Emma"
                  className="h-12 w-full rounded-xl bg-sand px-4 text-sm font-semibold outline-none ring-1 ring-ink/10"
                />
              </label>
              <label>
                <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-ink/50">
                  Home neighborhood
                </span>
                <input
                  defaultValue="Brooklyn, NY"
                  className="h-12 w-full rounded-xl bg-sand px-4 text-sm font-semibold outline-none ring-1 ring-ink/10"
                />
              </label>
            </div>
            <Button className="mt-5 rounded-xl bg-coral font-bold text-sand hover:bg-coral/90">
              Save changes
            </Button>
          </section>
          <section className="rounded-2xl bg-surface p-6 ring-1 ring-ink/10">
            <h2 className="font-display text-lg font-bold">Notifications</h2>
            <label className="mt-5 flex items-center justify-between gap-4 text-sm font-semibold">
              <span>Booking and message updates</span>
              <input type="checkbox" defaultChecked className="size-5 accent-coral" />
            </label>
            <label className="mt-4 flex items-center justify-between gap-4 text-sm font-semibold">
              <span>New caregiver recommendations</span>
              <input type="checkbox" defaultChecked className="size-5 accent-coral" />
            </label>
          </section>
        </div>
      </PageFrame>
    </AppShell>
  );
}

export function CaregiverDashboardPage() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "completed">("upcoming");

  const caregiverProfile = {
    name: "Amara Reynolds",
    role: "Nanny & newborn care",
    rating: "5.0",
    reviews: 34,
    experience: "7 years",
    hourlyRate: 24,
    image: caregivers[0].image,
  };

  const upcomingBookings = [
    { id: "cb1", family: "Thompson Family", date: "Thu, Jun 13", time: "8:00 pm – 7:00 am", type: "Overnight care", children: 1, rate: "$24/hr" },
    { id: "cb2", family: "Chen Family", date: "Sat, Jun 15", time: "3:30 pm – 7:00 pm", type: "After-school care", children: 2, rate: "$24/hr" },
    { id: "cb3", family: "Williams Family", date: "Tue, Jun 18", time: "9:00 am – 5:00 pm", type: "Full day care", children: 1, rate: "$24/hr" },
  ];

  const completedBookings = [
    { id: "cp1", family: "Johnson Family", date: "Fri, Jun 7", time: "6:00 pm – 10:00 pm", type: "Evening care", earned: "$96" },
    { id: "cp2", family: "Martinez Family", date: "Wed, Jun 5", time: "3:00 pm – 7:00 pm", type: "After-school care", earned: "$96" },
    { id: "cp3", family: "Davis Family", date: "Mon, Jun 3", time: "8:00 am – 4:00 pm", type: "Full day care", earned: "$192" },
  ];

  const recentReviews = [
    { id: "r1", parent: "Maya T.", rating: 5, date: "Jun 8", comment: "Amara is wonderful with our toddler. She's punctual, caring, and always brings creative activities." },
    { id: "r2", parent: "David C.", rating: 5, date: "May 28", comment: "Our kids love Amara! She's become part of our family. Highly recommend her." },
    { id: "r3", parent: "Sarah W.", rating: 5, date: "May 15", comment: "Professional, reliable, and great communication. Amara is a gem!" },
  ];

  const availability = [
    { day: "Monday", slots: ["Morning", "Afternoon"] },
    { day: "Tuesday", slots: ["Evening", "Overnight"] },
    { day: "Wednesday", slots: ["Afternoon"] },
    { day: "Thursday", slots: ["Evening", "Overnight"] },
    { day: "Friday", slots: ["Morning", "Afternoon", "Evening"] },
    { day: "Saturday", slots: ["Morning", "Afternoon"] },
    { day: "Sunday", slots: [] },
  ];

  const stats = [
    { label: "This Month Earnings", value: "$1,824", icon: Sparkles, color: "bg-teal text-sand" },
    { label: "Completed Bookings", value: "24", icon: Check, color: "bg-coral text-sand" },
    { label: "Response Rate", value: "98%", icon: MessageCircle, color: "bg-mint text-teal" },
    { label: "Profile Views", value: "156", icon: Users, color: "bg-ink text-sand" },
  ];

  return (
    <AppShell>
      <main className="mx-auto max-w-[1320px] px-5 py-6 lg:px-8 lg:py-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <img
              src={caregiverProfile.image}
              alt={caregiverProfile.name}
              className="size-16 rounded-2xl object-cover"
            />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-coral">
                Caregiver Dashboard
              </p>
              <h1 className="mt-1 font-display text-2xl font-bold tracking-tight text-ink">
                Welcome back, {caregiverProfile.name.split(" ")[0]}
              </h1>
              <p className="text-sm text-ink/55">{caregiverProfile.role} · {caregiverProfile.experience} experience</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              asChild
              className="rounded-xl bg-coral px-4 text-sm font-bold text-sand hover:bg-coral/90"
            >
              <Link to="/messages">
                <MessageCircle size={16} />
                Messages
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-xl border-ink/15 px-4 text-sm font-bold text-ink"
            >
              <Link to="/caregivers/$caregiverId" params={{ caregiverId: caregivers[0].id }}>
                View Public Profile
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-surface p-4 ring-1 ring-ink/10">
              <div className="flex items-center justify-between">
                <span className={`grid size-9 place-items-center rounded-lg ${stat.color}`}>
                  <stat.icon size={18} />
                </span>
              </div>
              <p className="mt-3 font-display text-2xl font-bold text-ink">{stat.value}</p>
              <p className="text-xs text-ink/50">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Bookings */}
            <section className="rounded-2xl bg-surface p-5 ring-1 ring-ink/10">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-lg font-bold">Your Bookings</h2>
                <div className="flex gap-1 rounded-lg bg-sand p-1">
                  <button
                    onClick={() => setActiveTab("upcoming")}
                    className={`rounded-md px-3 py-1 text-xs font-semibold transition-colors ${activeTab === "upcoming" ? "bg-surface text-ink shadow-sm" : "text-ink/50"}`}
                  >
                    Upcoming
                  </button>
                  <button
                    onClick={() => setActiveTab("completed")}
                    className={`rounded-md px-3 py-1 text-xs font-semibold transition-colors ${activeTab === "completed" ? "bg-surface text-ink shadow-sm" : "text-ink/50"}`}
                  >
                    Completed
                  </button>
                </div>
              </div>
              <div className="mt-4 space-y-3">
                {activeTab === "upcoming" ? (
                  upcomingBookings.length > 0 ? (
                    upcomingBookings.map((booking) => (
                      <div
                        key={booking.id}
                        className="rounded-xl bg-sand p-4"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-bold">{booking.family}</h3>
                            <p className="text-xs text-ink/50">{booking.type} · {booking.children} child{booking.children > 1 ? "ren" : ""}</p>
                          </div>
                          <span className="rounded-full bg-mint px-2 py-0.5 text-[10px] font-bold text-teal">
                            Confirmed
                          </span>
                        </div>
                        <div className="mt-3 flex items-center gap-4 text-xs text-ink/60">
                          <span className="flex items-center gap-1">
                            <CalendarDays size={12} />
                            {booking.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock3 size={12} />
                            {booking.time}
                          </span>
                          <span className="font-semibold text-teal">{booking.rate}</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="py-6 text-center text-sm text-ink/40">No upcoming bookings</p>
                  )
                ) : (
                  completedBookings.length > 0 ? (
                    completedBookings.map((booking) => (
                      <div
                        key={booking.id}
                        className="flex items-center justify-between rounded-xl bg-sand p-4"
                      >
                        <div>
                          <h3 className="font-bold">{booking.family}</h3>
                          <p className="text-xs text-ink/50">{booking.type} · {booking.date}</p>
                        </div>
                        <span className="font-display font-bold text-teal">{booking.earned}</span>
                      </div>
                    ))
                  ) : (
                    <p className="py-6 text-center text-sm text-ink/40">No completed bookings</p>
                  )
                )}
              </div>
            </section>

            {/* Recent Reviews */}
            <section className="rounded-2xl bg-surface p-5 ring-1 ring-ink/10">
              <h2 className="font-display text-lg font-bold">Recent Reviews</h2>
              <div className="mt-4 space-y-4">
                {recentReviews.map((review) => (
                  <div key={review.id} className="rounded-xl bg-sand p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="grid size-8 place-items-center rounded-full bg-mint text-xs font-bold text-teal">
                          {review.parent}
                        </span>
                        <div>
                          <p className="text-sm font-semibold">{review.parent}</p>
                          <p className="text-[10px] text-ink/40">{review.date}</p>
                        </div>
                      </div>
                      <div className="flex gap-0.5">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} size={12} fill="currentColor" className="text-coral" />
                        ))}
                      </div>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-ink/60">"{review.comment}"</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Profile Card */}
            <section className="rounded-2xl bg-teal p-6 text-sand">
              <div className="flex items-center gap-3">
                <img
                  src={caregiverProfile.image}
                  alt={caregiverProfile.name}
                  className="size-14 rounded-xl object-cover"
                />
                <div>
                  <h2 className="font-display font-bold">{caregiverProfile.name}</h2>
                  <p className="text-xs text-sand/70">{caregiverProfile.role}</p>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-sand/10 p-3 text-center">
                  <p className="font-display text-xl font-bold">{caregiverProfile.rating}</p>
                  <p className="text-[10px] text-sand/60">Rating</p>
                </div>
                <div className="rounded-xl bg-sand/10 p-3 text-center">
                  <p className="font-display text-xl font-bold">{caregiverProfile.reviews}</p>
                  <p className="text-[10px] text-sand/60">Reviews</p>
                </div>
              </div>
              <div className="mt-4 rounded-xl bg-sand/10 p-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-sand/70">Hourly Rate</span>
                  <span className="font-display text-lg font-bold">${caregiverProfile.hourlyRate}/hr</span>
                </div>
              </div>
              <Button
                asChild
                className="mt-4 w-full rounded-xl bg-coral font-bold text-sand hover:bg-coral/90"
              >
                <Link to="/caregivers/$caregiverId" params={{ caregiverId: caregivers[0].id }}>
                  Edit Profile
                </Link>
              </Button>
            </section>

            {/* Availability */}
            <section className="rounded-2xl bg-surface p-5 ring-1 ring-ink/10">
              <h2 className="font-display text-lg font-bold">Your Availability</h2>
              <div className="mt-4 space-y-2">
                {availability.map((day) => (
                  <div key={day.day} className="flex items-center justify-between rounded-lg bg-sand px-3 py-2">
                    <span className="text-sm font-semibold">{day.day}</span>
                    <div className="flex gap-1">
                      {day.slots.length > 0 ? (
                        day.slots.map((slot) => (
                          <span
                            key={slot}
                            className="rounded-full bg-mint px-2 py-0.5 text-[9px] font-bold text-teal"
                          >
                            {slot}
                          </span>
                        ))
                      ) : (
                        <span className="text-[10px] text-ink/40">Unavailable</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <Button
                variant="outline"
                className="mt-4 w-full rounded-xl border-ink/15 text-sm font-semibold text-ink"
              >
                Update Availability
              </Button>
            </section>

            {/* Quick Actions */}
            <section className="rounded-2xl bg-surface p-5 ring-1 ring-ink/10">
              <h2 className="font-display text-lg font-bold">Quick Actions</h2>
              <div className="mt-4 space-y-2">
                <button className="flex w-full items-center gap-3 rounded-xl bg-sand p-3 text-left transition-colors hover:bg-mint/50">
                  <CalendarCheck size={18} className="text-teal" />
                  <span className="text-sm font-semibold">Set Time Off</span>
                </button>
                <button className="flex w-full items-center gap-3 rounded-xl bg-sand p-3 text-left transition-colors hover:bg-mint/50">
                  <DollarSign size={18} className="text-teal" />
                  <span className="text-sm font-semibold">View Earnings</span>
                </button>
                <button className="flex w-full items-center gap-3 rounded-xl bg-sand p-3 text-left transition-colors hover:bg-mint/50">
                  <ShieldCheck size={18} className="text-teal" />
                  <span className="text-sm font-semibold">Update Certifications</span>
                </button>
                <button className="flex w-full items-center gap-3 rounded-xl bg-sand p-3 text-left transition-colors hover:bg-mint/50">
                  <HelpCircle size={18} className="text-teal" />
                  <span className="text-sm font-semibold">Get Support</span>
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </AppShell>
  );
}
