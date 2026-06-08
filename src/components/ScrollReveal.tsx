/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from "react";
import { motion, HTMLMotionProps } from "motion/react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
  scale?: number;
  id?: string;
  key?: React.Key | null | undefined;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  distance = 30,
  scale = 1,
  id,
}: ScrollRevealProps) {
  const getOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance };
      case "down":
        return { y: -distance };
      case "left":
        return { x: distance };
      case "right":
        return { x: -distance };
      default:
        return {};
    }
  };

  const initialVal = {
    opacity: 0,
    ...getOffset(),
    scale: scale,
  };

  const animateVal = {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: duration,
      delay: delay,
      ease: [0.25, 0.1, 0.25, 1], // ease-out quad/cubic likeness for premium feel
    },
  };

  return (
    <motion.div
      id={id}
      initial={initialVal}
      whileInView={animateVal}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
