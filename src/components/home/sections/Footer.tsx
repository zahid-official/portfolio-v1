import { Facebook, Github, Linkedin, Mail, MapPin, Phone, Dribbble } from "lucide-react";

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "GitHub", href: "https://github.com", icon: Github },
  { label: "Dribbble", href: "https://dribbble.com", icon: Dribbble },
];

// Footer Component
const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#0b0f14] text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(90%_90%_at_0%_0%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_55%)]" />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 lg:px-6 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-2 text-4xl font-semibold">
              <span>Zahid</span>
              <span className="inline-block size-2 rounded-full bg-red-500" />
            </div>

            <div className="mt-6 space-y-3 text-sm text-white/80">
              <a
                className="flex items-center gap-3 transition-colors hover:text-white"
                href="mailto:zahid.official8@gmail.com"
              >
                <Mail className="size-4 text-white/70" />
                zahid.official8@gmail.com
              </a>
              <a
                className="flex items-center gap-3 transition-colors hover:text-white"
                href="tel:+8801869618216"
              >
                <Phone className="size-4 text-white/70" />
                +88 01869618216
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="size-4 text-white/70" />
                Dhaka, Bangladesh
              </div>
            </div>

            <div className="mt-10">
              <div className="text-xs font-semibold tracking-[0.25em] text-white/60">
                <span className="rounded-sm bg-white/10 px-2 py-1 text-white">
                  CONNECT
                </span>{" "}
                ON
              </div>
              <div className="mt-4 flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white/60 hover:text-white"
                    >
                      <Icon className="size-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
            <div className="flex items-center gap-2">
              <span className="rounded-sm bg-white/10 px-2 py-1 text-xs font-semibold tracking-wide text-white">
                CONTACT
              </span>
              <span className="text-lg font-semibold">ME</span>
            </div>
            <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-white/60">
              If you have questions please leave a message
            </p>

            <form className="mt-6 space-y-4">
              <label className="sr-only" htmlFor="footer-email">
                Email
              </label>
              <input
                id="footer-email"
                name="email"
                type="email"
                placeholder="Email"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
              />
              <label className="sr-only" htmlFor="footer-message">
                Message
              </label>
              <textarea
                id="footer-message"
                name="message"
                placeholder="Message"
                rows={5}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-[#1b2636] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#223148]"
              >
                Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © This Portfolio is Proudly Owned by Zahidul Islam.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
