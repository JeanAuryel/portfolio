/**
 * @copyright 2025 jeanauryel.dev
 * @license Apache-2.0
 */

import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";

const Navbar = ({navOpen, onNavClick}: {navOpen?: boolean, onNavClick?: () => void}) => {
    const location = useLocation();
    const { t } = useLanguage();

    const handleNavClick = () => {
        if (onNavClick) {
            onNavClick();
        }
    };
    
    const navItems = [
        {
            label: t('nav.home'),
            link: '/',
            className: 'nav-link'
        },
        {
            label: t('nav.about'),
            link: '/about',
            className: 'nav-link'
        },
        {
            label: t('nav.work'),
            link: '/work',
            className: 'nav-link'
        },
        {
            label: t('nav.contact'),
            link: '/contact',
            className: 'nav-link'
        }
    ];

  return (
    <nav className={`navbar ${navOpen ? 'active' : ''}`}>
        {
            navItems.map(({ label, link, className }, key) => (
                <Link 
                    to={link}
                    key={key}
                    className={`${className} ${location.pathname === link ? 'active' : ''}`}
                    onClick={handleNavClick}
                >
                    {label}
                </Link>
            ))
        }
        
        {/* Afficher les drapeaux uniquement sur mobile dans le menu */}
        <div className="md:hidden border-t border-zinc-300 pt-4 mt-4">
            <div className="flex items-center justify-center">
                <LanguageSelector />
            </div>
        </div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool,
  onNavClick: PropTypes.func
};

export default Navbar;