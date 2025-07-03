import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./WelcomeScreen.css";
import VariableProximity from "../components/VariableProximity";
import GradientText from '../components/GradientText'

const WelcomeScreen = () => {
  const navigate = useNavigate();
  const [dotScale, setDotScale] = useState(0);
  const [fadeOpacity, setFadeOpacity] = useState(1); // 👈 new
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = scrollY / docHeight;

      const scale = Math.min(1, scrollPercent * 2);
      setDotScale(scale);

       // 👇 Fade faster by adjusting multiplier (e.g. 2.5)
    const fade = Math.max(0, 1 - scrollPercent * 2.5);
    setFadeOpacity(fade);

      if (scrollPercent > 0.5) {
        navigate("/home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigate]);

  return (
    <div className="welcome-container">
      <div className="hero-content animate-float" ref={containerRef}>
        {/* <VariableProximity
  label="Whatever it takes, the shit must be done!"
  className="welcome-text"
  fromFontVariationSettings="'wght' 400, 'opsz' 9"
  toFontVariationSettings="'wght' 1000, 'opsz' 40"
  containerRef={containerRef}
  radius={100}
  falloff="linear"
  style={{ opacity: fadeOpacity }}
/> */}
<div className="quote-container" style={{ opacity: fadeOpacity }}>
  <div>
    <VariableProximity
      label='"Whatever it takes,'
      className="quote-line block"
      fromFontVariationSettings="'wght' 400, 'opsz' 9"
      toFontVariationSettings="'wght' 1000, 'opsz' 40"
      containerRef={containerRef}
      radius={100}
      falloff="linear"
    />
  </div>
  <div>
    <VariableProximity
      label='the shit must be done."'
      className="quote-line block"
      fromFontVariationSettings="'wght' 400, 'opsz' 9"
      toFontVariationSettings="'wght' 1000, 'opsz' 40"
      containerRef={containerRef}
      radius={100}
      falloff="linear"
    />
  </div>
  <p className="quote-author">— Garv Soni</p>
</div>

        <img
          src="/lovable-uploads/AnimeStyle.png"
          alt="Hero"
          className="hero-image animate-float-delayed"
           style={{ opacity: fadeOpacity }} // 👈 fade out text
        />
      </div>

      <div
        className="dot"
        style={{ transform: `translate(-50%, -50%) scale(${dotScale})` }}
      />

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel" />
        </div>
        <span className="scroll-text">Scroll down</span>
      </div>
    </div>
  );
};

export default WelcomeScreen;
