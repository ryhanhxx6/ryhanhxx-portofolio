import { RevealOnScroll } from "../RevealOnScroll";
import TypewriterText from "../TypewriterText";
import ShinyText from "../../components/ShinyText";


const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      
      <div className="text-center z-10 px-4">
        <RevealOnScroll>
          <ShinyText
            className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-l from-red-500 to-red-900 bg-clip-text text-transparent leading-right"
            text="Hello"
            speed={2}
            delay={0}
            color="#dc2626"
            shineColor="rgb(255, 137, 137)"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />{" "}
        </RevealOnScroll>

        <RevealOnScroll>
          <TypewriterText
            text="Build designs that feel thoughtful, intuitive, and visually engaging."
            speed={60}
            className="text-md mb-8 max-w-3xl mx-auto text-muted-foreground"
          />
        </RevealOnScroll>

        <RevealOnScroll>
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
        </RevealOnScroll>
      </div>
    </section>
  );
};
