import { motion } from "motion/react";
import { Calendar, Users, Sparkles, ArrowRight, Phone, Mail, Home } from "lucide-react";
import { Button } from "./ui/button";

export function DesignOne() {
  const events = [
    { icon: Sparkles, title: "Weddings", description: "Your dream day awaits" },
    { icon: Calendar, title: "Anniversaries", description: "Celebrate your milestones" },
    { icon: Users, title: "Corporate Events", description: "Impress your guests" },
    { icon: Sparkles, title: "Celebrations", description: "Every moment matters" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back to Selector Button */}
      <a
        href="/"
        className="fixed top-4 left-4 z-[100] bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white flex items-center gap-2 transition-all"
      >
        <Home className="w-4 h-4" />
        <span className="text-sm">Back to Designs</span>
      </a>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-serif tracking-wider"
          >
            FRENCH CREEK MANOR
          </motion.div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#venues" className="hover:text-amber-400 transition-colors">Venues</a>
            <a href="#events" className="hover:text-amber-400 transition-colors">Events</a>
            <a href="#gallery" className="hover:text-amber-400 transition-colors">Gallery</a>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">
              Book a Tour
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section - Full Screen Immersive */}
      <section className="relative h-screen overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1759730840961-09faa5731a3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMHZlbnVlJTIwYmFsbHJvb218ZW58MXx8fHwxNzcwMTIxNDY2fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Elegant venue"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </motion.div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-serif mb-6 tracking-wide">
              Where Dreams
              <br />
              <span className="text-amber-400">Come Alive</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
              An extraordinary venue for life's most memorable moments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-8 py-6">
                Explore Our Venue <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6">
                View Gallery
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-serif mb-4">Perfect For Every Occasion</h2>
            <p className="text-xl text-gray-400">Create unforgettable memories in our stunning spaces</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 hover:border-amber-600 transition-all cursor-pointer group"
              >
                <event.icon className="w-12 h-12 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-serif mb-2">{event.title}</h3>
                <p className="text-gray-400">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-serif mb-4">Experience the Beauty</h2>
            <p className="text-xl text-gray-400">A glimpse into our magnificent spaces</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "https://images.unsplash.com/photo-1762216444919-043cf813e4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwd2VkZGluZyUyMGNlcmVtb255JTIwZ2FyZGVufGVufDF8fHx8MTc3MDE4NTcyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
              "https://images.unsplash.com/photo-1759519238029-689e99c6d19e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVudCUyMHZlbnVlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwMTg1NzI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
              "https://images.unsplash.com/photo-1738669469338-801b4e9dbccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwZWxlZ2FudCUyMGRpbm5lcnxlbnwxfHx8fDE3NzAxODU3Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
              "https://images.unsplash.com/photo-1761120789207-c08a10afb864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMHZlbnVlJTIwY2hhbmRlbGllcnxlbnwxfHx8fDE3NzAxODU3Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative h-96 overflow-hidden rounded-lg group cursor-pointer"
              >
                <img src={img} alt={`Venue ${index + 1}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-amber-950 to-black">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl font-serif mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a private tour and discover why French Creek Manor is the perfect venue for your celebration
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6">
              <Phone className="mr-2" /> Call Us Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6">
              <Mail className="mr-2" /> Send Inquiry
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-800 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p className="text-2xl font-serif text-white mb-4">FRENCH CREEK MANOR</p>
          <p>© 2026 French Creek Manor. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}