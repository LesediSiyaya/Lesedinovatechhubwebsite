import { Link } from 'react-router';
import { BookOpen, Hammer, Users, ArrowRight } from 'lucide-react';
import { useSEO } from '../components/useSEO';

const pillars = [
  { icon: BookOpen, title: 'Learn', text: 'Explore technology through accessible, practical learning experiences.' },
  { icon: Hammer, title: 'Build', text: 'Apply what you learn through projects, challenges and hands-on activities.' },
  { icon: Users, title: 'Connect', text: 'Learn alongside mentors, peers, educators and people working in technology.' },
];

export default function Hub() {
  useSEO({ title: 'Zarq Hub | Technology Learning & Community', description: 'Zarq Hub creates opportunities to learn practical technology skills, explore ideas and participate in technology.', path: '/hub' });
  return <div>
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50"><div className="max-w-6xl mx-auto"><p className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-4">Zarq Hub · Learn</p><h1 className="text-4xl sm:text-6xl font-bold max-w-3xl mb-6">Learn. Build. Connect.</h1><p className="text-lg text-gray-600 max-w-2xl">Zarq Hub creates opportunities for people to learn practical technology skills, explore new ideas and participate in technology.</p></div></section>
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white"><div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">{pillars.map(({icon:Icon,title,text})=><article key={title} className="rounded-2xl p-7 bg-gray-900 text-white"><div className="w-12 h-12 rounded-xl bg-[#e7c6ff] flex items-center justify-center mb-6"><Icon className="w-6 h-6 text-gray-900" /></div><h2 className="text-2xl font-semibold mb-3">{title}</h2><p className="text-gray-300 leading-relaxed">{text}</p></article>)}</div></section>
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white"><div className="max-w-3xl mx-auto text-center"><p className="text-sm uppercase tracking-widest text-gray-500 mb-3">Current programmes</p><h2 className="text-3xl font-bold mb-5">Practical learning, at a useful pace.</h2><p className="text-gray-600 leading-relaxed mb-8">Explore the programmes currently described by Zarq, including digital literacy, coding, cybersecurity awareness, AI fundamentals, mentorship and social media marketing.</p><Link to="/programs" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-700 transition-colors">View programmes <ArrowRight className="w-4 h-4" /></Link></div></section>
  </div>;
}
