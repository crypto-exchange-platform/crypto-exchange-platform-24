import { FC } from "react";

const Markets: FC = () => {
  const fakeMarkets = [
    { name: "Bitcoin", symbol: "BTC", price: "$29,300", change: "+2.3%" },
    { name: "Ethereum", symbol: "ETH", price: "$1,850", change: "+1.1%" },
    { name: "Solana", symbol: "SOL", price: "$25.7", change: "-0.9%" },
  ];

  return (
    <section
      id="markets"
      className="scroll-mt-20 w-full py-16 px-4 text-white"
    >
      <div className="max-w-6xl mx-auto bg-black/40 backdrop-blur-md rounded-2xl p-10 shadow-lg">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-pink-300 mb-2">
            Market Overview
          </h2>
          <p className="text-gray-300">
            Track the latest prices and trends of top cryptocurrencies
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fakeMarkets.map((coin) => (
            <div
              key={coin.symbol}
              className="bg-black/30 border border-pink-300/30 rounded-xl p-6 backdrop-blur-sm hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-semibold text-pink-200">
                {coin.name} ({coin.symbol})
              </h3>
              <p className="text-2xl mt-2">{coin.price}</p>
              <p
                className={`mt-1 ${
                  coin.change.startsWith("-")
                    ? "text-red-400"
                    : "text-green-400"
                }`}
              >
                {coin.change}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Markets;
 