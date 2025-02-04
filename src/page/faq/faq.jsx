import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const faqs = [
    { question: "Is the entry fee refundable?", answer: "No, the entry fee is non-refundable." },
    { question: "Can students from different colleges form a team?", answer: "Yes, students from different colleges can team up and participate together." },
    { question: "What is the registration fee?", answer: "The registration fee is ₹100 per participant." },
    { question: "How are registrations handled?", answer: "Registrations are on a first-come, first-served basis. If an event reaches full capacity, registrations will be closed." },
  ];
  

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 10 } },
  };

  return (
    <div className="min-h-screen text-white flex items-center justify-center p-6">
      <motion.div ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants} className="w-full max-w-4xl lg:max-w-6xl">
        <motion.h2
          variants={itemVariants}
          className="text-center font-bazingaItalic text-white w-full my-5 lg:text-[100px] md:text-[80px] text-[50px]"
        >
          FAQ's
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border border-white/10 rounded-lg p-4 bg-[#1d1836] text-white shadow-lg backdrop-blur-md"
              style={{
                backgroundColor: "rgba(17, 25, 40, 0.83)",
                boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
                border: "1px solid rgba(255, 255, 255, 0.125)",
                borderRadius: "6px",
              }}
            >
              <button
                className="w-full flex justify-between items-center text-lg focus:outline-none font-bazingaItalic"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 transition-transform"
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </motion.svg>
              </button>

              <motion.div
                initial={false}
                animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="mt-3 text-gray-300 font-bazingaItalic">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
