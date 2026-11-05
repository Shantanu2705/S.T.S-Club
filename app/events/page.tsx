import PageHeader from "@/components/PageHeader";
import SponsorshipSection from "@/components/SponsorshipSection";
import { clubInfo } from "@/data/club";

export const metadata = {
  title: `Events & Sponsorship | ${clubInfo.name}`,
  description: "Official announcements, 2026 Kali Puja Theme: Sonali Shankho, and sponsorship opportunities at S.T.S Club.",
};

export default function EventsPage() {
  return (
    <>
      <PageHeader 
        title="Events & Announcements" 
        description="Join us at our upcoming celebrations, cultural festivals, and community initiatives."
        imageSrc="/gallery/WhatsApp Image 2026-09-25 at 19.06.23.jpeg"
      />

      {/* Kali Puja 2026 Announcement & Sponsorship Section */}
      <SponsorshipSection />

      {/* Calendar Updates Section */}
      <section className="py-16 bg-white border-t border-neutral-200">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-xl mx-auto bg-neutral-muted p-10 rounded-sm border border-neutral-200 shadow-sm">
            <h3 className="text-xl font-heading font-bold text-primary-dark mb-3">Additional Events Schedule</h3>
            <p className="text-neutral-600 mb-6 text-sm leading-relaxed">
              We are constantly updating our complete cultural and sports calendar for the upcoming season. 
              Please check back soon for additional program itineraries and celebrations.
            </p>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full"></div>
          </div>
        </div>
      </section>
    </>
  );
}
