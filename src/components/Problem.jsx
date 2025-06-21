import { motion } from "framer-motion";
import { FiXCircle } from "react-icons/fi";

const painPoints = [
  "¿Saltas de un tutorial a otro sin un rumbo claro?",
  "¿Tienes docenas de proyectos a medio terminar en tu disco duro?",
  "¿Entiendes la sintaxis pero te bloqueas al empezar tu propia idea?",
  "¿Sientes que hay un abismo entre 'Hello World' y una aplicación real?",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const Problem = () => {
  return (
    <section className="py-20 px-4 bg-[var(--background)]/80">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="font-mono text-3xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          El caos del autoaprendizaje
        </motion.h2>
        <motion.p
          className="font-sans text-lg mt-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Si te identificas con esto, no estás solo. Es el resultado de aprender
          sin una dirección clara.
        </motion.p>

        <motion.ul
          className="mt-12 space-y-4 text-left max-w-2xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {painPoints.map((point, index) => (
            <motion.li
              key={index}
              className="flex items-start"
              variants={itemVariants}
            >
              <FiXCircle className="text-[var(--primary)] w-6 h-6 mr-4 mt-1 flex-shrink-0" />
              <span className="font-sans text-lg">{point}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Problem;
