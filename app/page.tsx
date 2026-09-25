import Hero from "@/components/home/Hero";
import LegacyStats from "@/components/home/LegacyStats";
import Image from "next/image";
import Link from "next/link";
import { clubInfo } from "@/data/club";
import { galleryImages } from "@/data/gallery";

export default function Home() {
  const featuredImages = galleryImages.filter(img => img.featured).slice(0, 4);

  return (
    <>
      <Hero />
      <LegacyStats />

      {/* History Preview Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 overflow-hidden rounded-sm">
                <Image
                  src="/gallery/WhatsApp Image 2026-09-25 at 19.06.27 (1).jpeg"
                  alt="S.T.S Club Historical"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold opacity-50"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold opacity-50"></div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="w-8 h-[1px] bg-gold"></span>
                <span className="text-gold font-bold tracking-widest text-sm uppercase">Our History</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark mb-6 leading-tight">
                More than a club &mdash; <br />
                <span className="text-primary">a legacy built over generations.</span>
              </h2>
              <p className="text-neutral-600 mb-6 leading-relaxed text-lg">
                Established on {clubInfo.establishmentDate} on the auspicious occasion of {clubInfo.occasion}, {clubInfo.name} has been the cornerstone of our community. What started as a small gathering has evolved into an institution that celebrates togetherness.
              </p>
              <p className="text-neutral-600 mb-10 leading-relaxed text-lg">
                Through decades of cultural events and collective community work, we have preserved our heritage while embracing the future.
              </p>
              <Link 
                href="/history"
                className="inline-flex items-center gap-3 font-medium text-primary hover:text-gold transition-colors group"
              >
                <span className="border-b border-primary group-hover:border-gold transition-colors pb-1">
                  Read Full History
                </span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Gallery */}
      <section className="py-24 bg-primary-dark text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="w-8 h-[1px] bg-gold"></span>
                <span className="text-gold font-bold tracking-widest text-sm uppercase">Gallery</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold">Moments & Memories</h2>
            </div>
            <Link 
              href="/gallery"
              className="inline-flex px-6 py-3 border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all rounded-sm font-medium"
            >
              View Full Gallery
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredImages.map((img, i) => (
              <div key={img.id} className={`relative overflow-hidden group rounded-sm ${i === 0 || i === 3 ? 'aspect-[3/4]' : 'aspect-square lg:aspect-[3/4]'}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-block px-3 py-1 bg-gold text-primary-dark text-xs font-bold uppercase tracking-wider mb-2 rounded-sm">
                    {img.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
