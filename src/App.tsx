import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomePageModule } from './components/HomePageModule';
import { AboutModule } from './components/AboutModule';
import { ServicesModule } from './components/ServicesModule';
import { QualityModule } from './components/QualityModule';
import { ContactModule } from './components/ContactModule';
import { Footer } from './components/Footer';
import { FloatingContactBar } from './components/FloatingContactBar';

export default function App() {
  const [activeModule, setActiveModule] = useState<string>('home');

  // Sync with URL hash on initial load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    const validModules = ['home', 'about', 'services', 'quality', 'contact'];
    if (validModules.includes(hash)) {
      setActiveModule(hash);
    }

    const handleHashChange = () => {
      const currentHash = window.location.hash.replace('#', '');
      if (validModules.includes(currentHash)) {
        setActiveModule(currentHash);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectModule = (moduleId: string, targetElementId?: string) => {
    setActiveModule(moduleId);
    window.location.hash = moduleId;
    if (targetElementId) {
      setTimeout(() => {
        const el = document.getElementById(targetElementId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };


  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans selection:bg-amber-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar activeModule={activeModule} onSelectModule={handleSelectModule} />



      {/* Main Store Page Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {activeModule === 'home' && (
          <HomePageModule onNavigate={handleSelectModule} />
        )}

        {activeModule === 'about' && (
          <AboutModule onNavigate={handleSelectModule} />
        )}

        {activeModule === 'services' && (
          <ServicesModule onNavigate={handleSelectModule} />
        )}

        {activeModule === 'quality' && (
          <QualityModule onNavigate={handleSelectModule} />
        )}

        {activeModule === 'contact' && (
          <ContactModule onNavigate={handleSelectModule} />
        )}
      </main>

      {/* Footer */}
      <Footer onSelectModule={handleSelectModule} />

      {/* Persistent Floating Contact Bar */}
      <FloatingContactBar />
    </div>
  );
}
