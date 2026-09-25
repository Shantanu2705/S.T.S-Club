import PageHeader from "@/components/PageHeader";
import { clubInfo } from "@/data/club";
import Image from "next/image";

export const metadata = {
  title: `History | ${clubInfo.name}`,
  description: `The history of S.T.S Club since ${clubInfo.established}.`,
};

export default function HistoryPage() {
  return (
    <>
      <PageHeader 
        title="Our History" 
        description="Tracing our journey from a small gathering in 1971 to the vibrant community we are today."
        imageSrc="/gallery/WhatsApp Image 2026-09-25 at 19.06.27 (1).jpeg"
      />
      <section className="py-24 bg-neutral-muted">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          
          <div className="relative border-l-4 border-gold ml-4 md:ml-0 md:pl-12 py-8">
            <div className="mb-16 relative">
              <span className="absolute -left-7 md:-left-[3.25rem] w-5 h-5 rounded-full bg-gold ring-8 ring-neutral-muted mt-1.5" />
              <div className="text-xl md:text-2xl font-bold text-gold mb-2">{clubInfo.established}</div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-dark mb-4">Foundation of S.T.S Club</h3>
              <p className="text-neutral-600 text-lg leading-relaxed">
                Established on {clubInfo.establishmentDate} on the occasion of POCHISE BOISHAKH. A group of visionary individuals came together with a shared dream of creating a community hub that would foster culture and togetherness.
              </p>
              <div className="mt-8 relative aspect-[16/9] rounded-sm overflow-hidden shadow-lg">
                <Image
                  src="/gallery/WhatsApp Image 2026-09-25 at 19.06.26 (1).jpeg"
                  alt="Historical foundation moment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="mb-16 relative">
              <span className="absolute -left-7 md:-left-[3.25rem] w-5 h-5 rounded-full bg-primary ring-8 ring-neutral-muted mt-1.5" />
              <div className="text-xl md:text-2xl font-bold text-primary mb-2">Growth & Legacy</div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-dark mb-4">Decades of Community Service</h3>
              <p className="text-neutral-600 text-lg leading-relaxed">
                Over the decades, the club has expanded its activities, organizing countless cultural festivals and community outreach programs, cementing its place as an integral part of members' lives.
              </p>
            </div>
            
            <div className="relative">
              <span className="absolute -left-7 md:-left-[3.25rem] w-5 h-5 rounded-full bg-primary-dark ring-8 ring-neutral-muted mt-1.5" />
              <div className="text-xl md:text-2xl font-bold text-primary-dark mb-2">Present Day</div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-dark mb-4">A Modern Institution</h3>
              <p className="text-neutral-600 text-lg leading-relaxed">
                Today, {clubInfo.name} continues to uphold the values established in 1971 while embracing the future. Our rich history serves as the foundation for the energetic and inclusive community we proudly share today.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
