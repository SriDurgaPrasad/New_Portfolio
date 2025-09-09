import { useMemo } from "react";
import { Particles } from "@tsparticles/react";

interface ParticleBackgroundProps {
  className?: string;
}

const ParticleBackground = ({ className = "" }: ParticleBackgroundProps) => {
  const options = useMemo(() => ({
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push" as const,
        },
        onHover: {
          enable: true,
          mode: "repulse" as const,
        },
        resize: {
          enable: true,
        },
      },
      modes: {
        push: {
          quantity: 2,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ["#3B82F6", "#22D3EE", "#6366F1"],
      },
      links: {
        color: "#3B82F6",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        enable: true,
        outModes: "bounce" as const,
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle" as const,
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  }), []);

  return (
    <Particles
      id="tsparticles"
      className={`particle-container ${className}`}
      options={options}
    />
  );
};

export default ParticleBackground;