/**
 * @copyright 2025 jean-auryel.dev
 * @license Apache-2.0
 */

import { useState } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Work from "../components/Work";
import ContactSection from "../components/ContactSection";
import ContactModal from "../components/ContactModal";
import SectionNavigator from "../components/SectionNavigator";

const Home = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const openContactModal = () => setIsContactModalOpen(true);
    const closeContactModal = () => setIsContactModalOpen(false);

    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Work />
            <ContactSection onOpenModal={openContactModal} />
            <ContactModal 
                isOpen={isContactModalOpen} 
                onClose={closeContactModal} 
            />
            <SectionNavigator />
        </>
    );
};

export default Home;