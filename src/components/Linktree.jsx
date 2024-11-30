import { FaGithub, FaLinkedin, FaTwitter, FaGlobe } from "react-icons/fa";
import Foto from "../assets/aku.jpg";
const Linktree = () => {
  const links = [
    {
      name: "GitHub",
      url: "https://github.com/indonumberone",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/muqsith",
      icon: <FaLinkedin />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/muqsith_barru",
      icon: <FaTwitter />,
    },
    {
      name: "Portfolio",
      url: "https://github.com/indonumberone",
      icon: <FaGlobe />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      {/* Profile Container */}
      <div className="relative flex flex-col items-center">
        <div className="relative group">
          <img
            src={Foto}
            alt="Profile"
            className="w-32 h-32 rounded-full shadow-lg z-10"
          />
          <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-gradient-to-tr blur-lg opacity-75 group-hover:opacity-100 transition duration-500 z-0"></div>
        </div>
        <h1 className="text-3xl font-bold mt-4">Muqsith Barru Pamungkas</h1>
        <p className="text-gray-400 text-center mt-2 max-w-xs">
          🚀 Fullstack and Cybersecurity Enthusiast.
        </p>
      </div>

      {/* Links Container */}
      <div className="mt-8 w-full max-w-md space-y-6">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group block bg-gray-800 border border-gray-700 rounded-3xl p-4 shadow-lg transition-transform transform hover:scale-105 hover:shadow-pink-500/50"
          >
            <div className="flex items-center space-x-4">
              <span className="text-pink-500 text-2xl">{link.icon}</span>
              <span className="flex-1 text-lg font-semibold">{link.name}</span>
              <span className="text-xl text-gray-400 group-hover:text-pink-500">
                →
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-500 opacity-0 group-hover:opacity-20 rounded-3xl"></div>
          </a>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-12 text-gray-600 text-sm">Copyright ©2024</footer>
    </div>
  );
};

export default Linktree;
