/**
 * @copyright 2025 jeanauryel.dev
 * @license Apache-2.0
 */

import { ButtonPrimary } from "./Button";
import { useLanguage } from "../contexts/LanguageContext";

interface ContactSectionProps {
  onOpenModal: () => void;
}

const ContactSection = ({ onOpenModal }: ContactSectionProps) => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section bg-[#060d0e]/5">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="headline-2 mb-6">{t('contact.title')}</h2>
          <p className="text-xl text-[#060d0e]/70 mb-8 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-[#060d0e]/10">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-rounded text-amber-600">mail</span>
              </div>
              <h3 className="font-semibold mb-2">{t('contact.emailLabel')}</h3>
              <p className="text-[#060d0e]/70 text-sm">contact@jean-auryel.dev</p>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-[#060d0e]/10">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-rounded text-amber-600">location_on</span>
              </div>
              <h3 className="font-semibold mb-2">{t('contact.location')}</h3>
              <p className="text-[#060d0e]/70 text-sm">{t('contact.locationValue')}</p>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-[#060d0e]/10">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-rounded text-amber-600">schedule</span>
              </div>
              <h3 className="font-semibold mb-2">{t('contact.responseTime')}</h3>
              <p className="text-[#060d0e]/70 text-sm">{t('contact.responseTimeValue')}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonPrimary 
              onClick={onOpenModal}
              label={t('contact.sendMessage')}
              icon="send"
            />
            <ButtonPrimary 
              href="mailto:contact@jean-auryel.dev"
              label={t('contact.emailLabel')}
              icon="mail"
              classes="btn-outline"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;