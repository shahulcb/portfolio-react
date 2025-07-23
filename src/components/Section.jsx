import React from "react";
import { motion } from "framer-motion";

function Section({ children, className }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} // animates when in viewport
      transition={{ duration: 1, delay: 0.2 }}
      className={`p-6 lg:p-12 flex flex-col gap-[50px] border-b border-customBorderColor bg-[#121212] ${className}`}
    >
      {children}
    </motion.section>
  );
}

export default Section;
