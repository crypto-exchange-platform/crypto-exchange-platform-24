import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-black/90 text-white py-10 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} CryptMex. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#home" className="hover:text-pink-300">Home</a>
          <a href="#markets" className="hover:text-pink-300">Markets</a>
          <a href="#trade" className="hover:text-pink-300">Trade</a>
          <a href="#portfolio" className="hover:text-pink-300">Portfolio</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 