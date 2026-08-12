import React, { useState } from 'react';
import { Mail, Linkedin, Send, Copy, Check } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedLinkedIn, setCopiedLinkedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contact.emailPlaceholder);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyLinkedIn = () => {
    navigator.clipboard.writeText(personalInfo.contact.linkedInPlaceholder);
    setCopiedLinkedIn(true);
    setTimeout(() => setCopiedLinkedIn(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-obsidian text-white relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-600/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400 px-3.5 py-1 rounded-full bg-brand-950/80 border border-brand-500/30">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Let's create something impactful.
          </h2>
          <p className="max-w-xl text-slate-400 text-sm sm:text-base">
            Have a project, collaboration or opportunity in mind? I'd love to hear about it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Handles */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-obsidian-surface p-8 rounded-3xl border border-brand-900/40 space-y-6 shadow-xl">
              <div>
                <h3 className="text-2xl font-display font-bold text-white">
                  Direct Contact Handles
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Replace placeholders below with your primary contact details.
                </p>
              </div>

              {/* Email Card CTA */}
              <div className="p-4 rounded-2xl bg-obsidian-card border border-brand-900/40 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-brand-400 text-xs font-bold uppercase tracking-wider">
                    <Mail className="w-4 h-4" />
                    <span>Email Address</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1 text-[11px] font-semibold text-brand-300 hover:text-white px-2.5 py-1 rounded bg-brand-950 border border-brand-900 transition-colors"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-sm font-mono text-slate-200 font-medium">
                  {personalInfo.contact.emailPlaceholder}
                </p>
              </div>

              {/* LinkedIn Card CTA */}
              <div className="p-4 rounded-2xl bg-obsidian-card border border-brand-900/40 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-brand-400 text-xs font-bold uppercase tracking-wider">
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <button
                    onClick={handleCopyLinkedIn}
                    className="flex items-center gap-1 text-[11px] font-semibold text-brand-300 hover:text-white px-2.5 py-1 rounded bg-brand-950 border border-brand-900 transition-colors"
                  >
                    {copiedLinkedIn ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Link</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-xs font-mono text-slate-200 font-medium truncate">
                  {personalInfo.contact.linkedInPlaceholder}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-brand-950/40 border border-brand-900/40 flex items-center justify-between text-xs text-slate-300">
                <span className="font-semibold">Contract Availability:</span>
                <span className="text-brand-300 font-bold">Remote / Global</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-obsidian-surface p-8 sm:p-10 rounded-3xl border border-brand-900/40 shadow-xl">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-brand-600/20 border border-brand-500 flex items-center justify-center text-brand-400 mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white">
                  Message Sent
                </h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you for reaching out. Your inquiry has been logged locally in front-end preview mode.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-brand-600 text-white font-semibold text-xs hover:bg-brand-500 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-display font-bold text-white">
                    Send a Message
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Fill out the form fields below to initiate project discussions.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Name <span className="text-brand-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-obsidian border border-brand-900/50 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500 transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Email <span className="text-brand-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-obsidian border border-brand-900/50 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project Inquiry / Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-obsidian border border-brand-900/50 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500 transition-colors"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Message <span className="text-brand-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your project goals and scope..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-obsidian border border-brand-900/50 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500 transition-colors"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-bold text-sm shadow-glow-md hover:shadow-glow-lg transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
