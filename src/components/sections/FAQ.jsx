import { useState } from "react";
import { faqs } from "../../data/content";
import FramedTag from "../ui/FramedTag";

function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-white/10 py-5">
      <button
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span className="font-body text-lg font-semibold sm:text-xl">{question}</span>
        <span
          aria-hidden="true"
          className={`shrink-0 text-2xl text-nitido-purple transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-200 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <p className="font-body text-white/70">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="preguntas" className="mx-auto max-w-2xl px-5 py-20 sm:px-8 sm:py-28">
      <h2 data-reveal="up" className="font-display text-5xl uppercase sm:text-6xl">Preguntas</h2>
      <FramedTag className="mt-4">Lo que debes saber.</FramedTag>

      <div data-stagger className="mt-10">
        {faqs.map((faq, i) => (
          <FaqItem
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        ))}
      </div>
    </section>
  );
}
