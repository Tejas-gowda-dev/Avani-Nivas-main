
import React, { useState, useEffect } from 'react';
import { PageId, ProjectItem } from '../types';
// @ts-ignore
import Home from '../assets/ModernHome.webp';

interface HeroSectionProps {
  onOpenConsultation: () => void;
  onNavigate?: (page: PageId) => void;
  onSelectProject?: (project: ProjectItem) => void;
}

interface HeroSlide {
  id: string;
  title: string;
  image: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-living',
    title: 'Luxury Modern Home',
    image: Home,
  },
  {
    id: 'slide-interior',
    title: 'Premium Contemporary Architecture',
    image:
      'https://cms.interiorcompany.com/wp-content/uploads/2023/12/double-floor-front-elevation-design-with-balcony.webp',
  },
  {
    id: 'slide-kitchen',
    title: 'Elegant Modern House Design',
    image:
      'https://cms.interiorcompany.com/wp-content/uploads/2023/12/modern-2nd-floor-house-front-design-in-simple-indian-style.webp',
  },
  {
    id: 'slide-duplex',
    title: 'Luxury Duplex Architecture',
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=85',
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConsultation,
  onNavigate,
  onSelectProject,
}) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [failedImages, setFailedImages] = useState<string[]>([]);

  // Automatically change slide every 3 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  // Handle image loading errors
  const handleImageError = (slideId: string) => {
    setFailedImages((prev) =>
      prev.includes(slideId) ? prev : [...prev, slideId]
    );
  };

  // Manually navigate slides
  const handleSlideChange = (index: number) => {
    setActiveSlideIndex(index);
  };

  return (
    <section
      id="hero-section"
      className="
        relative min-h-[85vh] lg:min-h-[88vh]
        flex flex-col justify-center
        py-14 sm:py-18 lg:py-20
        overflow-hidden bg-[#121212] text-white
      "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Avani Nivas Architectural Showcase"
    >
      {/* BACKGROUND IMAGE SLIDER */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none">

        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === activeSlideIndex;

          const imageSrc = failedImages.includes(slide.id)
            ? Home
            : slide.image;

          return (
            <div
              key={slide.id}
              className={`
                absolute inset-0
                transition-opacity duration-[1500ms] ease-in-out
                ${
                  isActive
                    ? 'opacity-100 z-10'
                    : 'opacity-0 z-0 pointer-events-none'
                }
              `}
              aria-hidden={!isActive}
            >
              <img
                src={imageSrc}
                alt={slide.title}
                onError={() => handleImageError(slide.id)}
                className={`
                  absolute inset-0
                  w-full h-full
                  object-cover object-center
                  transition-transform duration-[7000ms]
                  ease-out will-change-transform
                  ${
                    isActive
                      ? 'scale-[1.08]'
                      : 'scale-100'
                  }
                `}
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'auto'}
                decoding="async"
                draggable={false}
              />
            </div>
          );
        })}

        {/* LEFT CINEMATIC GRADIENT */}
        <div
          className="
            absolute inset-0 z-20
            bg-gradient-to-r
            from-black/50 via-black/25 to-transparent
          "
        />

        {/* BOTTOM GRADIENT */}
        <div
          className="
            absolute inset-0 z-20
            bg-gradient-to-b
            from-black/20 via-transparent to-black/50
          "
        />

        {/* WARM LUXURY OVERLAY */}
        <div className="absolute inset-0 z-20 bg-[#2C1A0E]/10" />
      </div>

      {/* HERO CONTENT */}
      <div
        className="
          relative z-30
          max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-8
          w-full my-auto
          py-8 sm:py-12
        "
      >
        <div
          className="
            grid grid-cols-1 lg:grid-cols-12
            gap-8 lg:gap-12 items-center
          "
        >
          <div
            className="
              lg:col-span-8
              space-y-6 sm:space-y-7
              text-left
            "
          >
            {/* MAIN HEADLINE */}
            <div className="space-y-2">
              <h1
                className="
                  font-serif
                  text-3xl sm:text-5xl
                  lg:text-6xl xl:text-[66px]
                  leading-[1.08]
                  text-white tracking-tight
                  drop-shadow-lg
                "
              >
                Building the Home of Your Dreams,
                Today and Tomorrow.
              </h1>
            </div>

            {/* DESCRIPTION */}
            <p
              className="
                font-sans
                text-base sm:text-lg lg:text-xl
                text-[#FAF8F5]/95
                leading-relaxed
                max-w-2xl font-normal
                drop-shadow-md
              "
            >
              Avani Nivas by Gowdru Realcom brings
              visionary architectural brilliance,
              reinforced civil engineering, and exquisite
              customized interiors to your dream spaces.
              Experience turnkey delivery with locked-in
              budgets and zero cost surprises.
            </p>

          
          </div>
        </div>
      </div>

      {/* SLIDER NAVIGATION DOTS */}
      <div
        className="
          absolute bottom-6 sm:bottom-10
          left-1/2 -translate-x-1/2
          z-40 flex items-center gap-3
        "
        role="group"
        aria-label="Hero image navigation"
      >
        {HERO_SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => handleSlideChange(index)}
            aria-label={`View ${slide.title}`}
            aria-current={
              activeSlideIndex === index ? 'true' : undefined
            }
            className={`
              h-2 rounded-full
              transition-all duration-500
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-white
              ${
                activeSlideIndex === index
                  ? 'w-10 bg-[#E2D4BC]'
                  : 'w-2 bg-white/60 hover:bg-white'
              }
            `}
          />
        ))}
      </div>
    </section>
  );
};
