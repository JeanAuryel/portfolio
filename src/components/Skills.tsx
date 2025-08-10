/**
 * @copyright 2025 jeanauryel.dev
 * @license Apache-2.0
 */

import SkillCard from "./SkillCard";
import { useLanguage } from "../contexts/LanguageContext";

const skillItem = [
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/images/typescript.svg',
    label: 'TypeScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/images/php.svg',
    label: 'PHP',
    desc: 'Interaction'
  },
  {
    imgSrc: '/images/kotlin.svg',
    label: 'Kotlin',
    desc: 'Interaction'
  },  
  {
    imgSrc: '/images/nodejs.svg',
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: '/images/expressjs.svg',
    label: 'ExpressJS',
    desc: 'Node Framework'
  },
  {
    imgSrc: '/images/vuejs.svg',
    label: 'VueJS',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/angular.svg',
    label: 'AngularJS',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
];

const Skills = () => {
  const { t } = useLanguage();
  
  return (
    <section id="skills" className="section">
        <div className="container">

            <h2 className="headline-2 text-center mb-8">
                {t('skills.title')}
            </h2>

            <p className="text-[#060d0e]/70 mt-3 mb-8 max-w-[50ch] text-center mx-auto">
                {t('skills.description')}
            </p>

            <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-3 mt-8">
                {
                    skillItem.map(({imgSrc, label, desc }, key) => {
                        let translatedDesc = desc;
                        switch(desc) {
                          case 'User Interface':
                            translatedDesc = t('skills.userInterface');
                            break;
                          case 'Interaction':
                            translatedDesc = t('skills.interaction');
                            break;
                          case 'Web Server':
                            translatedDesc = t('skills.webServer');
                            break;
                          case 'Node Framework':
                            translatedDesc = t('skills.nodeFramework');
                            break;
                          case 'Framework':
                            translatedDesc = t('skills.framework');
                            break;
                        }
                        
                        return (
                          <SkillCard
                              key={key}
                              imgSrc={imgSrc}
                              label={label}
                              desc={translatedDesc}
                          />
                        );
                    })
                }
            </div>

        </div>
    </section>
  );
};

export default Skills;