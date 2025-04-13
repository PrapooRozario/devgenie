"use client";
import { geistMono, geistSans } from "@/app/utils/fonts";
import React, { JSX } from "react";
import { ContainerTextFlip } from "./ui/container-text-flip";
import { motion } from "framer-motion";
export default function Hero(): JSX.Element {
  const words: string[] = [
    "Debugging",
    "Refactoring",
    "Optimizing",
    "Analyzing",
  ];
  return (
    <div className="relative">
      <div className="text-center relative z-10">
        <h1
          className={`2xl:text-8xl xl:text-7xl md:text-6xl text-5xl ${geistSans.className} bg-gradient-to-t to-white from-white/60 bg-clip-text text-transparent font-bold 2xl:leading-28 xl:leading-24 lg:leading-20`}
        >
          Code Smarter Build Faster <br />
          <ContainerTextFlip
            words={words}
            className={`${geistMono.className} 2xl:text-8xl xl:text-7xl md:text-6xl text-2xl mt-5`}
          />
        </h1>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.6, 1, 0.6],
          scale: [0.95, 1.05, 0.95],
          x: [-15, 15, -15],
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="absolute inset-0 z-auto bg-[radial-gradient(circle,rgba(0,0,30,1)_10%,rgba(0,20,60,0.95)_20%,rgba(0,40,120,0.9)_30%,rgba(0,80,200,0.8)_45%,rgba(0,120,255,0.7)_60%,rgba(0,180,255,0.5)_75%,rgba(100,220,255,0.4)_85%,rgba(0,0,30,0.8)_100%)] rounded-full blur-[100px]"
      />
    </div>
  );
}
