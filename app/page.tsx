"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AgendaSlide } from "./components/agenda-slide";
import {
  AgentsSlide,
  DeploySlide,
  GovernanceSlide,
} from "./components/demo-slides";
import { IntroSlide } from "./components/intro-slide";
import { NextStepsSlide } from "./components/next-steps-slide";
import { WhatWeHeardSlide } from "./components/what-we-heard-slide";

const slides = [
  IntroSlide,
  AgendaSlide,
  WhatWeHeardSlide,
  DeploySlide,
  AgentsSlide,
  GovernanceSlide,
  NextStepsSlide,
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const calculateScale = () => {
      const el = containerRef.current;
      if (!el) return;
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      if (w === 0 || h === 0) return;
      setScale(Math.min(w / 1800, h / 1000) * 0.96);
    };

    const observer = new ResizeObserver(calculateScale);
    if (containerRef.current) observer.observe(containerRef.current);
    calculateScale();

    return () => observer.disconnect();
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen();
    }
  }, []);

  const goNext = useCallback(() => {
    setCurrentSlide((s) => Math.min(s + 1, slides.length - 1));
  }, []);

  const goPrev = useCallback(() => {
    setCurrentSlide((s) => Math.max(s - 1, 0));
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "f") toggleFullscreen();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    const handleFsChange = () => setIsFullscreen(!!document.fullscreenElement);

    window.addEventListener("keydown", handleKey);
    document.addEventListener("fullscreenchange", handleFsChange);
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.removeEventListener("fullscreenchange", handleFsChange);
    };
  }, [toggleFullscreen, goNext, goPrev]);

  const CurrentSlide = slides[currentSlide];

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center bg-[#0a0a0a]">
      <div ref={containerRef} className="flex h-full w-full items-center justify-center">
        <div
          className="relative overflow-hidden rounded-lg bg-black"
          style={{
            width: Math.floor(1800 * scale),
            height: Math.floor(1000 * scale),
          }}
        >
          <div
            className="absolute left-0 top-0 origin-top-left"
            style={{ width: "1800px", height: "1000px", transform: `scale(${scale})` }}
          >
            <CurrentSlide
              slideNumber={currentSlide + 1}
              totalSlides={slides.length}
            />
          </div>
        </div>
      </div>

      {!isFullscreen && (
        <div className="absolute right-6 bottom-6 flex items-center gap-4">
          <div className="font-mono text-sm text-zinc-500">
            {currentSlide + 1}/{slides.length}
          </div>
          <button
            type="button"
            onClick={goPrev}
            disabled={currentSlide === 0}
            className="rounded-full bg-white/10 px-3 py-2 text-sm text-zinc-300 transition hover:bg-white/20 disabled:opacity-30"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={currentSlide === slides.length - 1}
            className="rounded-full bg-white/10 px-3 py-2 text-sm text-zinc-300 transition hover:bg-white/20 disabled:opacity-30"
          >
            ›
          </button>
          <button
            type="button"
            onClick={toggleFullscreen}
            className="rounded-full bg-white/10 px-4 py-2 text-sm text-zinc-300 transition hover:bg-white/20"
          >
            Fullscreen (f)
          </button>
        </div>
      )}
    </main>
  );
}
