'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/context/LanguageContext';
import { Lock, LogOut, CheckSquare, Calendar, ClipboardList, ShieldAlert, Award, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function EmployeePortal() {
  const { t } = useTranslation();
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('attendance'); // 'attendance' | 'booster' | 'notices' | 'tasks'

  useEffect(() => {
    const sessionAuth = sessionStorage.getItem('thiran_portal_auth');
    if (sessionAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'thiranteam' || password === 'launch2026') {
      confetti({
        particleCount: 80,
        spread: 60,
        colors: ['#1F3864', '#1D9E75', '#4488CC']
      });
      setIsAuthenticated(true);
      setError('');
      setPassword('');
      sessionStorage.setItem('thiran_portal_auth', 'true');
    } else {
      setError(t('portal.errorMsg'));
      setPassword('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('thiran_portal_auth');
  };

  // Mock Portal Data
  const attendanceLogs = [
    { name: "Lohidharani G S", role: "HR Admin", status: "Active", logTime: "09:00 AM" },
    { name: "Mukunthan S", role: "Tech Lead", status: "Active", logTime: "09:15 AM" },
    { name: "Rahav V K", role: "Product Manager", status: "Active", logTime: "09:05 AM" },
    { name: "Shaik Nabeela rayees", role: "Backend Developer", status: "Active", logTime: "09:10 AM" },
    { name: "Samuel Ignitius", role: "Full Stack Dev", status: "Out of Office", logTime: "-" }
  ];

  const boosterMetrics = [
    { student: "Abhishek Kumar (Erode)", metric: "140 hrs psychometric analysis completed", rating: "★★★★★" },
    { student: "Kavitha R (Chennai)", metric: "Skill gap bridge suggested (React Course)", rating: "★★★★★" },
    { student: "Deepak S (Salem)", metric: "College finder mapped (Tier 1 CS)", rating: "★★★★☆" }
  ];

  const noticesList = [
    { date: "May 28, 2026", title: "NextStep Waitlist Reaches 240+ Students", desc: "Fantastic sprint work by growth and marketing teams. Waitlist is now live in English, Tamil, and Hindi." },
    { date: "May 24, 2026", title: "Team Meeting - NextStep Sprint 3 Review", desc: "All developer volunteers please join the discord workspace at 08:00 PM IST for UI integration review." }
  ];

  const tasksList = [
    { id: "NS-104", task: "Integrate psychometric scoring logic in NextStep frontend", owner: "Mukunthan S", status: "In Progress" },
    { id: "NS-105", task: "Configure waitlist email persistence in MongoDB local cluster", owner: "Shaik Nabeela", status: "Completed" },
    { id: "NS-106", task: "Aggregate Tier 2 and Tier 3 engineering college fee structures", owner: "Mogesh J", status: "Pending" }
  ];

  return (
    <div className="min-h-screen py-24 relative overflow-hidden bg-[#0A0A0A] text-white">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#1F3864]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#1D9E75]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <AnimatePresence mode="wait">
          {!isAuthenticated ? (
            
            /* LOGIN CARD */
            <motion.div
              key="portal-login"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-md mx-auto py-12"
            >
              <div className="glass-card rounded-2xl p-8 border border-[#1F3864]/40 bg-[#0C0C0C]/90 text-center space-y-6">
                
                {/* Brand Logo */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-[#1F3864] rounded-xl flex items-center justify-center border border-white/10 shadow-lg mb-3">
                    <span className="font-heading text-white text-2xl font-black">T</span>
                  </div>
                  <h1 className="font-heading text-2xl font-black text-white uppercase">
                    {t('portal.title')}
                  </h1>
                  <p className="font-body text-gray-500 text-xs mt-1">
                    {t('portal.subtitle')}
                  </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4 text-left">
                  <div>
                    <label className="text-[9px] font-heading font-bold uppercase tracking-widest text-gray-500 block mb-2">
                      {t('portal.passwordPrompt')}
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3.5 w-4 h-4 text-gray-600" />
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder={t('portal.passwordPlaceholder')}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-white/10 bg-white/[0.02] text-white focus:outline-none focus:border-accent text-xs font-body transition-colors"
                      />
                    </div>
                  </div>

                  {error && (
                    <div className="flex items-center space-x-2 text-[10px] text-red-500 font-heading font-semibold uppercase bg-red-950/20 border border-red-900/35 px-3 py-2 rounded-lg">
                      <ShieldAlert className="w-4 h-4 flex-shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full text-center py-3.5 rounded-xl bg-[#1D9E75] hover:bg-[#15805d] text-white font-heading font-bold text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center space-x-2"
                  >
                    <span>{t('portal.loginBtn')}</span>
                  </button>
                </form>
                
                <div className="text-[9px] text-gray-600 font-body uppercase tracking-wider">
                  Authentication Restricted to Active Volunteers Only
                </div>

              </div>
            </motion.div>
          ) : (
            
            /* PORTAL DASHBOARD */
            <motion.div
              key="portal-dashboard"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8"
            >
              
              {/* Header Bar */}
              <div className="flex flex-col sm:flex-row justify-between items-center bg-[#0C0C0C]/80 border border-white/5 rounded-2xl p-6 gap-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-[#1F3864] rounded-lg flex items-center justify-center border border-white/10 shadow-lg">
                    <span className="font-heading text-white text-xl font-black">T</span>
                  </div>
                  <div>
                    <h2 className="font-heading text-lg font-black text-white uppercase leading-none">
                      {t('portal.title')}
                    </h2>
                    <span className="text-[9px] font-heading font-bold text-accent tracking-wider uppercase block mt-1">
                      Thiran Ecosystem Internal Workspace
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white font-heading font-bold text-[10px] uppercase tracking-wider flex items-center space-x-2 transition-colors cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>{t('portal.logoutBtn')}</span>
                </button>
              </div>

              {/* Layout split */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Tab select side */}
                <div className="lg:col-span-3 space-y-4">
                  <div className="glass-card rounded-2xl p-4 border border-white/5 bg-[#0C0C0C]/65 space-y-2">
                    
                    <span className="text-[8px] font-heading font-bold text-gray-500 uppercase tracking-widest block mb-4 px-2">
                      Portal Sections
                    </span>

                    {/* Attendance */}
                    <button
                      onClick={() => setActiveTab('attendance')}
                      className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-heading font-bold uppercase tracking-wider flex items-center space-x-2.5 transition-colors cursor-pointer ${
                        activeTab === 'attendance' ? 'bg-[#1F3864] text-white border border-[#4488CC]/30' : 'text-gray-400 hover:bg-white/5'
                      }`}
                    >
                      <ClipboardList className="w-4 h-4" />
                      <span>{t('portal.attendanceTab')}</span>
                    </button>

                    {/* Booster */}
                    <button
                      onClick={() => setActiveTab('booster')}
                      className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-heading font-bold uppercase tracking-wider flex items-center space-x-2.5 transition-colors cursor-pointer ${
                        activeTab === 'booster' ? 'bg-[#1F3864] text-white border border-[#4488CC]/30' : 'text-gray-400 hover:bg-white/5'
                      }`}
                    >
                      <Award className="w-4 h-4" />
                      <span>{t('portal.boosterTab')}</span>
                    </button>

                    {/* Notices */}
                    <button
                      onClick={() => setActiveTab('notices')}
                      className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-heading font-bold uppercase tracking-wider flex items-center space-x-2.5 transition-colors cursor-pointer ${
                        activeTab === 'notices' ? 'bg-[#1F3864] text-white border border-[#4488CC]/30' : 'text-gray-400 hover:bg-white/5'
                      }`}
                    >
                      <FileText className="w-4 h-4" />
                      <span>{t('portal.noticesTab')}</span>
                    </button>

                    {/* Tasks */}
                    <button
                      onClick={() => setActiveTab('tasks')}
                      className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-heading font-bold uppercase tracking-wider flex items-center space-x-2.5 transition-colors cursor-pointer ${
                        activeTab === 'tasks' ? 'bg-[#1F3864] text-white border border-[#4488CC]/30' : 'text-gray-400 hover:bg-white/5'
                      }`}
                    >
                      <CheckSquare className="w-4 h-4" />
                      <span>{t('portal.tasksTab')}</span>
                    </button>

                  </div>
                </div>

                {/* Dashboard display side */}
                <div className="lg:col-span-9">
                  <div className="glass-card rounded-2xl p-6 md:p-8 border border-white/5 bg-[#0C0C0C]/40 min-h-[380px]">
                    <AnimatePresence mode="wait">
                      
                      {/* ATTENDANCE SECTION */}
                      {activeTab === 'attendance' && (
                        <motion.div
                          key="attendance-tab"
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          className="space-y-6"
                        >
                          <h3 className="font-heading text-lg font-black uppercase text-white mb-4">
                            {t('portal.portal1Title')} — Attendance
                          </h3>
                          <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse text-xs md:text-sm font-body text-gray-300">
                              <thead>
                                <tr className="border-b border-white/10 text-gray-500 font-heading uppercase text-[10px] tracking-wider">
                                  <th className="pb-3">Volunteer</th>
                                  <th className="pb-3">Role</th>
                                  <th className="pb-3">Sprint Status</th>
                                  <th className="pb-3">Daily Login</th>
                                </tr>
                              </thead>
                              <tbody>
                                {attendanceLogs.map((log, idx) => (
                                  <tr key={idx} className="border-b border-white/5">
                                    <td className="py-4 font-heading font-black text-white">{log.name}</td>
                                    <td className="py-4">{log.role}</td>
                                    <td className="py-4">
                                      <span className={`px-2 py-0.5 rounded text-[9px] font-heading font-bold uppercase tracking-wider ${
                                        log.status === 'Active' ? 'bg-[#1D9E75]/10 text-accent border border-[#1D9E75]/20' : 'bg-white/5 text-gray-500 border border-white/5'
                                      }`}>
                                        {log.status}
                                      </span>
                                    </td>
                                    <td className="py-4 text-gray-500">{log.logTime}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </motion.div>
                      )}

                      {/* BOOSTER SECTION */}
                      {activeTab === 'booster' && (
                        <motion.div
                          key="booster-tab"
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          className="space-y-6"
                        >
                          <h3 className="font-heading text-lg font-black uppercase text-white mb-4">
                            {t('portal.portal1Title')} — Student Boosters
                          </h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {boosterMetrics.map((met, idx) => (
                              <div key={idx} className="glass-card rounded-xl p-6 border border-white/5 bg-[#080808]">
                                <span className="font-heading text-xs font-bold text-accent uppercase tracking-wider block mb-2">
                                  {met.student}
                                </span>
                                <p className="font-body text-xs text-gray-400 leading-normal">
                                  {met.metric}
                                </p>
                                <span className="text-[#4488CC] block mt-4 text-xs tracking-widest">{met.rating}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {/* NOTICES SECTION */}
                      {activeTab === 'notices' && (
                        <motion.div
                          key="notices-tab"
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          className="space-y-6"
                        >
                          <h3 className="font-heading text-lg font-black uppercase text-white mb-4">
                            {t('portal.portal2Title')} — Notices
                          </h3>
                          
                          <div className="space-y-4">
                            {noticesList.map((not, idx) => (
                              <div key={idx} className="glass-card rounded-xl p-6 border border-white/5 bg-[#080808]">
                                <div className="flex justify-between items-start mb-3">
                                  <h4 className="font-heading text-sm font-black text-white uppercase">
                                    {not.title}
                                  </h4>
                                  <span className="text-[9px] font-heading font-bold text-gray-500 uppercase tracking-widest">
                                    {not.date}
                                  </span>
                                </div>
                                <p className="font-body text-xs text-gray-400 leading-relaxed">
                                  {not.desc}
                                </p>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {/* TASKS SECTION */}
                      {activeTab === 'tasks' && (
                        <motion.div
                          key="tasks-tab"
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          className="space-y-6"
                        >
                          <h3 className="font-heading text-lg font-black uppercase text-white mb-4">
                            {t('portal.portal2Title')} — Tasks & Sprint Backlog
                          </h3>
                          
                          <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse text-xs md:text-sm font-body text-gray-300">
                              <thead>
                                <tr className="border-b border-white/10 text-gray-500 font-heading uppercase text-[10px] tracking-wider">
                                  <th className="pb-3">Task ID</th>
                                  <th className="pb-3">Sprint Task</th>
                                  <th className="pb-3">Assignee</th>
                                  <th className="pb-3">Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                {tasksList.map((tsk, idx) => (
                                  <tr key={idx} className="border-b border-white/5">
                                    <td className="py-4 font-heading font-bold text-[#4488CC]">{tsk.id}</td>
                                    <td className="py-4 text-white leading-normal max-w-sm">{tsk.task}</td>
                                    <td className="py-4">{tsk.owner}</td>
                                    <td className="py-4">
                                      <span className={`px-2.5 py-0.5 rounded text-[9px] font-heading font-bold uppercase tracking-wider ${
                                        tsk.status === 'Completed' ? 'bg-[#1D9E75]/10 text-accent border border-[#1D9E75]/20' :
                                        tsk.status === 'In Progress' ? 'bg-primary/10 text-primary border border-primary/20' :
                                        'bg-white/5 text-gray-500 border border-white/5'
                                      }`}>
                                        {tsk.status}
                                      </span>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </motion.div>
                      )}

                    </AnimatePresence>
                  </div>
                </div>

              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
