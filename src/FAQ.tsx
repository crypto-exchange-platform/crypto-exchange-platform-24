import { FC, useState } from "react";

const faqs = [
  { q: "What is CryptMex?", a: "CryptMex is a decentralized crypto trading platform built for the future of finance." },
  { q: "How do I create an account?", a: "Click Sign Up and follow the instructions. No KYC is required to explore." },
  { q: "Is it safe to trade here?", a: "Yes! We use industry-standard encryption and decentralized protocols." },
  { q: "Can I trade forex and crypto?", a: "Absolutely. We support crypto-forex hybrid trading." },
];

const FAQ: FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 text-white">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-pink-300 mb-3">FAQ</h2>
        <p className="text-gray-300">Got questions? We’ve got answers.</p>
      </div>

      <div className="space-y-4 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-black/40 border border-white/10 p-6 rounded-xl backdrop-blur-md cursor-pointer"
            onClick={() => setOpen(open === index ? null : index)}
          >
            <h3 className="text-lg font-semibold text-white">{faq.q}</h3>
            {open === index && <p className="text-sm text-gray-400 mt-2">{faq.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
 