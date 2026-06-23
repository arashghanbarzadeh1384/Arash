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
  react: (
    <FaReact className="text-[#61dafb] w-7 h-7 transition-transform duration-300 hover:scale-110" />
  ),
  tailwind: (
    <SiTailwindcss className="text-[#38bdf8] w-7 h-7 transition-transform duration-300 hover:scale-110" />
  ),
  sass: (
    <FaSass className="text-[#cc6699] w-7 h-7 transition-transform duration-300 hover:scale-110" />
  ),
  wordpress: (
    <FaWordpress className="text-[#21759b] w-7 h-7 transition-transform duration-300 hover:scale-110" />
  ),
  html: (
    <FaHtml5 className="text-[#e34f26] w-7 h-7 transition-transform duration-300 hover:scale-110" />
  ),
  css: (
    <FaCss3Alt className="text-[#264de4] w-7 h-7 transition-transform duration-300 hover:scale-110" />
  ),
  javascript: (
    <FaJs className="text-[#f7df1e] w-7 h-7 transition-transform duration-300 hover:scale-110" />
  ),
  swiper: (
    <SiSwiper className="text-[#007aff] w-7 h-7 transition-transform duration-300 hover:scale-110" />
  ),
  reactrouter: (
    <SiReactrouter className="text-[#ca4245] w-7 h-7 transition-transform duration-300 hover:scale-110" />
  ),
  redux: (
    <SiRedux className="text-[#764abc] w-7 h-7 transition-transform duration-300 hover:scale-110" />
  ),
  next: (
    <SiNextdotjs className="text-white w-7 h-7 transition-transform duration-300 hover:scale-110" />
  ),
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
  const jsonFilePath = path.join(
    process.cwd(),
    "public",
    "json",
    "project.json"
  );
  const fileContents = await fs.readFile(jsonFilePath, "utf-8");
  const projects: Project[] = JSON.parse(fileContents);

  return (
    <main className="max-w-7xl mx-auto p-8 min-h-screen bg-gradient-to-tr">
      <h1 className="text-5xl font-semibold mb-14 text-white text-center tracking-wide">
        Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              relative block rounded-3xl overflow-hidden
              border border-white/20
              shadow-lg shadow-black/50
              hover:shadow-xl hover:scale-[1.03] transition-transform duration-300
            "
          >
            {project.image && (
              <>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none rounded-t-3xl"></div>
              </>
            )}

            {(project.technologies?.length ?? 0) > 0 && (
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 z-10">
                {project.technologies!.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-semibold shadow-sm"
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
    </main>
  );
}
