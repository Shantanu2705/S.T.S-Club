import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { clubInfo } from "@/data/club";

export const metadata = {
  title: `About Us | ${clubInfo.name}`,
  description: "Learn about the heritage, community, and values of S.T.S Club.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="About Us" 
        description="A vibrant community built around friendship, culture, and shared memories since 1971."
        imageSrc="/gallery/WhatsApp Image 2026-09-25 at 19.06.33.jpeg"
      />
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-6">Our Heritage</h2>
              <p className="text-neutral-600 mb-6 leading-relaxed text-lg text-balance">
                Established on {clubInfo.establishmentDate}, {clubInfo.name} has grown from a modest gathering into an enduring institution. Founded on the occasion of POCHISE BOISHAKH, we have always held onto the cultural and communal ties that brought our founding members together.
              </p>
              <p className="text-neutral-600 mb-6 leading-relaxed text-lg text-balance">
                Our legacy spans generations, fostering a space where families connect, youth engage in constructive activities, and cultural traditions are celebrated with profound respect and immense joy.
              </p>
            </div>
            <div className="order-1 md:order-2 relative aspect-square rounded-sm overflow-hidden shadow-2xl">
              <Image 
                src="/gallery/WhatsApp Image 2026-09-25 at 19.06.31.jpeg" 
                alt="Community gathering" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
