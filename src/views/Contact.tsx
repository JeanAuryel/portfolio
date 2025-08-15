/**
 * @copyright 2025 jeanauryel.dev
 * @license Apache-2.0
 */

import { useState } from 'react';
import { ButtonPrimary } from "../components/Button";
import { useLanguage } from "../contexts/LanguageContext";

const Contact = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('🚀 Form submission started');
        console.log('📝 Form data:', formData);
        
        // Validation
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            console.error('❌ Missing required fields');
            setSubmitStatus('error');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            console.log('📤 Sending to Formspree (Free plan approach)...');
            
            // Create FormData manually for better control
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('subject', formData.subject);
            formDataToSend.append('message', formData.message);
            
            // Log what we're sending
            console.log('📦 Sending data:', {
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message.substring(0, 50) + '...'
            });

            const response = await fetch('https://formspree.io/f/mvgqvkyp', {
                method: 'POST',
                body: formDataToSend,
                headers: {
                    'Accept': 'application/json'
                }
            });

            console.log('📨 Response received:', {
                status: response.status,
                statusText: response.statusText,
                ok: response.ok,
                headers: Object.fromEntries(response.headers.entries())
            });

            // Handle the response
            if (response.ok) {
                console.log('✅ Form submitted successfully!');
                setSubmitStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                // For debugging, let's see what Formspree returns
                let errorData;
                try {
                    errorData = await response.json();
                    console.error('❌ Formspree error (JSON):', errorData);
                } catch {
                    errorData = await response.text();
                    console.error('❌ Formspree error (Text):', errorData);
                }

                // Common Formspree error handling
                if (response.status === 422) {
                    console.error('🚫 Validation error - check required fields');
                } else if (response.status === 429) {
                    console.error('⏰ Rate limit exceeded');
                } else if (response.status === 500) {
                    console.error('🔥 Formspree server error');
                }
                
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('💥 Network/fetch error:', error);
            if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
                console.error('🌐 Possible CORS or network issue');
            }
            setSubmitStatus('error');
        } finally {
            console.log('🏁 Form submission finished');
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: 'mail',
            label: 'Email',
            value: 'contact@jean-auryel.dev',
            href: 'mailto:contact@jean-auryel.dev'
        },
        {
            icon: 'location_on',
            label: 'Localisation',
            value: 'Disponible pour le travail à distance',
            href: ''
        },
        {
            icon: 'schedule',
            label: 'Temps de réponse',
            value: 'Généralement sous 24 heures',
            href: ''
        }
    ];

    const socialLinks = [
        {
            platform: 'GitHub',
            icon: 'code',
            href: 'https://github.com/jeanauryel',
            username: '@jeanauryel'
        },
        {
            platform: 'LinkedIn',
            icon: 'work',
            href: 'https://linkedin.com/in/jean-auryel',
            username: 'Jean-Auryel Akinotcho'
        }
    ];

    return (
        <div className="section">
            <div className="container">
                {/* Hero Section */}
                <section className="py-20 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="headline-1 mb-6">{t('contact.title')}</h1>
                        <p className="text-xl text-[#060d0e]/70 mb-8">
                            {t('contact.subtitle')}
                        </p>
                        <div className="flex justify-center gap-4">
                            <span className="px-4 py-2 bg-[#060d0e]/10 rounded-full text-sm">{t('contact.availableForProjects')}</span>
                            <span className="px-4 py-2 bg-[#060d0e]/10 rounded-full text-sm">{t('contact.quickResponse')}</span>
                        </div>
                    </div>
                </section>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-[#060d0e]/5 rounded-2xl p-8">
                            <h2 className="headline-2 mb-6">{t('contact.sendMessage')}</h2>
                            
                            {submitStatus === 'success' && (
                                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                                    <p className="text-green-800">{t('contact.successMessage')}</p>
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                                    <p className="text-red-800">{t('contact.errorMessage')}</p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
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
                                            className="w-full px-4 py-3 border border-[#060d0e]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#060d0e]/20 focus:border-[#060d0e]/40"
                                            placeholder={t('contact.namePlaceholder')}
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
                                            className="w-full px-4 py-3 border border-[#060d0e]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#060d0e]/20 focus:border-[#060d0e]/40"
                                            placeholder={t('contact.emailPlaceholder')}
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
                                        className="w-full px-4 py-3 border border-[#060d0e]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#060d0e]/20 focus:border-[#060d0e]/40"
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
                                        className="w-full px-4 py-3 border border-[#060d0e]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#060d0e]/20 focus:border-[#060d0e]/40 resize-vertical"
                                        placeholder={t('contact.messagePlaceholder')}
                                    ></textarea>
                                </div>

                                <ButtonPrimary
                                    type="submit"
                                    label={isSubmitting ? t('contact.sending') : t('contact.sendMessageBtn')}
                                    icon={isSubmitting ? "hourglass_empty" : "send"}
                                    classes={`w-full ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    disabled={isSubmitting}
                                />
                            </form>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        {/* Contact Details */}
                        <div className="bg-[#060d0e]/5 rounded-2xl p-6">
                            <h3 className="text-lg font-semibold mb-6">{t('contact.contactInformation')}</h3>
                            <div className="space-y-4">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-[#060d0e]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="material-symbols-rounded text-lg">{info.icon}</span>
                                        </div>
                                        <div>
                                            <p className="font-medium text-sm">{info.label}</p>
                                            {info.href ? (
                                                <a href={info.href} className="text-[#060d0e]/70 hover:text-[#060d0e] transition-colors">
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-[#060d0e]/70">{info.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="bg-[#060d0e]/5 rounded-2xl p-6">
                            <h3 className="text-lg font-semibold mb-6">Connectez-vous avec moi</h3>
                            <div className="space-y-3">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#060d0e]/10 transition-colors"
                                    >
                                        <div className="w-8 h-8 bg-[#060d0e]/10 rounded flex items-center justify-center">
                                            <span className="material-symbols-rounded text-sm">{social.icon}</span>
                                        </div>
                                        <div>
                                            <p className="font-medium text-sm">{social.platform}</p>
                                            <p className="text-xs text-[#060d0e]/70">{social.username}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium text-green-800">Disponible pour de nouveaux projets</span>
                            </div>
                            <p className="text-sm text-[#060d0e]/70">
                                J'accepte actuellement de nouveaux projets et collaborations. Construisons quelque chose d'incroyable ensemble !
                            </p>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <section className="py-20">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="headline-2 mb-4">Questions fréquemment posées</h2>
                            <p className="text-[#060d0e]/70">Réponses rapides aux questions courantes</p>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-[#060d0e]/5 rounded-2xl p-6">
                                <h3 className="font-semibold mb-2">Quel est votre délai de projet typique ?</h3>
                                <p className="text-[#060d0e]/70">Les délais de projet varient selon la complexité, mais la plupart des sites web prennent 2 à 6 semaines du début à la fin. Je fournirai un calendrier détaillé lors de notre consultation initiale.</p>
                            </div>

                            <div className="bg-[#060d0e]/5 rounded-2xl p-6">
                                <h3 className="font-semibold mb-2">Travaillez-vous avec des clients internationaux ?</h3>
                                <p className="text-[#060d0e]/70">Absolument ! Je travaille avec des clients du monde entier et je suis à l'aise avec différents fuseaux horaires. La plupart des communications se font par email et appels vidéo.</p>
                            </div>

                            <div className="bg-[#060d0e]/5 rounded-2xl p-6">
                                <h3 className="font-semibold mb-2">Quelles informations dois-je inclure dans ma demande de projet ?</h3>
                                <p className="text-[#060d0e]/70">Veuillez inclure vos objectifs de projet, le délai, la fourchette budgétaire et toutes les fonctionnalités spécifiques dont vous avez besoin. Plus vous fournissez de détails, mieux je peux comprendre vos besoins.</p>
                            </div>

                            <div className="bg-[#060d0e]/5 rounded-2xl p-6">
                                <h3 className="font-semibold mb-2">Fournissez-vous un support continu après la fin du projet ?</h3>
                                <p className="text-[#060d0e]/70">Oui ! J'offre divers packages de support et de maintenance pour garder votre site web à jour, sécurisé et performant de manière optimale.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;