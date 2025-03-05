"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "~/components/ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Design Web, Daily Coffee, Enjoy Bike
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            I believe that the measure of life is not time, but experience. So I've been exploring
          </p>
        </div>
        <Image
          src="/hero-landing.avif"
          width={400}
          height={400}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[10%] -bottom-10 rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Gigital Nomad, No Boss, Only Free
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        Digital nomad is my ideal living situation, I can work and live anywhere I want 🎯
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            My Digital Garden & Wiki
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            The data knowledge base built in my spare time helps me understand and think about the process of learning
          </p>
        </div>
        <Image
          src="/wiki.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[5%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
