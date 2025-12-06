import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import TB1 from "../img/Mirats.jpg";
import TB2 from "../img/Attendly.jpg";
import TB3 from "../img/Niaga.jpg";
import TB4 from "../img/StayEase.jpg";
import TB5 from "../img/Groovy.jpg";
import TB6 from "../img/Bicyclone.jpg";

const projects = [
  {
    id: 1,
    title: "Al Mirats",
    description:
      "Easily and quickly calculate inheritance according to Sharia law accurate, reliable, and practical.",
    image: TB1,
    tags: ["Kotlin", "Mobile", "User Interface"],
    demoUrl:
      "https://www.behance.net/gallery/206013453/Al-Mirats-Inheritance-Calculator-Mobile",
  },
  {
    id: 2,
    title: "Attendly",
    description:
      "Attendly Innovative app redesigning and enforcing attendance discipline effectively.",
    image: TB2,
    tags: ["Figma", "Photoshop", "User Interface"],
    demoUrl: "https://www.behance.net/gallery/210929763/Attendly",
  },
  {
    id: 3,
    title: "Niagahoster",
    description:
      "Niagahoster data shows almost 50% of visitors abandon their web hosting package.",
    image: TB3,
    tags: ["Figma", "Photoshop", "User Interface"],
    demoUrl:
      "https://www.behance.net/gallery/218832149/Revamp-Niagahoster-Checkout",
  },
  {
    id: 4,
    title: "Stay Ease",
    description:
      "Mobile application that offers a rent house like home stay, hotels, villa and etc, with a convenient location.",
    image: TB4,
    tags: ["Figma", "Photoshop", "User Interface"],
    demoUrl: "https://www.behance.net/gallery/223636041/StayEase-Home-Stay-App",
  },
  {
    id: 5,
    title: "Groovy",
    description:
      "GroovyTones is an online vinyl's store, we want to convey a sense of nostalgia as well as life",
    image: TB5,
    tags: ["Figma", "Photoshop", "User Interface"],
    demoUrl: "https://www.behance.net/gallery/185276865/Vinyl-Store-Mobile-App",
  },
  {
    id: 6,
    title: "Bicyclone",
    description:
      "Explore new routes and track your progress in real-time with our intuitive bicyclone tracking app.",
    image: TB6,
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "https://www.behance.net/gallery/185277529/Bicyclone-Mobile-App",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <RevealOnScroll>
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Featured <span className="text-red-600">Projects</span>
          </h2>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was crafted with care,
            focusing on performance and user experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover bg-gray-950"
              >
                <div className="h-48 w-max overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground border-red-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    {project.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="bg-red-700 text-white py-2 px-4 text-sm rounded-full font-semibold transition relative overflow-hidden hover:bg-red-700 transition delay-150 hover:text-white>"
                      >
                        View Documentation
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
