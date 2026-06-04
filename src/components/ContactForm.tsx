/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  Github, 
  Linkedin, 
  Loader2, 
  Sparkles, 
  MessageSquarePlus 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface ValidationState {
  isValid: boolean | null;
  errorMsg: string;
}

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Form field validations states
  const [nameValid, setNameValid] = useState<ValidationState>({ isValid: null, errorMsg: '' });
  const [emailValid, setEmailValid] = useState<ValidationState>({ isValid: null, errorMsg: '' });
  const [messageValid, setMessageValid] = useState<ValidationState>({ isValid: null, errorMsg: '' });

  // Submission State machine
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // Real-time valid actions triggers
  useEffect(() => {
    if (name === '') {
      setNameValid({ isValid: null, errorMsg: '' });
    } else if (name.trim().length < 3) {
      setNameValid({ isValid: false, errorMsg: 'Le nom doit contenir au moins 3 caractères.' });
    } else {
      setNameValid({ isValid: true, errorMsg: '' });
    }
  }, [name]);

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
      setEmailValid({ isValid: null, errorMsg: '' });
    } else if (!emailRegex.test(email)) {
      setEmailValid({ isValid: false, errorMsg: "Format d'adresse e-mail invalide (ex: nom@domaine.com)" });
    } else {
      setEmailValid({ isValid: true, errorMsg: '' });
    }
  }, [email]);

  useEffect(() => {
    if (message === '') {
      setMessageValid({ isValid: null, errorMsg: '' });
    } else if (message.trim().length < 15) {
      setMessageValid({ isValid: false, errorMsg: 'Veuillez écrire un message de plus de 15 caractères.' });
    } else {
      setMessageValid({ isValid: true, errorMsg: '' });
    }
  }, [message]);

  const isFormValid = nameValid.isValid === true && emailValid.isValid === true && messageValid.isValid === true;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setSubmitStatus('sending');
    
    // Simulate API Network request
    setTimeout(() => {
      setSubmitStatus('success');
      // Reset inputs after delay
      setName('');
      setEmail('');
      setMessage('');
    }, 1800);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      id="contact-wrapper" 
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto"
    >
      
      {/* 1. Left Grid Column: Professional Contact Cards & Socials */}
      <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
        
        <div className="space-y-4">
          <h3 className="font-display text-xl font-bold text-white tracking-tight">
            Coordonnées professionnelles
          </h3>
          <p className="text-brand-cream/70 text-xs leading-relaxed max-w-sm">
            N'hésitez pas à me joindre directement pour toute proposition de stage, de collaboration ou pour explorer mes bases de données.
          </p>

          <div className="space-y-3 pt-3">
            
            {/* Primary Email Card */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="group flex items-center gap-4 p-4 rounded-xl bg-[#020612]/60 border border-brand-primary/10 hover:border-brand-cyan/30 transition-all glow-cyan-hover"
            >
              <div className="p-2.5 rounded-lg bg-brand-primary/10 text-brand-cyan border border-brand-cyan/2). border-brand-cyan/10 group-hover:bg-brand-primary/20 transition-all">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left font-mono">
                <span className="block text-[9px] uppercase tracking-wider text-brand-cream/55">E-Mail Direct</span>
                <span className="block text-xs font-bold text-white group-hover:text-brand-cyan transition-colors truncate">
                  {PERSONAL_INFO.email}
                </span>
              </div>
            </a>

            {/* Telephone Card */}
            <a
              href="tel:+261388901338"
              className="group flex items-center gap-4 p-4 rounded-xl bg-[#020612]/60 border border-brand-primary/10 hover:border-brand-cyan/30 transition-all glow-cyan-hover"
            >
              <div className="p-2.5 rounded-lg bg-brand-primary/10 text-brand-cyan border border-brand-cyan/10 group-hover:bg-brand-primary/20 transition-all">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left font-mono">
                <span className="block text-[9px] uppercase tracking-wider text-brand-cream/55">Téléphone / SMS</span>
                <span className="block text-xs font-bold text-white group-hover:text-brand-cyan transition-colors">
                  {PERSONAL_INFO.phone}
                </span>
              </div>
            </a>

            {/* Geographical Location Card */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#020612]/60 border border-brand-primary/10">
              <div className="p-2.5 rounded-lg bg-brand-primary/10 text-brand-cyan border border-brand-cyan/10">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-left font-mono">
                <span className="block text-[9px] uppercase tracking-wider text-brand-cream/55">Localisation principale</span>
                <span className="block text-xs font-bold text-white">
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Dynamic Social Network Grid linking */}
        <div className="pt-6 border-t border-brand-primary/5">
          <span className="block text-[10px] font-mono uppercase tracking-widest text-brand-cream/50 mb-3">
            Canaux & Réseaux sociaux
          </span>
          
          <div className="flex gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              title="Visiter mon profil GitHub"
              className="p-3 bg-brand-primary/10 border border-brand-cyan/10 rounded-lg text-brand-cyan hover:text-brand-gold hover:border-brand-gold hover:glow-gold transition-all cursor-pointer"
            >
              <Github className="w-5 h-5" />
            </a>
            
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Discuter sur LinkedIn"
              className="p-3 bg-brand-primary/10 border border-brand-cyan/10 rounded-lg text-brand-cyan hover:text-brand-gold hover:border-brand-gold hover:glow-gold transition-all cursor-pointer"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>

      {/* 2. Right Grid Column: High Performance Form */}
      <div id="contact-form-container" className="lg:col-span-7">
        <form
          onSubmit={handleSubmit}
          className="relative bg-[#020612]/75 border border-brand-primary/10 rounded-2xl p-6 md:p-8 space-y-5 shadow-lg backdrop-blur-md overflow-hidden"
        >
          {/* Top subtle golden corner glow */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-gold/5 rounded-full filter blur-xl" />

          {submitStatus === 'success' ? (
            /* Tactile Form Success state viewport */
            <div className="py-8 text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 bg-brand-gold/15 border border-brand-gold stroke-brand-gold rounded-full flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(246,207,90,0.3)]">
                <CheckCircle2 className="w-8 h-8 text-brand-gold animate-bounce" />
              </div>
              <div className="space-y-1">
                <h4 className="font-display text-xl font-bold text-white tracking-widest flex items-center justify-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-brand-gold" />
                  MESSAGE TRANSMIS !
                </h4>
                <p className="font-mono text-xs text-brand-cyan tracking-wide uppercase">
                  Merci, Fehizoro Loïc vous répondra très rapidement.
                </p>
              </div>
              <p className="text-brand-cream/70 text-xs max-w-sm mx-auto leading-relaxed">
                Votre requête de contact a été traitée par notre pipeline client avec succès. Un récépissé de transmission a été sécurisé.
              </p>
              <button
                type="button"
                onClick={() => setSubmitStatus('idle')}
                className="px-4 py-2 bg-brand-primary/25 border border-brand-cyan/20 text-brand-cyan text-xs font-mono uppercase tracking-widest rounded-lg hover:border-brand-cyan transition-colors cursor-pointer"
              >
                Écrire un nouveau message
              </button>
            </div>
          ) : (
            /* Main Form View */
            <>
              <div className="flex items-center gap-2 mb-2">
                <MessageSquarePlus className="w-5 h-5 text-brand-cyan" />
                <h3 className="font-display text-lg font-bold text-white uppercase tracking-tight">
                  Envoyer un message direct
                </h3>
              </div>

              {/* Input name with floating validation */}
              <div className="space-y-1.5 relative">
                <label htmlFor="user-name" className="block text-[10px] font-mono uppercase tracking-widest text-brand-cream/60">
                  Votre Nom Complet
                </label>
                <div className="relative">
                  <input
                    id="user-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Fehizoro R."
                    disabled={submitStatus === 'sending'}
                    className={`w-full block bg-[#050A1A]/95 text-xs text-white border rounded-lg px-4 py-3 placeholder-brand-cream/20 focus:outline-none focus:glow-cyan focus:border-brand-cyan transition-all ${
                      nameValid.isValid === false 
                        ? 'border-red-500/50' 
                        : nameValid.isValid === true 
                          ? 'border-emerald-500/50' 
                          : 'border-brand-primary/10'
                    }`}
                  />
                  {/* Visual feedback validator icon */}
                  {nameValid.isValid === false && (
                    <AlertCircle className="w-4 h-4 text-red-400 absolute right-3 top-1/2 -translate-y-1/2" />
                  )}
                  {nameValid.isValid === true && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 absolute right-3 top-1/2 -translate-y-1/2 animate-pulse" />
                  )}
                </div>
                {nameValid.errorMsg && (
                  <span className="block text-[10px] text-red-400 font-mono">{nameValid.errorMsg}</span>
                )}
              </div>

              {/* Input email address */}
              <div className="space-y-1.5">
                <label htmlFor="user-email" className="block text-[10px] font-mono uppercase tracking-widest text-brand-cream/60">
                  Votre Adresse E-Mail
                </label>
                <div className="relative">
                  <input
                    id="user-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nom@mail.com"
                    disabled={submitStatus === 'sending'}
                    className={`w-full block bg-[#050A1A]/95 text-xs text-white border rounded-lg px-4 py-3 placeholder-brand-cream/20 focus:outline-none focus:glow-cyan focus:border-brand-cyan transition-all ${
                      emailValid.isValid === false 
                        ? 'border-red-500/50' 
                        : emailValid.isValid === true 
                          ? 'border-emerald-500/50' 
                          : 'border-brand-primary/10'
                    }`}
                  />
                  {emailValid.isValid === false && (
                    <AlertCircle className="w-4 h-4 text-red-400 absolute right-3 top-1/2 -translate-y-1/2" />
                  )}
                  {emailValid.isValid === true && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 absolute right-3 top-1/2 -translate-y-1/2 animate-pulse" />
                  )}
                </div>
                {emailValid.errorMsg && (
                  <span className="block text-[10px] text-red-400 font-mono">{emailValid.errorMsg}</span>
                )}
              </div>

              {/* Textarea message */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label htmlFor="user-message" className="block text-[10px] font-mono uppercase tracking-widest text-brand-cream/60">
                    Votre Message détaillé
                  </label>
                  <span className="text-[9px] font-mono text-brand-cream/40">
                    {message.length} / 500 caract.
                  </span>
                </div>
                <div className="relative">
                  <textarea
                    id="user-message"
                    required
                    rows={4}
                    maxLength={500}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Expliquez brièvement votre projet ou les compétences attendues du profil..."
                    disabled={submitStatus === 'sending'}
                    className={`w-full block bg-[#050A1A]/95 text-xs text-white border rounded-lg px-4 py-3 placeholder-brand-cream/20 focus:outline-none focus:glow-cyan focus:border-brand-cyan transition-all resize-none ${
                      messageValid.isValid === false 
                        ? 'border-red-500/50' 
                        : messageValid.isValid === true 
                          ? 'border-emerald-500/50' 
                          : 'border-brand-primary/10'
                    }`}
                  />
                  {messageValid.isValid === false && (
                    <AlertCircle className="w-4 h-4 text-red-400 absolute right-3 bottom-3" />
                  )}
                  {messageValid.isValid === true && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 absolute right-3 bottom-3 animate-pulse" />
                  )}
                </div>
                {messageValid.errorMsg && (
                  <span className="block text-[10px] text-red-400 font-mono">{messageValid.errorMsg}</span>
                )}
              </div>

              {/* Submit CTA with glowing effects and interactive load */}
              <button
                type="submit"
                disabled={!isFormValid || submitStatus === 'sending'}
                className={`w-full font-mono text-[11px] font-bold tracking-widest uppercase transition-all duration-300 py-4.5 rounded-lg flex items-center justify-center gap-1.5 border cursor-pointer ${
                  submitStatus === 'sending'
                    ? 'bg-brand-primary/40 border-brand-primary text-brand-cream/50 cursor-not-allowed'
                    : isFormValid
                      ? 'bg-brand-primary text-white border-brand-cyan hover:glow-cyan-heavy'
                      : 'bg-brand-primary/10 border-brand-primary/15 text-brand-cream/35 cursor-not-allowed'
                }`}
              >
                {submitStatus === 'sending' ? (
                  <>
                    <Loader2 className="w-4 h-4 text-brand-cyan animate-spin mr-1" />
                    TRANSMISSION DU PIPELINE EN COURS...
                  </>
                ) : (
                  <>
                    EXPÉDIER LE MESSAGE DIRECT
                    <Send className="w-3.5 h-3.5 ml-1" />
                  </>
                )}
              </button>
            </>
          )}

        </form>
      </div>

    </motion.div>
  );
}
