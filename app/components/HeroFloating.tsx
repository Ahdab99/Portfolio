"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const desktopItems = [
  { src: "/images/car.png", size: 240, top: "15%", left: "25%" },
  { src: "/images/web.png", size: 230, top: "5%", left: "65%" },
  { src: "/images/faraway.png", size: 220, top: "55%", left: "60%" },
  { src: "/images/code.jpg", size: 220, top: "60%", left: "20%" },
];

const mobileItems = [
  { src: "/images/car.png", size: 170, top: "8%", left: "10%" },
  { src: "/images/web.png", size: 160, top: "8%", left: "55%" },
  { src: "/images/code.jpg", size: 165, top: "52%", left: "12%" },
  { src: "/images/faraway.png", size: 160, top: "52%", left: "55%" },
];

function Floating({ items }: { items: { src: string; size: number; top: string; left: string }[] }) {
  return (
    <div className="relative w-full h-full">
      {items.map((item, index) => (
        <motion.div
          key={index}
          animate={{ y: [0, -14, 0] }}
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
            sizes="(max-width: 768px) 180px, 240px"
            className="object-cover"
            priority={index === 0}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default function HeroFloating() {
  return (
    <>
      {/* Mobile */}
      <div className="block lg:hidden w-full h-[420px] overflow-hidden">
        <Floating items={mobileItems} />
      </div>

      {/* Desktop */}
      <div className="hidden lg:block w-full h-[600px]">
        <Floating items={desktopItems} />
      </div>
    </>
  );
}