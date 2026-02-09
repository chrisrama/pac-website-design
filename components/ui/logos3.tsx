"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { getAssetPath } from "@/lib/utils";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "",
  logos = [
    {
      id: "logo-1",
      description: "80 Years of thoughtful conversation",
      image: getAssetPath("/1.png"),
    
      className: "h-20 w-auto",
    },
    {
      id: "logo-2",
      description: "Center for Civic & Global Engagement",
      image: getAssetPath("/2.png"),
      className: "h-20 w-auto",
    },
    {
      id: "logo-3",
      description: "250+ speaker",
      image: getAssetPath("/3.png"),
      className: "h-20 w-auto",
    },
    {
      id: "logo-4",
      description: "Principia College",
      image: getAssetPath("/6.png"),
      className: "h-20 w-auto",
    },
    {
      id: "logo-5",
      description: "100% Student-Led",
      image: getAssetPath("/5.png"),
      className: "h-20 w-auto",
    },
    {
      id: "logo-6",
      description: "5000+ attendees",
      image: getAssetPath("/4.png"),
      className: "h-20 w-auto",
    },

    
  ],
}: Logos3Props) => {
  return (
    <section className="pt-12 md:pt-16 pb-6 md:pb-8">
      <div className="pt-6 md:pt-8">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true })]}
          >
            <CarouselContent className="ml-0">
              {/* Duplicate logos so the strip is longer than the viewport and always scrolls */}
              {[...logos].map((logo, index) => (
                <CarouselItem
                  key={`${logo.id}-${index}`}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <div>
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className={logo.className}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent" />
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
