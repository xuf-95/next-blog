"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Snowfall = () => {
  const [flakes, setFlakes] = useState<
    { id: number; left: string; size: string; duration: number; delay: number; opacity: number; blur: number }[]
  >([]);

  useEffect(() => {
    const generateFlakes = () => {
      const newFlakes = Array.from({ length: 150 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`, // X 轴位置
        size: `${Math.random() * 12 + 3}px`, // 3px - 15px
        duration: Math.random() * 6 + 4, // 4s - 10s
        delay: Math.random() * 5, // 随机延迟
        opacity: Math.random() * 0.4 + 0.6, // 0.6 - 1 之间的透明度
        blur: Math.random() * 2, // 0px - 2px 轻微模糊
      }));
      setFlakes(newFlakes);
    };

    generateFlakes();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-[-1]">
      {flakes.map(({ id, left, size, duration, delay, opacity, blur }) => (
        <motion.div
          key={id}
          initial={{ y: "-10vh", opacity: 0, x: 0 }}
          animate={{
            y: "110vh",
            opacity,
            x: [0, Math.random() * 10 - 5, Math.random() * 10 - 5], // 让雪花左右摆动
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "linear",
            delay,
          }}
          className="absolute rounded-full"
          style={{
            left,
            width: size,
            height: size,
            filter: `blur(${blur}px)`,
            backgroundColor: `rgba(255, 255, 255, ${opacity})`, // 让雪花颜色更饱满
            boxShadow: `0 0 ${size} rgba(255, 255, 255, 0.8)`, // 让雪花更立体
            mixBlendMode: "lighten", // 让雪花更自然，不影响背景
          }}
        />
      ))}
    </div>
  );
};

export default Snowfall;