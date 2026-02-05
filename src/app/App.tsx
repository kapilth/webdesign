import { useState } from "react";
import { DesignOne } from "./components/design-one";
import { DesignTwo } from "./components/design-two";
import { DesignThree } from "./components/design-three";
import { FrenchCreekManor } from "./components/french-creek-manor";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [selectedDesign, setSelectedDesign] = useState<1 | 2 | 3 | 4 | null>(null);

  if (selectedDesign === 1) return <DesignOne />;
  if (selectedDesign === 2) return <DesignTwo />;
  if (selectedDesign === 3) return <DesignThree />;
  if (selectedDesign === 4) return <FrenchCreekManor />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-6">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">
            French Creek Manor
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-2">
            Website Redesign Concepts
          </p>
          <p className="text-gray-400">
            Select a design below to preview
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Design 1 - Dark & Immersive */}
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -10 }}
            onClick={() => setSelectedDesign(1)}
            className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1759730840961-09faa5731a3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMHZlbnVlJTIwYmFsbHJvb218ZW58MXx8fHwxNzcwMTIxNDY2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Design 1"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 group-hover:from-amber-900/90 group-hover:via-black/70 transition-all duration-500" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
              <div className="text-6xl mb-4">01</div>
              <h3 className="text-3xl font-serif mb-3">Dark & Immersive</h3>
              <p className="text-gray-300 text-center mb-4">
                Bold full-screen hero with dramatic black aesthetic and smooth animations
              </p>
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm text-sm">
                Click to Preview →
              </div>
            </div>
          </motion.button>

          {/* Design 2 - Clean & Modern */}
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05, y: -10 }}
            onClick={() => setSelectedDesign(2)}
            className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1738669469338-801b4e9dbccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwZWxlZ2FudCUyMGRpbm5lcnxlbnwxfHx8fDE3NzAxODU3Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Design 2"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-white/30 group-hover:from-amber-600/90 group-hover:via-amber-700/70 transition-all duration-500" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-900 group-hover:text-white transition-colors duration-500 p-6">
              <div className="text-6xl mb-4">02</div>
              <h3 className="text-3xl font-serif mb-3">Clean & Modern</h3>
              <p className="text-center mb-4">
                Elegant split-screen layout with minimal white space and sophisticated typography
              </p>
              <div className="inline-flex items-center gap-2 bg-black/10 group-hover:bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm text-sm transition-colors">
                Click to Preview →
              </div>
            </div>
          </motion.button>

          {/* Design 3 - Dynamic Carousel */}
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -10 }}
            onClick={() => setSelectedDesign(3)}
            className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1762216444919-043cf813e4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwd2VkZGluZyUyMGNlcmVtb255JTIwZ2FyZGVufGVufDF8fHx8MTc3MDE4NTcyN3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Design 3"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-gray-900/30 group-hover:from-emerald-900/90 group-hover:via-gray-900/70 transition-all duration-500" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
              <div className="text-6xl mb-4">03</div>
              <h3 className="text-3xl font-serif mb-3">Dynamic Carousel</h3>
              <p className="text-gray-200 text-center mb-4">
                Interactive full-screen slideshow showcasing multiple venues with stunning transitions
              </p>
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm text-sm">
                Click to Preview →
              </div>
            </div>
          </motion.button>
        </div>

        {/* Design 4 - French Creek Manor Redesign */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.02, y: -5 }}
            onClick={() => setSelectedDesign(4)}
            className="group relative w-full h-64 rounded-2xl overflow-hidden cursor-pointer shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1920"
              alt="French Creek Manor Redesign"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 via-amber-800/70 to-transparent group-hover:from-amber-800/95 group-hover:via-amber-700/80 transition-all duration-500" />
            <div className="absolute inset-0 flex items-center p-12">
              <div className="text-white">
                <div className="text-sm tracking-widest text-amber-200 mb-2">★ RECOMMENDED</div>
                <h3 className="text-4xl font-serif mb-3">French Creek Manor</h3>
                <p className="text-amber-100 text-lg max-w-xl mb-4">
                  Clean & Modern redesign with all-inclusive services showcase, real content from frenchcreekmanor.com
                </p>
                <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm text-sm">
                  View Full Redesign →
                </div>
              </div>
            </div>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-sm">
            💡 Each design emphasizes stunning imagery and creates curiosity to visit the venue
          </p>
        </motion.div>
      </div>
    </div>
  );
}
