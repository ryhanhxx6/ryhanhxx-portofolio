import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <p className="text-md mb-8 max-w-3xl text-center text-muted-foreground">
          Find me online on most digital platforms{" "}
          <a href="https://instagram.com/ryhanhxx"><span className="text-red-600">@ryhanhxx</span></a>, or by clicking the
          links below. For all business and projects inquiries, email me at{" "}
          <span className="text-red-600">ryhanhxx6@gmail.com</span>.
        </p>
      </RevealOnScroll>
    </section>
  );
};
