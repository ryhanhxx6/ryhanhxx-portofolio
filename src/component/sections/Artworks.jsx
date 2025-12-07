import React, { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import Poster1 from "../img/Poster-1.jpg";
import Poster2 from "../img/Poster-2.jpg";
import Poster3 from "../img/Poster-3.jpg";
import Socmed1 from "../img/Social-Media-1.jpg";
import Socmed2 from "../img/Social-Media-2.jpg";
import Socmed3 from "../img/Social-Media-3.jpg";
import Socmed4 from "../img/Social-Media-4.jpg";
import Socmed5 from "../img/Social-Media-5.jpg";
import Socmed6 from "../img/Social-Media-6.jpg";
import Socmed7 from "../img/Social-Media-7.jpg";
import Socmed8 from "../img/Social-Media-8.jpg";
import Socmed9 from "../img/Social-Media-9.jpg";
import Socmed10 from "../img/Social-Media-10.jpg";
import Socmed11 from "../img/Social-Media-11.jpg";
import Socmed12 from "../img/Social-Media-12.jpg";
import Socmed13 from "../img/Social-Media-13.jpg";

const graphicDesigns = [
  { id: 20, image: Poster2 },
  { id: 21, image: Poster1 },
  { id: 22, image: Poster3 },
  { id: 23, image: Socmed4 },
  { id: 24, image: Socmed7 },
  { id: 25, image: Socmed8 },
  { id: 26, image: Socmed3 },
  { id: 27, image: Socmed2 },
  { id: 28, image: Socmed5 },
  { id: 29, image: Socmed6 },
  { id: 30, image: Socmed1 },
  { id: 31, image: Socmed9 },
  { id: 32, image: Socmed11 },
  { id: 33, image: Socmed10 },
  { id: 34, image: Socmed13 },
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
