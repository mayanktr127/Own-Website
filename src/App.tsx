import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useReveal } from './hooks/use-reveal';
import { ScrollToTop } from './components/common/scroll-to-top';
import { SiteNav } from './components/landing/site-nav';
import { SiteFooter } from './components/landing/sections';
import { Toaster } from 'sonner';

// Pages
import HomePage from './pages/home-page';
import ServicesPage from './pages/services-page';
import WhyUsPage from './pages/why-us-page';
import ProcessPage from './pages/process-page';
import WorkPage from './pages/work-page';
import PricingPage from './pages/pricing-page';
import FaqPage from './pages/faq-page';
import ContactPage from './pages/contact-page';

export function App() {
  // Initialize scroll reveal observer
  useReveal();

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-butter selection:text-butter-foreground">
        {/* Route change scroll-to-top handler */}
        <ScrollToTop />

        {/* Toast notifications */}
        <Toaster position="top-right" richColors />

        {/* Global Pill Navbar */}
        <SiteNav />

        {/* Dynamic Route View */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/why-us" element={<WhyUsPage />} />
            <Route path="/why" element={<WhyUsPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <SiteFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
