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
      description: "250+ Students",
      image: getAssetPath("/2.png"),
      className: "h-20 w-auto",
    },
    {
      id: "logo-3",
      description: "5000+ Attendees",
      image: getAssetPath("/3.png"),
      className: "h-20 w-auto",
    },
    {
      id: "logo-4",
      description: "100% Student-Led",
      image: getAssetPath("/4.png"),
      className: "h-20 w-auto",
    },
    
  ],
}: Logos3Props) => {
  return (
    <section className="py-12 md:py-16">
      <div className="pt-6 md:pt-8">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
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
