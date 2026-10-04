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
            <div className="relative w-full overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.15)] rounded-xl flex justify-center">
              <img 
                src="/images/banner.png" 
                alt="Comprehensive Agency Solutions - Digital Dictionary" 
                className="w-full h-auto"
                style={{
                  // If the image is a JPG with a green background, this will help blend it slightly,
                  // but for the PERFECT color match with the footer, the image should be saved as a transparent PNG.
                }}
              />
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
