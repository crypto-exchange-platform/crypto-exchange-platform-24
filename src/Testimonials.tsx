import { FC } from "react";

const testimonials = [
  {
    name: "Daniel K.",
    role: "Pro Trader",
    quote: "CryptMex changed how I trade — fast, reliable, and no hidden fees.",
  },
  {
    name: "Elena P.",
    role: "Developer",
    quote: "Finally, a platform that integrates open-source tools for DeFi builders.",
  },
  {
    name: "Jason W.",
    role: "Investor",
    quote: "Their support and real-time trading tools are top-notch.",
  },
];

const Testimonials: FC = () => {
  return (
    <section className="py-20 px-4 text-white">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-pink-300 mb-3">What Users Say</h2>
        <p className="text-gray-300">Real feedback from our community</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-black/40 border border-white/10 p-6 rounded-xl backdrop-blur-md">
            <p className="text-sm text-gray-300 italic">"{t.quote}"</p>
            <h4 className="mt-4 font-semibold text-white">{t.name}</h4>
            <p className="text-xs text-gray-400">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
 