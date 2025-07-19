import { FC } from "react";
import { motion } from "framer-motion";

const news = [
  {
    title: "Dollar Surges Amid Fed Talks",
    time: "2 hours ago",
    image: "https://images.unsplash.com/photo-1745620985528-73b74d5d46a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGJpdGNvaW4lMjBwaW5rfGVufDB8fDB8fHww",
  },
  {
    title: "Euro Hits Resistance as ECB Holds",
    time: "4 hours ago",
    image: "https://plus.unsplash.com/premium_photo-1675978197689-03f06122c4e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGJpdGNvaW4lMjBwaW5rfGVufDB8fDB8fHww",
  },
  {
    title: "Yen Slides After BOJ Comments",
    time: "Today",
    image: "https://plus.unsplash.com/premium_photo-1674940001917-9037700f456d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGJpdGNvaW4lMjBwaW5rfGVufDB8fDB8fHww",
  },
  {
    title: "GBP Strengthens with GDP Growth",
    time: "Yesterday",
    image: "https://images.unsplash.com/photo-1731536782762-076739de99b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJpdGNvaW4lMjBwaW5rfGVufDB8fDB8fHww",
  },
  {
    title: "Oil Prices Impact Canadian Dollar",
    time: "1 day ago",
    image: "https://images.unsplash.com/photo-1524666522-3afebecf783a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJpdGNvaW4lMjBwaW5rfGVufDB8fDB8fHww",
  },
  {
    title: "Gold Gains Pull CHF Higher",
    time: "2 days ago",
    image: "https://images.unsplash.com/photo-1524673450801-b5aa9b621b76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Yml0Y29pbiUyMHBpbmt8ZW58MHx8MHx8fDA%3D",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const ForexNews: FC = () => {
  return (
    <section id="news" className="py-20 px-4 text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-pink-300 mb-3">Forex News</h2>
        <p className="text-gray-300">Stay updated with global market movements</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {news.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-black/40 border border-white/10 rounded-xl overflow-hidden backdrop-blur-md hover:shadow-xl transition-transform hover:scale-[1.02]"
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ForexNews;
 