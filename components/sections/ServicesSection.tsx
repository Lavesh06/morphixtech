"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import MagneticButton from "@/components/ui/MagneticButton";
import Link from "next/link";
import { Monitor, Cloud, Shield, Cpu, Smartphone, Briefcase } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Web Development",
      description: "High-performance websites and web applications built with modern frameworks and scalable architectures.",
      icon: Monitor,
    },
    {
      title: "Cloud Solutions",
      description: "Cloud migration, infrastructure setup, and serverless architectures on AWS, Azure, and GCP.",
      icon: Cloud,
    },
    {
      title: "Cybersecurity",
      description: "Advanced threat protection, security audits, and robust compliance measures to safeguard your digital assets.",
      icon: Shield,
    },
    {
      title: "AI & Machine Learning",
      description: "Intelligent AI pipelines, predictive analytics, and process automation to drive innovation.",
      icon: Cpu,
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that provide intuitive and engaging user experiences.",
      icon: Smartphone,
    },
    {
      title: "IT Consulting",
      description: "Strategic technology consulting to align your IT infrastructure with your business goals.",
      icon: Briefcase,
    },
  ];

  return (
    <section className="py-32 relative bg-spaceBlack">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-syne font-bold mb-6">Our <span className="text-electricBlue">Expertise</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg font-dmsans">
            We deliver end-to-end technology solutions designed to solve complex challenges and accelerate growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col items-start gap-6 relative group">
                <div className="w-16 h-16 rounded-full bg-electricBlue/10 flex items-center justify-center border border-electricBlue/20 text-electricBlue group-hover:scale-110 group-hover:bg-cyanGlow/10 group-hover:text-cyanGlow transition-all duration-300">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-syne font-bold">{service.title}</h3>
                <p className="text-white/60 font-dmsans leading-relaxed flex-grow">
                  {service.description}
                </p>
                <Link href="/services" className="text-cyanGlow font-jetbrains text-sm uppercase tracking-wider font-semibold mt-4 hover:underline underline-offset-4">
                  Learn More &rarr;
                </Link>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 flex justify-center"
        >
          <Link href="/services">
            <MagneticButton variant="outline">View All Services</MagneticButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
