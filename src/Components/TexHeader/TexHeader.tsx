"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function splitTextToSpans(element: HTMLElement | null) {
  if (!element) return [];
  const text = element.textContent || "";
  element.textContent = "";
  const chars = text.split("");
  const spans = chars.map((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.display = "inline-block";
    element.appendChild(span);
    return span;
  });
  return spans;
}

export default function TextHeader({
  heading,
  paragraph,
}: {
  heading: React.ReactNode;
  paragraph: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!containerRef.current || !headingRef.current || !paragraphRef.current)
      return;

    const headingChars = splitTextToSpans(headingRef.current);

    const nameEl = paragraphRef.current.querySelector('[data-name]') as HTMLElement | null;
    const roleEl = paragraphRef.current.querySelector('[data-role]') as HTMLElement | null;

    const nameChars = splitTextToSpans(nameEl);
    const roleChars = splitTextToSpans(roleEl);

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.from(containerRef.current, { opacity: 0, y: 40, duration: 1 });

    tl.from(
      headingChars,
      {
        opacity: 0,
        y: 50,
        scale: 0.8,
        rotationX: 45,
        skewX: 20,
        stagger: 0.05,
        duration: 0.8,
        ease: "back.out(1.5)",
      },
      "-=0.7"
    );

    tl.from(
      nameChars,
      {
        opacity: 0,
        y: 50,
        scale: 0.8,
        rotationX: 45,
        skewX: 20,
        stagger: 0.04,
        duration: 0.8,
        ease: "back.out(1.5)",
      },
      "-=0.5"
    );

    tl.from(
      roleChars,
      {
        opacity: 0,
        y: 50,
        scale: 0.8,
        rotationX: 45,
        skewX: 20,
        stagger: 0.04,
        duration: 0.8,
        ease: "back.out(1.5)",
      },
      "-=0.6"
    );

    tl.from(
      paragraphRef.current,
      {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
      },
      "-=1.8"
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center mt-16  text-center px-4"
    >
      <h1
        ref={headingRef}
        className="text-white text-5xl md:text-6xl font-extrabold leading-tight max-w-4xl"
        aria-label="Crafting Interactive Interfaces with Precision and Purpose"
      >
        {heading}
      </h1>

      <p
        ref={paragraphRef}
        className="text-gray-300 text-xl md:text-2xl mt-10 max-w-3xl leading-relaxed"
      >
        {paragraph}
      </p>
    </div>
  );
}
