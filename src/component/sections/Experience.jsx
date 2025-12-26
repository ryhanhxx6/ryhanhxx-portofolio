const experiences = [
  {
    period: "Nov 2024 - Jan 2025",
    role: "UI/UX Designer Internship",
    company: "GAOtek, Inc",
    description:
      "Analyzed user stories to identify key challenges, designed intuitive wireframes and prototypes, refined visuals to hi-fi, and validated usability through testing.",
    technologies: ["Figma", "Product Design", "Collaboration", "User Interface"],
    current: true,
  },
  {
    period: "Jul 2024 - Oct 2024",
    role: "Graphic Designer Internship",
    company: "Digimarly",
    description:
      "Deepened design fundamentals, created UMKM social media content, mentored peers, and collaborated cross-functionally to deliver impactful digital strategies.",
    technologies: ["Photoshop", "Design", "Scoial Media Design"],
    current: false,
  },
  {
    period: "Aug 2023 - Jan 2024",
    role: "Android Engineering Course",
    company: "Binar Academy - Kampus Merdeka Program",
    description:
      "Built Android apps using Kotlin, applying core principles, UI concepts, persistence layers, server integration, and collaborative development via GitHub.",
    technologies: ["Android Studio", "Slicing UI", "Mobile"],
    current: false,
  },
  {
    period: "Jun 2022 — Jul 2022",
    role: "UI/UX Designer Virtual Internship: Project Based",
    company: "Niagahoster - Rakamin Academy",
    description:
      "Identified user pain points, designed wireframes and prototypes, redesigned Niagahoster’s checkout page, and validated improvements through usability testing.",
    technologies: ["Figma", "Product Design", "User Interface"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Carrer <span className="text-red-600">Journey</span>
        </h2>

        <h3 className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          A continuous journey of learning, collaboration, and growth through hands-on projects, 
          real-world challenges, and creative problem-solving.
        </h3>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(255,0,0,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
