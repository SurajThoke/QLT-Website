import React from "react";
import { motion } from "motion/react";
import {
  Users,
  Globe,
  TrendingUp,
  CheckCircle2,
  Factory,
  FlaskConical
} from "lucide-react";

import SectionHeading from "../components/SectionHeading";
import StatCard from "../components/StatCard";

const About = () => {
  return (
    <div className="pt-24">

      {/* HERO VIDEO */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">

        <div className="absolute inset-0">

          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/about-hero.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/60"></div>

        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center text-white px-6">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Building Accessible Healthcare
          </motion.h1>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Delivering innovative pharmaceutical and nutraceutical solutions
            for emerging markets worldwide.
          </p>

        </div>

      </section>



      {/* ABOUT OVERVIEW */}
      <section className="section-padding bg-white">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >

              <SectionHeading
                subtitle="About QL Therapeutics"
                title="Building Accessible Healthcare for Emerging Markets"
              />

              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                QL Therapeutics was founded with a mission to bridge the healthcare
                gap in emerging markets by delivering accessible and high-quality
                pharmaceutical and nutraceutical solutions.
              </p>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Built by experienced leaders with decades of expertise in
                manufacturing, supply chain, regulatory affairs and global
                business development, QLT combines strategic partnerships,
                regulatory excellence and deep market insights.
              </p>

              <div className="grid grid-cols-2 gap-6">

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="font-semibold text-primary">
                    Global Partnerships
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="font-semibold text-primary">
                    Regulatory Expertise
                  </span>
                </div>

              </div>

            </motion.div>


            {/* STATS */}
            <div className="grid grid-cols-3 gap-6">

              <StatCard number="150" label="Products" suffix="+" />
              <StatCard number="45" label="Global Markets" />
              <StatCard number="5" label="R&D Hubs" />

            </div>

          </div>

        </div>

      </section>



      {/* IMAGE STORY */}
      <section className="section-padding bg-slate-50">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-3xl overflow-hidden shadow-lg"
          >
            <img src="/lab.jpg" className="w-full h-[320px] object-cover" />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-3xl overflow-hidden shadow-lg"
          >
            <img
              src="/manufacturing.jpg"
              className="w-full h-[320px] object-cover"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-3xl overflow-hidden shadow-lg"
          >
            <img src="/global.jpg" className="w-full h-[320px] object-cover" />
          </motion.div>

        </div>

      </section>



      {/* WHO WE ARE */}
      <section className="section-padding bg-white">

        <div className="max-w-6xl mx-auto text-center">

          <SectionHeading
            subtitle="Who We Are"
            title="Built by Healthcare Professionals"
          />

          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            QLT was started by professionals who have spent decades working
            within the healthcare industry — not just discussing it but
            building, manufacturing, distributing and scaling healthcare
            businesses globally.
          </p>

        </div>

      </section>


{/* JOURNEY TIMELINE */}
<section className="section-padding bg-slate-50 relative overflow-hidden">

{/* background glow */}
<div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-10 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>

<div className="max-w-6xl mx-auto relative">

<SectionHeading
subtitle="Our Journey"
title="Building Healthcare Access"
/>

<div className="mt-24 relative">

{/* timeline line */}
<div className="absolute left-1/2 top-0 bottom-0 w-[4px] bg-gradient-to-b from-primary via-accent to-primary -translate-x-1/2"></div>

<div className="space-y-24">

{[
{
year: "Foundation",
title: "QL Therapeutics Established",
desc: "Founded by experienced pharma professionals with decades of global healthcare experience.",
icon: "🏥"
},
{
year: "Expansion",
title: "Global Partnerships",
desc: "Building a network of manufacturers, distributors and regulatory partners.",
icon: "🌍"
},
{
year: "Innovation",
title: "Nutraceutical Development",
desc: "Development of nutraceutical products supporting preventive healthcare.",
icon: "🧪"
},
{
year: "Growth",
title: "Launch of Poshan Brand",
desc: "Launch of Poshan — a plant-based nutrition brand focused on clean wellness.",
icon: "🌿"
}
].map((item, idx) => (

<motion.div
key={idx}
initial={{ opacity: 0, y: 60 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6, delay: idx * 0.2 }}
className={`flex items-center ${
idx % 2 === 0 ? "justify-start" : "justify-end"
}`}
>

{/* timeline node */}
<div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">

<div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center shadow-lg border-4 border-white">
<span className="text-lg">{item.icon}</span>
</div>

</div>

{/* timeline card */}
<motion.div
whileHover={{ y: -10, scale: 1.03 }}
className="w-[45%] bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl border border-slate-100 transition-all duration-300"
>

{/* year badge */}
<div className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-3">
{item.year}
</div>

<h3 className="text-xl font-bold text-primary mb-3">
{item.title}
</h3>

<p className="text-slate-600 text-sm leading-relaxed">
{item.desc}
</p>

</motion.div>

</motion.div>

))}

</div>

</div>

</div>

</section>



      {/* PURPOSE / VISION / MISSION */}
      <section className="section-padding bg-white">

        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Purpose",
                content:
                  "Patients first — delivering trusted healthcare solutions to improve lives across emerging markets.",
                icon: <Users className="text-accent" size={32} />
              },

              {
                title: "Vision",
                content:
                  "To become a trusted global healthcare partner delivering innovative pharmaceutical and nutraceutical solutions.",
                icon: <Globe className="text-accent" size={32} />
              },

              {
                title: "Mission",
                content:
                  "To empower health and well-being through end-to-end healthcare solutions and strategic partnerships.",
                icon: <TrendingUp className="text-accent" size={32} />
              }
            ].map((item, idx) => (

              <motion.div
                key={item.title}
                whileHover={{ y: -10, scale: 1.03 }}
                className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl border border-slate-100 transition-all"
              >

                <div className="mb-6">{item.icon}</div>

                <h3 className="text-2xl font-bold text-primary mb-4">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {item.content}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>



      {/* BUSINESS DIVISIONS */}
      <section className="section-padding bg-slate-50">

        <div className="max-w-7xl mx-auto">

          <SectionHeading
            subtitle="Our Businesses"
            title="Healthcare Across the Value Chain"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "Pharmaceuticals",
                desc:
                  "Manufacturing tablets, capsules, liquids and topicals to GMP standards.",
                icon: <Factory size={28} />
              },

              {
                title: "Contract Manufacturing",
                desc:
                  "End-to-end production support from formulation to export documentation.",
                icon: <Factory size={28} />
              },

              {
                title: "Dossier Licensing",
                desc:
                  "Access to regulatory dossiers enabling faster market entry.",
                icon: <FlaskConical size={28} />
              },

              {
                title: "Nutraceuticals",
                desc:
                  "Supplements, vitamins, herbal extracts and functional foods.",
                icon: <FlaskConical size={28} />
              },

              {
                title: "Contract Development",
                desc:
                  "Custom formulation services for nutrition brands.",
                icon: <FlaskConical size={28} />
              },

              {
                title: "Poshan Brand",
                desc:
                  "QLT's proprietary plant-based nutrition brand.",
                icon: <FlaskConical size={28} />
              }
            ].map((item, idx) => (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-md"
              >

                <div className="mb-4 text-primary">{item.icon}</div>

                <h3 className="text-xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
                 
              </motion.div>

            ))}

          </div>
          
        </div>

      </section>
      

    </div>
  );
};

export default About;