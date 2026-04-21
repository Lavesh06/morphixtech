"use client";

import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  el?: keyof JSX.IntrinsicElements;
  animation?: "word" | "char";
  delay?: number;
}

export default function AnimatedText({
  text,
  className,
  el: Wrapper = "p",
  animation = "word",
  delay = 0,
}: AnimatedTextProps) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, damping: 12, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <Wrapper className={className}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="inline-block"
      >
        {animation === "word"
          ? words.map((word, index) => (
              <span key={index} className="inline-block overflow-hidden mr-2 md:mr-3">
                <motion.span variants={child} className="inline-block">
                  {word}
                </motion.span>
              </span>
            ))
          : text.split("").map((char, index) => (
              <span key={index} className="inline-block overflow-hidden">
                <motion.span variants={child} className="inline-block">
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              </span>
            ))}
      </motion.span>
    </Wrapper>
  );
}
