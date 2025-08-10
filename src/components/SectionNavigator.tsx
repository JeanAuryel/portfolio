/**
 * @copyright 2025 jeanauryel.dev
 * @license Apache-2.0
 */

import { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

interface Section {
  id: string;
  name: string;
  icon: string;
}

const SectionNavigator = () => {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState("home");

  const sections: Section[] = [
    { id: "home", name: t('nav.home'), icon: "home" },
    { id: "about", name: t('nav.about'), icon: "person" },
    { id: "skills", name: t('skills.title'), icon: "code" },
    { id: "work", name: t('nav.work'), icon: "work" },
    { id: "contact", name: t('nav.contact'), icon: "mail" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="bg-white/90 backdrop-blur-sm border border-[#060d0e]/10 rounded-2xl p-3 shadow-lg">
        <ul className="space-y-3">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`group relative flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ${
                  activeSection === section.id
                    ? "bg-amber-500 text-white shadow-md"
                    : "bg-transparent text-[#060d0e]/60 hover:bg-[#060d0e]/5 hover:text-[#060d0e]"
                }`}
                title={section.name}
              >
                <span className="material-symbols-rounded text-lg">
                  {section.icon}
                </span>
                
                {/* Tooltip */}
                <div className="absolute right-full mr-3 px-3 py-1.5 bg-[#060d0e] text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
                  {section.name}
                  <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-[#060d0e]"></div>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SectionNavigator;