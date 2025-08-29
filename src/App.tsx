/**
 * @copyright 2025 jeanauryel.dev
 * @license Apache-2.0
 */

import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { LanguageProvider } from "./contexts/LanguageContext";

const App = () => {
    return (
        <LanguageProvider>
            
            <Header />
            
            <main>
                
                <Outlet />
            
            </main>

        </LanguageProvider>
    );
};

export default App;