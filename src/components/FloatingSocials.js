'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, MessageCircle, X } from 'lucide-react';

export default function FloatingSocials() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-45 flex flex-col items-end space-y-3">
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col space-y-3 items-end">
            {/* Instagram Button */}
            <motion.a
              href="https://www.instagram.com/thiran_groups?igsh=Y28wd252azMzZDc1"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.8 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 border border-white/10 flex items-center justify-center text-white shadow-lg hover:shadow-pink-500/20"
              title="Follow on Instagram"
            >
              <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </motion.a>

            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/918056547565"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 rounded-full bg-[#1D9E75] border border-white/10 flex items-center justify-center text-white shadow-lg hover:shadow-accent/20"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-5.5 h-5.5" />
            </motion.a>
          </div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl cursor-pointer transition-colors ${
          isOpen ? 'bg-[#0D0D0D] border border-white/10' : 'bg-[#1F3864] hover:bg-[#254378] border border-white/10'
        }`}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-5 h-5" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="relative"
            >
              <MessageSquare className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
