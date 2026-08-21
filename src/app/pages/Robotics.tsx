import { Link } from 'react-router';
import { Bot, Cpu, Wrench, FlaskConical, ArrowRight } from 'lucide-react';
import { useSEO } from '../components/useSEO';

const areas = [
  { icon: Bot, title: 'Robotics', text: 'Understanding how software and hardware work together to create intelligent machines.' },
  { icon: Cpu, title: 'Automation', text: 'Exploring how technology can perform repetitive tasks and solve practical problems.' },
  { icon: Wrench, title: 'Physical computing', text: 'Working with sensors, microcontrollers and connected devices.' },
  { icon: FlaskConical, title: 'STEM projects', text: 'Creating hands-on experiences that bring science, technology, engineering and mathematics together.' },
];

export default function Robotics() {
  useSEO({ title: 'Zarq Robotics | Robotics, STEM & Automation', description: 'Zarq Robotics is an emerging initiative exploring robotics, automation, physical computing and STEM through hands-on experimentation and learning.', path: '/robotics' });
  return <div>
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white"><div className="max-w-6xl mx-auto"><p className="text-sm font-semibold tracking-widest uppercase text-[#caf0f8] mb-4">Zarq Robotics · Explore</p><h1 className="text-4xl sm:text-6xl font-bold max-w-3xl mb-6">Beyond the screen.</h1><p className="text-lg text-gray-300 max-w-2xl">Zarq Robotics explores robotics, automation, physical computing and STEM through hands-on experimentation and learning.</p></div></section>
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white"><div className="max-w-6xl mx-auto"><div className="grid sm:grid-cols-2 gap-6">{areas.map(({icon:Icon,title,text})=><article key={title} className="p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm"><div className="w-12 h-12 rounded-xl bg-[#caf0f8] flex items-center justify-center mb-5"><Icon className="w-6 h-6 text-gray-900" /></div><h2 className="text-xl font-semibold mb-3">{title}</h2><p className="text-gray-600 leading-relaxed">{text}</p></article>)}</div></div></section>
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"><div className="max-w-3xl mx-auto text-center"><p className="text-sm uppercase tracking-widest text-gray-500 mb-3">Current status</p><h2 className="text-3xl font-bold mb-5">An emerging area of the Zarq ecosystem.</h2><p className="text-gray-600 leading-relaxed mb-8">We are developing the ideas, projects and learning experiences that will shape this initiative.</p><Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-700 transition-colors">Follow Zarq as it develops <ArrowRight className="w-4 h-4" /></Link></div></section>
  </div>;
}
