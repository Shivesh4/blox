import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Star,
  Zap,
  BatteryCharging,
  Smartphone,
  Check,
  X,
  ArrowRight,
  Instagram,
  Youtube,
  MessageCircle,
} from "lucide-react";
import heroImg from "@/assets/blox-hero.jpg";
import controlImg from "@/assets/blox-control.jpg";
import step1 from "@/assets/step-1.jpg";
import step2 from "@/assets/step-2.jpg";
import step3 from "@/assets/step-3.jpg";
import darkImg from "@/assets/blox-dark.jpg";
import bloxVideo from "@/assets/blox-tap-loop.mp4";


const DISTRACTIONS = [
  { id: "instagram", label: "Instagram / Reels" },
  { id: "youtube", label: "YouTube Shorts" },
  { id: "whatsapp", label: "WhatsApp" },
  { id: "x", label: "X / Twitter" },
  { id: "games", label: "Mobile games" },
  { id: "other", label: "Other" },
];

const PRICES = ["Under ₹999", "₹999 – ₹1,499", "₹1,500 – ₹1,999", "Not sure yet"];

const COUNTRY_CODES = [
  { code: "+91", label: "🇮🇳 +91" },
  { code: "+1", label: "🇺🇸 +1" },
  { code: "+44", label: "🇬🇧 +44" },
  { code: "+61", label: "🇦🇺 +61" },
  { code: "+971", label: "🇦🇪 +971" },
  { code: "+65", label: "🇸🇬 +65" },
  { code: "+49", label: "🇩🇪 +49" },
  { code: "+33", label: "🇫🇷 +33" },
];

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <Nav onOpenModal={() => setModalOpen(true)} />
      <main>
        <VideoShowcase />
        <Hero onOpenModal={() => setModalOpen(true)} />
        <ProblemStrip />
        <ControlSection onOpenModal={() => setModalOpen(true)} />
        <HowItWorks onOpenModal={() => setModalOpen(true)} />
        <Differentiators onOpenModal={() => setModalOpen(true)} />
        <Features />
      </main>
      <Footer onOpenModal={() => setModalOpen(true)} />
      <WaitlistModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

