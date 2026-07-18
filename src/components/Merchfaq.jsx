import React, { useState } from 'react';

const faqData = [
  {
    id: 1,
    question: "How can I help?",
    answer: "Tailwind CSS is a utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup."
  },
  {
    id: 2,
    question: "What do you plan on doing with the money donated?",
    answer: "Tailwind includes built-in transition utilities (like transition-all, duration-300, and ease-in-out) that pair perfectly with React's state changes to create smooth, fluid animations."
  },
  {
    id: 3,
    question: "How do you plan on getting it?",
    answer: "Yes. It uses native <button> elements for keyboard navigation (Tab/Enter) and includes aria-expanded attributes to inform screen readers whether a section is open or closed."
  }
];

export default function FAQAccordion() {
  // Track the ID of the currently open FAQ item (null means all are closed)
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (id) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-slate-800 mb-4 text-center">
        Frequently Asked Questions
      </h2>
      <p className='text-sm font-bold text-slate-800 mb-6 text-center'>Have any questions about supporting me</p>
      
      <div className="space-y-3">
        {faqData.map((faq) => {
          const isOpen = activeIndex === faq.id;
          
          return (
            <div 
              key={faq.id} 
              className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm transition-all duration-200 hover:border-slate-300"
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left font-medium text-slate-700 bg-slate-50/50 hover:bg-slate-50 transition-colors duration-150"
                onClick={() => toggleFAQ(faq.id)}
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                    isOpen ? 'transform rotate-180 text-blue-600' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Smooth height transition wrapper */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="p-5 text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}