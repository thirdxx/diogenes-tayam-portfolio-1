import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
  ];

  // Map labels to actual section IDs on the home page
  const resolveSectionId = (label: string) => {
    const map: Record<string, string> = {
      home: "hero", // Home should scroll to the hero section
      about: "about",
      projects: "projects",
      skills: "skills",
      contact: "contact",
    };
    return map[label.toLowerCase()] || label.toLowerCase();
  };

  const scrollToSection = (sectionId: string) => {
    // Close mobile menu immediately
    setIsMobileMenuOpen(false);

    const scrollToElement = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return true; // Success
      }
      return false; // Failed
    };

    // Try immediately first
    if (!scrollToElement()) {
      // If element not found, try again after a short delay
      let retryCount = 0;
      const maxRetries = 10;

      const retryScroll = () => {
        if (retryCount < maxRetries && !scrollToElement()) {
          retryCount++;
          setTimeout(retryScroll, 100);
        }
      };
      setTimeout(retryScroll, 100);
    }
  };

  // Smooth-scroll when navigating to hash (works for both desktop & mobile)
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = decodeURIComponent(location.hash.slice(1));
      // Delay to ensure target section is rendered
      const scrollToHash = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          setIsMobileMenuOpen(false);
        } else {
          // Try again in 100ms
          setTimeout(scrollToHash, 100);
        }
      };
      scrollToHash();
    }
  }, [location.pathname, location.hash]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-medium backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0"
          >
            <Link
              to="/"
              className="text-2xl font-bold gradient-text hover:scale-105 transition-transform"
              onClick={(e) => {
                if (location.pathname === "/") {
                  e.preventDefault();
                  scrollToSection("hero");
                }
              }}
            >
              DT
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    to={`/#${resolveSectionId(item.label)}`}
                    className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-accent/10"
                    onClick={(e) => {
                      const targetId = resolveSectionId(item.label);
                      if (location.pathname === "/") {
                        e.preventDefault();
                        scrollToSection(targetId);
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="transition-transform hover:scale-110"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="transition-transform hover:scale-110"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass rounded-lg mt-2">
                {navItems.map((item) => (
                  <div key={item.href}>
                    <button
                      className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-accent/10 w-full text-left"
                      onClick={() => {
                        const targetId = resolveSectionId(item.label);

                        console.log(
                          `Mobile nav clicked: ${item.label} -> ${targetId}`
                        );

                        // Close mobile menu immediately
                        setIsMobileMenuOpen(false);

                        const scrollToTarget = () => {
                          const element = document.getElementById(targetId);
                          console.log(
                            `Looking for element: ${targetId}`,
                            element
                          );
                          if (element) {
                            console.log(`Scrolling to: ${targetId}`);
                            element.scrollIntoView({ behavior: "smooth" });
                          } else {
                            console.log(
                              `Element not found: ${targetId}, retrying...`
                            );
                            // Retry after a short delay
                            setTimeout(scrollToTarget, 100);
                          }
                        };

                        if (location.pathname !== "/") {
                          console.log("Navigating to home page first");
                          // Navigate to home page first
                          navigate("/");
                          // Wait for navigation, then scroll
                          setTimeout(scrollToTarget, 300);
                        } else {
                          console.log(
                            "Already on home page, scrolling directly"
                          );
                          // Already on home page, just scroll
                          setTimeout(scrollToTarget, 100);
                        }
                      }}
                    >
                      {item.label}
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
