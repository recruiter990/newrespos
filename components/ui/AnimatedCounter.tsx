"use client";

import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export default function AnimatedCounter({ value, suffix = "", duration = 2 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * value));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

