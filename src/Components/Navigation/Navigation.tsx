"use client";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

type MenuItem =
  | { name: string; type: "link"; href: string }
  | { name: string; type: "scroll"; to: string };

const menuItems: MenuItem[] = [
  { name: "About", type: "link", href: "/about" },
  { name: "Skills", type: "scroll", to: "hero" },
  { name: "Projects", type: "scroll", to: "projects" },
  { name: "Contact", type: "scroll", to: "contact" },
];

const Navigation: React.FC = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <nav
      className={`w-full sticky top-0 z-50 transition duration-300 ${
        isSticky ? "bg-[#101727] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-center items-center px-4 py-4">
        <ul className="hidden md:flex gap-10 text-white text-lg font-semibold">
          {menuItems.map((item, index) =>
            item.type === "link" ? (
              <li key={index}>
                <NextLink href={item.href} className="hover:underline">
                  {item.name}
                </NextLink>
              </li>
            ) : (
              <li key={index}>
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="hover:underline cursor-pointer"
                >
                  {item.name}
                </ScrollLink>
              </li>
            )
          )}
        </ul>

        {/* آیکون منوی موبایل */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-3xl"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* منوی موبایل */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#101727] text-white flex flex-col items-center py-6 space-y-6 text-lg font-semibold">
          {menuItems.map((item, index) =>
            item.type === "link" ? (
              <NextLink
                key={index}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="hover:underline"
              >
                {item.name}
              </NextLink>
            ) : (
              <ScrollLink
                key={index}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setIsMenuOpen(false)}
                className="hover:underline cursor-pointer"
              >
                {item.name}
              </ScrollLink>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
