'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/context/LanguageContext';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const response = await fetch('https://formspree.io/f/mgoqrjwn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#1D9E75', '#1F3864', '#4488CC']
      });

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setErrorMsg('Failed to send message. Please try again later.');
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
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent/25 bg-accent/5 text-[10px] font-heading font-bold uppercase tracking-widest text-accent mb-4"
          >
            <span>{t('nav.contact')}</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl font-black uppercase text-glow-blue leading-tight"
          >
            {t('contact.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-gray-400 text-sm md:text-base max-w-xl mx-auto mt-4"
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>

        {/* Contact Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8">
          
          {/* Info Details */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="font-heading text-2xl font-black uppercase mb-6 flex items-center space-x-3">
              <span className="w-1.5 h-6 bg-[#4488CC] rounded-full" />
              <span>Contact Coordinates</span>
            </h2>

            <div className="space-y-6">
              
              {/* General Email */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center text-[#4488CC] flex-shrink-0 mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-xs font-bold text-gray-500 uppercase tracking-widest leading-none mb-1">
                    {t('contact.info.email')}
                  </h4>
                  <a href="mailto:thiranprivateltd@gmail.com" className="font-body text-sm md:text-base text-gray-200 hover:text-accent transition-colors">
                    thiranprivateltd@gmail.com
                  </a>
                </div>
              </div>

              {/* CEO Email */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center text-[#4488CC] flex-shrink-0 mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-xs font-bold text-gray-500 uppercase tracking-widest leading-none mb-1">
                    {t('contact.info.ceoEmail')}
                  </h4>
                  <a href="mailto:ceothiran@outlook.com" className="font-body text-sm md:text-base text-gray-200 hover:text-accent transition-colors">
                    ceothiran@outlook.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-xs font-bold text-gray-500 uppercase tracking-widest leading-none mb-1">
                    {t('contact.info.phone')}
                  </h4>
                  <a href="tel:8056547565" className="font-body text-sm md:text-base text-gray-200 hover:text-accent transition-colors">
                    +91 80565 47565
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-accent/15 border border-[#1D9E75]/20 flex items-center justify-center text-accent flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-xs font-bold text-gray-500 uppercase tracking-widest leading-none mb-1">
                    {t('contact.info.location')}
                  </h4>
                  <p className="font-body text-sm md:text-base text-gray-200">
                    {t('contact.info.locationVal')}
                  </p>
                </div>
              </div>

            </div>

            {/* Social Grids */}
            <div className="pt-8 border-t border-white/5 space-y-4">
              <h4 className="font-heading text-xs font-bold text-gray-500 uppercase tracking-widest">
                {t('contact.info.socials')}
              </h4>
              
              <div className="flex items-center space-x-3">
                <a
                  href="https://youtube.com/@codewithgsv?si=rOLkfx6fwxc45bS4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/[0.03] hover:bg-red-600/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-red-500 transition-all hover:scale-105"
                  title="YouTube"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/thiran_groups?igsh=Y28wd252azMzZDc1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/[0.03] hover:bg-pink-600/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-pink-500 transition-all hover:scale-105"
                  title="Instagram"
                >
                  <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/918056547565"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/[0.03] hover:bg-green-600/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-green-500 transition-all hover:scale-105"
                  title="WhatsApp"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-8 md:p-10 border border-[#1F3864]/30 bg-[#0C0C0C]/80 relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[#1D9E75]/5 rounded-full blur-[80px]" />
              
              <h2 className="font-heading text-2xl font-black uppercase mb-8 flex items-center space-x-3">
                <span className="w-1.5 h-6 bg-accent rounded-full" />
                <span>{t('contact.inquiryTitle')}</span>
              </h2>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="text-[9px] font-heading font-bold uppercase tracking-widest text-gray-500 block mb-2">
                        {t('contact.fields.name')} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/[0.02] text-white placeholder-gray-600 focus:outline-none focus:border-accent text-xs font-body transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-[9px] font-heading font-bold uppercase tracking-widest text-gray-500 block mb-2">
                        {t('contact.fields.email')} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/[0.02] text-white placeholder-gray-600 focus:outline-none focus:border-accent text-xs font-body transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-[9px] font-heading font-bold uppercase tracking-widest text-gray-500 block mb-2">
                        {t('contact.fields.subject')}
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/[0.02] text-white placeholder-gray-600 focus:outline-none focus:border-accent text-xs font-body transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-[9px] font-heading font-bold uppercase tracking-widest text-gray-500 block mb-2">
                        {t('contact.fields.message')} *
                      </label>
                      <textarea
                        rows="5"
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
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSubmitting ? 'Sending...' : t('contact.fields.submit')}</span>
                    </button>
                    {errorMsg && (
                      <div className="mt-4 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center space-x-2">
                        <span>{errorMsg}</span>
                      </div>
                    )}
                  </motion.form>
                ) : (
                  <motion.div
                    key="contact-success"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-accent/15 border border-accent/35 flex items-center justify-center text-accent mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-heading text-xl font-black text-white uppercase mb-3">
                      Message Dispatched!
                    </h3>
                    <p className="font-body text-sm text-gray-400 max-w-sm leading-relaxed">
                      {t('contact.fields.success')}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
