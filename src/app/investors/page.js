'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/context/LanguageContext';
import { TrendingUp, FileText, CheckCircle, PieChart, ShieldAlert, BarChart3 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Investors() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    org: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const problemText = t('investors.problemText');
  const solutionList = t('investors.solutionList') || [];
  const whyNowList = t('investors.whyNowList') || [];
  const tractionList = t('investors.tractionList') || [];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const response = await fetch('https://formspree.io/f/mgoqrjwn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send inquiry');
      }

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#1F3864', '#1D9E75', '#4488CC']
      });

      setIsSubmitted(true);
      setFormData({ name: '', org: '', email: '', message: '' });
    } catch (error) {
      setErrorMsg('Failed to send inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-24 relative overflow-hidden bg-[#0A0A0A] text-white">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#1F3864]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#1D9E75]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#4488CC]/25 bg-[#4488CC]/5 text-[10px] font-heading font-bold uppercase tracking-widest text-[#4488CC] mb-4"
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{t('nav.investors')}</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl font-black uppercase text-glow-blue leading-tight"
          >
            {t('investors.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-gray-400 text-sm md:text-base max-w-xl mx-auto mt-4"
          >
            {t('investors.subtitle')}
          </motion.p>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Pitch Columns */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* The Problem */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="font-heading text-xl md:text-2xl font-black uppercase text-[#4488CC] flex items-center space-x-3">
                <ShieldAlert className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{t('investors.problemTitle')}</span>
              </h2>
              <div className="glass-card rounded-2xl p-6 border border-primary/20 bg-[#0C0C0C]/50">
                <p className="font-body text-gray-400 text-sm md:text-base leading-relaxed">
                  {problemText}
                </p>
              </div>
            </motion.div>

            {/* The Solution */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="font-heading text-xl md:text-2xl font-black uppercase text-[#4488CC] flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span>{t('investors.solutionTitle')}</span>
              </h2>
              <div className="glass-card rounded-2xl p-6 border border-white/5 bg-[#0C0C0C]/50 space-y-3">
                {solutionList.map((sol, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs md:text-sm font-body text-gray-300">
                    <span className="text-accent mt-0.5">✔</span>
                    <span>{sol}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Why Now */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="font-heading text-xl md:text-2xl font-black uppercase text-[#4488CC] flex items-center space-x-3">
                <PieChart className="w-5 h-5 text-accent flex-shrink-0" />
                <span>{t('investors.whyNowTitle')}</span>
              </h2>
              <div className="glass-card rounded-2xl p-6 border border-white/5 bg-[#0C0C0C]/50 space-y-3">
                {whyNowList.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs md:text-sm font-body text-gray-300">
                    <span className="text-[#4488CC] mt-0.5">●</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Traction */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="font-heading text-xl md:text-2xl font-black uppercase text-[#4488CC] flex items-center space-x-3">
                <BarChart3 className="w-5 h-5 text-accent flex-shrink-0" />
                <span>{t('investors.tractionTitle')}</span>
              </h2>
              <div className="glass-card rounded-2xl p-6 border border-white/5 bg-[#0C0C0C]/50 space-y-3">
                {tractionList.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs md:text-sm font-body text-gray-300">
                    <span className="text-accent mt-0.5">➔</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Seed Pitch Inquiry Split (Side sticky form) */}
          <div className="lg:col-span-5">
            <div className="space-y-6 lg:sticky lg:top-24">
              
              {/* Seed pitch ask card */}
              <div className="glass-card rounded-2xl p-8 border border-primary/20 bg-gradient-to-br from-[#0C0C0C] to-[#1F3864]/10 space-y-6">
                <span className="text-[9px] font-heading font-bold text-accent tracking-widest uppercase bg-accent/10 px-3 py-1 rounded-md border border-accent/25">
                  Investment Pitch
                </span>
                <h3 className="font-heading text-2xl font-black text-white uppercase mt-4">
                  {t('investors.askTitle')}
                </h3>
                <p className="font-body text-gray-400 text-xs md:text-sm leading-relaxed">
                  {t('investors.askText')}
                </p>
                <div className="h-px bg-white/5" />
                <div className="flex justify-between items-center text-xs uppercase font-heading font-bold">
                  <span className="text-gray-500">Proposed Ask:</span>
                  <span className="text-accent text-glow-teal text-base">₹15,00,000 INR</span>
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="glass-card rounded-2xl p-8 border border-white/5 bg-[#0C0C0C]">
                <h3 className="font-heading text-lg font-black text-white uppercase mb-6">
                  {t('investors.formTitle')}
                </h3>

                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="investor-form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-4"
                    >
                      <div>
                        <label className="text-[9px] font-heading font-bold uppercase tracking-widest text-gray-500 block mb-2">
                          {t('investors.fields.name')} *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/[0.02] text-white placeholder-gray-600 focus:outline-none focus:border-accent text-xs font-body transition-colors"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-[9px] font-heading font-bold uppercase tracking-widest text-gray-500 block mb-2">
                            {t('investors.fields.org')}
                          </label>
                          <input
                            type="text"
                            value={formData.org}
                            onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/[0.02] text-white placeholder-gray-600 focus:outline-none focus:border-accent text-xs font-body transition-colors"
                          />
                        </div>
                        <div>
                          <label className="text-[9px] font-heading font-bold uppercase tracking-widest text-gray-500 block mb-2">
                            {t('investors.fields.email')} *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/[0.02] text-white placeholder-gray-600 focus:outline-none focus:border-accent text-xs font-body transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-[9px] font-heading font-bold uppercase tracking-widest text-gray-500 block mb-2">
                          {t('investors.fields.message')} *
                        </label>
                        <textarea
                          rows="4"
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/[0.02] text-white placeholder-gray-600 focus:outline-none focus:border-accent text-xs font-body transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full text-center py-4 rounded-xl bg-[#1D9E75] hover:bg-[#15805d] text-white font-heading font-bold text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center space-x-2 disabled:opacity-50"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>{isSubmitting ? 'Sending...' : t('investors.fields.submit')}</span>
                      </button>
                      {errorMsg && (
                        <div className="mt-4 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center space-x-2">
                          <span>{errorMsg}</span>
                        </div>
                      )}
                    </motion.form>
                  ) : (
                    <motion.div
                      key="investor-success"
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center py-8"
                    >
                      <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center mx-auto mb-4 text-accent">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <h4 className="font-heading text-base font-black text-white uppercase">
                        Inquiry Received!
                      </h4>
                      <p className="font-body text-xs text-gray-400 mt-2 leading-relaxed">
                        {t('investors.fields.success')}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
