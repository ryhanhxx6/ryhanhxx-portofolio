import { RevealOnScroll } from "../RevealOnScroll";
import Image from "../img/Ipad.png";

const photo = [{ id: 1, image: Image }];

export const Freelance = () => {
  return (
    <section id="freelance" className="py-24 px-4 relative">
      <RevealOnScroll>
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            Desig<span className="text-red-600">noir</span>
          </h2>

          <h3 className="text-center mb-10 text-muted-foreground">
            Creative Vision, Executed with Precision.
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-1 gap-6">
              {photo.map((item) => (
                <img
                  src={item.image}
                  alt=""
                  className="py-max px-max bg-origin-content"
                />
              ))}
            </div>

            <div className="space-y-6">
              <p className="text-md text-muted-foreground">
                Your ideas, elevated. Crafting elegant designs. Delivering
                polished, impactful, and clear brands that have a touch that
                dare to stand out. Ready to transform your brand narrative?
                Explore my featured projects below, where{" "}
                <span className="text-red-600">
                  every pixel is crafted to communicate confidence and style.
                </span>{" "}
                Let’s build something extraordinary together.
              </p>
              <div className="flex justify-left space-x-4">
                <a
                  href="https://instagram.com/designoirrr"
                  className="bg-red-700 text-white py-3 px-6 rounded-full font-medium transition relative overflow-hidden hover:bg-red-800 transition delay-150"
                >
                  View Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
