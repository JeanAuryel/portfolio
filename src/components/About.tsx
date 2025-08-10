/**
 * @copyright 2025 jeanauryel.dev
 * @license Apache-2.0
 */

import { useLanguage } from "../contexts/LanguageContext";


const About = () => {
  const { t } = useLanguage();

  const aboutItems = [
    {
      label: t('about.yearsOfExperience'),
      number: 2.5
    },
    {
      label: t('about.projectsDone'),
      number: 15
    },
  ];
  return (
   <section 
    id="about"
    className="py-20"
   >
    <div className="container">
        <div className="bg-[#060d0e]/5 p-7 rounded-2xl md:p-12">
            <p className="text-lg text-[#060d0e]/70 mb-8 md:mb-8 md:text-xl md:max-w-[60ch]">
                {t('about.welcome')}
            </p>

            <div className="flex flex-wrap items-center gap-4 md:gap-7">
                {
                    aboutItems.map(({ label, number}, key) => (
                        <div key={key}>
                            <div className="flex items-center md:mb-2">
                                <span className="text-2xl font-bold md:text-4xl">{number}</span>
                                <span className="text-[#502802]/40 font-semibold md:text-3xl">+</span>
                            </div>
                            <div>    
                                <p className="text-sm font-semibold text-[#060d0e]/70 md:text-base">
                                    {label}
                                </p>
                            </div>
                        </div>
                    ))
                }

                <img 
                src="/images/input-JA-logo.svg" 
                alt="Logo"
                width={30}
                height={30}
                className="ml-auto md:w-[40px] md:h-[40px]"
                />
            </div>
        </div>

    </div>
   </section>
  );
};

export default About;