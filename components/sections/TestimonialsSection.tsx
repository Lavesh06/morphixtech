"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "CTO",
    company: "InnovateTech",
    quote: "NexCore transformed our legacy systems into a modern, cloud-native architecture. Their expertise in AWS and microservices is unmatched.",
  },
  {
    name: "Sarah Jenkins",
    role: "VP of Engineering",
    company: "FinSecure",
    quote: "The cybersecurity audit and subsequent implementations provided by NexCore gave us the peace of mind we needed to launch our new financial platform.",
  },
  {
    name: "David Chen",
    role: "Founder",
    company: "NextApp Solutions",
    quote: "Working with NexCore on our mobile application was a breeze. They delivered a cutting-edge React Native app ahead of schedule.",
  },
  {
    name: "Emily Watson",
    role: "Director of IT",
    company: "Global Logistics",
    quote: "Their AI data pipeline optimization saved us countless hours and significantly reduced our operational costs. Absolutely stellar work.",
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="py-32 bg-spaceBlack relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyanGlow/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-syne font-bold mb-6">Client <span className="text-cyanGlow">Success</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg font-dmsans">
            Don&apos;t just take our word for it. Hear what our partners have to say about working with NexCore.
          </p>
        </motion.div>

        <div className="relative h-[400px] flex items-center justify-center perspective-[1000px]">
          <AnimatePresence mode="popLayout">
            {testimonials.map((testimonial, index) => {
              if (index !== currentIndex) return null;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: -45 }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                  className="absolute w-full max-w-2xl"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="glass p-10 md:p-14 rounded-3xl relative border border-white/10 hover:border-cyanGlow/30 transition-colors">
                    <Quote className="w-12 h-12 text-cyanGlow/20 absolute top-8 left-8" />
                    
                    <p className="text-xl md:text-2xl font-dmsans text-white mb-8 relative z-10 leading-relaxed italic">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    
                    <div className="flex items-center gap-4 relative z-10">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-electricBlue to-cyanGlow flex items-center justify-center text-white font-syne font-bold text-xl">
                        {testimonial.name.slice(0, 1)}
                      </div>
                      <div>
                        <h4 className="font-syne font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-white/50 text-sm font-jetbrains">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          <div className="absolute bottom-0 flex gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-cyanGlow w-8" : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
