import { FC, useState } from "react";
import { SignupModal } from "./SignUpModal";
import { LoginModal } from "./LoginModal";
import Header from "./Header";
import "./index.css";
import Hero from "./Hero";
import backgroundImage from "../public/background.png";
import Markets from "./Markets";
import Ecosystem from "./Ecosystem";
import Trade from "./Trade";
import AboutAndTeam from "./AboutAndTeam";
import Portfolio from "./PortoflioSection";
import ForexNews from "./Forex";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import Footer from "./Footer";

const LandingPage: FC = () => {
  const [modal, setModal] = useState<"login" | "signup" | null>(null);

  return (
    <>
      {modal === "login" && <LoginModal onClose={() => setModal(null)} />}
      {modal === "signup" && (
        <SignupModal
          onClose={() => setModal(null)}
          onSignupSuccess={() => setModal("login")}
        />
      )}

      <style>{`html { scroll-behavior: smooth; }`}</style>

      <div
        className="flex flex-col min-h-screen overflow-x-hidden"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Header
          onLogin={() => setModal("login")}
          onSignup={() => setModal("signup")}
        />
        <Hero />
        <div id="markets" className="scroll-mt-20">
          <Markets />
        </div>{" "}
        <Ecosystem />
        <div id="trade">
          <Trade />
        </div>
        <AboutAndTeam />
        <div id="portfolio">
          <Portfolio />
        </div>
        <div id="news"><ForexNews/></div>
        <Testimonials/>
        <FAQ/>
        <Footer/>
      </div>
    </>
  );
};

export default LandingPage;
