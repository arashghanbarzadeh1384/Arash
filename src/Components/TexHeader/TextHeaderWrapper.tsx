import TextHeader from "./TexHeader";

export default function TextHeaderWrapper() {
  const heading = (
    <>
      Crafting Interactive Interfaces <br /> with{" "}
      <span className="text-[#4FD1C5]">Precision</span> and{" "}
      <span className="text-[#4FD1C5]">Purpose</span>
    </>
  );

  const paragraph = (
    <>
      Hi! I&apos;m{" "}
      <span
        data-name
        className="text-white font-semibold transition-colors duration-300 hover:text-[#4FD1C5] inline-block cursor-pointer"
      >
        Arash Ghanbarzadeh
      </span>
      , a{" "}
      <span
        data-role
        className="text-[#4FD1C5] font-semibold inline-block"
      >
        front-end developer
      </span>{" "}
      turning ideas into elegant, high-performance user experiences. With a
      passion for{" "}
      <span className="text-[#4FD1C5] font-semibold inline-block">
        clean code
      </span>{" "}
      and intuitive design, I build modern,{" "}
      <span className="text-[#4FD1C5] font-semibold inline-block">
        responsive web applications
      </span>{" "}
      that not only look great but feel great to use.
    </>
  );

  return <TextHeader heading={heading} paragraph={paragraph} />;
}
