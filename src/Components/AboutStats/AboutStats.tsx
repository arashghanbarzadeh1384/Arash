"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type DataItem = {
  id: string;
  title: string;
  number: string;
};

import { usedata } from "./data";

export default function AboutStats() {
  const data: DataItem[] = usedata();

  useEffect(() => {
    AOS.init({ duration: 800, once: true }); 
  }, []);

  return (
    <section
      className="max-w-md mx-auto mt-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl shadow-lg py-6 px-8 flex justify-around"
      data-aos="zoom-in"
    >
      {data?.map((item) => (
        <div key={item.id} className="flex flex-col items-center px-4">
          <span className="text-3xl font-semibold text-white drop-shadow-md">
            {item.number}
          </span>
          <span className="mt-1 text-sm text-white/80 uppercase tracking-wider select-none">
            {item.title}
          </span>
        </div>
      ))}
    </section>
  );
}
