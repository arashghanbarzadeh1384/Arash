import React from 'react'
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaSass,
} from 'react-icons/fa'
import {
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiReactquery,
  SiPostman,
  SiFigma,
} from 'react-icons/si'

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-600" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: 'Redux', icon: <SiRedux className="text-purple-600" /> },
  { name: 'React Query', icon: <SiReactquery className="text-pink-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
  { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-700" /> },
  { name: 'SASS', icon: <FaSass className="text-pink-400" /> },
  { name: 'Material UI', icon: <SiMui className="text-blue-400" /> },
  { name: 'REST API', icon: <SiPostman className="text-orange-500" /> },
  { name: 'Figma', icon: <SiFigma className="text-pink-600" /> },
]

export default function Skills() {
  return (
    <div className="p-8 container" id='hero'>
      <h2 className="text-3xl font-bold mb-8 text-white">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 contaienr">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 p-4 hover:scale-110 transition-transform duration-300"
          >
            <div className="text-6xl">{skill.icon}</div>
            <p className="text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
