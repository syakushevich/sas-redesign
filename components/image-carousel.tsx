// src/components/image-carousel.tsx (New File)
"use client"; // Carousel uses client-side logic

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Define props if you want to pass images dynamically
interface ImageCarouselProps {
  images: string[];
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  if (!images || images.length === 0) {
    return null; // Don't render if no images
  }

  return (
    <Carousel
      className="w-full"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {images.map((imageUrl, index) => (
          <CarouselItem key={index}>
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <Image
                src={imageUrl}
                alt={`Carousel image ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1400px"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* Only show nav buttons if more than one image */}
      {images.length > 1 && (
        <>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden sm:inline-flex" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden sm:inline-flex" />
        </>
      )}
    </Carousel>
  );
}
