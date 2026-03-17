import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Mail } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const Contact = () => {
  return (
    <div className="pt-24">
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading 
                subtitle="Connect With Us" 
                title="Get In Touch" 
              />
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Thank you for your message! We will get back to you soon.'); }}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-wider">Name</label>
                    <input required type="text" className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-accent outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-wider">Email</label>
                    <input required type="email" className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-accent outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary uppercase tracking-wider">Phone</label>
                  <input required type="tel" className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-accent outline-none transition-all" placeholder="+91 00000 00000" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary uppercase tracking-wider">Message</label>
                  <textarea required rows={4} className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-accent outline-none transition-all" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="btn-primary w-full py-4">Send Message</button>
              </form>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">Headquarters</h4>
                    <p className="text-slate-500 leading-relaxed">
                      716, Ganesh Glory, Jagatpur Road<br />
                      Gota, Ahmedabad, India
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">Email Us</h4>
                    <a href="mailto:info@qltherapeutics.com" className="text-slate-500 hover:text-accent transition-colors">
                      info@qltherapeutics.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="image-placeholder aspect-video rounded-3xl">
                Map View Placeholder
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
