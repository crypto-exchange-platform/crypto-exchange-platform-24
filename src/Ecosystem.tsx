import { FC } from "react";
import {
  FaEthereum,
  FaBitcoin,
  FaFrog,
  FaPizzaSlice,
  FaSpaceShuttle,
  FaGhost,
  FaStar,
  FaInfinity,
  FaCat,
} from "react-icons/fa";

const projects = [
  { name: "Keg Finance", icon: <FaEthereum className="text-purple-400" /> },
  { name: "Panglykan", icon: <FaBitcoin className="text-orange-400" /> },
  { name: "Sumospace", icon: <FaSpaceShuttle className="text-white" /> },
  { name: "Bird Finance", icon: <FaInfinity className="text-pink-400" /> },
  { name: "The Steam", icon: <FaGhost className="text-pink-300" /> },
  { name: "Play & Earn", icon: <FaStar className="text-blue-400" /> },
  { name: "Frog Finance", icon: <FaFrog className="text-green-400" /> },
  { name: "Monster", icon: <FaCat className="text-blue-300" /> },
  { name: "Palms Protocol", icon: <FaEthereum className="text-orange-500" /> },
  { name: "Piazza NFTs", icon: <FaPizzaSlice className="text-yellow-400" /> },
  { name: "The Groot", icon: <FaInfinity className="text-green-500" /> },
  { name: "The Groot", icon: <FaInfinity className="text-green-500" /> },
];

const Ecosystem: FC = () => {
  return (
    <section className="py-20 px-4 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-300 via-purple-400 to-blue-400 text-transparent bg-clip-text mb-12">
          Join The Ecosystem
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 bg-black/50 border border-white/10 px-4 py-2 rounded-full shadow-sm hover:shadow-lg transition"
            >
              <span className="text-lg">{project.icon}</span>
              <span className="text-sm font-medium text-gray-100">
                {project.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
 