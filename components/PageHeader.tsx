import Image from "next/image";

interface PageHeaderProps {
  title: string;
  description?: string;
  imageSrc?: string;
}

export default function PageHeader({ title, description, imageSrc = "/gallery/WhatsApp Image 2026-09-25 at 19.06.28 (1).jpeg" }: PageHeaderProps) {
  return (
    <section className="relative h-[400px] md:h-[500px] flex items-end pb-16 md:pb-20 overflow-hidden bg-primary-dark pt-32">
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover object-center opacity-30 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/80 to-transparent" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 drop-shadow-md">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-neutral-300 font-light text-balance leading-relaxed">
              {description}
            </p>
          )}
          <div className="w-24 h-1 bg-gold mt-8 rounded-full" />
        </div>
      </div>
    </section>
  );
}
