"use client";
import { Butterfly } from "./Butterfly";

interface ButterflyFieldProps {
  count?: number;
  className?: string;
  lowProfile?: boolean;
}

export function ButterflyField({ 
  count = 3, 
  className = "",
  lowProfile = true 
}: ButterflyFieldProps) {
  // Generate different positions and delays for each butterfly
  const configs = [
    { top: "10%", left: "20%", delay: 0, size: 40 },
    { top: "60%", left: "80%", delay: 2, size: 30 },
    { top: "30%", left: "70%", delay: 4, size: 35 },
    { top: "80%", left: "10%", delay: 1, size: 25 },
    { top: "50%", left: "40%", delay: 3, size: 45 },
  ].slice(0, count);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {configs.map((config, i) => (
        <Butterfly
          key={i}
          className="absolute"
          style={{ top: config.top, left: config.left }}
          delay={config.delay}
          size={config.size}
          lowProfile={lowProfile}
        />
      ))}
    </div>
  );
}

// Fixed Butterfly component for the ButterflyField (adding custom style support if needed)
// Actually I'll update Butterfly.tsx to better handle absolute positioning via props.