function VideoShowcase() {
  return (
    <section className="px-4 sm:px-6 pt-6 sm:pt-8">
      <div className="mx-auto max-w-6xl">
        <div className="relative rounded-3xl overflow-hidden border border-border bg-ink shadow-xl aspect-[16/9]">
          <video
  src={bloxVideo}
  autoPlay
  loop
  muted
  playsInline
  preload="metadata"
  className="w-full h-full object-cover"
/>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7 max-w-sm">
            <div className="text-xs uppercase tracking-widest text-amber-glow mb-2">See it in action</div>
            <div className="font-display text-2xl sm:text-3xl text-cream leading-tight">
              One tap. You've been Bloxed.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function AnnouncementBar() {
  return (
    <div className="bg-ink text-cream text-center text-xs sm:text-sm py-2.5 px-4">
      Launching soon in India 🇮🇳 · Join the waitlist for early-bird pricing
    </div>
  );
}

function Nav({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <header className="sticky top-3 z-40 px-3 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-full bg-card/90 backdrop-blur border border-border shadow-sm flex items-center justify-between pl-5 pr-2 py-2">
        <a href="#top" className="font-display text-2xl tracking-tight">
          Blox<span className="text-accent">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#how" className="hover:text-foreground transition">How it works</a>
          <a href="#why" className="hover:text-foreground transition">Why Blox</a>
        </nav>
        <Button
          onClick={onOpenModal}
          className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground"
        >
          Join waitlist
        </Button>
      </div>
    </header>
  );
}

function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section id="top" className="px-4 sm:px-6 pt-8 sm:pt-12 pb-16 sm:pb-24">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        <div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-5">
            <div className="flex text-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span>2,000+ Indians on the waitlist</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl leading-[0.95] mb-6">
            Reclaim your<br />
            <em className="text-accent not-italic font-display italic">focus.</em>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mb-8">
            Blox is the physical device that locks distracting apps on your phone — no overrides,
            no shortcuts, no willpower required.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button
              onClick={onOpenModal}
              size="lg"
              className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-7 text-base"
            >
              Join the waitlist <ArrowRight className="ml-1 w-4 h-4" />
            </Button>
            <a href="#how" className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4">
              See how it works
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden bg-muted">
            <img src={heroImg} alt="Blox focus device on a warm wooden desk" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-2xl px-4 py-3 shadow-lg max-w-[200px]">
            <div className="text-xs text-muted-foreground">Avg. focus time</div>
            <div className="text-2xl font-display">3h 42m</div>
            <div className="text-xs text-accent">↑ uninterrupted</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemStrip() {
  const items = [
    { stat: "4h 12m", label: "Avg. daily screen time in India" },
    { stat: "96×", label: "Times we unlock our phones a day" },
    { stat: "70%", label: "Of that is doomscrolling Reels & Shorts" },
  ];
  return (
    <section className="px-4 sm:px-6 py-12 border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl grid sm:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.label} className="text-center sm:text-left">
            <div className="font-display text-4xl text-accent mb-1">{it.stat}</div>
            <div className="text-sm text-muted-foreground">{it.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ControlSection({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="px-4 sm:px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-4xl sm:text-5xl md:text-6xl leading-[1.02] mb-6">
            The physical device that puts you back in control.
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md">
            Tap your phone to Blox to disconnect from distractions. No "Ignore Limit" button,
            no workaround — just uninterrupted time until you return to your Blox.
          </p>
          <Button onClick={onOpenModal} size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-7">
            Get early access
          </Button>
        </div>
        <div className="order-1 md:order-2 relative aspect-[4/5] rounded-3xl overflow-hidden bg-muted">
          <img src={controlImg} alt="Person tapping their phone against a wall-mounted Blox device" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-card/95 backdrop-blur border border-border rounded-2xl p-4 shadow-lg">
            <div className="text-xs text-muted-foreground">Avg. Blox time this week</div>
            <div className="font-display text-3xl">12h 25m</div>
            <div className="text-xs text-accent flex items-center gap-1 mt-1">▲ 10% from last week</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks({ onOpenModal }: { onOpenModal: () => void }) {
  const steps = [
    { n: "01", title: "Choose your apps", desc: "Pick the apps and sites that pull you in. Build custom focus modes for work, sleep, or study.", img: step1 },
    { n: "02", title: "Tap your Blox", desc: "Hold your phone against your Blox. Distractions lock instantly — no countdown, no override.", img: step2 },
    { n: "03", title: "Reclaim your time", desc: "Study, read, eat, breathe. Tap again only when you're ready to come back.", img: step3 },
  ];
  return (
    <section id="how" className="px-4 sm:px-6 py-20 sm:py-28 bg-secondary/40 border-y border-border">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <div className="text-sm text-accent uppercase tracking-widest mb-3">How it works</div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl">Three taps to deep focus.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((s) => (
            <div key={s.n} className="bg-card rounded-3xl border border-border overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="text-accent font-display text-xl mb-2">{s.n}</div>
                <h3 className="text-2xl mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button onClick={onOpenModal} size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-7">
            Join the waitlist
          </Button>
          <div className="text-xs text-muted-foreground mt-3">Early supporters get up to 20% off launch price</div>
        </div>
      </div>
    </section>
  );
}

function Differentiators({ onOpenModal }: { onOpenModal: () => void }) {
  const items = [
    { title: "Screen Time limits", sub: "Easy to ignore.", desc: 'One tap on "Ignore Limit" and you\'re back in the feed.' },
    { title: "Deleting apps", sub: "Easy to reinstall.", desc: "A 10-second App Store visit and the habit is back." },
    { title: "Grayscale mode", sub: "Easy to undo.", desc: "A quick toggle in Settings and the dopamine returns." },
  ];
  return (
    <section id="why" className="px-4 sm:px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl mb-4">What makes Blox different.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            With other solutions, the "key" that re-enables distractions is always within reach.
            Blox lets you leave the key behind.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {items.map((it) => (
            <div key={it.title} className="bg-muted rounded-3xl p-6 sm:p-8 border border-border">
              <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                <X className="w-4 h-4" />
                <span className="font-medium text-foreground">{it.title}</span>
              </div>
              <div className="text-2xl font-display mb-3">{it.sub}</div>
              <p className="text-sm text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-ink text-cream rounded-3xl p-8 sm:p-12 grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-3 text-amber-glow">
              <Check className="w-5 h-5" />
              <span className="font-medium">Blox</span>
            </div>
            <div className="font-display text-3xl sm:text-4xl mb-3">A physical commitment.</div>
            <p className="text-cream/70 max-w-xl">
              Leave your Blox at home, at your desk, or in another room. Without it, distractions
              stay locked — turning your phone into a distraction-free device until you return.
            </p>
          </div>
          <Button onClick={onOpenModal} size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-7">
            Reserve yours
          </Button>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    { icon: Zap, title: "No subscriptions", desc: "Free lifetime app access for Android and iOS. Buy once, use forever." },
    { icon: BatteryCharging, title: "Battery-free", desc: "No battery to charge — your Blox is always on and built to last a lifetime." },
    { icon: Smartphone, title: "Works across devices", desc: "Use one Blox for multiple phones, or multiple Bloxes for one phone." },
  ];
  return (
    <section className="px-4 sm:px-6 py-20 sm:py-28 bg-ink text-cream">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-cream">More reasons to love Blox.</h2>
        </div>
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-center">
          <div className="rounded-3xl overflow-hidden aspect-square bg-black/40">
            <img src={darkImg} alt="Blox device on black surface" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="border-t border-cream/15 pt-5">
                <f.icon className="w-6 h-6 text-amber-glow mb-3" />
                <div className="text-xl mb-2 font-display">{f.title}</div>
                <p className="text-sm text-cream/70">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WaitlistModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [distraction, setDistraction] = useState<string | null>(null);
  const [price, setPrice] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    if (trimmedName.length < 2) return toast.error("Please enter your name.");
    if (trimmedName.length > 80) return toast.error("Name is too long.");
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return toast.error("Please enter a valid email.");
    if (email.length > 255) return toast.error("Email is too long.");
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 6 || digits.length > 15) return toast.error("Please enter a valid phone number.");

    setSubmitting(true);
    try {
      const existing = JSON.parse(localStorage.getItem("blox_waitlist") || "[]");
      existing.push({
        name: trimmedName,
        email: email.trim().toLowerCase(),
        phone: `${countryCode} ${digits}`,
        distraction,
        price,
        ts: new Date().toISOString(),
      });
      localStorage.setItem("blox_waitlist", JSON.stringify(existing));
      await new Promise((r) => setTimeout(r, 400));
      setSubmitted(true);
      toast.success("You're on the list! We'll be in touch soon.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto bg-card border border-border rounded-3xl shadow-2xl p-6 sm:p-10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-accent/15 text-accent flex items-center justify-center mx-auto mb-5">
              <Check className="w-7 h-7" />
            </div>
            <h3 className="font-display text-3xl mb-2">You're in.</h3>
            <p className="text-muted-foreground max-w-xs mx-auto">
              We'll reach out when Blox launches in India — plus your early-bird discount.
            </p>
          </div>
        ) : (
          <>
            <div className="text-sm text-accent uppercase tracking-widest mb-2">Early access</div>
            <h2 className="text-3xl sm:text-4xl mb-2">Join the Blox waitlist.</h2>
            <p className="text-muted-foreground mb-6">
              Be first to know when we launch in India. Takes 20 seconds.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-1.5 block">Name</label>
                <Input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={name}
                  maxLength={80}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12 rounded-full px-5 bg-background"
                />
              </div>
              <div>
                <label className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-1.5 block">Email</label>
                <Input
                  type="email"
                  required
                  placeholder="you@email.com"
                  value={email}
                  maxLength={255}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 rounded-full px-5 bg-background"
                />
              </div>
              <div>
                <label className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-1.5 block">Phone number</label>
                <div className="flex gap-2">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="h-12 rounded-full px-4 bg-background border border-input text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                    aria-label="Country code"
                  >
                    {COUNTRY_CODES.map((c) => (
                      <option key={c.code} value={c.code}>{c.label}</option>
                    ))}
                  </select>
                  <Input
                    type="tel"
                    required
                    placeholder="98765 43210"
                    value={phone}
                    maxLength={20}
                    onChange={(e) => setPhone(e.target.value)}
                    className="h-12 rounded-full px-5 bg-background flex-1"
                  />
                </div>
              </div>
              <div>
                <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-2">What distracts you most?</div>
                <div className="flex flex-wrap gap-2">
                  {DISTRACTIONS.map((d) => (
                    <button
                      type="button"
                      key={d.id}
                      onClick={() => setDistraction(d.id)}
                      className={`text-sm rounded-full px-4 py-2 border transition ${
                        distraction === d.id
                          ? "bg-foreground text-background border-foreground"
                          : "bg-background border-border hover:border-foreground/40"
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-2">What would you pay for Blox?</div>
                <div className="flex flex-wrap gap-2">
                  {PRICES.map((p) => (
                    <button
                      type="button"
                      key={p}
                      onClick={() => setPrice(p)}
                      className={`text-sm rounded-full px-4 py-2 border transition ${
                        price === p
                          ? "bg-foreground text-background border-foreground"
                          : "bg-background border-border hover:border-foreground/40"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
              <Button
                type="submit"
                disabled={submitting}
                size="lg"
                className="w-full rounded-full bg-accent hover:bg-accent/90 text-accent-foreground h-12 text-base"
              >
                {submitting ? "Joining…" : "Join the waitlist"}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                No spam. We'll only contact you about Blox launch updates.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function Footer({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <footer className="bg-ink text-cream/80 px-4 sm:px-6 py-12">
      <div className="mx-auto max-w-6xl grid sm:grid-cols-[2fr_1fr_1fr] gap-8">
        <div>
          <div className="font-display text-3xl text-cream mb-2">
            Blox<span className="text-accent">.</span>
          </div>
          <p className="text-sm max-w-sm text-cream/60">
            A physical focus device, made for India. Reclaim your time, one tap at a time.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-cream/50 mb-3">Product</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#how" className="hover:text-cream">How it works</a></li>
            <li><a href="#why" className="hover:text-cream">Why Blox</a></li>
            <li><button onClick={onOpenModal} className="hover:text-cream">Waitlist</button></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-cream/50 mb-3">Follow</div>
          <div className="flex gap-3">
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center hover:bg-cream/10">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center hover:bg-cream/10">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="#" aria-label="WhatsApp" className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center hover:bg-cream/10">
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl mt-10 pt-6 border-t border-cream/10 text-xs text-cream/50 flex flex-wrap justify-between gap-3">
        <span>© {new Date().getFullYear()} Blox. Made in India.</span>
        <span>hello@blox.in</span>
      </div>
    </footer>
  );
}
