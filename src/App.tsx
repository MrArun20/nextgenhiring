import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion';

const Home = lazy(() => import('./routes/Home').then(m => ({ default: m.Home })));
const Services = lazy(() => import('./routes/Services').then(m => ({ default: m.Services })));
const Industries = lazy(() => import('./routes/Industries').then(m => ({ default: m.Industries })));
const Jobs = lazy(() => import('./routes/Jobs').then(m => ({ default: m.Jobs })));
const Clients = lazy(() => import('./routes/Clients').then(m => ({ default: m.Clients })));
const About = lazy(() => import('./routes/About').then(m => ({ default: m.About })));
const Contact = lazy(() => import('./routes/Contact').then(m => ({ default: m.Contact })));
const Privacy = lazy(() => import('./routes/Privacy').then(m => ({ default: m.Privacy })));
const Terms = lazy(() => import('./routes/Terms').then(m => ({ default: m.Terms })));
const NotFound = lazy(() => import('./routes/NotFound').then(m => ({ default: m.NotFound })));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
  },
});

function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
        exit={prefersReducedMotion ? {} : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {/* {children} */}
         <Suspense fallback={<LoadingFallback />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal/privacy" element={<Privacy />} />
          <Route path="/legal/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-gray-400">Loading...</p>
      </div>
    </div>
  );
}

function AppContent() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />
      <main>
        <PageTransition>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/services" element={<Services />} /> */}
              <Route path="/industries" element={<Industries />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/legal/privacy" element={<Privacy />} />
              <Route path="/legal/terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </PageTransition>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AppContent />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
