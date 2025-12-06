import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <p className="text-md mb-8 max-w-3xl text-center text-gray-400">
          Find me online on most digital platforms{" "}
          <a href="https://instagram.com/ryhanhxx"><span className="text-red-400 font-semibold">@ryhanhxx</span></a>, or by clicking the
          links below. For all business and projects inquiries, email me at{" "}
          <span className="text-red-400">ryhanhxx6@gmail.com</span> I also run a
          freelance design account on Instagram at{" "}
          <a href="https://instagram.com/designoirrr"><span className="text-red-400 font-semibold ">@designoirrr</span>.</a>
        </p>
      </RevealOnScroll>
    </section>
  );
};
