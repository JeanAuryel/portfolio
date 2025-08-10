/**
 * @copyright 2025 jeanauryel.dev
 * @license Apache-2.0
 */

import ProjectCard from "./ProjectCard";
import { useLanguage } from "../contexts/LanguageContext";


const Work = () => {
    const { t } = useLanguage();

    const works = [
        {
            id: 'project-1',
            imgSrc: '/images/project-1.jpg',
            title: t('work.projects.musicApp'),
            tags: ['API', 'MVC', 'Development'],
            projectLink: 'https://musify-5al0.onrender.com/'
        },
        {
            id: 'project-2',
            imgSrc: '/images/project-2.jpg',
            title: t('work.projects.stockPhoto'),
            tags: ['API', 'SPA'],
            projectLink: 'https://pixstock-official.vercel.app/'
        },
        {
            id: 'project-3',
            imgSrc: '/images/project-3.jpg',
            title: t('work.projects.recipeApp'),
            tags: ['Development', 'API'],
            projectLink: null
        },
        {
            id: 'project-4',
            imgSrc: '/images/project-4.jpg',
            title: t('work.projects.realEstate'),
            tags: ['Web-design', 'Development'],
            projectLink: 'https://github.com/codewithsadee-org/wealthome'
        },
        {
            id: 'project-5',
            imgSrc: '/images/project-5.jpg',
            title: t('work.projects.eCommerce'),
            tags: ['eCommerce', 'Development'],
            projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
        },
        {
            id: 'project-6',
            imgSrc: '/images/project-6.jpg',
            title: t('work.projects.portfolio'),
            tags: ['Web-design', 'Development'],
            projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
        },
    ];

    return (
<section 
    id="work"
    className="section"
>
    <div className="container">

        <h2 className="headline-2 mb-8 text-center">
            {t('work.title')}
        </h2>

        <div className="grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-4">
            {
                works.map(({id, imgSrc, title, tags, projectLink}) => (
                    <ProjectCard 
                        key={id}
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                    />
                ))
            }
        </div>

    </div>
</section>
    )
}


export default Work;