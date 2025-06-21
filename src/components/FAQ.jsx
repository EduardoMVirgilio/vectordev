import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const faqData = [
  {
    question: "¿Necesito tener alguna experiencia previa en programación?",
    answer:
      "Absolutamente no. El programa VectorDev está diseñado desde cero para principiantes. Empezamos con los fundamentos lógicos antes de escribir la primera línea de código.",
  },
  {
    question: "¿Qué pasa si no tengo una idea para un proyecto?",
    answer:
      "No es un problema. En nuestra primera sesión, exploraremos tus intereses y pasiones para encontrar un proyecto que te motive y que sea técnicamente desafiante pero alcanzable.",
  },
  {
    question: "¿Cuál es la diferencia con un bootcamp o un curso online?",
    answer:
      "La personalización. No seguimos un temario rígido. El plan de estudios se crea para ti y tu proyecto. Es un traje a medida, no un uniforme para todos.",
  },
  {
    question: "¿Qué tecnología aprenderé?",
    answer:
      "Nos enfocaremos en stacks modernos y demandados como MERN (MongoDB, Express, React, Node.js) o RILT (React, Inertia, Laravel, Tailwind). La elección dependerá de los requerimientos de tu proyecto personal.",
  },
  {
    question: "¿Y si me quedo atascado entre sesiones?",
    answer:
      "Tendrás acceso a un canal de comunicación directo (vía Discord) para resolver dudas puntuales. Nunca estarás completamente solo en tu aprendizaje.",
  },
];

const AccordionItem = ({ item, index, activeIndex, setActiveIndex }) => {
  const isOpen = index === activeIndex;

  return (
    <div className="border-b border-[var(--secondary)]/20">
      <button
        className="w-full text-left py-6 flex justify-between items-center"
        onClick={() => setActiveIndex(isOpen ? null : index)}
      >
        <span className="font-mono text-xl text-[var(--text)]">
          {item.question}
        </span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <FiChevronDown className="w-6 h-6 text-[var(--secondary)]" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <p className="font-sans text-base pb-6 pr-8 text-[var(--secondary)]">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-mono text-3xl md:text-5xl font-bold text-[var(--primary)]">
            Preguntas Frecuentes
          </h2>
          <p className="font-sans text-lg mt-4 text-[var(--secondary)]">
            Aclarando tus dudas para que tomes la mejor dirección.
          </p>
        </div>
        <div>
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
