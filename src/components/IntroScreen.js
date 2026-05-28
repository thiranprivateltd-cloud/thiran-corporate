'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useTranslation } from '@/context/LanguageContext';

export default function IntroScreen() {
  const { completeIntro, showIntro } = useTranslation();
  const [stage, setStage] = useState('text'); // 'text' | 'languages'

  const titleText = "THIRAN";
  const letters = titleText.split("");

  useEffect(() => {
    if (!showIntro) return;
    // After 2.8 seconds of text animations, show the language selection
    const timer = setTimeout(() => {
      setStage('languages');
    }, 2800);

    return () => clearTimeout(timer);
  }, [showIntro]);

  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const letterVars = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  if (!showIntro) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0A0A0A] overflow-hidden select-none">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating background particles specifically for the intro */}
      <div className="absolute inset-0 opacity-40 pointer-events-none dot-bg" />

      <AnimatePresence mode="wait">
        {stage === 'text' ? (
          <motion.div
            key="text-stage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center z-10"
          >
            {/* THIRAN Wordmark */}
            <motion.div
              variants={containerVars}
              initial="hidden"
              animate="visible"
              className="flex space-x-2 md:space-x-4 mb-4"
            >
              {letters.map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVars}
                  className="font-heading text-5xl md:text-8xl font-black text-white tracking-widest text-glow-blue"
                  style={{ textShadow: '0 0 25px rgba(68, 136, 204, 0.8)' }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>

            {/* Tagline & Mantra */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-gray-400 font-body text-sm md:text-lg tracking-wider mb-8"
            >
              Smarter Steps Forward
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="flex items-center space-x-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-xs md:text-sm tracking-widest text-accent font-semibold"
            >
              <span>Dream</span>
              <span className="text-gray-600">•</span>
              <span>Build</span>
              <span className="text-gray-600">•</span>
              <span>Launch</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse ml-1" />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="lang-stage"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
            className="flex flex-col items-center max-w-md w-full px-6 z-10 text-center"
          >
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-8"
            >
              <Image 
                src="/logo-full.png" 
                alt="Thiran Logo" 
                width={200} 
                height={50} 
                className="object-contain h-12 md:h-16 w-auto mx-auto"
              />
            </motion.div>

            <h3 className="text-sm md:text-base text-gray-400 font-body mb-6 tracking-wide leading-relaxed">
              Select Language / மொழியைத் தேர்ந்தெடுக்கவும் / भाषा चुनें
            </h3>

            {/* Language grid */}
            <div className="flex flex-col space-y-4 w-full">
              {[
                { code: 'en', name: 'English', sub: 'Global Version', desc: 'Proceed in English' },
                { code: 'ta', name: 'தமிழ்', sub: 'தமிழ் பதிப்பு', desc: 'தமிழில் தொடரவும்' },
                { code: 'hi', name: 'हिन्दी', sub: 'हिंदी संस्करण', desc: 'हिंदी में आगे बढ़ें' }
              ].map((lang, index) => (
                <motion.button
                  key={lang.code}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + index * 0.1 }}
                  whileHover={{ scale: 1.03, borderColor: '#1D9E75' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => completeIntro(lang.code)}
                  className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-primary/20 text-left transition-colors cursor-pointer group"
                >
                  <div>
                    <span className="font-heading text-white text-lg md:text-xl block group-hover:text-glow-blue transition-all">
                      {lang.name}
                    </span>
                    <span className="text-xs text-gray-500 block font-body">
                      {lang.desc}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded-md border border-accent/20">
                    {lang.sub}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Subtext info */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.8 }}
              className="text-[10px] text-gray-500 font-body mt-8 uppercase tracking-widest"
            >
              Thiran Private Ltd • Chennai, TN
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
