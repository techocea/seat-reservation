import React, { useState } from 'react';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

function FAQ({ theme, setTheme }) {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const questions = [
    { id: 1, question: 'How can I reserve a seat in advance?', answer: 'Simply select your boarding location and destination. Thereafter check availability and select a preferred bus and mark your preferred seat.' },
    { id: 2, question: 'Can I book the seat I want?', answer: 'Yes. The seat diagram on the web is the actual seating arrangement in the bus, and you will be allocated the seat you selected.' },
    { id: 3, question: 'Can I reserve a seat from any bus operating in Sri Lanka?', answer: 'No. Only buses operated by Sri Lanka Transport Board are available for booking. Furthermore, you can only reserve highway buses.' },
    { id: 4, question: 'How do I obtain the ticket?', answer: 'An e-ticket will be sent to your email. You can show either the digital or printed ticket to board the bus.' },
    { id: 5, question: 'Can I book a seat for part of the journey?', answer: 'Yes, you can, but you will be charged for the full journey of the bus.' },
    { id: 6, question: 'Can I give my ticket to another person?', answer: 'Yes. You can hand over the ticket to another person.' },
    { id: 7, question: 'What happens if I miss the bus?', answer: 'Unfortunately, if you miss the bus, the ticket will be considered invalid, and no refunds will be issued.' },
    { id: 8, question: 'Can I cancel my reservation?', answer: 'Yes, you can cancel your reservation up to 24 hours before the departure time. A cancellation fee may apply.' },
    { id: 9, question: 'What should I do if my e-ticket doesn’t arrive?', answer: 'If your e-ticket doesn’t arrive within 30 minutes of booking, contact our support team immediately for assistance.' }
  ];

  return (
    <div className={`flex flex-col min-h-screen ${theme === 'light' ? 'bg-cyan-500' : 'bg-slate-900'}`}>
      <div className="flex-grow flex justify-center items-center">
        <div className={`w-[89%] m-auto max-w-[1400px] ${theme === 'light' ? 'bg-gray-300' : 'bg-gray-800'} p-8 rounded-lg shadow-md`}>
          <h2 className={`text-2xl mb-6 font-semibold ${theme === 'light' ? 'text-black' : 'text-white'}`}>Frequently Asked Questions</h2>
          {questions.map((q) => (
            <div key={q.id} className="mb-4 last:mb-0">
              <button
                className={`w-full text-left text-xl focus:outline-none p-4 ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-700'} rounded-lg shadow-md flex justify-between items-center`}
                onClick={() => setActiveQuestion(activeQuestion === q.id ? null : q.id)}
              >
                <span className={theme === 'light' ? 'text-black' : 'text-white'}>{q.question}</span>
                {activeQuestion === q.id ? <FaMinusCircle className={theme === 'light' ? 'text-black' : 'text-white'} /> : <FaPlusCircle className={theme === 'light' ? 'text-black' : 'text-white'} />}
              </button>
              <AnimatePresence>
                {activeQuestion === q.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`mt-2 ml-4 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}
                  >
                    <p>{q.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;