"use client";

import { motion } from "framer-motion";
import AnimatedText from "@/components/ui/AnimatedText";
import { 
  Monitor, Cloud, Shield, Cpu, Smartphone, Briefcase, 
  Database, Layout, Server, Settings, Zap, Key
} from "lucide-react";
import CTASection from "@/components/sections/CTASection";

const servicesList = [
  { icon: Monitor, title: "Web Development", desc: "Next-gen web applications using React, Next.js, and modern frameworks." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native iOS/Android and cross-platform apps using React Native." },
  { icon: Cloud, title: "Cloud Computing", desc: "Scalable AWS, Azure, and GCP infrastructure and migrations." },
  { icon: Settings, title: "DevOps & CI/CD", desc: "Automated pipelines, Docker, Kubernetes, and continuous delivery." },
  { icon: Shield, title: "Cybersecurity", desc: "Vulnerability assessments, penetration testing, and compliance." },
  { icon: Cpu, title: "AI & Machine Learning", desc: "Custom AI models, natural language processing, and computer vision." },
  { icon: Database, title: "Data Analytics", desc: "Big data processing, warehousing, and business intelligence." },
  { icon: Briefcase, title: "IT Consulting", desc: "Strategic technology planning and digital transformation roadmaps." },
  { icon: Server, title: "ERP Solutions", desc: "Custom enterprise resource planning automation and integration." },
  { icon: Layout, title: "UI/UX Design", desc: "User-centric design, wireframing, prototyping, and user testing." },
  { icon: Zap, title: "Network Infrastructure", desc: "High-performance networking setup, routing, and optimization." },
  { icon: Key, title: "Managed IT Support", desc: "24/7 technical support, system monitoring, and maintenance." },
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20 bg-spaceBlack min-h-screen">
      <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <AnimatedText
          text="Our Services"
          el="h1"
          className="text-5xl md:text-7xl font-syne font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-white/60 font-dmsans max-w-3xl mx-auto"
        >
          Comprehensive technology solutions designed to empower your business, optimize operations, and drive sustainable growth in the digital era.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
        {servicesList.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group block h-[300px] perspective-[1000px]"
          >
            <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
              {/* Front Plate */}
              <div className="absolute inset-0 backface-hidden glass rounded-2xl p-8 flex flex-col justify-center items-center text-center border border-white/5 group-hover:border-electricBlue/30 transition-colors">
                <div className="w-20 h-20 rounded-full bg-electricBlue/10 flex items-center justify-center text-electricBlue mb-6">
                  <service.icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-syne font-bold">{service.title}</h3>
              </div>
              
              {/* Back Plate */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 glass-panel rounded-2xl p-8 flex flex-col justify-center items-center text-center border border-cyanGlow/50 shadow-[0_0_30px_rgba(0,240,255,0.2)]">
                <h3 className="text-xl font-syne font-bold mb-4 text-cyanGlow">{service.title}</h3>
                <p className="text-white/80 font-dmsans leading-relaxed mb-6">
                  {service.desc}
                </p>
                <button className="px-6 py-2 rounded-full border border-cyanGlow text-cyanGlow hover:bg-cyanGlow hover:text-spaceBlack transition-colors font-jetbrains text-sm">
                  Get a Quote
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <CTASection />
    </div>
  );
}
