"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedText from "@/components/ui/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

const categories = ["All", "Web", "Mobile", "Cloud", "AI"];

const projects = [
  {
    title: "GlobalFin Banking Portal",
    category: "Web",
    image: "https://picsum.photos/seed/p1/800/600",
    tags: ["React", "Node.js", "AWS"],
    result: "40% increase in user retention",
    size: "large"
  },
  {
    title: "HealthTrack Mobile",
    category: "Mobile",
    image: "https://picsum.photos/seed/p2/800/800",
    tags: ["React Native", "Firebase"],
    result: "2M+ App Downloads",
    size: "small"
  },
  {
    title: "Supply Chain AI Optimizer",
    category: "AI",
    image: "https://picsum.photos/seed/p3/800/800",
    tags: ["Python", "TensorFlow"],
    result: "$5M Annual Savings",
    size: "small"
  },
  {
    title: "Enterprise Cloud Migration",
    category: "Cloud",
    image: "https://picsum.photos/seed/p4/800/600",
    tags: ["AWS", "Kubernetes", "Terraform"],
    result: "99.99% Uptime Achieved",
    size: "large"
  },
  {
    title: "Smart Retail Analytics",
    category: "AI",
    image: "https://picsum.photos/seed/p5/800/800",
    tags: ["Computer Vision", "GCP"],
    result: "30% Sales Conversion Lift",
    size: "small"
  },
  {
    title: "Logistics SaaS Platform",
    category: "Web",
    image: "https://picsum.photos/seed/p6/800/800",
    tags: ["Next.js", "PostgreSQL"],
    result: "Reduced onboarding time by 60%",
    size: "small"
  }
];

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = projects.filter(p => activeTab === "All" || p.category === activeTab);

  return (
    <div className="pt-32 pb-0 bg-spaceBlack min-h-screen">
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <AnimatedText
          text="Featured Work"
          el="h1"
          className="text-5xl md:text-7xl font-syne font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-electricBlue to-cyanGlow"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-white/60 font-dmsans max-w-3xl mx-auto mb-12"
        >
          Explore a selection of our recent projects where we&apos;ve helped businesses transform challenges into digital opportunities.
        </motion.p>

        {/* Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2 rounded-full font-jetbrains text-sm uppercase tracking-wider transition-all duration-300 ${
                activeTab === category 
                  ? "bg-cyanGlow text-spaceBlack font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]" 
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Bento Grid */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.title}
                className={`group relative rounded-3xl overflow-hidden glass mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 ${
                  project.size === "large" ? "md:col-span-2 aspect-video md:aspect-auto md:h-[400px]" : "md:col-span-1 aspect-square md:h-[400px]"
                }`}
              >
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-spaceBlack via-spaceBlack/50 to-transparent flex flex-col justify-end p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-jetbrains text-cyanGlow">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-syne font-bold mb-2">{project.title}</h3>
                  <p className="text-white/60 font-dmsans mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    Result: <span className="text-white font-medium">{project.result}</span>
                  </p>
                  
                  <Link href="/contact" className="inline-flex items-center gap-2 text-electricBlue font-jetbrains text-sm uppercase font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    View Case Study <span>&rarr;</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <CTASection />
    </div>
  );
}
