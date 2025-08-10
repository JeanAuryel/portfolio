/**
 * @copyright 2025 jeanauryel.dev
 * @license Apache-2.0
 */

import { useState, useEffect } from 'react';
import { useLanguage } from "../contexts/LanguageContext";
import { ButtonPrimary } from './Button';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simuler l'envoi du formulaire
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Fermer le modal après 2 secondes
      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto transform transition-all duration-300 animate-zoom-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#060d0e]/10">
          <div>
            <h2 className="text-2xl font-bold text-[#060d0e]">{t('contact.sendMessage')}</h2>
            <p className="text-[#060d0e]/70">{t('contact.quickResponse')}</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-[#060d0e]/10 flex items-center justify-center hover:bg-[#060d0e]/20 transition-colors"
          >
            <span className="material-symbols-rounded">close</span>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {submitStatus === 'success' && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
              <span className="material-symbols-rounded text-green-600">check_circle</span>
              <p className="text-green-800">{t('contact.successMessage')}</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3">
              <span className="material-symbols-rounded text-red-600">error</span>
              <p className="text-red-800">{t('contact.errorMessage')}</p>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#060d0e] mb-2">
                {t('contact.name')} *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder={t('contact.namePlaceholder')}
                className="w-full px-4 py-3 rounded-xl border border-[#060d0e]/20 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/20 outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#060d0e] mb-2">
                {t('contact.email')} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder={t('contact.emailPlaceholder')}
                className="w-full px-4 py-3 rounded-xl border border-[#060d0e]/20 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/20 outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-[#060d0e] mb-2">
              {t('contact.subject')} *
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-[#060d0e]/20 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/20 outline-none transition-all"
            >
              <option value="">{t('contact.selectSubject')}</option>
              <option value="project">{t('contact.projectInquiry')}</option>
              <option value="collaboration">{t('contact.collaboration')}</option>
              <option value="consultation">{t('contact.consultation')}</option>
              <option value="freelance">{t('contact.freelance')}</option>
              <option value="other">{t('contact.other')}</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#060d0e] mb-2">
              {t('contact.message')} *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              placeholder={t('contact.messagePlaceholder')}
              className="w-full px-4 py-3 rounded-xl border border-[#060d0e]/20 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/20 outline-none transition-all resize-none"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <ButtonPrimary
              type="submit"
              label={isSubmitting ? t('contact.sending') : t('contact.sendMessageBtn')}
              icon={isSubmitting ? 'hourglass_empty' : 'send'}
              disabled={isSubmitting}
              classes="flex-1"
            />
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-xl border border-[#060d0e]/20 hover:bg-[#060d0e]/5 transition-colors"
            >
              Annuler
            </button>
          </div>
        </form>
      </div>

      {/* Click outside to close */}
      <div 
        className="absolute inset-0 -z-10" 
        onClick={onClose}
      />
    </div>
  );
};

export default ContactModal;