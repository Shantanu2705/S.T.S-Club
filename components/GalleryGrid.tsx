"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GalleryImage } from "@/data/gallery";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryGridProps {
  images: GalleryImage[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const categories = ["All", "Events", "Culture", "Club", "Members", "Memories"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = activeCategory === "All" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, filteredImages.length]);

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap gap-2 md:gap-4 mb-12 justify-center">
        {categories.map((category) => (
          <button 
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === category 
                ? "bg-primary text-white shadow-md transform scale-105" 
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div 
        layout
        className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredImages.map((img, index) => (
            <motion.div 
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={img.id} 
              onClick={() => openLightbox(index)}
              className="relative group overflow-hidden rounded-sm break-inside-avoid shadow-sm hover:shadow-xl transition-all cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={800}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <span className="inline-block px-3 py-1 bg-gold text-primary-dark text-xs font-bold uppercase tracking-wider mb-2 rounded-sm">
                  {img.category}
                </span>
                <p className="text-white font-medium text-sm line-clamp-2 mt-1">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && filteredImages.length > 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center"
          >
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110] bg-white/10 hover:bg-white/20 p-2 rounded-full"
            >
              <X size={28} />
            </button>
            
            <button 
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-[110] bg-white/10 hover:bg-white/20 p-3 rounded-full"
            >
              <ChevronLeft size={32} />
            </button>
            
            <div className="relative w-full max-w-5xl h-[75vh] px-4 md:px-16" onClick={closeLightbox}>
              <div className="w-full h-full relative" onClick={e => e.stopPropagation()}>
                <Image
                  src={filteredImages[currentIndex].src}
                  alt={filteredImages[currentIndex].alt}
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>
            </div>
            
            <button 
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-[110] bg-white/10 hover:bg-white/20 p-3 rounded-full"
            >
              <ChevronRight size={32} />
            </button>
            
            <div className="absolute bottom-8 left-0 right-0 text-center text-white/90 px-4 pointer-events-none">
              <p className="font-heading text-2xl drop-shadow-md">{filteredImages[currentIndex].alt}</p>
              <p className="text-sm font-bold text-gold mt-2 tracking-widest uppercase drop-shadow-md">{filteredImages[currentIndex].category}</p>
              <p className="text-xs mt-3 opacity-60">{currentIndex + 1} / {filteredImages.length}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
