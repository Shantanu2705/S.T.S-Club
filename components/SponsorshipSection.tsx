import React from "react";
import { Phone, MessageCircle, MapPin, Sparkles, Megaphone, CheckCircle2 } from "lucide-react";
import { sponsorshipData, kaliPujaNotice } from "@/data/sponsorship";
import { clubInfo } from "@/data/club";

export default function SponsorshipSection() {
  return (
    <section id="sponsorship" className="py-24 bg-gradient-to-b from-neutral-50 via-white to-neutral-50 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Notice Card / Banner */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary-dark via-primary to-primary-dark p-1 shadow-xl">
            <div className="bg-primary-dark/95 backdrop-blur-sm rounded-[10px] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left border border-gold/30">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
                  Official Notice
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white tracking-wide">
                  2026 Pujo Theme &mdash; <span className="text-gold underline decoration-gold/60 underline-offset-4">Sonali Shankho</span>
                </h3>
                <p className="text-neutral-300 text-sm md:text-base">
                  Kali Puja 2026 Celebration at {clubInfo.name} &bull; Falakata Rd, Dhupguri
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-3">
                <a
                  href={`tel:${sponsorshipData.inCharge.rawPhone}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-gold hover:bg-gold-light text-primary-dark font-semibold text-sm transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <Phone size={16} />
                  <span>Contact In-Charge</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="w-8 h-[1px] bg-gold"></span>
            <span className="text-gold font-bold tracking-widest text-sm uppercase">Sponsorship & Advertisement</span>
            <span className="w-8 h-[1px] bg-gold"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-dark mb-4">
            List For Sponsorship KALI PUJA
          </h2>
          <p className="text-neutral-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Partner with {clubInfo.name} for our upcoming Kali Puja festival. Explore our prime sponsorship, advertising slots, and promotional display opportunities.
          </p>
        </div>

        {/* Sponsorship Grid / List */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="mb-6 flex items-center justify-between border-b border-neutral-200 pb-3">
            <div className="flex items-center gap-2 text-primary-dark font-heading font-bold text-xl">
              <Megaphone className="text-gold" size={22} />
              <span>Description of Sponsorship Slots</span>
            </div>
            <span className="text-xs uppercase tracking-wider font-semibold text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">
              10 Prime Opportunities
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sponsorshipData.items.map((item, index) => (
              <div 
                key={item.id}
                className="group relative bg-white border border-neutral-200 hover:border-gold/60 rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-gold shrink-0 font-heading font-bold text-sm transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="font-heading font-bold text-primary-dark text-lg group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    {item.category && (
                      <span className="text-[11px] font-medium text-gold-dark bg-gold/10 px-2 py-0.5 rounded shrink-0">
                        {item.category}
                      </span>
                    )}
                  </div>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="text-gold/40 group-hover:text-gold transition-colors shrink-0 self-center">
                  <CheckCircle2 size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* In-Charge Contact Callout */}
        <div className="max-w-3xl mx-auto bg-primary text-white rounded-xl p-8 md:p-10 shadow-xl border-t-4 border-gold relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-wider">
                <Sparkles size={14} />
                <span>Sponsorship Coordination</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold">
                In-Charge &mdash; {sponsorshipData.inCharge.name}
              </h3>
              <p className="text-neutral-200 text-sm max-w-md leading-relaxed">
                For commercial slots, banner allocations, stall bookings, or custom sponsorship packages, kindly connect with the designated In-Charge.
              </p>
              <div className="flex items-center gap-2 text-gold font-mono text-xl font-bold pt-1">
                <Phone size={20} className="shrink-0" />
                <a 
                  href={`tel:${sponsorshipData.inCharge.rawPhone}`} 
                  className="hover:text-white transition-colors underline decoration-gold/50 hover:decoration-white"
                >
                  {sponsorshipData.inCharge.phone}
                </a>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto">
              <a
                href={`tel:${sponsorshipData.inCharge.rawPhone}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-md bg-gold hover:bg-gold-light text-primary-dark font-bold text-sm transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <Phone size={18} />
                <span>Call {sponsorshipData.inCharge.name}</span>
              </a>

              <a
                href={`https://wa.me/91${sponsorshipData.inCharge.rawPhone}?text=${encodeURIComponent(`Hello Nitai Har ji, I would like to inquire about Kali Puja 2026 sponsorship opportunities at S.T.S Club (Theme: ${kaliPujaNotice.theme}).`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-md bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-sm transition-all backdrop-blur-sm"
              >
                <MessageCircle size={18} />
                <span>WhatsApp Message</span>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-300 gap-3">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-gold shrink-0" />
              <span>{clubInfo.address}</span>
            </div>
            <span className="text-gold font-medium">Theme: {kaliPujaNotice.theme}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
