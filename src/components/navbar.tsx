import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";
  return (
    <nav className="w-full py-4 px-4 md:px-0 bg-transparent">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Logo aligned to the left */}
        <a href="/" className="cursor-pointer group">
          <motion.img
            src="/src/assets/PIXEL WEB.svg"
            alt="PIXEL WEB"
            className="h-5 md:h-6 ml-2 md:ml-0 transition-all duration-300 group-hover:scale-105"
            animate={{ filter: [
              "drop-shadow(0 0 12px #fff8)",
              "drop-shadow(0 0 24px #fff)",
              "drop-shadow(0 0 12px #fff8)"
            ] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </a>

        {/* Desktop Menu - Centered */}
        <div className="hidden md:flex gap-6 items-center z-10 absolute left-1/2 -translate-x-1/2">
          <a href="/" className="relative group z-10 text-white hover:text-gray-300">
            <span className="transition-all duration-300 group-hover:drop-shadow-[0_0_8px_#fff]">Home</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:drop-shadow-[0_0_8px_#fff]"></span>
          </a>
          <a href="/services" className="relative group z-10 text-white hover:text-gray-300">
            <span className="transition-all duration-300 group-hover:drop-shadow-[0_0_8px_#fff]">Services</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:drop-shadow-[0_0_8px_#fff]"></span>
          </a>
          <a href="/portfolio" className="relative group z-10 text-white hover:text-gray-300">
            <span className="transition-all duration-300 group-hover:drop-shadow-[0_0_8px_#fff]">Portefólio</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:drop-shadow-[0_0_8px_#fff]"></span>
          </a>
        </div>

        {/* Right side buttons */}
        <div className="hidden md:flex items-center gap-4 z-10">
          <div className="flex gap-2 mr-4">
            <motion.a
              href="#"
              className="cursor-pointer text-white hover:text-gray-300 transition-all duration-300 z-10"
              whileHover={{ scale: 1.08, filter: "drop-shadow(0 0 12px #fff)" }}
              animate={{ filter: [
                "drop-shadow(0 0 0px #fff)",
                "drop-shadow(0 0 8px #fff)",
                "drop-shadow(0 0 0px #fff)"
              ] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              PT
            </motion.a>
            <motion.a
              href="#"
              className="cursor-pointer text-white hover:text-gray-300 transition-all duration-300 z-10"
              whileHover={{ scale: 1.08, filter: "drop-shadow(0 0 12px #fff)" }}
              animate={{ filter: [
                "drop-shadow(0 0 0px #fff)",
                "drop-shadow(0 0 8px #fff)",
                "drop-shadow(0 0 0px #fff)"
              ] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              EN
            </motion.a>
          </div>
          <motion.a href="/contact" className="z-10" whileHover={{ scale: 1.08, filter: "drop-shadow(0 0 16px #fff)" }}>
            <Button
              variant="outline"
              className={`rounded-full border-2 transition-all duration-300 hover:scale-105 border-white bg-transparent text-white hover:bg-white hover:text-black z-10 hover:shadow-[0_0_16px_#fff] ${isContactPage ? "border-white bg-white text-black hover:bg-black hover:text-white" : ""}`}
            >
              Contacte-nos
            </Button>
          </motion.a>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          {/* Hamburger button absolutely positioned to the right */}
          <SheetTrigger className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 z-20">
            <div className="w-8 h-8 flex flex-col justify-center gap-1.5 group">
              <div className="w-full h-0.5 bg-white transition-all duration-300 group-hover:w-1/2 group-hover:drop-shadow-[0_0_8px_#fff]"></div>
              <div className="w-full h-0.5 bg-white transition-all duration-300 group-hover:drop-shadow-[0_0_8px_#fff]"></div>
              <div className="w-full h-0.5 bg-white transition-all duration-300 group-hover:w-3/4 group-hover:drop-shadow-[0_0_8px_#fff]"></div>
            </div>
          </SheetTrigger>
          <SheetContent side="right" className="w-full border-0 p-0">
            <div className="h-full w-full bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white px-4 py-8 flex flex-col relative">
              {/* Language Switch Buttons in top-left for mobile */}
              <div className="absolute left-4 top-4 flex gap-4 md:hidden z-20">
                <a
                  href="#"
                  className="cursor-pointer text-white hover:text-gray-300 transition-all duration-300 hover:drop-shadow-[0_0_8px_#fff]"
                >
                  PT
                </a>
                <a
                  href="#"
                  className="cursor-pointer text-white hover:text-gray-300 transition-all duration-300 hover:drop-shadow-[0_0_8px_#fff]"
                >
                  EN
                </a>
              </div>
              <SheetTrigger className="absolute right-4 top-4 z-20">
                <X className="h-8 w-8 stroke-1 text-white transition-all duration-300 hover:rotate-90 hover:scale-110 hover:drop-shadow-[0_0_8px_#fff]" />
              </SheetTrigger>
              <div className="mb-12"></div>
              <div className="flex-1 flex flex-col justify-center items-center gap-8 text-4xl font-light">
                <a href="/" className="relative group text-white hover:text-gray-300">
                  <span className="transition-all duration-300 group-hover:text-gray-400 group-hover:drop-shadow-[0_0_8px_#fff]">
                    Home
                  </span>
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:drop-shadow-[0_0_8px_#fff]"></span>
                </a>
                <a href="/services" className="relative group text-white hover:text-gray-300">
                  <span className="transition-all duration-300 group-hover:text-gray-400 group-hover:drop-shadow-[0_0_8px_#fff]">
                    Services
                  </span>
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:drop-shadow-[0_0_8px_#fff]"></span>
                </a>
                <a href="/portfolio" className="relative group text-white hover:text-gray-300">
                  <span className="transition-all duration-300 group-hover:text-gray-400 group-hover:drop-shadow-[0_0_8px_#fff]">
                    Portefólio
                  </span>
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:drop-shadow-[0_0_8px_#fff]"></span>
                </a>
              </div>

              <div className="mt-auto w-full">
                <a href="/contact" className="hidden md:block">
                  <Button
                    variant="outline"
                    className={`w-full rounded-full border-2 transition-all duration-300 hover:scale-[1.02] active:scale-100 text-lg py-3 border-white bg-transparent text-white hover:bg-white hover:text-black hover:shadow-[0_0_16px_#fff]`}
                  >
                    Contacte-nos
                  </Button>
                </a>

                {/* Social Icons centered for mobile */}
                <div className="flex justify-center gap-6 mt-8">
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 transition-all duration-300 text-xl hover:drop-shadow-[0_0_8px_#fff]"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 transition-all duration-300 text-xl hover:drop-shadow-[0_0_8px_#fff]"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 transition-all duration-300 text-xl hover:drop-shadow-[0_0_8px_#fff]"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
