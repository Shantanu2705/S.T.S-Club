import PageHeader from "@/components/PageHeader";
import { galleryImages } from "@/data/gallery";
import { clubInfo } from "@/data/club";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata = {
  title: `Gallery | ${clubInfo.name}`,
  description: "Browse our collection of photographs capturing the spirit and moments of S.T.S Club.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader 
        title="Gallery" 
        description="A visual journey through our heritage, events, and community moments."
        imageSrc="/gallery/WhatsApp Image 2026-09-25 at 19.06.32 (2).jpeg"
      />
      <section className="py-24 bg-neutral-muted min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>
    </>
  );
}
