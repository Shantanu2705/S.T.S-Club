export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "Events" | "Culture" | "Club" | "Members" | "Memories" | "All";
  featured?: boolean;
}

export const galleryImages: GalleryImage[] = [
  { id: "img-1", src: "/gallery/WhatsApp Image 2026-09-25 at 19.06.23 (1).jpeg", alt: "Club moment", category: "Memories", featured: true },
  { id: "img-2", src: "/gallery/WhatsApp Image 2026-09-25 at 19.06.23.jpeg", alt: "Club event", category: "Events" },
  { id: "img-3", src: "/gallery/WhatsApp Image 2026-09-25 at 19.06.24 (1).jpeg", alt: "Cultural activity", category: "Culture" },
  { id: "img-4", src: "/gallery/WhatsApp Image 2026-09-25 at 19.06.24 (2).jpeg", alt: "Club moment", category: "Events", featured: true },
  { id: "img-5", src: "/gallery/WhatsApp Image 2026-09-25 at 19.06.24.jpeg", alt: "Club members", category: "Members" },
  { id: "img-6", src: "/gallery/WhatsApp Image 2026-09-25 at 19.06.25 (1).jpeg", alt: "Community gathering", category: "Club" },
  { id: "img-7", src: "/gallery/WhatsApp Image 2026-09-25 at 19.06.25 (2).jpeg", alt: "Special moment", category: "Events" },
  { id: "img-8", src: "/gallery/WhatsApp Image 2026-09-25 at 19.06.25.jpeg", alt: "Club event", category: "Memories" },
  { id: "img-9", src: "/gallery/WhatsApp Image 2026-09-25 at 19.06.26 (1).jpeg", alt: "Cultural activity", category: "Culture", featured: true },
  { id: "img-10", src: "/gallery/WhatsApp Image 2026-09-25 at 19.06.26 (2).jpeg", alt: "Club event", category: "Events" },
  { id: "img-11", src: "/gallery/WhatsApp Image 2026-09-25 at 19.06.26.jpeg", alt: "Members", category: "Members" },
  { id: "img-12", src: "/gallery/WhatsApp Image 2026-09-25 at 19.06.27 (1).jpeg", alt: "Club building", category: "Club" },
  { id: "img-13", src: "/gallery/WhatsApp Image 2026-09-25 at 19.06.27.jpeg", alt: "Event", category: "Events" },
  { id: "img-14", src: "/gallery/WhatsApp Image 2026-09-25 at 19.06.28 (1).jpeg", alt: "Memories", category: "Memories" },
  { id: "img-15", src: "/gallery/WhatsApp Image 2026-09-25 at 19.06.28.jpeg", alt: "Culture", category: "Culture" },
  { id: "img-16", src: "/gallery/WhatsApp Image 2026-09-25 at 19.06.29 (1).jpeg", alt: "Event", category: "Events" },
  { id: "img-17", src: "/gallery/WhatsApp Image 2026-09-25 at 19.06.29 (2).jpeg", alt: "Members", category: "Members", featured: true },
  { id: "img-18", src: "/gallery/WhatsApp Image 2026-09-25 at 19.06.29.jpeg", alt: "Club", category: "Club" },
  { id: "img-19", src: "/gallery/WhatsApp Image 2026-09-25 at 19.06.30 (1).jpeg", alt: "Event", category: "Events" },
  { id: "img-20", src: "/gallery/WhatsApp Image 2026-09-25 at 19.06.30 (2).jpeg", alt: "Memories", category: "Memories" },
  { id: "img-21", src: "/gallery/WhatsApp Image 2026-09-25 at 19.06.30.jpeg", alt: "Culture", category: "Culture" },
  { id: "img-22", src: "/gallery/WhatsApp Image 2026-09-25 at 19.06.31 (1).jpeg", alt: "Event", category: "Events" },
  { id: "img-23", src: "/gallery/WhatsApp Image 2026-09-25 at 19.06.31 (2).jpeg", alt: "Members", category: "Members" },
  { id: "img-24", src: "/gallery/WhatsApp Image 2026-09-25 at 19.06.31.jpeg", alt: "Club", category: "Club" },
  { id: "img-25", src: "/gallery/WhatsApp Image 2026-09-25 at 19.06.32 (1).jpeg", alt: "Event", category: "Events" },
  { id: "img-26", src: "/gallery/WhatsApp Image 2026-09-25 at 19.06.32 (2).jpeg", alt: "Memories", category: "Memories", featured: true },
  { id: "img-27", src: "/gallery/WhatsApp Image 2026-09-25 at 19.06.32.jpeg", alt: "Culture", category: "Culture" },
  { id: "img-28", src: "/gallery/WhatsApp Image 2026-09-25 at 19.06.33 (1).jpeg", alt: "Event", category: "Events" },
  { id: "img-29", src: "/gallery/WhatsApp Image 2026-09-25 at 19.06.33.jpeg", alt: "Members", category: "Members" },
  { id: "img-30", src: "/gallery/WhatsApp Image 2026-09-25 at 19.06.34.jpeg", alt: "Club", category: "Club" },
];
