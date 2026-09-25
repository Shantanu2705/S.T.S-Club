import PageHeader from "@/components/PageHeader";
import { clubInfo } from "@/data/club";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata = {
  title: `Contact Us | ${clubInfo.name}`,
  description: "Get in touch with S.T.S Club. Information about membership and inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        title="Contact Us" 
        description="We welcome inquiries about membership, events, and community activities."
        imageSrc="/gallery/WhatsApp Image 2026-09-25 at 19.06.31 (1).jpeg"
      />
      <section className="py-24 bg-neutral-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Contact Info */}
            <div>
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="w-8 h-[1px] bg-gold"></span>
                <span className="text-gold font-bold tracking-widest text-sm uppercase">Get In Touch</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-8">
                Connect with our community.
              </h2>
              
              <div className="space-y-8 mb-12">
                <a href={`https://maps.google.com/?q=${encodeURIComponent(clubInfo.address)}`} target="_blank" rel="noopener noreferrer" className="flex gap-4 group">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-dark text-lg mb-1 group-hover:text-primary transition-colors">Our Location</h4>
                    <p className="text-neutral-600 leading-relaxed">{clubInfo.address}</p>
                  </div>
                </a>
                
                <a href={`tel:${clubInfo.phone.replace(/[^0-9+]/g, '')}`} className="flex gap-4 group">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-dark text-lg mb-1 group-hover:text-primary transition-colors">Phone</h4>
                    <p className="text-neutral-600 leading-relaxed">{clubInfo.phone}</p>
                  </div>
                </a>

                <a href={`https://wa.me/${clubInfo.whatsapp}?text=Hello! I'd like to know more about S.T.S Club.`} target="_blank" rel="noopener noreferrer" className="flex gap-4 group">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-dark text-lg mb-1 group-hover:text-green-600 transition-colors">WhatsApp</h4>
                    <p className="text-neutral-600 leading-relaxed">Message us anytime</p>
                  </div>
                </a>

                <a href={`mailto:${clubInfo.email}`} className="flex gap-4 group">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-dark text-lg mb-1 group-hover:text-primary transition-colors">Email</h4>
                    <p className="text-neutral-600 leading-relaxed">{clubInfo.email}</p>
                  </div>
                </a>
              </div>
              
              <div className="p-6 bg-primary text-white rounded-sm">
                <h4 className="font-heading font-bold text-xl mb-2 text-gold">Official Registration</h4>
                <p className="opacity-90">S.T.S Club is officially registered under Government Registration No. <strong>{clubInfo.registrationNo}</strong></p>
              </div>
            </div>

            {/* Contact Form Placeholder */}
            <div className="bg-white p-8 md:p-10 rounded-sm shadow-xl border border-neutral-100">
              <h3 className="text-2xl font-heading font-bold text-primary-dark mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-neutral-700">First Name</label>
                    <input type="text" id="firstName" className="w-full px-4 py-3 rounded-sm border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-neutral-700">Last Name</label>
                    <input type="text" id="lastName" className="w-full px-4 py-3 rounded-sm border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-neutral-700">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-sm border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-neutral-700">Subject</label>
                  <select id="subject" className="w-full px-4 py-3 rounded-sm border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white">
                    <option>General Inquiry</option>
                    <option>Membership</option>
                    <option>Events</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-neutral-700">Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-sm border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="w-full bg-primary hover:bg-primary-light text-white font-medium py-4 rounded-sm transition-colors shadow-sm">
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.33439927714!2d88.26495085!3d22.53542735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1707921234567!5m2!1sen!2sin" 
          className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700" 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="absolute inset-0 pointer-events-none border-t-4 border-gold"></div>
      </section>
    </>
  );
}
