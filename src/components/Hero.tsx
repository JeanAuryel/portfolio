/**
 * @copyright 2025 jeanauryel.dev
 * @license Apache-2.0
 */

import { ButtonPrimary, ButtonOutline } from "./Button";
import { useLanguage } from "../contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section 
        id="home"
    className="pt-28 lg:pt-36"
    >
        <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10 ">
            <div>
                <div className="flex items-center gap-3">
                    <figure className="img-box w-9 h-9 rounded-lg">
                        <img 
                        src="/images/jean-auryel.png"
                        width={40}
                        height={40}
                        alt="Jean Auryel avatar"
                        className="img-cover"
                        />
                    </figure>

                    <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                        <span className="relative h-2 w-2 rounded-full bg-emerald-400">
                            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                        </span>

                        {t('hero.availableForWork')}
                    </div>
                </div>

                <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10 font-megrim">
                    {t('hero.headline')}
                </h2>

                <div className="flex items-center gap-3">
                    <ButtonPrimary 
                        href="/documents/Cv Dev Fullstack Junior JA.pdf"
                        download="CV-Jean-Auryel-Fullstack-Developer.pdf"
                        label={t('hero.downloadCV')}
                        icon="download"
                    />

                    <ButtonOutline 
                        href="#about"
                        label={t('hero.viewPortfolio')}
                        icon="arrow_downward"
                        classes="btn-outline"
                    />
                </div>
            </div>

            <div className="hidden lg:block">
                <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-amber-600 via-25% via-amber-600/40 to-65% rounded-[60px] overflow-hidden">
                    <img 
                    src="/images/hero-banner-2.png"
                    width={656}
                    height={800}
                    alt="Jean Auryel"
                    className="w-full"
                    />
                </figure>
            </div>

        </div>

    </section>
  );
};

export default Hero;