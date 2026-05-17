"use client";
import { Black_Ops_One, IBM_Plex_Sans, Share_Tech_Mono } from "next/font/google";
import content from "../data/content.json";

const display = Black_Ops_One({ subsets: ["latin"], weight: ["400"], variable: "--font-display" });
const body = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body" });
const mono = Share_Tech_Mono({ subsets: ["latin"], weight: ["400"], variable: "--font-mono" });

const ARMY = "#3F4D3A";
const ARMY_DARK = "#1A2516";
const YELLOW = "#FACC15";
const INK = "#18181B";
const BONE = "#F5F5F0";
const MUTED = "#57534E";

const HERO_PHOTO = "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?w=1800&q=80&auto=format&fit=crop";
const SHOP_PHOTO = "https://images.unsplash.com/photo-1632823469850-1b7b1e8b7e44?w=1200&q=80&auto=format&fit=crop";

export default function Page() {
  const c = content as any;
  return (
    <main className={`${display.variable} ${body.variable} ${mono.variable} min-h-screen`} style={{ backgroundColor: BONE, color: INK, fontFamily: "var(--font-body)" }}>
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse-stripe { 0%, 100% { opacity: 1; } 50% { opacity: 0.6; } }
        .fade-up { animation: fadeUp 0.9s ease-out both; }
        .delay-1 { animation-delay: 0.12s; }
        .delay-2 { animation-delay: 0.24s; }
        .delay-3 { animation-delay: 0.36s; }
        .display-text { font-family: var(--font-display); letter-spacing: 0.02em; }
        .mono-text { font-family: var(--font-mono); }
        .caution-tape { background: repeating-linear-gradient(135deg, ${YELLOW} 0 12px, ${INK} 12px 24px); }
        .dotted-rule { border-top: 2px dotted ${ARMY}; }
        .stencil-box { border: 2px solid ${ARMY}; }
        .spec-grid { background-image: linear-gradient(${ARMY}26 1px, transparent 1px), linear-gradient(90deg, ${ARMY}26 1px, transparent 1px); background-size: 40px 40px; }
      `}</style>

      <header className="border-b-2" style={{ borderColor: INK, backgroundColor: BONE }}>
        <div className="caution-tape h-3" />
        <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <div className="display-text text-3xl tracking-wider" style={{ color: ARMY_DARK }}>JULIAN'S</div>
            <div className="mono-text text-[10px] uppercase tracking-[0.4em]" style={{ color: MUTED }}>// AUTOMOTIVE · MAGNOLIA</div>
          </div>
          <div className="hidden md:flex items-center gap-8 mono-text text-xs uppercase tracking-widest">
            <a href="#about" style={{ color: INK }}>[ shop ]</a>
            <a href="#services" style={{ color: INK }}>[ services ]</a>
            <a href="#reviews" style={{ color: INK }}>[ reviews ]</a>
            <a href="#visit" style={{ color: INK }}>[ visit ]</a>
          </div>
          <a href={c.hero.ctaLink} className="display-text px-6 py-3 text-base tracking-wider" style={{ backgroundColor: ARMY, color: YELLOW }}>QUOTE →</a>
        </nav>
      </header>

      <section className="relative spec-grid border-b-2 py-20" style={{ borderColor: INK }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 fade-up">
            <div className="mono-text text-xs uppercase tracking-[0.5em] mb-6" style={{ color: ARMY }}>// {c.hero.eyebrow}</div>
            <h1 className="display-text text-6xl md:text-8xl leading-[0.92] mb-8 tracking-wide" style={{ color: ARMY_DARK }}>
              {c.hero.heading.toUpperCase()}
            </h1>
            <p className="text-lg leading-relaxed max-w-xl mb-10" style={{ color: INK }}>{c.hero.subheading}</p>
            <div className="flex flex-wrap items-center gap-6">
              <a href={c.hero.ctaLink} className="display-text px-10 py-4 text-lg tracking-wider inline-flex items-center gap-3" style={{ backgroundColor: YELLOW, color: INK }}>
                {c.hero.ctaText.toUpperCase()}
                <span>→</span>
              </a>
              <div className="mono-text text-xs uppercase tracking-widest" style={{ color: MUTED }}>
                <div>// rated 4.8 · 18 reviews</div>
                <div className="mt-1">// burbank · since 2005</div>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 fade-up delay-2">
            <div className="relative">
              <div className="stencil-box overflow-hidden" style={{ aspectRatio: "4/5" }}>
                <div className="w-full h-full" style={{ backgroundImage: `url("${HERO_PHOTO}")`, backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(15%) contrast(105%)" }} />
              </div>
              <div className="absolute -top-4 -right-4 px-5 py-3 stencil-box" style={{ backgroundColor: YELLOW, color: INK }}>
                <div className="mono-text text-[10px] uppercase tracking-widest">UNIT NO.</div>
                <div className="display-text text-3xl leading-none">01</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 border-b-2" style={{ borderColor: INK, backgroundColor: BONE }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="mono-text text-xs uppercase tracking-[0.4em] mb-3" style={{ color: ARMY }}>// {c.about.label}</div>
            <h2 className="display-text text-5xl md:text-6xl leading-[1.0] tracking-wide" style={{ color: ARMY_DARK }}>{c.about.heading.toUpperCase()}</h2>
            <div className="dotted-rule my-8" />
            <div className="mono-text text-xs uppercase tracking-widest space-y-1" style={{ color: MUTED }}>
              <div>// MAGNOLIA BLVD</div>
              <div>// TWO LIFTS</div>
              <div>// FAMILY OPERATION</div>
              <div>// SINCE 2005</div>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed mb-10" style={{ color: INK }}>
              {c.about.paragraphs.map((p: string, i: number) => <p key={i}>{p}</p>)}
            </div>
            <div className="stencil-box overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <div className="w-full h-full" style={{ backgroundImage: `url("${SHOP_PHOTO}")`, backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(15%)" }} />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 border-b-2" style={{ borderColor: INK, backgroundColor: ARMY }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
            <div>
              <div className="mono-text text-xs uppercase tracking-[0.4em] mb-3" style={{ color: YELLOW }}>// SERVICE MANIFEST</div>
              <h2 className="display-text text-5xl md:text-7xl leading-[0.95] tracking-wide" style={{ color: BONE }}>WHAT WE DO.</h2>
            </div>
            <div className="mono-text text-xs uppercase tracking-widest" style={{ color: YELLOW }}>// CASH · CARD · NO SURPRISES</div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: YELLOW }}>
            {c.services.map((s: any, i: number) => (
              <article key={i} className="p-7 flex flex-col h-full" style={{ backgroundColor: ARMY }}>
                <div className="flex items-center justify-between mb-5">
                  <div className="mono-text text-[10px] uppercase tracking-widest" style={{ color: YELLOW }}>// JOB {String(i + 1).padStart(2, "0")}</div>
                  <div className="display-text text-xl tracking-wider" style={{ color: YELLOW }}>{s.price}</div>
                </div>
                <h3 className="display-text text-2xl mb-4 tracking-wide leading-tight" style={{ color: BONE }}>{s.title.toUpperCase()}</h3>
                <p className="text-sm leading-relaxed flex-grow" style={{ color: BONE, opacity: 0.85 }}>{s.description}</p>
                <div className="dotted-rule mt-5" style={{ borderColor: YELLOW }} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24 border-b-2" style={{ borderColor: INK, backgroundColor: BONE }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mono-text text-xs uppercase tracking-[0.4em] mb-3" style={{ color: ARMY }}>// FIELD REPORTS</div>
          <h2 className="display-text text-5xl md:text-6xl leading-[1.0] mb-14 tracking-wide" style={{ color: ARMY_DARK }}>WHAT THE GARAGE SAYS.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {c.reviews.map((r: any, i: number) => (
              <figure key={i} className="stencil-box p-7 flex flex-col h-full">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-1">
                    {Array.from({ length: r.rating }).map((_, j) => <span key={j} style={{ color: YELLOW, fontSize: 18 }}>★</span>)}
                  </div>
                  <div className="mono-text text-[10px] uppercase tracking-widest" style={{ color: MUTED }}>// REPORT 0{i + 1}</div>
                </div>
                <blockquote className="text-base leading-relaxed mb-6 flex-grow" style={{ color: INK }}>"{r.text}"</blockquote>
                <figcaption>
                  <div className="display-text text-xl tracking-wider" style={{ color: ARMY_DARK }}>{r.name.toUpperCase()}</div>
                  <div className="mono-text text-[10px] uppercase tracking-[0.3em] mt-1" style={{ color: ARMY }}>// {r.context}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="py-24" style={{ backgroundColor: YELLOW }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="mono-text text-xs uppercase tracking-[0.4em] mb-4" style={{ color: INK }}>// COORDINATES</div>
            <h2 className="display-text text-6xl md:text-8xl leading-[0.9] mb-8 tracking-wider" style={{ color: ARMY_DARK }}>VISIT THE SHOP.</h2>
            <p className="text-lg leading-relaxed mb-10 max-w-md" style={{ color: INK }}>On Magnolia between Buena Vista and California. Two lifts, walk-in welcome, free written quote on every job.</p>

            <dl className="space-y-5 mb-10">
              <div>
                <dt className="mono-text text-xs uppercase tracking-[0.35em] mb-1" style={{ color: ARMY_DARK }}>// ADDRESS</dt>
                <dd className="text-xl font-semibold" style={{ color: INK }}>{c.contact.address}</dd>
              </div>
              <div>
                <dt className="mono-text text-xs uppercase tracking-[0.35em] mb-1" style={{ color: ARMY_DARK }}>// CALL</dt>
                <dd className="display-text text-4xl tracking-wider"><a href={`tel:${c.contact.phone.replace(/\D/g, "")}`} style={{ color: ARMY_DARK }}>{c.contact.phone}</a></dd>
              </div>
              <div>
                <dt className="mono-text text-xs uppercase tracking-[0.35em] mb-2" style={{ color: ARMY_DARK }}>// HOURS</dt>
                <dd>
                  <table className="text-sm mono-text uppercase" style={{ color: INK }}>
                    <tbody>
                      {Object.entries(c.contact.hours).map(([day, hours]) => (
                        <tr key={day}>
                          <td className="pr-8 py-1 font-bold">{day}</td>
                          <td>{String(hours)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </dd>
              </div>
            </dl>
          </div>
          <div className="stencil-box overflow-hidden" style={{ borderColor: INK, borderWidth: 3, minHeight: 420 }}>
            <iframe src={`https://maps.google.com/maps?output=embed&q=${encodeURIComponent(c.contact.mapEmbedQuery || c.contact.address)}`} width="100%" height="500" style={{ border: 0, filter: "grayscale(40%)" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
        <div className="caution-tape h-3 mt-20" />
      </section>

      <footer className="py-12 text-center" style={{ backgroundColor: ARMY_DARK, color: BONE }}>
        <div className="display-text text-3xl tracking-wider mb-2">JULIAN'S AUTOMOTIVE</div>
        <div className="mono-text text-xs uppercase tracking-[0.4em] opacity-80" style={{ color: YELLOW }}>// FAMILY-RUN · BURBANK · SINCE 2005</div>
        <div className="mono-text text-xs uppercase tracking-[0.35em] mt-4 opacity-60">© {new Date().getFullYear()} JULIAN'S AUTOMOTIVE · BURBANK, CA</div>
      </footer>
    </main>
  );
}
