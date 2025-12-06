import React, { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

const graphicDesigns = [
  { id: 20, image: "../public/img/Poster-1.jpg" },
  { id: 21, image: "../public/img/Poster-2.jpg" },
  { id: 22, image: "../public/img/Poster-3.jpg" },
  { id: 23, image: "../public/img/Social Media-4.jpg" },
  { id: 24, image: "../public/img/Social Media-7.jpg" },
  { id: 25, image: "../public/img/Social Media-8.jpg" },
  { id: 26, image: "../public/img/Social Media-3.jpg" },
  { id: 27, image: "../public/img/Social Media-2.jpg" },
  { id: 28, image: "../public/img/Social Media-5.jpg" },
  { id: 29, image: "../public/img/Social Media-6.jpg" },
  { id: 30, image: "../public/img/Social Media-9.jpg" },
  { id: 31, image: "../public/img/Social Media-1.jpg" },
  { id: 32, image: "../public/img/Social Media-10.jpg" },
  { id: 33, image: "../public/img/Social Media-11.jpg" },
  { id: 34, image: "../public/img/Social Media-12.jpg" },
];

export const Artworks = () => {
  return (
    <section id="artworks" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Art<span className="text-red-600">works</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A collection of my graphic design works crafted with creativity and
          attention to detail.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {graphicDesigns.map((item) => (
            <div
              key={item.id}
              className="group bg-card rounded-lg overflow-hidden"
            >
              <RevealOnScroll>
                <div className="h-full md:h-full lg:h-full w-full overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={`Graphic Design ${item.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </RevealOnScroll>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
