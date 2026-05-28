'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/context/LanguageContext';
import { Linkedin, Award, Shield, User, Users } from 'lucide-react';

export default function Team() {
  const { t } = useTranslation();

  // Leadership Team Array
  const leaders = [
    {
      name: "G S Varshith",
      role: t('team.roles.ceo'),
      subtext: "2nd Year College Student | Erode ➔ Chennai",
      badge: "Founder",
      linkedin: "https://www.linkedin.com/in/varshithgs",
      youtube: "https://youtube.com/@codewithgsv?si=rOLkfx6fwxc45bS4",
      image: null // Fallback placeholder
    },
    {
      name: "Dharshan S",
      role: t('team.roles.cto'),
      subtext: "D Spark Web Solutions Partner",
      badge: "Co-Founder",
      linkedin: "https://www.linkedin.com/in/dharshan-s-32b7b332a/",
      youtube: null,
      image: null
    },
    {
      name: "Brundavanam Bose P",
      role: t('team.roles.pm'),
      subtext: "Ecosystem Operations & Delivery",
      badge: "Project Manager",
      linkedin: "#",
      youtube: null,
      image: null
    }
  ];

  // Advisors & Mentors array
  const advisors = [
    { name: "Sasi", role: "Legal Mentor", dept: "Legal & Compliance" }
  ];

  // 16 Volunteers list
  const volunteers = [
    { name: "Lohidharani G S", role: "HR Admin, Student Community Manager", dept: "HR & Community" },
    { name: "Mukunthan S", role: "Tech Lead, UI/UX Designer", dept: "Tech & Design" },
    { name: "Rahav V K", role: "Product Manager", dept: "Product" },
    { name: "Hari Haran V", role: "Career Research Analyst", dept: "Research" },
    { name: "Mogesh J", role: "Data Analyst", dept: "Data" },
    { name: "Shaik Nabeela rayees", role: "Backend Developer", dept: "Engineering" },
    { name: "Prakathesh C", role: "Tech Support Lead", dept: "Tech Support" },
    { name: "Keerthana P S", role: "AI/ML Developer", dept: "AI & ML" },
    { name: "Akash M", role: "Growth Manager, Digital Media Manager", dept: "Marketing" },
    { name: "Kanmani G", role: "Growth Support Manager, Data Coordinator", dept: "Marketing Support" },
    { name: "Arpit kumar P", role: "Business Developer", dept: "Business" },
    { name: "Navasri N", role: "Content & Communication Manager", dept: "PR & Content" },
    { name: "Nishanthini S", role: "Events Coordinator", dept: "Operations" },
    { name: "Samuel Ignitius", role: "Full Stack Developer", dept: "Engineering" },
    { name: "HariPrasad H", role: "Integrated testing Coordinator", dept: "Quality Assurance" },
    { name: "Vaishali S", role: "Operations Monitoring", dept: "Operations" }
  ];

  return (
    <div className="min-h-screen py-24 relative overflow-hidden bg-[#0A0A0A] text-white">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#1F3864]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-[#1D9E75]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent/25 bg-accent/5 text-[10px] font-heading font-bold uppercase tracking-widest text-accent mb-4"
          >
            <Users className="w-3.5 h-3.5" />
            <span>{t('nav.team')}</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl font-black uppercase text-glow-blue leading-none"
          >
            {t('team.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-gray-400 text-sm md:text-base max-w-xl mx-auto mt-4"
          >
            {t('team.subtitle')}
          </motion.p>
        </div>

        {/* 1. LEADERSHIP SECTION */}
        <div className="mb-28">
          <h2 className="font-heading text-xl font-black uppercase text-[#4488CC] tracking-widest text-center mb-12 flex items-center justify-center space-x-3">
            <span className="w-8 h-px bg-primary/40" />
            <span>Core Leadership</span>
            <span className="w-8 h-px bg-primary/40" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {leaders.map((leader, idx) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-8 border border-primary/20 bg-[#0C0C0C]/90 text-center flex flex-col justify-between items-center group relative overflow-hidden"
              >
                {/* Glow bar */}
                <div className="absolute top-0 right-0 left-0 h-[2px] bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Avatar Placeholder */}
                <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:text-accent group-hover:border-accent/40 transition-colors mb-6 relative">
                  <User className="w-10 h-10" />
                  <div className="absolute -bottom-1 -right-1 bg-accent/20 border border-accent/40 rounded-full p-1 text-accent">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[9px] font-heading font-bold text-accent tracking-widest uppercase bg-accent/10 border border-accent/25 px-2.5 py-1 rounded-md">
                    {leader.badge}
                  </span>
                  <h3 className="font-heading text-xl font-black text-white uppercase pt-2">
                    {leader.name}
                  </h3>
                  <p className="font-heading text-xs font-bold text-[#4488CC] uppercase">
                    {leader.role}
                  </p>
                  <p className="font-body text-[10px] text-gray-500 italic max-w-[200px]">
                    {leader.subtext}
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-3 mt-8">
                  {leader.linkedin && leader.linkedin !== '#' && (
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/[0.03] hover:bg-blue-600/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-500 transition-all hover:scale-105"
                      title="LinkedIn"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  )}
                  {leader.youtube && (
                    <a
                      href={leader.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/[0.03] hover:bg-red-600/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-red-500 transition-all hover:scale-105"
                      title="YouTube Channel"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 1.5 ADVISORS & MENTORS SECTION */}
        <div className="mb-28">
          <h2 className="font-heading text-xl font-black uppercase text-[#1D9E75] tracking-widest text-center mb-12 flex items-center justify-center space-x-3">
            <span className="w-8 h-px bg-[#1D9E75]/40" />
            <span>Advisors & Mentors</span>
            <span className="w-8 h-px bg-[#1D9E75]/40" />
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {advisors.map((advisor, idx) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card rounded-xl p-6 border border-white/5 bg-[#0C0C0C]/60 flex flex-col justify-between hover:border-[#1D9E75]/25 transition-all group"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[8px] font-heading font-bold text-gray-500 uppercase tracking-wider bg-white/5 px-2 py-0.5 rounded border border-white/5">
                      {advisor.dept}
                    </span>
                    <Shield className="w-3.5 h-3.5 text-gray-600 group-hover:text-[#1D9E75] transition-colors" />
                  </div>
                  <h3 className="font-heading text-base font-black text-white uppercase group-hover:text-[#1D9E75] transition-all">
                    {advisor.name}
                  </h3>
                  <p className="font-body text-xs text-gray-400 mt-2 leading-snug">
                    {advisor.role}
                  </p>
                </div>
                
                <div className="h-[1px] w-6 bg-[#1D9E75]/20 group-hover:w-12 transition-all mt-4" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. TEAM MEMBERS / VOLUNTEERS SECTION */}
        <div>
          <h2 className="font-heading text-xl font-black uppercase text-accent tracking-widest text-center mb-12 flex items-center justify-center space-x-3">
            <span className="w-8 h-px bg-accent/40" />
            <span>Volunteers & Builders</span>
            <span className="w-8 h-px bg-accent/40" />
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {volunteers.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 4) * 0.05 }}
                className="glass-card rounded-xl p-6 border border-white/5 bg-[#0C0C0C]/60 flex flex-col justify-between hover:border-accent/25 transition-all group"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[8px] font-heading font-bold text-gray-500 uppercase tracking-wider bg-white/5 px-2 py-0.5 rounded border border-white/5">
                      {member.dept}
                    </span>
                    <Shield className="w-3.5 h-3.5 text-gray-600 group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="font-heading text-base font-black text-white uppercase group-hover:text-glow-blue transition-all">
                    {member.name}
                  </h3>
                  <p className="font-body text-xs text-gray-400 mt-2 leading-snug">
                    {member.role}
                  </p>
                </div>
                
                <div className="h-[1px] w-6 bg-accent/20 group-hover:w-12 transition-all mt-4" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="text-center mt-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full border border-white/5 bg-white/[0.01] text-xs tracking-[0.3em] text-gray-400 font-black uppercase italic"
          >
            <span>{t('team.bottomText')}</span>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
