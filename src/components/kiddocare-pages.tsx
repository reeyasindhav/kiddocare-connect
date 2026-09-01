import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Clock3,
  Heart,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
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

export function DiscoveryPage() {
  return (
    <AppShell active="discover">
      <PageFrame
        eyebrow="Find care that fits"
        title="A better match for your family"
        description="Compare trusted local caregivers by experience, availability, and the details that matter to you."
      >
        <div className="space-y-8">
          <FilterBar />
          <div className="grid gap-5 lg:grid-cols-[1fr_340px]">
            <section>
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-coral">
                    Brooklyn, NY
                  </p>
                  <h2 className="mt-1 font-display text-xl font-bold">Available this week</h2>
                </div>
                <span className="text-sm text-ink/50">24 caregivers</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {caregivers.slice(0, 4).map((caregiver) => (
                  <CaregiverCard key={caregiver.id} caregiver={caregiver} />
                ))}
              </div>
            </section>
            <aside className="space-y-5">
              <WeekCalendar interactive />
              <div className="rounded-2xl bg-teal p-5 text-sand">
                <ShieldCheck size={22} />
                <h2 className="mt-4 font-display text-lg font-bold">
                  Every profile, clearly checked.
                </h2>
                <p className="mt-2 text-sm leading-6 text-sand/75">
                  Identity, references, and safety training are reviewed before a caregiver joins
                  Kiddocare.
                </p>
                <Link
                  to="/safety"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold"
                >
                  See our safety promise <ArrowRight size={15} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </PageFrame>
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
                  “Warm, communicative, and exactly the calm presence our evenings needed.”
                </p>
                <p className="mt-3 text-xs font-bold text-ink/45">— Maya, parent in Brooklyn</p>
              </div>
            </div>
          </section>
          <aside>
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
                    Request a booking <ArrowRight size={16} />
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
  return (
    <AppShell active="messages">
      <PageFrame
        eyebrow="Your conversations"
        title="Messages"
        description="A thoughtful handoff starts with a good conversation."
      >
        <div className="grid gap-3">
          {messages.map((message) => (
            <Link
              key={message.id}
              to="/messages"
              className="kc-lift flex items-center gap-4 rounded-2xl bg-surface p-5 ring-1 ring-ink/10"
            >
              <img
                src={message.caregiver.image}
                alt={`${message.caregiver.name} profile`}
                className="size-14 rounded-xl object-cover"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="font-display font-bold">{message.caregiver.name}</h2>
                  <span className="shrink-0 text-xs text-ink/40">{message.time}</span>
                </div>
                <p className="mt-1 truncate text-sm text-ink/55">{message.preview}</p>
              </div>
              {message.unread && <span className="size-2 rounded-full bg-coral" />}
            </Link>
          ))}
        </div>
      </PageFrame>
    </AppShell>
  );
}

export function DashboardPage() {
  return (
    <AppShell>
      <PageFrame
        eyebrow="Good morning, Emma"
        title="Your care, at a glance"
        description="Everything you need for the week ahead, in one place."
      >
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-2xl bg-teal p-6 text-sand sm:p-8">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-sand/65">
                  Next up
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold">Overnight care with Amara</h2>
                <p className="mt-2 text-sm text-sand/75">Thursday, June 13 · 8:00 pm – 7:00 am</p>
              </div>
              <Sparkles className="text-coral" />
            </div>
            <div className="mt-8 flex items-center gap-3">
              <img
                src={primaryCaregiver.image}
                alt="Amara Reynolds profile"
                className="size-12 rounded-xl object-cover"
              />
              <div>
                <p className="font-bold">Amara Reynolds</p>
                <p className="text-xs text-sand/65">Confirmed · $264 total</p>
              </div>
            </div>
            <Button
              asChild
              className="mt-7 rounded-xl bg-coral font-bold text-sand hover:bg-coral/90"
            >
              <Link to="/bookings">
                View booking <ArrowRight size={15} />
              </Link>
            </Button>
          </section>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-2xl bg-surface p-6 ring-1 ring-ink/10">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-coral">Saved care</p>
              <h2 className="mt-2 font-display text-xl font-bold">
                {caregivers.length} trusted profiles
              </h2>
              <p className="mt-2 text-sm leading-6 text-ink/55">
                Your shortlist is ready whenever your week changes.
              </p>
              <Link
                to="/caregivers"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-teal"
              >
                Browse profiles <ArrowRight size={15} />
              </Link>
            </div>
            <div className="rounded-2xl bg-surface p-6 ring-1 ring-ink/10">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-coral">Inbox</p>
              <h2 className="mt-2 font-display text-xl font-bold">2 new messages</h2>
              <p className="mt-2 text-sm leading-6 text-ink/55">
                Amara and Devon are waiting to hear from you.
              </p>
              <Link
                to="/messages"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-teal"
              >
                Open messages <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </PageFrame>
    </AppShell>
  );
}

export function AuthPage({ mode }: { mode: "login" | "signup" }) {
  return (
    <AppShell>
      <main className="mx-auto grid min-h-[650px] max-w-[1320px] items-center gap-8 px-5 py-10 lg:grid-cols-[1fr_420px] lg:px-8">
        <div className="max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-coral">
            {mode === "login" ? "Welcome back" : "Join the care circle"}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
            Childcare feels lighter when you don’t do it alone.
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
    </AppShell>
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
