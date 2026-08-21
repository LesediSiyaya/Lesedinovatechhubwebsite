import { Link } from 'react-router';
import { Code, Palette, Shield, Lightbulb, ArrowRight } from 'lucide-react';
import { useSEO } from '../components/useSEO';

const services = [
  { icon: Code, title: 'Web Development', text: 'Websites and digital experiences designed around the people who use them.' },
  { icon: Palette, title: 'UI/UX Design', text: 'Clear, intuitive interfaces that make digital products easier to understand and use.' },
  { icon: Lightbulb, title: 'AI & Automation', text: 'Practical applications of AI and automation where they can improve processes or create new possibilities.' },
  { icon: Shield, title: 'Cybersecurity', text: 'Technology-focused support for building safer digital experiences and practices.' },
];

export default function Digital() {
  useSEO({ title: 'Zarq Digital | Digital Services & Technology', description: 'Zarq Digital builds practical websites, digital experiences and technology solutions for real-world needs.', path: '/digital' });
  return <div>
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white"><div className="max-w-6xl mx-auto"><p className="text-sm font-semibold tracking-widest uppercase text-[#ffc8dd] mb-4">Zarq Digital · Build</p><h1 className="text-4xl sm:text-6xl font-bold max-w-3xl mb-6">Digital solutions for real-world needs.</h1><p className="text-lg text-gray-300 max-w-2xl">Zarq Digital helps businesses, organisations and individuals turn ideas and challenges into useful digital experiences and technology solutions.</p></div></section>
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white"><div className="max-w-6xl mx-auto"><div className="grid sm:grid-cols-2 gap-6">{services.map(({ icon: Icon, title, text }) => <article key={title} className="p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm bg-white"><div className="w-12 h-12 rounded-xl bg-[#caf0f8] flex items-center justify-center mb-5"><Icon className="w-6 h-6 text-gray-900" /></div><h2 className="text-xl font-semibold mb-3">{title}</h2><p className="text-gray-600 leading-relaxed">{text}</p></article>)}</div></div></section>
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"><div className="max-w-3xl mx-auto text-center"><p className="text-sm uppercase tracking-widest text-gray-500 mb-3">Our approach</p><h2 className="text-3xl sm:text-4xl font-bold mb-5">Understand → Design → Build → Refine</h2><p className="text-gray-600 leading-relaxed mb-8">We start by understanding the problem, then develop a practical solution rather than adding technology for its own sake.</p><Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-700 transition-colors">Tell us what you are building <ArrowRight className="w-4 h-4" /></Link></div></section>
  </div>;
}
