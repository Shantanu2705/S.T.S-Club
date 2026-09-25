import PageHeader from "@/components/PageHeader";
import { clubInfo } from "@/data/club";
import { galleryImages } from "@/data/gallery";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: `Activities | ${clubInfo.name}`,
  description: "Explore the cultural and social activities at S.T.S Club.",
};

export default function ActivitiesPage() {
  const activityCategories = [
    { name: "Cultural Programs", category: "Culture", desc: "Celebrating our rich heritage through performances, festivals, and artistic expressions." },
    { name: "Community Gatherings", category: "Club", desc: "Regular meetups that bring members and their families together to strengthen bonds." },
    { name: "Special Events", category: "Events", desc: "Annual celebrations, milestone anniversaries, and notable functions held at the club." }
  ];

  return (
    <>
      <PageHeader 
        title="Activities" 
        description="From cultural celebrations to community gatherings, discover the life of our club."
        imageSrc="/gallery/WhatsApp Image 2026-09-25 at 19.06.29 (1).jpeg"
      />
      <section className="py-24 bg-neutral-muted min-h-[50vh]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-6">A Vibrant Community Calendar</h2>
            <p className="text-neutral-600 text-lg leading-relaxed">
              The heart of S.T.S Club lies in its diverse calendar of activities. 
              For decades, we have been organizing events that cater to every member of our community, keeping our legacy alive.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {activityCategories.map(activity => {
              const matchingImage = galleryImages.find(img => img.category === activity.category);
              
              return (
                <div key={activity.name} className="bg-white rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow group flex flex-col xl:flex-row">
                  <div className="w-full xl:w-2/5 h-64 xl:h-auto relative overflow-hidden">
                    <Image 
                      src={matchingImage?.src || "/gallery/WhatsApp Image 2026-09-25 at 19.06.28.jpeg"} 
                      alt={activity.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-primary-dark/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                  <div className="w-full xl:w-3/5 p-8 flex flex-col justify-center relative">
                    <div className="absolute top-0 left-0 bottom-0 w-1 bg-gold"></div>
                    <h3 className="font-heading font-bold text-primary-dark text-2xl mb-3">{activity.name}</h3>
                    <p className="text-neutral-600 mb-6 flex-grow">{activity.desc}</p>
                    <Link href="/gallery" className="text-primary font-medium hover:text-gold transition-colors inline-flex items-center gap-2 self-start mt-auto">
                      View Photos <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  );
}
