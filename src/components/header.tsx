/**
 * @copyright 2025 jeanauryel.dev
 * @license Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "../contexts/LanguageContext";

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    const { t } = useLanguage();
    const headerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (headerRef.current && !headerRef.current.contains(event.target as Node) && navOpen) {
                setNavOpen(false);
            }
        };

        if (navOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [navOpen]);
    return (
        <header ref={headerRef} className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from zinc-900 to zinc-900/0">
            <div className="max--w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md-grid-cols[1fr,3fr,1fr]">
                <h1>
                    <a
                    href="/"
                    className="logo"
                    >
                        <img
                        src="/images/input-JA-logo.svg"
                        className="logo"
                        width={40}
                        height={40}
                        alt="Jean-Auryel"
                        />
                    </a>
                </h1>

                <div className="relative md:justify-self-center">
                    <button 
                    className="menu-btn md:hidden"
                    onClick={() => setNavOpen(prev => !prev)}
                    >
                        <span className="materials-symbols-rounded text-xl">
                            {navOpen ? '✕' : '☰'}
                        </span>
                    </button>

                    <Navbar navOpen={navOpen} onNavClick={() => setNavOpen(false)} />
                </div>

                <div className="flex items-center gap-4">
                    <LanguageSelector />
                    <a 
                    href="#contact" 
                    className="btn btn-secondary max-md:hidden md:justify-self-end"
                    >
                        {t('common.contactMe')}
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header ;