import React from "react";
import { motion } from "motion/react";
import {
  Factory,
  Microscope,
  Zap,
  ShieldCheck,
  Award,
  Beaker,
  CheckCircle2
} from "lucide-react";

import SectionHeading from "../components/SectionHeading";

const Capabilities = () => {
  return (
    <div className="pt-24">

{/* HERO */}
<section className="relative section-padding text-white text-center overflow-hidden">

<div className="absolute inset-0">
<img
src="/pharma-hero.jpg"
className="w-full h-full object-cover"
/>
<div className="absolute inset-0 bg-primary/80"></div>
</div>

<div className="relative max-w-4xl mx-auto">

<h1 className="text-4xl md:text-5xl font-bold mb-6">
Manufacturing & Strategic Capabilities
</h1>

<p className="text-white/80 text-lg leading-relaxed">
QL Therapeutics unlocks value through integrated pharmaceutical
and nutraceutical manufacturing, global partnerships,
and regulatory expertise.
</p>

</div>

</section>



{/* CORE CAPABILITIES */}
<section className="section-padding bg-white relative overflow-hidden">

<div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>

<div className="max-w-7xl mx-auto">

<div className="mb-16 text-center">

<div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-4">
Our Expertise
</div>

<h2 className="text-3xl md:text-4xl font-bold text-primary">
Core Capabilities
</h2>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

{[
{
title:"Nutraceutical Manufacturing",
desc:"Production of supplements, vitamins, herbal extracts and functional foods.",
icon:<Beaker/>
},
{
title:"Pharmaceutical Collaborations",
desc:"Manufacturing partnerships for tablets, capsules, liquids and topicals.",
icon:<Factory/>
},
{
title:"Marketing & Distribution",
desc:"B2B, B2C and D2C distribution across emerging global markets.",
icon:<Zap/>
},
{
title:"Advisory Services",
desc:"GMP advisory, dossier sourcing and manufacturing problem solving.",
icon:<ShieldCheck/>
}
].map((item,idx)=>(

<motion.div
key={idx}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{delay:idx*0.1}}
whileHover={{y:-10,scale:1.03}}
className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all"
>

<div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6 text-white">
{React.cloneElement(item.icon,{size:28})}
</div>

<h3 className="text-xl font-bold text-primary mb-4">
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



{/* WHAT SETS US APART */}
<section className="section-padding bg-slate-50">

<div className="max-w-7xl mx-auto">

<SectionHeading
subtitle="Our Edge"
title="What Sets Us Apart"
centered
/>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

{[
"World Class manufacturing facility",
"Dedicated research and development wing",
"Cutting edge manufacturing technology",
"Exclusive personal care manufacturing facility",
"WHO-GMP certified facility",
"USFDA registered",
"Dedicated diskette manufacturing line",
"300+ formulations"
].map((item,idx)=>(

<motion.div
key={idx}
initial={{opacity:0,y:20}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{delay:idx*0.05}}
whileHover={{scale:1.05}}
className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-4"
>

<div className="w-6 h-6 rounded-full bg-accent mt-1"></div>

<p className="text-primary font-semibold text-sm">
{item}
</p>

</motion.div>

))}

</div>

</div>

</section>



{/* MANUFACTURING INFRASTRUCTURE */}
<section className="section-padding bg-white">

<div className="max-w-7xl mx-auto">

<SectionHeading
subtitle="Manufacturing Infrastructure"
title="Precision Engineered Production"
/>

<div className="grid md:grid-cols-2 gap-10 mt-12">

{[
{
img:"/manufacturing-machine.jpg",
title:"Automatic Machines for Tablets & Capsules"
},
{
img:"/liquid-production.jpg",
title:"Fully Automated Syrup & Liquid Lines"
},
{
img:"/rd-lab.jpg",
title:"Qualified Formulation & R&D Team"
},
{
img:"/qa-lab.jpg",
title:"Dedicated QA & QC In-House Lab"
}
].map((item,idx)=>(

<motion.div
key={idx}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{delay:idx*0.1}}
whileHover={{scale:1.03}}
className="rounded-3xl overflow-hidden shadow-xl group"
>

<div className="overflow-hidden">

<img
src={item.img}
className="w-full h-[280px] object-cover group-hover:scale-110 transition duration-500"
/>

</div>

<p className="text-center font-semibold text-primary py-4">
{item.title}
</p>

</motion.div>

))}

</div>

</div>

</section>



{/* MANUFACTURING APPROACH */}
<section className="section-padding bg-slate-50">

<div className="max-w-6xl mx-auto">

<SectionHeading
subtitle="Quality First"
title="How We Approach Manufacturing"
/>

<p className="text-slate-600 text-lg leading-relaxed mb-10">
Quality doesn’t get added at the end of the line. It starts with sourcing,
continues through formulation and production, and finishes with testing,
packaging and documentation. Every ingredient is verified and every batch
is traceable to ensure regulatory compliance and consistent quality.
</p>

<div className="grid md:grid-cols-2 gap-6">

{[
"Every batch is fully traceable",
"Every ingredient is verified",
"Every step is recorded",
"Manufacturing meets global regulatory standards"
].map((item,idx)=>(

<div key={idx} className="flex gap-4">

<div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-white">
<CheckCircle2 size={14}/>
</div>

<p className="text-primary font-semibold">
{item}
</p>

</div>

))}

</div>

</div>

</section>



{/* PRODUCTION CAPACITY */}
<section className="section-padding bg-slate-50 relative">

<div className="max-w-6xl mx-auto">

<div className="bg-primary text-white rounded-3xl shadow-2xl px-10 py-16 text-center">

<SectionHeading
subtitle="Production Capacity"
title="Manufacturing at Scale"
/>

<div className="grid md:grid-cols-4 gap-10 mt-12">

{[
{value:"134M",label:"Tablets / Diskettes per month"},
{value:"30M",label:"Capsules per month"},
{value:"12 Tons",label:"Paste / Cream / Gel"},
{value:"350K",label:"Liquid bottles per month"}
].map((item, idx)=>(

<motion.div
key={idx}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{delay:idx*0.1}}
whileHover={{scale:1.05}}
className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10"
>

<h3 className="text-4xl font-bold text-accent mb-2">
{item.value}
</h3>

<p className="text-white/80 text-sm">
{item.label}
</p>

</motion.div>

))}

</div>

</div>

</div>

</section>

</div>
);
};

export default Capabilities;