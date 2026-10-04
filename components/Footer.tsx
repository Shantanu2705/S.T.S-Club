import Link from "next/link";
import Image from "next/image";
import { clubInfo } from "@/data/club";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "History", href: "/history" },
  { name: "Committee", href: "/committee" },
  { name: "Activities", href: "/activities" },
  { name: "Gallery", href: "/gallery" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8 border-t-4 border-gold">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="bg-white p-1 rounded-full">
                <Image
                  src="/images/logo.jpeg"
                  alt="S.T.S Club Logo"
                  width={56}
                  height={56}
                  className="rounded-full"
                />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-white">{clubInfo.name}</h3>
                <p className="text-gold text-sm font-medium">Established {clubInfo.established}</p>
              </div>
            </Link>
            <p className="text-neutral-300 text-sm max-w-sm mb-4 leading-relaxed">
              A legacy of community, culture & togetherness since {clubInfo.established}. Registration No. {clubInfo.registrationNo}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-6 text-gold">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-white hover:underline decoration-gold underline-offset-4 text-sm transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-6 text-gold">Contact</h4>
            <address className="not-italic flex flex-col gap-3 text-sm text-neutral-300">
              <p>
                <strong className="text-white">Address:</strong><br/>
                {clubInfo.address}
              </p>
              <p>
                <strong className="text-white">Phone:</strong><br/>
                <a href={`tel:${clubInfo.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-gold transition-colors">{clubInfo.phone}</a>
              </p>
              <p>
                <strong className="text-white">Email:</strong><br/>
                <a href={`mailto:${clubInfo.email}`} className="hover:text-gold transition-colors">{clubInfo.email}</a>
              </p>
            </address>
          </div>
        </div>

        {/* Digital Dictionary Custom Banner */}
        <div className="w-full mb-12">
          <Link 
            href="https://www.digitaldictionarysiliguri.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full max-w-5xl mx-auto animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite] hover:animate-none transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="bg-white rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_0_30px_rgba(255,255,255,0.15)] relative overflow-hidden"
                 style={{ 
                   // Torn paper effect simulation at top and bottom using radial gradients perfectly matching the footer background (intelligent color match)
                   backgroundImage: `
                     radial-gradient(circle at 10px 0, transparent 10px, white 11px),
                     radial-gradient(circle at 10px 100%, transparent 10px, white 11px)
                   `,
                   backgroundSize: '20px 10px, 20px 10px',
                   backgroundPosition: 'top, bottom',
                   backgroundRepeat: 'repeat-x, repeat-x',
                   paddingTop: '2rem',
                   paddingBottom: '2rem'
                 }}>
              
              {/* Left Content */}
              <div className="flex-1 w-full text-center md:text-left z-10">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-primary-dark mb-6 font-heading tracking-wide">
                  COMPREHENSIVE AGENCY SOLUTIONS
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mb-6 text-neutral-800 font-semibold text-sm md:text-base">
                  <ul className="space-y-3">
                    <li className="flex items-center justify-center md:justify-start gap-2"><span className="w-2 h-2 rounded-full bg-primary-dark"></span> Website Development</li>
                    <li className="flex items-center justify-center md:justify-start gap-2"><span className="w-2 h-2 rounded-full bg-primary-dark"></span> Performance Marketing</li>
                    <li className="flex items-center justify-center md:justify-start gap-2"><span className="w-2 h-2 rounded-full bg-primary-dark"></span> Software Development</li>
                    <li className="flex items-center justify-center md:justify-start gap-2"><span className="w-2 h-2 rounded-full bg-primary-dark"></span> SEO</li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-center justify-center md:justify-start gap-2"><span className="w-2 h-2 rounded-full bg-primary-dark"></span> Digital Marketing</li>
                    <li className="flex items-center justify-center md:justify-start gap-2"><span className="w-2 h-2 rounded-full bg-primary-dark"></span> Google Ads</li>
                    <li className="flex items-center justify-center md:justify-start gap-2"><span className="w-2 h-2 rounded-full bg-primary-dark"></span> Mobile App</li>
                    <li className="flex items-center justify-center md:justify-start gap-2"><span className="w-2 h-2 rounded-full bg-primary-dark"></span> ORM</li>
                  </ul>
                </div>
                
                <p className="text-lg md:text-xl font-bold text-primary-dark inline-block border-b-2 border-primary-dark pb-1 mt-2">
                  www.digitaldictionarysiliguri.com
                </p>
              </div>

              {/* Right Logo Section */}
              <div className="relative z-10 flex-shrink-0 flex flex-col items-center justify-center bg-white p-6 md:p-8 rounded-full border-[6px] border-gold shadow-[0_0_30px_rgba(212,175,55,0.4)] w-56 h-56 md:w-64 md:h-64">
                <div className="absolute inset-2 rounded-full border-2 border-gold/30"></div>
                <div className="relative">
                  {/* The big D */}
                  <span className="text-7xl md:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-b from-gold-light via-gold to-gold-dark drop-shadow-md" style={{ fontFamily: 'var(--font-heading)' }}>
                    D
                  </span>
                </div>
                <div className="mt-2 text-center w-full relative z-10">
                  <span className="block text-base md:text-lg font-black bg-clip-text text-transparent bg-gradient-to-r from-gold-dark via-gold to-gold-dark tracking-wider uppercase" style={{ WebkitTextStroke: '0.2px rgba(0,0,0,0.1)' }}>
                    Digital Dictionary
                  </span>
                  <span className="block text-[10px] md:text-xs font-bold text-neutral-800 tracking-[0.3em] mt-1 pt-1 border-t border-gold/50">
                    SILIGURI
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-neutral-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} {clubInfo.name}. All rights reserved.
          </p>

          <div className="text-sm text-neutral-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block animate-pulse"></span>
            Since {clubInfo.established}
          </div>
        </div>
      </div>
    </footer>
  );
}
