"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string; // Add this to handle the CSS classes passed from parent
}

export default function FadeInSection({ 
  children, 
  delay = 0, 
  className = "" // Default to an empty string
}: FadeInSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className} // Apply the className to the motion div
    >
      {children}
    </motion.div>
  );
}