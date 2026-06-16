import { RevealOnScroll } from "../RevealOnScroll";
import { Hourglass, Wallpaper, Terminal, PenTool, Eye } from "lucide-react";

import S1 from "../img/PS.png";
import S2 from "../img/AI.png";
import S3 from "../img/AE.png";
import S4 from "../img/LR.png";
import S5 from "../img/CANVA.png";
import S6 from "../img/FIGMA.png";
import S7 from "../img/GITHUB.png";
import S8 from "../img/MIRO.png";
import S9 from "../img/HTML.png";
import S10 from "../img/CSS.png";
import S11 from "../img/DOCS.png";
import S12 from "../img/SLIDES.png";
import S13 from "../img/SHEET.png";
import S14 from "../img/CLICKUP.png";
import S15 from "../img/PR.png";
import S16 from "../img/WORD.png";
import S17 from "../img/EXCEL.png";
import S18 from "../img/PPT.png";

const tools = [
  {
    image: S1,
    title: "Photoshop",
  },
  {
    image: S2,
    title: "Illustrator",
  },
  {
    image: S3,
    title: "After Effects",
  },
  {
    image: S4,
    title: "Lightroom",
  },
  {
    image: S15,
    title: "Premiere",
  },
  {
    image: S5,
    title: "Canva",
  },
  {
    image: S6,
    title: "Figma",
  },
  {
    image: S7,
    title: "Github",
  },
  {
    image: S10,
    title: "CSS",
  },
  {
    image: S9,
    title: "HTML",
  },
  {
    image: S13,
    title: "Sheets",
  },
  {
    image: S11,
    title: "Docs",
  },
  {
    image: S12,
    title: "Slides",
  },
  {
    image: S18,
    title: "Powerpoint",
  },
  {
    image: S17,
    title: "Excel",
  },
  {
    image: S16,
    title: "Word",
  },
  {
    image: S8,
    title: "Miro",
  },
  {
    image: S14,
    title: "ClickUp",
  },
];

export const Softwares = () => {
  return (
    <section id="softwares" className="py-24 px-4 relative">
      <RevealOnScroll>
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Soft<span className="text-red-600">wares</span>
        </h2>

        <h3 className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto ">
          Experienced in creating digital experiences using Figma, Adobe
          Creative Suite, Canva, and collaborative development tools.
        </h3>

        <div className="grid grid-cols-2 p-2 md:grid-cols-4 lg:grid-cols-6 gap-4 flex justify-center py-2 mt-6 lg:px-50">
          {tools.map((item, index) => (
            <div
              key={index}
              className="glass p-6 rounded-2xl animate-fade-in border hover:border-primary/50 transition-all duration-500"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-10 h-10 object-contain"
                />
              </div>

              <h3 className="text-sm mb-2 text-center">{item.title}</h3>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
};
