export default function AboutMe() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-20 mt-24 rounded-lg flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-24">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide uppercase border-b-4 border-[#4FD1C5] pb-2 w-full md:w-56 text-center md:text-left">
        About Me
      </h2>

      <p className="text-base md:text-lg leading-relaxed text-gray-300 font-sans max-w-4xl text-justify md:text-left">
        Hi! I&apos;m{" "}
        <span className="text-[#4FD1C5] font-semibold">Arash Ghanbarzadeh</span>
        , a passionate front-end developer specialized in React, Tailwind CSS,
        Next.js, TypeScript, CSS, and HTML. With over 2 years of real-world
        experience working on diverse projects, coding isn&apos;t just my
        job&mdash;it&apos;s a vital part of my life. I truly love what I do and
        approach every line of code with passion and dedication. For me,
        front-end development is more than just work&mdash;it&apos;s a way of
        living. I&apos;m committed to building high-quality, performant, and
        beautiful user experiences that delight users and solve real problems.
      </p>
    </section>
  );
}
