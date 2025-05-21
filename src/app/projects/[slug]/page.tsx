import { notFound } from "next/navigation";
import Projects from "../../../data/projects.json";

export async function generateStaticParams() {
  return Projects.map((p) => ({
    slug: p.slug,
  }));
}

type Props = {
  params: {
    slug: string;
  };
};

export default function ProjectsPage({ params }: Props) {
  const project = Projects.find((p) => p.slug === params.slug);
  if (!project) {
    notFound();
  }

  const sidebar = [
    { title: "Objective", id: "objective" },
    { title: "Tools", id: "tools" },
    { title: "Key Steps", id: "steps" },
    { title: "Concepts", id: "concepts" },
    { title: "Reflections", id: "reflections" },
  ];
  return (
    <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
      {/* Video */}
      <section className="w-full bg-black/80">
        <div className="container mx-auto aspect-video">
          <a
            key={project.title}
            href={project.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={project.title}
            className="w-full h-full rounded-lg"
          ></a>
        </div>
      </section>

      {/* Content Sections */}
      <section className="container mx-auto py-12 space-y-12">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-heading text-slate-900 dark:text-white">
          {project.title}
        </h1>

        {/* Objective */}
        <div>
          <h2 className="text-xl font-semibold text-teal-600">Objective</h2>
          <p className="mt-2 text-slate 700 dark:text-slate-300">
            {project.objective}
          </p>
        </div>

        {/* Tools */}
        <div>
          <h2 className="text-xl font-semibold text-teal-600">
            Tools & Environments
          </h2>
          <ul className="list-disc list-inside mt-2 text-slate-700 dark:text-slate-300 space-y-1">
            {project.tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>

        {/* Steps */}
        <div>
          <h2 className="text-xl font-semibold text-teal-600">Key Steps</h2>
          <ol className="list-decimal list-inside mt-2 text-slate-700 dark:text-slate-300 space-y-1">
            {project.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>

        {/* Concepts */}
        <div>
          <h2 className="text-xl font-semibold text-teal-600">
            Security Concepts Demonstrated
          </h2>
          <ul>
            {project.concepts.map((concept) => (
              <li key={concept}>concept</li>
            ))}
          </ul>
        </div>

        {/* Reflections */}
        <div>
          <h2 className="text-xl font-semibold text-teal-600">
            Key Reflections
          </h2>
          <p className="mt-2 text-slate-700 dark:text-slate-300">
            {project.reflections}
          </p>
        </div>
      </section>
    </main>
  );
}
