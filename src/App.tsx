import AboutSection from "./components/AboutSection";
import ErrorBoundary from "./components/ErrorBoundary";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useTheme } from "./hooks/useTheme";
import Home from "./pages/Home";

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <ErrorBoundary>
      <a
        href="#map"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-on-accent"
      >
        Skip to the map
      </a>

      <div className="flex min-h-screen flex-col">
        <Navbar theme={theme} onToggleTheme={toggle} />
        <main className="grow">
          <Home theme={theme} />
          <AboutSection />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
