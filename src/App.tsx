import React, { useState, useEffect } from 'react';
import { PageId, ServiceMode, ServiceItem, ProjectItem } from './types';
import { resolveLegacyRoute } from './data/migration';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ConsultationModal } from './components/ConsultationModal';
import { ServiceModal } from './components/ServiceModal';
import { ProjectModal } from './components/ProjectModal';
import { MigrationModal } from './components/MigrationModal';
import { SEOHead } from './components/SEOHead';
import { ServiceLandingPage } from './components/ServiceLandingPage';

// Construction Experience Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PricingPage } from './pages/PricingPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { PartnersPage } from './pages/PartnersPage';
import { ContactPage } from './pages/ContactPage';

// Interior Design Experience Pages
import { InteriorHomePage } from './pages/InteriorHomePage';
import { InteriorPricingPage } from './pages/InteriorPricingPage';
import { InteriorServicesPage } from './pages/InteriorServicesPage';

export default function App() {
  const [serviceMode, setServiceMode] = useState<ServiceMode>('landing');
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string>('');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [migrationModalOpen, setMigrationModalOpen] = useState(false);
  const [pricingInitialTierId, setPricingInitialTierId] = useState<string>('royal-package');
  const [interiorInitialTierId, setInteriorInitialTierId] = useState<string>('bwp-package');

  // Initialize and handle URL routing & legacy WordPress 301 redirects
  useEffect(() => {
    const parseRouteFromUrl = (): { mode: ServiceMode; page: PageId } => {
      const path = window.location.pathname;
      const search = window.location.search;
      const hash = window.location.hash.replace('#', '').toLowerCase();

      // Check legacy WordPress mapping first
      const legacyMatch = resolveLegacyRoute(path, search);
      if (legacyMatch) {
        return { mode: 'construction', page: legacyMatch };
      }

      // Check for explicit select or landing request
      if (path === '/select' || hash === 'select') {
        return { mode: 'landing', page: 'home' };
      }

      // Check Interiors route namespace
      if (path.startsWith('/interiors')) {
        const interiorSubPath = path.replace(/^\/interiors\/?/, '').toLowerCase();
        if (interiorSubPath === 'services' || hash === 'services') return { mode: 'interiors', page: 'services' };
        if (interiorSubPath === 'pricing' || hash === 'pricing') return { mode: 'interiors', page: 'pricing' };
        if (interiorSubPath === 'projects' || hash === 'projects') return { mode: 'interiors', page: 'projects' };
        if (interiorSubPath === 'about' || hash === 'about') return { mode: 'interiors', page: 'about' };
        if (interiorSubPath === 'partners' || hash === 'partners') return { mode: 'interiors', page: 'partners' };
        if (interiorSubPath === 'contact' || hash === 'contact') return { mode: 'interiors', page: 'contact' };
        return { mode: 'interiors', page: 'home' };
      }

      // Check Construction explicit route namespace
      if (path.startsWith('/construction')) {
        const constructionSubPath = path.replace(/^\/construction\/?/, '').toLowerCase();
        if (constructionSubPath === 'services') return { mode: 'construction', page: 'services' };
        if (constructionSubPath === 'pricing') return { mode: 'construction', page: 'pricing' };
        if (constructionSubPath === 'projects') return { mode: 'construction', page: 'projects' };
        if (constructionSubPath === 'about') return { mode: 'construction', page: 'about' };
        if (constructionSubPath === 'partners') return { mode: 'construction', page: 'partners' };
        if (constructionSubPath === 'contact') return { mode: 'construction', page: 'contact' };
        return { mode: 'construction', page: 'home' };
      }

      // Check direct standard routes: /services, /pricing, etc. (Default to Construction)
      const cleanPath = path.replace(/^\//, '').toLowerCase();
      if (cleanPath === 'services' || hash === 'services') return { mode: 'construction', page: 'services' };
      if (cleanPath === 'pricing' || hash === 'pricing') return { mode: 'construction', page: 'pricing' };
      if (cleanPath === 'projects' || hash === 'projects') return { mode: 'construction', page: 'projects' };
      if (cleanPath === 'about' || hash === 'about') return { mode: 'construction', page: 'about' };
      if (cleanPath === 'partners' || hash === 'partners') return { mode: 'construction', page: 'partners' };
      if (cleanPath === 'contact' || hash === 'contact') return { mode: 'construction', page: 'contact' };

      // Root path '/' displays the split-screen landing page by default
      return { mode: 'landing', page: 'home' };
    };

    const initialRoute = parseRouteFromUrl();
    setServiceMode(initialRoute.mode);
    setCurrentPage(initialRoute.page);

    const handlePopState = () => {
      const route = parseRouteFromUrl();
      setServiceMode(route.mode);
      setCurrentPage(route.page);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // When user selects a service from the split-screen landing page
  const handleSelectServiceFromLanding = (mode: 'construction' | 'interiors') => {
    setServiceMode(mode);
    setCurrentPage('home');
    const newPath = mode === 'interiors' ? '/interiors' : '/construction';
    window.history.pushState({}, '', newPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Switch between Construction and Interior Design from navbar/footer
  const handleSwitchServiceMode = (mode: 'construction' | 'interiors') => {
    setServiceMode(mode);
    let newPath = '';
    if (mode === 'interiors') {
      newPath = currentPage === 'home' ? '/interiors' : `/interiors/${currentPage}`;
    } else {
      newPath = currentPage === 'home' ? '/construction' : `/${currentPage}`;
    }
    window.history.pushState({}, '', newPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Return back to split-screen selection landing page
  const handleReturnToLanding = () => {
    setServiceMode('landing');
    setCurrentPage('home');
    window.history.pushState({}, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Standard page navigation within the active service mode
  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    let newPath = '';
    if (serviceMode === 'interiors') {
      newPath = page === 'home' ? '/interiors' : `/interiors/${page}`;
    } else {
      newPath = page === 'home' ? '/construction' : `/${page}`;
    }
    if (window.location.pathname !== newPath) {
      window.history.pushState({}, '', newPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultationWithService = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
    setConsultationOpen(true);
  };

  // 1. SPLIT-SCREEN LANDING PAGE (Initial Entry or when requested)
  if (serviceMode === 'landing') {
    return (
      <div className="min-h-screen flex flex-col bg-[#0B1528] text-white">
        <SEOHead currentPage="home" serviceMode="landing" />

        <ServiceLandingPage
          onSelectService={handleSelectServiceFromLanding}
          onOpenConsultation={() => {
            setPrefilledService('Turnkey Construction & Interior Consultation');
            setConsultationOpen(true);
          }}
        />

        {/* Interactive Consultation Modal */}
        <ConsultationModal
          isOpen={consultationOpen}
          onClose={() => setConsultationOpen(false)}
          prefilledService={prefilledService}
        />

        {/* Floating WhatsApp CTA button */}
        <WhatsAppButton />
      </div>
    );
  }

  // 2. ACTIVE SERVICE MODE EXPERIENCES (Construction or Interior Design)
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#1A1918]">
      {/* Comprehensive Dynamic SEO and Schema.org Management */}
      <SEOHead currentPage={currentPage} serviceMode={serviceMode} />

      {/* Sticky Header Navigation with Integrated Service Switcher */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        serviceMode={serviceMode}
        onSwitchServiceMode={handleSwitchServiceMode}
        onReturnToLanding={handleReturnToLanding}
        onOpenConsultation={() => {
          setPrefilledService(serviceMode === 'interiors' ? 'Turnkey Interior Design (Full Home)' : 'Turnkey Residential Construction');
          setConsultationOpen(true);
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* ========================================================
            INTERIOR DESIGN EXPERIENCE
        ======================================================== */}
        {serviceMode === 'interiors' && (
          <>
            {currentPage === 'home' && (
              <InteriorHomePage
                onNavigate={handleNavigate}
                onOpenConsultation={() => {
                  setPrefilledService('Turnkey Interior Design (Full Home)');
                  setConsultationOpen(true);
                }}
                onSelectService={(service) => setSelectedService(service)}
                onSelectProject={(project) => setSelectedProject(project)}
                onSelectPricingPlan={(tierId) => {
                  setInteriorInitialTierId(tierId);
                  handleNavigate('pricing');
                }}
                onSwitchToConstruction={() => handleSwitchServiceMode('construction')}
              />
            )}

            {currentPage === 'services' && (
              <InteriorServicesPage
                onNavigate={handleNavigate}
                onOpenConsultation={() => {
                  setPrefilledService('Modular Kitchens & Wardrobes');
                  setConsultationOpen(true);
                }}
                onSelectService={(service) => setSelectedService(service)}
              />
            )}

            {currentPage === 'pricing' && (
              <InteriorPricingPage
                onNavigate={handleNavigate}
                initialTierId={interiorInitialTierId}
                onOpenConsultation={() => {
                  setPrefilledService('Interior Package Estimation');
                  setConsultationOpen(true);
                }}
              />
            )}

            {currentPage === 'projects' && (
              <ProjectsPage
                onNavigate={handleNavigate}
                onOpenConsultation={() => {
                  setPrefilledService('Interior Portfolio Inquiry');
                  setConsultationOpen(true);
                }}
                onSelectProject={(project) => setSelectedProject(project)}
              />
            )}

            {currentPage === 'about' && (
              <AboutPage
                onNavigate={handleNavigate}
                onOpenConsultation={() => {
                  setPrefilledService('Avani Nivas Interior Design Consultation');
                  setConsultationOpen(true);
                }}
              />
            )}

            {currentPage === 'partners' && (
              <PartnersPage
                onNavigate={handleNavigate}
                onOpenConsultation={() => {
                  setPrefilledService('Interior Material Partner Inquiry');
                  setConsultationOpen(true);
                }}
              />
            )}

            {currentPage === 'contact' && <ContactPage />}
          </>
        )}

        {/* ========================================================
            CONSTRUCTION EXPERIENCE (Preserving all existing components)
        ======================================================== */}
        {serviceMode === 'construction' && (
          <>
            {currentPage === 'home' && (
              <HomePage
                onNavigate={handleNavigate}
                onOpenConsultation={() => {
                  setPrefilledService('Turnkey Residential Construction');
                  setConsultationOpen(true);
                }}
                onSelectService={(service) => setSelectedService(service)}
                onSelectProject={(project) => setSelectedProject(project)}
                onSelectPricingPlan={(tierId) => {
                  setPricingInitialTierId(tierId);
                  handleNavigate('pricing');
                }}
                onSwitchToInteriors={() => handleSwitchServiceMode('interiors')}
              />
            )}

            {currentPage === 'services' && (
              <ServicesPage
                onNavigate={handleNavigate}
                onOpenConsultation={() => {
                  setPrefilledService('');
                  setConsultationOpen(true);
                }}
                onSelectService={(service) => setSelectedService(service)}
              />
            )}

            {currentPage === 'pricing' && (
              <PricingPage
                onNavigate={handleNavigate}
                initialTierId={pricingInitialTierId}
                onOpenConsultation={() => {
                  setPrefilledService('');
                  setConsultationOpen(true);
                }}
              />
            )}

            {currentPage === 'projects' && (
              <ProjectsPage
                onNavigate={handleNavigate}
                onOpenConsultation={() => {
                  setPrefilledService('');
                  setConsultationOpen(true);
                }}
                onSelectProject={(project) => setSelectedProject(project)}
              />
            )}

            {currentPage === 'about' && (
              <AboutPage
                onNavigate={handleNavigate}
                onOpenConsultation={() => {
                  setPrefilledService('');
                  setConsultationOpen(true);
                }}
              />
            )}

            {currentPage === 'partners' && (
              <PartnersPage
                onNavigate={handleNavigate}
                onOpenConsultation={() => {
                  setPrefilledService('');
                  setConsultationOpen(true);
                }}
              />
            )}

            {currentPage === 'contact' && <ContactPage />}
          </>
        )}
      </main>

      {/* Footer with Service Mode Toggle */}
      <Footer
        onNavigate={handleNavigate}
        serviceMode={serviceMode}
        onSwitchServiceMode={handleSwitchServiceMode}
        onOpenConsultation={() => {
          setPrefilledService(serviceMode === 'interiors' ? 'Turnkey Interior Design (Full Home)' : 'Turnkey Residential Construction');
          setConsultationOpen(true);
        }}
        onOpenMigrationGuide={() => setMigrationModalOpen(true)}
      />

      {/* Floating WhatsApp CTA button */}
      <WhatsAppButton />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        prefilledService={prefilledService}
      />

      {/* Service Details Specification Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onEnquire={(serviceTitle) => handleOpenConsultationWithService(serviceTitle)}
      />

      {/* Project Gallery & Specifications Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onEnquire={(projectTitle) => handleOpenConsultationWithService(`Project Inquiry: ${projectTitle}`)}
      />

      {/* WordPress 301 Migration Reference Modal */}
      <MigrationModal
        isOpen={migrationModalOpen}
        onClose={() => setMigrationModalOpen(false)}
      />
    </div>
  );
}
