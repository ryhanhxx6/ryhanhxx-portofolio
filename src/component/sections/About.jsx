import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <RevealOnScroll>
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-red-600"> Me</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-md font-semibold ">
                Passionate <span className="text-red-500">Product Design</span>{" "}
                & <span className="text-red-500">Graphic Design</span>
              </h3>
              <p className="text-gray-400 text-md">
                I recently graduated from YARSI University with a degree in
                Informatics Engineering. I’m passionate about bringing ideas to
                life through creative digital solutions and always eager to
                explore new technologies. Along the way, I’ve taken various
                courses in IT, design, and digital marketing to broaden my
                skills. I enjoy learning new things, embracing challenges, and
                working collaboratively with others.
              </p>
              <div className="flex justify-left space-x-4">
                <a
                  href="https://drive.google.com/file/d/1JrLYX3fRgmZi4Irv-TwOtqEetHxR6KJ3/view?usp=sharing"
                  className="bg-red-700 text-white py-3 px-6 rounded-full font-medium transition relative overflow-hidden hover:bg-red-800 transition delay-150"
                >
                  Download CV
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-rayhan-hakim-8ab419217/"
                  className="border border-red-700 text-red-700 py-3 px-6 rounded-full font-medium transition relative overflow-hidden hover:bg-red-700 transition delay-150 hover:text-white"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <img
                src="../public/img/Photo.jpg"
                alt=""
                className="rounded py-16 px-16 hidden md:block "
              />
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
