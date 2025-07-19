import { FC } from 'react';
import { motion } from 'framer-motion';
import heroImage from '../public/Rings.png';

const Hero: FC = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-transparent text-white overflow-hidden flex items-center"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-radial-gradient animate-pulse-slow z-0" />

      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col-reverse lg:flex-row items-center justify-between">
        
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left max-w-xl space-y-6"
        >
          <h2 className="text-pink-300 text-sm tracking-widest uppercase">
            Welcome to CryptMex
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Shaping the Future of <br />
            <span className="text-pink-300">Decentralized Finance</span>
          </h1>
          <p className="text-gray-300 text-lg">
            CryptMex is a futuristic cryptocurrency platform empowering people to buy, trade,
            and manage digital assets with total transparency and speed.
            Our mission is to unlock financial freedom for everyone, anywhere in the world.
          </p>
          <p className="text-gray-400 text-sm">
            Built by crypto visionaries, designed for humans. Trade smart. Invest with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-pink-300 hover:bg-pink-400 text-black px-6 py-3 rounded-lg font-semibold transition duration-200">
              Start Trading
            </button>
            <button className="border border-pink-300 text-pink-300 hover:bg-pink-300 hover:text-black px-6 py-3 rounded-lg font-semibold transition duration-200">
              Learn More
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 mb-10 lg:mb-0"
        >
          <motion.img
            src={heroImage}
            alt="Crypto Illustration"
            className="w-full max-w-md mx-auto drop-shadow-xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
 