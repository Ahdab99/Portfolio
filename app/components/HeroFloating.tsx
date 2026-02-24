"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const items = [
  { src: "/images/car.png", size: 240, top: "15%", left: "25%" },
  { src: "/images/web.png", size: 230, top: "5%", left: "65%" },
  { src: "/images/Faraway.png", size: 220, top: "55%", left: "60%" },
  { src: "/images/code.jpg", size: 220, top: "60%", left: "20%" },
];

export default function HeroFloating() {
  return (
    <div className="relative w-full h-[600px]">
      {items.map((item, index) => (
        <motion.div
          key={index}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
          className="absolute rounded-full overflow-hidden shadow-2xl border-4 border-white bg-white"
          style={{
            width: item.size,
            height: item.size,
            top: item.top,
            left: item.left,
          }}
        >
          <Image
            src={item.src}
            alt="floating"
            fill
            sizes="(max-width: 768px) 200px, 240px"
            className="object-cover"
            priority={index === 0}
          />
        </motion.div>
      ))}
    </div>
  );
}