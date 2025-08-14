/**
 * @copyright 2025 jeanauryel.dev
 * @license Apache-2.0
 */

import { ButtonPrimary } from "../components/Button";
import { useLanguage } from "../contexts/LanguageContext";

const About = () => {
    const { t } = useLanguage();
    return (
        <div className="section">
            <div className="container">
                {/* Hero Section */}
                <section className="py-20 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="headline-1 mb-6">{t('about.title')}</h1>
                        <p className="text-xl text-[#060d0e]/70 mb-8">
                            Full-Stack Developer & Digital Craftsman
                        </p>
                    </div>
                </section>

                {/* Personal Story */}
                <section className="py-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <img 
                                src="/images/ja-hero.png" 
                                alt="Jean-Auryel" 
                                className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
                            />
                        </div>
                        <div>
                            <h2 className="headline-2 mb-6">{t('about.journeyTitle')}</h2>
                            <div className="space-y-4 text-[#060d0e]/70">
                                <p>
                                    {t('about.journeyP1')}
                                </p>
                                <p>
                                    {t('about.journeyP2')}
                                </p>
                                <p>
                                    {t('about.journeyP3')}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills & Expertise */}
                <section className="py-16 bg-[#060d0e]/5 rounded-2xl">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="headline-2 mb-4">{t('about.technicalExpertise')}</h2>
                        <p className="text-[#060d0e]/70 text-lg">{t('about.technicalExpertiseDesc')}</p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#060d0e]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">�</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{t('about.frontend')}</h3>
                            <p className="text-sm text-[#060d0e]/70">{t('about.frontendDesc')}</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#060d0e]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">�</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{t('about.backend')}</h3>
                            <p className="text-sm text-[#060d0e]/70">{t('about.backendDesc')}</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#060d0e]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">=�</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{t('about.tools')}</h3>
                            <p className="text-sm text-[#060d0e]/70">{t('about.toolsDesc')}</p>
                        </div>
                    </div>
                </section>

                {/* Philosophy */}
                <section className="py-16 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="headline-2 mb-6">{t('about.philosophyTitle')}</h2>
                        <p className="text-lg text-[#060d0e]/70 mb-8">
                            "Great code is not just about functionalityit's about creating experiences that inspire and solutions that endure. I believe in writing code that tells a story, solves real problems, and stands the test of time."
                        </p>
                        
                        <div className="grid md:grid-cols-3 gap-8 mt-12">
                            <div>
                                <div className="text-3xl mb-4">�</div>
                                <h3 className="font-semibold mb-2">{t('about.userCentered')}</h3>
                                <p className="text-sm text-[#060d0e]/70">{t('about.userCenteredDesc')}</p>
                            </div>
                            <div>
                                <div className="text-3xl mb-4">='</div>
                                <h3 className="font-semibold mb-2">{t('about.cleanScalable')}</h3>
                                <p className="text-sm text-[#060d0e]/70">{t('about.cleanScalableDesc')}</p>
                            </div>
                            <div>
                                <div className="text-3xl mb-4">=�</div>
                                <h3 className="font-semibold mb-2">{t('about.innovationDriven')}</h3>
                                <p className="text-sm text-[#060d0e]/70">{t('about.innovationDrivenDesc')}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-16 text-center">
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8">
                        <h2 className="headline-2 mb-4">{t('about.ctaTitle')}</h2>
                        <p className="text-[#060d0e]/70 mb-8">
                            {t('about.ctaDesc')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <ButtonPrimary 
                                href="/contact"
                                label={t('about.getInTouch')}
                                icon="mail"
                            />
                            <ButtonPrimary 
                                href="/work"
                                label={t('about.viewMyWork')}
                                icon="arrow_forward"
                                classes="btn-outline"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;