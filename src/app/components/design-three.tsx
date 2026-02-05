import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Calendar, Phone, Mail, MapPin, Home } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function DesignThree() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1759730840961-09faa5731a3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMHZlbnVlJTIwYmFsbHJvb218ZW58MXx8fHwxNzcwMTIxNDY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Grand Ballroom",
      subtitle: "Timeless elegance for your special day"
    },
    {
      image: "https://images.unsplash.com/photo-1762216444919-043cf813e4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwd2VkZGluZyUyMGNlcmVtb255JTIwZ2FyZGVufGVufDF8fHx8MTc3MDE4NTcyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Garden Ceremony",
      subtitle: "Nature's beauty as your backdrop"
    },
    {
      image: "https://images.unsplash.com/photo-1738669469338-801b4e9dbccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwZWxlZ2FudCUyMGRpbm5lcnxlbnwxfHx8fDE3NzAxODU3Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Reception Hall",
      subtitle: "Dine in sophisticated splendor"
    },
    {
      image: "https://images.unsplash.com/photo-1761120789207-c08a10afb864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMHZlbnVlJTIwY2hhbmRlbGllcnxlbnwxfHx8fDE3NzAxODU3Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Chandelier Lounge",
      subtitle: "Intimate moments, grand atmosphere"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="min-h-screen bg-zinc-900">
      {/* Back to Selector Button */}
      <a
        href="/"
        className="fixed top-4 left-4 z-[100] bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white flex items-center gap-2 transition-all"
      >
        <Home className="w-4 h-4" />
        <span className="text-sm">Back to Designs</span>
      </a>

      {/* Floating Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/95 backdrop-blur-md px-8 py-4 rounded-full shadow-2xl"
      >
        <div className="flex items-center gap-8">
          <span className="font-serif text-xl text-gray-900">French Creek Manor</span>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#venues" className="text-gray-700 hover:text-amber-600 transition-colors">Venues</a>
            <a href="#events" className="text-gray-700 hover:text-amber-600 transition-colors">Events</a>
            <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">Contact</a>
            <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
              Book Tour
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Carousel */}
      <section className="relative h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        </AnimatePresence>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-6">
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-7xl md:text-9xl font-serif mb-6">
              {slides[currentSlide].title}
            </h1>
            <p className="text-2xl md:text-3xl text-gray-200 mb-12">
              {slides[currentSlide].subtitle}
            </p>
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-10 py-6">
              Explore This Space
            </Button>
          </motion.div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-amber-600 w-12' : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Featured Events */}
      <section id="events" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl font-serif text-gray-900 mb-6">
              Your Celebration, Your Way
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              From intimate gatherings to grand galas, we bring your vision to life with unparalleled elegance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Weddings",
                desc: "Create the wedding of your dreams in our breathtaking spaces",
                image: "https://images.unsplash.com/photo-1759519238029-689e99c6d19e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVudCUyMHZlbnVlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwMTg1NzI3fDA&ixlib=rb-4.1.0&q=80&w=1080"
              },
              {
                title: "Anniversaries",
                desc: "Celebrate your love story with elegance and sophistication",
                image: "https://images.unsplash.com/photo-1765615201909-d3f3a456ae88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWxlYnJhdGlvbiUyMHZlbnVlJTIwb3V0ZG9vcnxlbnwxfHx8fDE3NzAxODU3Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              },
              {
                title: "Milestones",
                desc: "Mark life's achievements in unforgettable style",
                image: "https://images.unsplash.com/photo-1738669469338-801b4e9dbccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwZWxlZ2FudCUyMGRpbm5lcnxlbnwxfHx8fDE3NzAxODU3Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
              }
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl font-serif text-white mb-2">{event.title}</h3>
                  </div>
                </div>
                <p className="text-lg text-gray-600">{event.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-amber-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            {[
              { number: "2500+", label: "Events Hosted" },
              { number: "300", label: "Guest Capacity" },
              { number: "25+", label: "Years Experience" },
              { number: "5★", label: "Average Rating" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-6xl font-serif mb-3">{stat.number}</div>
                <div className="text-xl text-amber-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-32 px-6 bg-zinc-900 text-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-6xl font-serif mb-8">
              Let's Start Planning Your
              <br />
              <span className="text-amber-400">Perfect Event</span>
            </h2>
            <p className="text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
              Schedule a private tour and discover why French Creek Manor is the venue where memories are made
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-10 py-7">
                <Calendar className="mr-3 w-6 h-6" />
                Schedule a Tour
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black text-lg px-10 py-7">
                <Phone className="mr-3 w-6 h-6" />
                Call Us Now
              </Button>
            </div>

            <div className="flex flex-col md:flex-row gap-8 justify-center items-center text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>events@frenchcreekmanor.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>French Creek, PA</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-3xl font-serif mb-2">French Creek Manor</h3>
              <p className="text-gray-400">Where every celebration becomes a cherished memory</p>
            </div>
            <div className="flex gap-6 text-gray-400">
              <a href="#" className="hover:text-amber-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Sitemap</a>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500">
            <p>© 2026 French Creek Manor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}