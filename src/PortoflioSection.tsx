import { FC } from "react";
import { FaBitcoin, FaEthereum, FaDollarSign } from "react-icons/fa";

const holdings = [
  { symbol: "BTC", name: "Bitcoin", amount: "0.85", value: "$24,920", icon: <FaBitcoin className="text-yellow-400" /> },
  { symbol: "ETH", name: "Ethereum", amount: "12.4", value: "$22,330", icon: <FaEthereum className="text-blue-400" /> },
  { symbol: "USDT", name: "Tether", amount: "5,000", value: "$5,000", icon: <FaDollarSign className="text-green-400" /> },
];

const Portfolio: FC = () => {
  return (
    <section id="portfolio" className="py-20 px-4 text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-pink-300 mb-3">Your Portfolio</h2>
        <p className="text-gray-300">View and manage your digital assets in real-time</p>
      </div>

      <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 mb-12 shadow-md text-left">
        <h3 className="text-2xl font-semibold mb-4">Total Balance</h3>
        <p className="text-4xl text-pink-300 font-bold mb-6">$52,250.00</p>
        <div className="flex gap-4">
          <button className="bg-pink-300 text-black font-semibold px-6 py-2 rounded-lg hover:bg-pink-400 transition">
            Deposit
          </button>
          <button className="border border-pink-300 text-pink-300 px-6 py-2 rounded-lg hover:bg-pink-300 hover:text-black transition">
            Withdraw
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {holdings.map((coin, index) => (
          <div
            key={index}
            className="flex items-center bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/10 gap-4 hover:shadow-lg transition"
          >
            <div className="text-4xl">{coin.icon}</div>
            <div>
              <h4 className="text-lg font-semibold">{coin.name} ({coin.symbol})</h4>
              <p className="text-sm text-gray-300">Amount: {coin.amount}</p>
              <p className="text-sm text-gray-400">Value: {coin.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
 