import { FC } from "react";
import { FaUsers, FaKey, FaCode } from "react-icons/fa";

const team = [
  {
    name: "John Williams",
    role: "CTO",
    bio: "Passion for DeFi. Has worked @coinbase & @google as an advisor.",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Alisha Ruckets",
    role: "Advisor",
    bio: "Previously @Binance, Alisha helps drive strategic vision.",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Maria Silva",
    role: "Full Stack Developer",
    bio: "5+ years of experience in web3, smart contracts, and frontend.",
    image: "https://i.pravatar.cc/150?img=3",
  },
];

const AboutAndTeam: FC = () => {
  return (
    <section className="py-20 px-4 text-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 mb-20">
        <div className="max-w-lg">
          <h2 className="text-4xl font-bold text-white mb-4">Learn More</h2>
          <p className="text-gray-300 mb-3">
            Start building on CryptMex which supports millions of users to innovate and build decentralized projects.
          </p>
          <p className="text-gray-400 mb-6">
            Developers can take advantage of our open-source stack and launch products on CryptMex instantly.
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-black rounded-full font-semibold transition hover:scale-105">
            Learn More
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="flex flex-col items-center">
            <FaKey className="text-5xl text-pink-400 mb-2" />
            <span className="text-sm text-gray-200">DAOs</span>
          </div>
          <div className="flex flex-col items-center">
            <FaCode className="text-5xl text-blue-400 mb-2" />
            <span className="text-sm text-gray-200">NFTs</span>
          </div>
          <div className="flex flex-col items-center">
            <FaUsers className="text-5xl text-green-400 mb-2" />
            <span className="text-sm text-gray-200">DEX</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12">Meet The Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-black/50 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-md hover:shadow-xl transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-pink-300"
              />
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-sm text-pink-300 mb-2">{member.role}</p>
              <p className="text-sm text-gray-300">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutAndTeam;
 