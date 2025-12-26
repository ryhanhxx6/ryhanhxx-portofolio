import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-6xl md:text-5xl font-bold mb-2 bg-gradient-to-l from-red-500 to-red-900 bg-clip-text text-transparent leading-right">
            Hi, i'm Rayhan
          </h1>

          <p className="text-md mb-8 max-w-3xl mx-auto text-muted-foreground">
            I love crafting designs that feel thoughtful, intuitive, and
            visually engaging.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-red-700 text-white py-3 px-6 rounded-full font-medium transition relative overflow-hidden hover:bg-red-800 transition delay-150"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-red-700 text-red-700 py-3 px-6 rounded-full font-medium transition relative overflow-hidden hover:bg-red-700 transition delay-150 hover:text-white"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
