import { RevealOnScroll } from "../RevealOnScroll";
import { Hourglass, Wallpaper, Terminal, PenTool, Eye } from "lucide-react";

const highlights = [
  {
    icon: Terminal,
    title: "AI Prompting",
    description: "Create image from image generator.",
  },
  {
    icon: PenTool,
    title: "Layout Design",
    description: "Create Social Media Post, Story, Tiktok Photo Post",
  },
  {
    icon: Eye,
    title: "Interface Design",
    description:
      "Create mobile, tablet, desktop interface, wireframe, prototype and development",
  },
  {
    icon: Wallpaper,
    title: "Digital Imaging",
    description: "Create Mockup, Manipulation Image, Visual Enchaning",
  },
];

export const Competence = () => {
  return (
    <section id="competence" className="py-24 px-4 relative">
      <RevealOnScroll>
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Compe<span className="text-red-600">tence</span>
        </h2>

        <h3 className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Focused on delivering creative and functional design solutions through a strong blend of visual aesthetics, usability, and emerging technologies.
        </h3>

        <div className="grid sm:grid-cols-4 gap-6 flex justify-center px-auto mt-6 lg:px-60">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="glass p-6 rounded-2xl animate-fade-in border border-primary/30 hover:border-primary/50 transition-all duration-500"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
};
