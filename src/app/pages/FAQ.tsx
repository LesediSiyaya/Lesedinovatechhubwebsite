import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router';
import { useSEO } from '../components/useSEO';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How long does it take to build a website?',
    answer:
      'Most websites are delivered within 7–14 working days, depending on the complexity and how quickly we receive your content (text, images, logo). Simple landing pages can be ready in as little as 5 days. We keep you updated throughout the process.',
  },
  {
    question: 'What information do I need to provide to get started?',
    answer:
      'To kick off your project you will need to share your business name, a brief description of what you do, your preferred colors or branding, any images or a logo you have, and the services or products you want to display. We will guide you through every step.',
  },
  {
    question: 'What is the difference between a .co.za and a .com domain?',
    answer:
      '.co.za is the South African country domain — it signals to customers and search engines that your business is local. .com is international and works everywhere. For most South African businesses, .co.za builds more local trust. We can help you choose and register either.',
  },
  {
    question: 'Do I need to pay for hosting separately?',
    answer:
      'Hosting is not included in the once-off website price, but we can set it up for you as part of our service. We will recommend affordable and reliable hosting options suited to your needs and budget, and handle the technical side so you do not have to.',
  },
  {
    question: 'What documents are needed to register a business (CIPC)?',
    answer:
      'You will need a valid South African ID or passport, three proposed company names (in order of preference), the nature of your business, and the details of all directors. We handle the CIPC submission and keep you informed until your registration certificate is issued.',
  },
  {
    question: 'Do you offer payment plans or installments?',
    answer:
      'Yes — we understand that cash flow matters, especially for small businesses and startups. We can discuss a payment arrangement that works for you. Typically a deposit is required to start and the balance is due on delivery. Get in touch to talk through your options.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We are based in South Africa and serve clients nationwide. All our web design, branding, and digital strategy services are delivered remotely, so distance is not a barrier. Our community training programs currently focus on youth in rural and semi-urban areas.',
  },
  {
    question: 'How do I apply for the training programs?',
    answer:
      'Applying is simple — just reach out via our Contact page or WhatsApp us on +27 73 028 6401. Tell us which program you are interested in, your location, and a bit about yourself. There is no formal entry requirement; all you need is the willingness to learn.',
  },
  {
    question: 'Do I need any prior experience to join the programs?',
    answer:
      'No experience is needed. Our programs start from the very basics and are designed specifically for young people who are new to technology. Whether you have never touched a computer or already know a little, we have a path for you.',
  },
  {
    question: 'How can I get a quote for my project?',
    answer:
      'The quickest way is to contact us via WhatsApp (+27 73 028 6401) or email (lesnovatechub@gmail.com) with a short description of what you need. We will get back to you with a tailored quote, usually within one business day. You can also visit our Services page for our standard pricing.',
  },
];

function FAQAccordion({ item, index }: { item: FAQItem; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 sm:px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-medium text-gray-900 pr-4 text-sm sm:text-base">
          <span className="text-[#e7c6ff] font-bold mr-2">{String(index + 1).padStart(2, '0')}.</span>
          {item.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-5 sm:px-6 pb-5 bg-gray-50 border-t border-gray-100">
          <p className="text-gray-600 text-sm sm:text-base pt-4 leading-relaxed">{item.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  useSEO({ title: 'FAQs – Frequently Asked Questions', description: `Find answers to common questions about NovaTech Hub's free programs, digital services, eligibility, pricing, and how to get involved.`, path: '/faq' });

  return (
    <div>
      {/* Header */}
      <section className="pt-12 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block px-5 py-1.5 bg-gradient-to-r from-[#caf0f8] via-[#e7c6ff] to-[#ffc8dd] rounded-full mb-4">
            <span className="text-xs sm:text-sm font-medium">Got questions? We have answers</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Answers to the questions we hear most often — from both clients and students.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((item, i) => (
            <FAQAccordion key={i} item={item} index={i} />
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Still have a question?</h2>
          <p className="text-gray-600 mb-8">
            We are happy to help. Reach out directly and we will get back to you quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#ffc8dd] hover:bg-[#ffb3cd] text-gray-900 font-medium rounded-lg transition-all transform hover:scale-105 active:scale-95 touch-manipulation text-center"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/27730286401"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-all touch-manipulation text-center"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
