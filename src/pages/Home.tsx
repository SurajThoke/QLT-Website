import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronRight, Beaker, Users, ArrowRight, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';

const Home = () => {
  const { scrollYProgress, scrollY } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const videoScale = useTransform(scrollY, [0, 600], [1.15, 1]);
  const videoY = useTransform(scrollY, [0, 600], ["0%", "20%"]);

  return (
    <div>

{/* Hero Section */}
<section className="relative h-screen flex items-center overflow-hidden">

  {/* VIDEO BACKGROUND */}
  <div className="absolute inset-0 z-0 overflow-hidden">
    <motion.video
      autoPlay
      loop
      muted
      playsInline
      style={{ scale: videoScale, y: videoY }}
      className="w-full h-full object-cover"
    >
      <source src="/hero-video.mp4" type="video/mp4" />
    </motion.video>

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40 z-10" />
  </div>

  <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl"
    >
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
        The Edge of Innovation.
        <br />
        <span className="text-accent">The Heart of Care.</span>
      </h1>

      <p className="text-xl text-white/80 mb-10 max-w-xl leading-relaxed">
        Pharmaceuticals. Nutraceuticals. Contract Manufacturing.
        Serving India, Africa and regulated markets worldwide.
      </p>

      <div className="flex flex-wrap gap-4">
        <Link to="/capabilities" className="btn-accent">
          Explore Capabilities
        </Link>

        <Link
          to="/portfolio"
          className="btn-outline border-white text-white hover:bg-white hover:text-primary"
        >
          View Product Portfolio
        </Link>
      </div>
    </motion.div>
  </div>

  <motion.div
    style={{ opacity }}
    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
  >
    <ChevronRight className="rotate-90" size={32} />
  </motion.div>

</section>


{/* ABOUT SECTION */}
<section className="section-padding bg-white">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

    <motion.div
      initial={{ opacity:0, x:-30 }}
      whileInView={{ opacity:1, x:0 }}
      viewport={{ once:true }}
    >
      <SectionHeading
        subtitle="About QL Therapeutics"
        title="Building Accessible Healthcare for Emerging Markets"
      />

      <p className="text-lg text-slate-600 mb-6">
        QL Therapeutics is a purpose-driven pharmaceutical and nutraceutical
        company committed to bridging the healthcare gap in emerging markets.
      </p>

      <p className="text-lg text-slate-600 mb-8">
        Our focus spans branded generics, specialty pharmaceuticals and
        nutraceuticals supported by end-to-end product development and
        global distribution partnerships.
      </p>

      <Link to="/about" className="btn-primary inline-flex items-center gap-2">
        Learn More <ArrowRight size={18}/>
      </Link>
    </motion.div>

    {/* Image Stat Cards */}
    <div className="grid grid-cols-3 gap-6">

      <div className="group relative h-44 rounded-3xl overflow-hidden text-white flex items-end p-6">
        <img src="/products.jpg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative">
          <h3 className="text-3xl font-bold">150+</h3>
          <p className="text-sm">Products</p>
        </div>
      </div>

      <div className="group relative h-44 rounded-3xl overflow-hidden text-white flex items-end p-6">
        <img src="/global.jpg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative">
          <h3 className="text-3xl font-bold">45</h3>
          <p className="text-sm">Global Markets</p>
        </div>
      </div>

      <div className="group relative h-44 rounded-3xl overflow-hidden text-white flex items-end p-6">
        <img src="/research.jpg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative">
          <h3 className="text-3xl font-bold">5</h3>
          <p className="text-sm">R&D Hubs</p>
        </div>
      </div>

    </div>

  </div>
</section>


{/* LEADERSHIP PREVIEW */}
<section className="section-padding bg-slate-50">
  <div className="max-w-7xl mx-auto">

    <SectionHeading
      subtitle="Leadership"
      title="Experienced Healthcare Leaders"
      centered
    />

    <div className="grid md:grid-cols-2 gap-10 mt-12">

      <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
        <img src="/vineet.jpg" className="h-28 w-28 rounded-full mx-auto mb-4"/>
        <h3 className="text-xl font-bold text-primary">Vineet Shiva</h3>
        <p className="text-slate-500 text-sm">Founder & Strategic Leader</p>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
        <img src="/madhu.jpg" className="h-28 w-28 rounded-full mx-auto mb-4"/>
        <h3 className="text-xl font-bold text-primary">Madhu Swarna</h3>
        <p className="text-slate-500 text-sm">Regulatory & Compliance Expert</p>
      </div>

    </div>

    <div className="text-center mt-10">
      <Link to="/leadership" className="btn-primary">
        View Leadership Team
      </Link>
    </div>

  </div>
</section>


{/* CAPABILITIES */}
<section className="section-padding bg-primary text-white">
  <div className="max-w-7xl mx-auto text-center">

    <h2 className="text-3xl md:text-4xl font-bold mb-12">
      Core Capabilities
    </h2>

    <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

      {[
        {
          title:"Nutraceutical Manufacturing",
          desc:"Advanced production of scientifically formulated nutritional supplements.",
          icon:<Beaker/>,
          image:"/nutraceutical.jpg"
        },
        {
          title:"Pharmaceutical Collaborations",
          desc:"Strategic partnerships for drug development and global distribution.",
          icon:<Users/>,
          image:"/pharma.jpg"
        }
      ].map((item,idx)=>(
        <motion.div
          key={idx}
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{delay:idx*0.15}}
          className="group relative rounded-3xl overflow-hidden h-[320px]"
        >

          <img
            src={item.image}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

          <div className="relative p-10 flex flex-col justify-end h-full text-left">

            <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
              {item.icon}
            </div>

            <h3 className="text-2xl font-bold mb-3">
              {item.title}
            </h3>

            <p className="text-white/80 text-sm mb-4">
              {item.desc}
            </p>

            <Link to="/capabilities" className="text-accent font-semibold">
              Learn More →
            </Link>

          </div>

        </motion.div>
      ))}

    </div>

  </div>
</section>


{/* GLOBAL PRESENCE */}
<section className="section-padding bg-white text-center">
  <div className="max-w-6xl mx-auto">

    <SectionHeading
      subtitle="Global Reach"
      title="Serving Emerging Markets"
    />

    <div className="grid md:grid-cols-3 gap-10 mt-12">

      <div className="bg-slate-50 p-8 rounded-3xl">
        <h3 className="text-3xl font-bold text-primary">India</h3>
        <p className="text-slate-500">Headquarters</p>
      </div>

      <div className="bg-slate-50 p-8 rounded-3xl">
        <h3 className="text-3xl font-bold text-primary">South Africa</h3>
        <p className="text-slate-500">Regional Hub</p>
      </div>

      <div className="bg-slate-50 p-8 rounded-3xl">
        <h3 className="text-3xl font-bold text-primary">Kenya</h3>
        <p className="text-slate-500">East Africa Office</p>
      </div>

    </div>

  </div>
</section>


{/* Poshan Section */}
<section className="section-padding bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <div className="bg-emerald-50 rounded-[3rem] p-12 md:p-20 relative">

      <div className="absolute top-0 right-0 p-10 opacity-10 text-emerald-600">
        <Leaf size={200} />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <div className="inline-block px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Strategic Collaboration
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
            Poshan – Clean Nutrition for a Healthier Future
          </h2>

          <p className="text-lg text-emerald-800/70 leading-relaxed mb-6">
            QL Therapeutics proudly introduces <strong>Poshan</strong>, a homegrown
            nutrition brand from <strong>Vitalcore Solutions</strong> that focuses
            on clean, honest, and effective wellness solutions.
          </p>

          <p className="text-lg text-emerald-800/70 leading-relaxed mb-8">
            Through this collaboration, we are combining scientific expertise,
            purpose-driven innovation, and scalable manufacturing to bring
            high-quality nutritional supplementation to markets that need it
            most — starting with <strong>India and Africa</strong>.
          </p>

          <Link
            to="/portfolio"
            className="bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors shadow-lg inline-block"
          >
            Discover Poshan
          </Link>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="aspect-square rounded-3xl overflow-hidden shadow-lg"
        >
          <img
            src="/poshan-products.jpg"
            alt="Poshan Nutritional Products"
            className="w-full h-full object-cover"
          />
        </motion.div>

      </div>
    </div>
  </div>
</section>

{/* CERTIFICATIONS */}
<section className="section-padding bg-slate-50 text-center">
  <div className="max-w-7xl mx-auto">

    <SectionHeading
      subtitle="Quality Standards"
      title="Global Certifications"
    />

    <div className="grid grid-cols-3 md:grid-cols-6 gap-10 mt-12 items-center">
      <img src="/who.png"/>
      <img src="/usfda.png"/>
      <img src="/halal.png"/>
      <img src="/kosher.png"/>
      <img src="/haccp.png"/>
      <img src="/fssai.png"/>
    </div>

  </div>
</section>


{/* CTA */}
<section className="section-padding bg-slate-50">

  <div className="max-w-6xl mx-auto">

    <div className="bg-primary text-white rounded-3xl px-12 py-16 text-center shadow-2xl">

      <h2 className="text-4xl font-bold mb-6">
        Partner With QL Therapeutics
      </h2>

      <p className="text-white/80 mb-8 max-w-2xl mx-auto">
        Collaborate with us for pharmaceutical manufacturing,
        nutraceutical development, licensing and global
        healthcare distribution partnerships.
      </p>

      <Link
        to="/contact"
        className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition"
      >
        Start Collaboration
      </Link>

    </div>

  </div>

</section>
</div>
  );
};

export default Home;