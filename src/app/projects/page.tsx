import fs from "fs/promises";
import path from "path";
import {
  FaReact,
  FaSass,
  FaWordpress,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiSwiper,
  SiReactrouter,
  SiNextdotjs,
} from "react-icons/si";

const iconMap: Record<string, React.ReactElement> = {
  react: <FaReact className="text-[#61dafb] w-7 h-7" />,
  tailwind: <SiTailwindcss className="text-[#38bdf8] w-7 h-7" />,
  sass: <FaSass className="text-[#cc6699] w-7 h-7" />,
  wordpress: <FaWordpress className="text-[#21759b] w-7 h-7" />,
  html: <FaHtml5 className="text-[#e34f26] w-7 h-7" />,
  css: <FaCss3Alt className="text-[#264de4] w-7 h-7" />,
  javascript: <FaJs className="text-[#f7df1e] w-7 h-7" />,
  swiper: <SiSwiper className="text-[#007aff] w-7 h-7" />,
  reactrouter: <SiReactrouter className="text-[#ca4245] w-7 h-7" />,
  redux: <SiRedux className="text-[#764abc] w-7 h-7" />,
  next: <SiNextdotjs className="text-white w-7 h-7" />,
};

type Tech = {
  name: string;
  iconKey: string;
};

type Project = {
  id: string | number;
  title: string;
  description: string;
  image?: string;
  link: string;
  technologies?: Tech[];
};

export default async function ProjectsPage() {
  let projects: Project[] = [];

  try {
    const jsonFilePath = path.join(
      process.cwd(),
      "public",
      "json",
      "project.json"
    );

    const fileContents = await fs.readFile(jsonFilePath, "utf-8");
    projects = JSON.parse(fileContents);
  } catch (error) {
    console.error("project.json not found:", error);
  }

  return (
    <main className="max-w-7xl mx-auto p-8 min-h-screen">
      <h1 className="text-5xl font-semibold mb-14 text-white text-center">
        Projects
      </h1>

      {projects.length === 0 ? (
        <p className="text-center text-white">
          No projects found.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block rounded-3xl overflow-hidden border border-white/20"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
              )}

              {(project.technologies?.length ?? 0) > 0 && (
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  {project.technologies?.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 text-white"
                    >
                      {iconMap[tech.iconKey.toLowerCase()] || null}
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </a>
          ))}
        </div>
      )}
    </main>
  );
}
