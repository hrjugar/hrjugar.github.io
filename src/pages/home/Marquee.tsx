import { Variants, motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity, wrap } from "framer-motion"
import { useRef } from "react";

interface MarqueeProps {
  text: string,
  baseVelocity?: number,
  repetitionCount?: number
}

export default function Marquee({ text, baseVelocity = 0.5, repetitionCount = 5 }: MarqueeProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });
  
  return (
    <div className="marquee">
      <motion.div
        className="track"
        style={{ x }}
      >
        {Array(repetitionCount).fill(0).map((_, i) => (
          <span key={`marquee-span-${i}`}>{text}&nbsp;</span>
        ))}
      </motion.div>
    </div>
  )
}