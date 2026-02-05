import { motion } from "motion/react";
import { Heart, Star, Calendar, ArrowRight, MapPin, Home } from "lucide-react";
import { Button } from "./ui/button";

export function DesignTwo() {
  const venues = [
    {
      title: "Grand Ballroom",
      capacity: "Up to 300 guests",
      image: "https://images.unsplash.com/photo-1759730840961-09faa5731a3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMHZlbnVlJTIwYmFsbHJvb218ZW58MXx8fHwxNzcwMTIxNDY2fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Garden Terrace",
      capacity: "Up to 150 guests",
      image: "https://images.unsplash.com/photo-1762216444919-043cf813e4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwd2VkZGluZyUyMGNlcmVtb255JTIwZ2FyZGVufGVufDF8fHx8MTc3MDE4NTcyN3ww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Intimate Lounge",
      capacity: "Up to 50 guests",
      image: "https://images.unsplash.com/photo-1759519238029-689e99c6d19e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVudCUyMHZlbnVlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwMTg1NzI3fDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Back to Selector Button */}
      <a
        href="/"
        className="fixed top-4 left-4 z-[100] bg-gray-900/90 hover:bg-gray-900 backdrop-blur-md px-4 py-2 rounded-full text-white flex items-center gap-2 transition-all shadow-lg"
      >
        <Home className="w-4 h-4" />
        <span className="text-sm">Back to Designs</span>
      </a>

      {/* Split Hero */}
      <section className="h-screen flex flex-col md:flex-row">
        {/* Left Side - Content */}
        <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8 md:p-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm tracking-widest text-amber-600 mb-4"
            >
              PREMIER EVENT VENUE
            </motion.div>
            
            <h1 className="text-6xl md:text-7xl font-serif mb-6 text-gray-900 leading-tight">
              French Creek
              <br />
              <span className="text-amber-600">Manor</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Where elegance meets celebration. Host your wedding, anniversary, or milestone event in our breathtaking venues designed to make every moment unforgettable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                Schedule a Visit <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300">
                View Our Spaces
              </Button>
            </div>

            <div className="flex gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Pennsylvania</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <span>5-Star Rated</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 relative overflow-hidden"
        >
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1738669469338-801b4e9dbccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwZWxlZ2FudCUyMGRpbm5lcnxlbnwxfHx8fDE3NzAxODU3Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Elegant venue"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/20" />
        </motion.div>
      </section>

      {/* Event Types */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-serif text-gray-900 mb-4">Celebrate Life's Moments</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, our venue adapts to your vision
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: "Weddings", desc: "Say 'I do' in style" },
              { icon: Calendar, title: "Anniversaries", desc: "Honor your love story" },
              { icon: Star, title: "Milestones", desc: "Mark life's achievements" },
              { icon: Heart, title: "Graduations", desc: "Celebrate success" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group cursor-pointer"
              >
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-600 transition-colors">
                  <item.icon className="w-10 h-10 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-serif text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Venues Showcase */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-serif text-gray-900 mb-4">Our Stunning Spaces</h2>
            <p className="text-xl text-gray-600">Three distinctive venues, endless possibilities</p>
          </motion.div>

          <div className="space-y-8">
            {venues.map((venue, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative h-96 rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
              >
                <img
                  src={venue.image}
                  alt={venue.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    <h3 className="text-4xl font-serif text-white mb-2">{venue.title}</h3>
                    <p className="text-xl text-gray-300 mb-4">{venue.capacity}</p>
                    <Button className="bg-white text-black hover:bg-amber-600 hover:text-white">
                      Explore This Space <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-6 bg-amber-600">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <Star className="w-12 h-12 fill-white mx-auto mb-6" />
          <blockquote className="text-3xl font-serif mb-6 leading-relaxed">
            "French Creek Manor made our wedding day absolutely magical. The venue is stunning, and every detail was perfect."
          </blockquote>
          <p className="text-xl">— Sarah & Michael</p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-serif text-gray-900 mb-6">
              Let's Create Something Beautiful Together
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Book your private tour today and see why couples choose French Creek Manor
            </p>
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-10 py-6">
              Get in Touch <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-2xl font-serif mb-4">FRENCH CREEK MANOR</p>
          <p className="text-gray-400">© 2026 French Creek Manor. Creating memories since 1995.</p>
        </div>
      </footer>
    </div>
  );
}