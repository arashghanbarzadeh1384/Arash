import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex justify-center items-center gap-8 py-6" id="contact">
      {[
        {
          href: "https://github.com/arashghanbarzadeh1384",
          icon: <FaGithub />,
          color: "hover:text-gray-300",
        },
        {
          href: "https://www.linkedin.com/in/arash-ghanbarzadeh-51025426b/",
          icon: <FaLinkedin />,
          color: "hover:text-blue-500",
        },
        {
          href: "https://www.instagram.com/arash__programmer/",
          icon: <FaInstagram />,
          color: "hover:text-pink-500",
        },
        {
          href: "https://t.me/wwbdisgn",
          icon: <FaTelegramPlane />,
          color: "hover:text-cyan-400",
        },
        {
          href: "https://wa.me/989026686747",
          icon: <FaWhatsapp />,
          color: "hover:text-green-400",
        },
      ].map((item, index) => (
        <a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-white text-4xl transition-all duration-300 transform hover:scale-150 ${item.color}`}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
