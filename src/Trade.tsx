import { FC } from "react";
import { FaArrowDown, FaArrowUp, FaExchangeAlt } from "react-icons/fa";

const features = [
  {
    title: "Buy Crypto",
    description: "Purchase top cryptocurrencies with one click and no delays.",
    icon: <FaArrowDown className="text-pink-300 text-3xl" />,
  },
  {
    title: "Sell Instantly",
    description: "Convert your crypto into fiat anytime securely and fast.",
    icon: <FaArrowUp className="text-pink-300 text-3xl" />,
  },
  {
    title: "Swap Tokens",
    description: "Exchange between tokens with lightning-speed transactions.",
    icon: <FaExchangeAlt className="text-pink-300 text-3xl" />,
  },
];

const Trade: FC = () => {
  return (
    <section id="trade" className="w-full py-20 px-4 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-pink-300 mb-4">Trade Instantly</h2>
        <p className="text-gray-300 mb-12">
          Experience real-time trading across the top digital assets with ultra-low fees.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:shadow-xl transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trade;
 