import PageHeader from "@/components/PageHeader";
import { clubInfo } from "@/data/club";

export const metadata = {
  title: `Events | ${clubInfo.name}`,
  description: "Stay updated with upcoming and past events at S.T.S Club.",
};

export default function EventsPage() {
  return (
    <>
      <PageHeader 
        title="Events" 
        description="Join us at our upcoming events or relive the moments from our past celebrations."
        imageSrc="/gallery/WhatsApp Image 2026-09-25 at 19.06.23.jpeg"
      />
      <section className="py-24 bg-white min-h-[50vh] flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-xl mx-auto bg-neutral-muted p-12 rounded-sm border border-neutral-200">
            <h2 className="text-2xl font-heading font-bold text-primary-dark mb-4">Event Calendar Update</h2>
            <p className="text-neutral-600 mb-8">
              We are currently updating our events schedule for the upcoming season. 
              Please check back soon for detailed information about our upcoming cultural events.
            </p>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full"></div>
          </div>
        </div>
      </section>
    </>
  );
}
