import { motion } from "motion/react";
import { Heart, Star, Calendar, ArrowRight, MapPin, Home, Phone, Mail, Clock, Users, Camera, Music, Utensils, Wine, Cake, Car, Sparkles, PartyPopper } from "lucide-react";
import { Button } from "./ui/button";

export function FrenchCreekManor() {
  const services = [
    {
      icon: Utensils,
      title: "Catering",
      desc: "Custom catering for every occasion with all cuisines, vegetarian, non-vegetarian, and dietary options."
    },
    {
      icon: Sparkles,
      title: "Custom Decoration",
      desc: "Fully customizable décor tailored to your theme, color palette, and style."
    },
    {
      icon: Wine,
      title: "Full Service Bar",
      desc: "Fully licensed bar with cocktails, mocktails, signature drinks, and flexible packages."
    },
    {
      icon: Camera,
      title: "Photography & Video",
      desc: "Professional photography and videography to capture every special moment."
    },
    {
      icon: Music,
      title: "DJ & Music",
      desc: "Professional DJs and live music options to set the perfect mood."
    },
    {
      icon: Cake,
      title: "Sweets & Cake",
      desc: "Custom cakes and dessert selections crafted to match your theme."
    }
  ];

  const eventTypes = [
    { icon: Heart, title: "Weddings", desc: "Say 'I do' in style" },
    { icon: Calendar, title: "Anniversaries", desc: "Honor your love story" },
    { icon: PartyPopper, title: "Birthdays", desc: "Celebrate another year" },
    { icon: Users, title: "Corporate Events", desc: "Impress your team" }
  ];

  const stats = [
    { value: "4.9", label: "Star Rating" },
    { value: "450+", label: "Reviews" },
    { value: "15+", label: "Years Experience" },
    { value: "1,500+", label: "Events Hosted" }
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

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-serif text-gray-900">French Creek Manor</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-600 hover:text-amber-600 transition-colors">Home</a>
            <a href="#events" className="text-gray-600 hover:text-amber-600 transition-colors">Private Events</a>
            <a href="#services" className="text-gray-600 hover:text-amber-600 transition-colors">Services</a>
            <a href="#contact" className="text-gray-600 hover:text-amber-600 transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:360-643-9292" className="hidden sm:flex items-center gap-2 text-amber-600">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">360-643-9292</span>
            </a>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">
              Book Consult
            </Button>
          </div>
        </div>
      </nav>

      {/* Split Hero */}
      <section id="home" className="h-screen flex flex-col md:flex-row pt-16">
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
              #ALLINCLUSIVE #STRESSFREE #HASSLEFREE
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-serif mb-6 text-gray-900 leading-tight">
              Making
              <br />
              <span className="text-amber-600">Unforgettable</span>
              <br />
              Memories Together
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Rustic Charm + Modern Magic = Unforgettable Memories. Where every detail matters and every occasion is celebrated.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                Quick Consult Call <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300">
                View Our Services
              </Button>
            </div>

            <div className="flex gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Snohomish, WA</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <span>4.9 Stars • 450+ Reviews</span>
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
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1920"
            alt="French Creek Manor Wedding Venue"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/20" />
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-amber-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-amber-100 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section id="events" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-serif text-gray-900 mb-4">Every Occasion is Celebrated</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, curated just for YOU
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventTypes.map((item, index) => (
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Button size="lg" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white">
              View All Private Events <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-serif text-gray-900 mb-4">Perfect Blend</h2>
            <p className="text-xl text-gray-600">Rustic Charm + Modern Magic = Unforgettable Memories</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Main Hall */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative h-[500px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1920"
                alt="Main Hall"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <h3 className="text-4xl font-serif text-white mb-2">Main Hall</h3>
                <p className="text-xl text-gray-300 mb-4">Up to 300 guests</p>
                <Button className="bg-white text-black hover:bg-amber-600 hover:text-white">
                  Explore This Space <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>

            {/* Garden Terrace */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative h-[500px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1920"
                alt="Garden Terrace"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <h3 className="text-4xl font-serif text-white mb-2">Outdoor Garden</h3>
                <p className="text-xl text-gray-300 mb-4">Perfect for ceremonies</p>
                <Button className="bg-white text-black hover:bg-amber-600 hover:text-white">
                  Explore This Space <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All-Inclusive Services */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-sm tracking-widest text-amber-600 mb-4">ALL SERVICES UNDER ONE ROOF</div>
            <h2 className="text-5xl font-serif text-gray-900 mb-4">Fully Customized to Your Needs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For a stress-free & hassle-free celebration. You only have 2 things to do: Send the Invite & Show Up!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-neutral-50 rounded-2xl p-8 hover:shadow-xl transition-shadow group"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-600 transition-colors">
                  <service.icon className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-serif text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-500 mb-6">Plus: Hair & Makeup, Wedding Officiant, Transportation, Inflatables & More!</p>
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              View All Services <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
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
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-white" />
            ))}
          </div>
          <blockquote className="text-3xl font-serif mb-6 leading-relaxed">
            "French Creek Manor made our wedding day absolutely magical. The all-inclusive service meant we could just show up and enjoy. Every detail was perfect!"
          </blockquote>
          <p className="text-xl text-amber-100">— Happy Couple, Wedding 2025</p>
          <div className="mt-8 flex justify-center gap-4 text-amber-100">
            <span>Facebook</span>
            <span>•</span>
            <span>Google</span>
            <span>•</span>
            <span>Yelp</span>
            <span>•</span>
            <span>Wedding Wire</span>
            <span>•</span>
            <span>TheKnot</span>
          </div>
        </motion.div>
      </section>

      {/* Bring Your Own Vendors */}
      <section className="py-16 px-6 bg-neutral-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-serif text-gray-900 mb-4">Want to Bring Your Own Vendors?</h3>
            <p className="text-xl text-gray-600 mb-2">No problem—we're happy to welcome them!</p>
            <p className="text-amber-600 font-medium">Your Day, Your Choice. We offer complete flexibility to bring your vision to life.</p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-serif text-gray-900 mb-6">
              Let's Make Your Celebration SPECIAL
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Book your quick consult call today and start planning your unforgettable event
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-10 py-6">
                Quick Consult Call <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-lg px-10 py-6">
                <Phone className="mr-2 w-5 h-5" /> Call 360-643-9292
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center text-gray-500">
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>9931 167th Ave SE, Snohomish, WA 98290</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                <span>contact@frenchcreekmanor.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-2xl font-serif mb-4">French Creek Manor</h4>
              <p className="text-gray-400 text-sm">Making Unforgettable Memories Together for 15+ Years</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#home" className="hover:text-amber-500 transition-colors">Home</a></li>
                <li><a href="#events" className="hover:text-amber-500 transition-colors">Private Events</a></li>
                <li><a href="#services" className="hover:text-amber-500 transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-amber-500 transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Events</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-amber-500 transition-colors">Weddings</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Birthdays</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Corporate</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Public Events</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Connect With Us</h5>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/frenchcreekmanor" className="text-gray-400 hover:text-amber-500 transition-colors">Facebook</a>
                <a href="https://www.instagram.com/_frenchcreekmanor_/" className="text-gray-400 hover:text-amber-500 transition-colors">Instagram</a>
              </div>
              <p className="text-gray-400 text-sm mt-4">Call / Text / WhatsApp:<br />360-643-9292</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2026 French Creek Manor. All rights reserved. Creating memories since 2010.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
