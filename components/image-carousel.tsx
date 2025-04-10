// src/components/image-carousel.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ImageCarouselProps {
  images: string[];
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <Carousel
      // Keep this w-full. No max-width or mx-auto needed here,
      // as the parent <main> controls the overall width/centering.
      className="w-full"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {images.map((imageUrl, index) => (
          <CarouselItem key={index}>
            {/* Change aspect-video to aspect-[18/9] */}
            <div className="relative aspect-[18/9] w-full overflow-hidden rounded-lg">
              <Image
                src={imageUrl}
                alt={`Carousel image ${index + 1}`}
                fill
                className="object-cover" // object-cover will handle the cropping
                priority={index === 0}
                // Sizes prop is mostly about width, so previous values are likely okay
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1400px"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {images.length > 1 && (
        <>
          {/* Keep original button positioning inside */}
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden sm:inline-flex" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden sm:inline-flex" />
        </>
      )}
    </Carousel>
  );
}
