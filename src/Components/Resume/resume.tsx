import fs from "fs/promises";
import path from "path";
import {
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiGit,
  SiGithub,
  SiFigma,
  SiTailwindcss,
  SiTypescript,
  SiMui,
  SiSass,
  SiStyledcomponents,
  SiWordpress,
} from "react-icons/si";
import DownloadButton from "../Button/Button";

const skillIcons: { [key: string]: React.ReactElement } = {
  React: <SiReact className="text-4xl text-indigo-500" />,
  "Next js": <SiNextdotjs className="text-4xl text-gray-800" />,
  Redux: <SiRedux className="text-4xl text-purple-600" />,
  git: <SiGit className="text-4xl text-red-600" />,
  GitHub: <SiGithub className="text-4xl text-gray-900" />,
  "Figma Software": <SiFigma className="text-4xl text-pink-600" />,
  tailwindcss: <SiTailwindcss className="text-4xl text-teal-400" />,
  TypeScript: <SiTypescript className="text-4xl text-blue-700" />,
  mui: <SiMui className="text-4xl text-blue-500" />,
  sass: <SiSass className="text-4xl text-pink-500" />,
  "styled-components": (
    <SiStyledcomponents className="text-4xl text-blue-400" />
  ),
  "rest api": <SiWordpress className="text-4xl text-blue-700" />,
};

type ResumeType = {
  basics: {
    name: string;
    label: string;
    summary: string;
    email: string;
    phone: string;
    location: {
      city: string;
      country: string;
    };
  };
  education: {
    institution: string;
    studyType: string;
    area: string;
    startDate: string;
    endDate?: string;
    score?: string;
    location: {
      city: string;
      country: string;
    };
  }[];
  work: {
    position: string;
    name: string;
    startDate: string;
    endDate?: string;
    summary: string;
  }[];
  skills: {
    name: string;
  }[];
  projects: {
    name: string;
    description: string;
    url?: string;
  }[];
  certificates: {
    name: string;
    issuer: string;
    date: string;
  }[];
  languages: {
    language: string;
    fluency: string;
  }[];
};

export default async function Resume() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "json",
    "my-resume-314.json"
  );
  let resume: ResumeType;

  try {
    const data = await fs.readFile(filePath, "utf-8");
    resume = JSON.parse(data) as ResumeType;
  } catch {
    return (
      <div className="text-red-500 text-center mt-10">
        <p>Failed to load resume.</p>
      </div>
    );
  }

  const { basics, education, work, skills, certificates, languages } = resume;

  return (
    <div className="max-w-5xl mx-auto p-6 my-10 bg-[rgba(255,255,255,0.12)] backdrop-blur-md rounded-xl shadow-lg text-gray-100">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          src="/images/AarashGhanbarzadeh.jfif"
          alt="ArashGhanbarzadeh"
          width={128}
          height={128}
          className="w-32 h-32 rounded-full object-cover border-4 shadow-lg"
        />
        <div className="flex-1">
          <h1 className="text-4xl font-bold">{basics.name}</h1>
          <p className="text-gray-400 text-xl font-semibold mb-2">
            {basics.label}
          </p>
          <p className="max-w-xl">{basics.summary}</p>

          <div className="mt-4 flex flex-wrap gap-4 text-gray-400">
            <div>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href={`mailto:${basics.email}`}
                className="text-gray-950 hover:underline"
              >
                {basics.email}
              </a>
            </div>
            <div>
              <span className="font-semibold">Phone:</span> +
              <span className="text-gray-950">{basics.phone}</span>
            </div>
            <div>
              <span className="font-semibold">Location:</span>{" "}
              <span className="text-gray-950">
                {basics.location.city}, {basics.location.country}
              </span>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-10 space-y-6">
        <h2 className="text-3xl font-semibold border-b pb-2 mb-6">
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <div
              key={i}
              className="p-5 backdrop-blur-md rounded-lg border shadow-lg"
            >
              <h3 className="text-xl font-semibold">{edu.institution}</h3>
              <p className="italic text-gray-400">
                {edu.studyType} in {edu.area}
              </p>
              <p>
                {new Date(edu.startDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                })}{" "}
                -{" "}
                {edu.endDate
                  ? new Date(edu.endDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                    })
                  : "Present"}
              </p>
              <p>Score: {edu.score}</p>
              <p>
                Location: {edu.location.city}, {edu.location.country}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 space-y-6">
        <h2 className="text-3xl font-semibold border-b pb-2 mb-6">
          Work Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {work.map((job, i) => (
            <div
              key={i}
              className="p-5 backdrop-blur-md rounded-lg border shadow-lg"
            >
              <h3 className="text-xl font-semibold">
                {job.position} @ {job.name}
              </h3>
              <p>
                {new Date(job.startDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                })}{" "}
                -{" "}
                {job.endDate
                  ? new Date(job.endDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                    })
                  : "Present"}
              </p>
              <p className="mt-2 whitespace-pre-line">{job.summary}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-3xl font-semibold border-b pb-2 mb-6">Skills</h2>
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-6 justify-center">
          {skills.map(({ name }, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-white"
              title={name}
            >
              {skillIcons[name] || (
                <span className="text-xl font-semibold">{name}</span>
              )}
              <span className="mt-1 text-sm">{name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 w-full">
        <h2 className="text-3xl font-semibold border-b pb-3 mb-8 text-white">
          Certificates
        </h2>

        <div className="mb-10 space-y-2">
          {certificates.map((cert, i) => (
            <div key={i}>
              <h3 className="text-xl font-bold text-white">{cert.name}</h3>
              <p className="text-gray-900 text-sm mb-1">{cert.issuer}</p>
              <p className="text-gray-900 text-xs">{cert.date}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-10 flex-wrap">
          {[
            "/Images/Web Design Pack.jfif",
            "/Images/React js.jfif",
            "/Images/Uiux.jfif",
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={certificates[i]?.name || `Certificate ${i + 1}`}
              width={400}
              height={300}
              className="max-w-xs sm:max-w-md rounded-lg shadow-lg object-contain"
            />
          ))}
        </div>
      </section>

      <section className="mt-10 mb-10">
        <h2 className="text-3xl font-semibold border-b pb-2 mb-6">
          Languages
        </h2>
        <ul className="list-disc list-inside text-white">
          {languages.map((lang, i) => (
            <li key={i}>
              {lang.language} - {lang.fluency}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 mb-10 text-center">
        <DownloadButton text="Resume" href="/json/ArashGhanbarzadeh.pdf" />
      </section>
    </div>
  );
}
