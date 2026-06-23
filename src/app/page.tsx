import AboutMe from "@/Components/AboutMe/AboutMe";
import AboutStats from "@/Components/AboutStats/AboutStats";
import Projects from "@/Components/Projects/Projects";
import Skills from "@/Components/Skills/Skills";
import TextHeaderWrapper from "@/Components/TexHeader/TextHeaderWrapper";
import React from "react";

export default function Homepage() {
  return (
    <>
      <div className="contaienr">
        <TextHeaderWrapper />
        <AboutStats />
        <AboutMe />
        <Projects />
        <Skills />
      </div>
    </>
  );
}
