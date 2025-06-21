import { motion } from "framer-motion";
import { FaRocket, FaMapSigns, FaCogs, FaProjectDiagram } from "react-icons/fa";

const processSteps = [
  {
    icon: <FaMapSigns className="text-5xl text-[var(--secondary)]" />,
    title: "1. Punto de Origen",
    description:
      "En una sesión inicial, definimos tus metas y la idea de proyecto que te apasiona. Este es el 'qué' y el 'porqué' de tu viaje.",
  },
  {
    icon: <FaProjectDiagram className="text-5xl text-[var(--secondary)]" />,
    title: "2. Definición del Vector",
    description:
      "Diseño un plan de estudios hiper-personalizado para ti. Una hoja de ruta clara con las tecnologías y conceptos que necesitas, sin rellenos.",
  },
  {
    icon: <FaCogs className="text-5xl text-[var(--secondary)]" />,
    title: "3. La Construcción",
    description:
      "En sesiones 1 a 1 en vivo, construimos tu proyecto paso a paso. Te enseño las técnicas, resolvemos problemas y razonas cada línea de código.",
  },
  {
    icon: <FaRocket className="text-5xl text-[var(--secondary)]" />,
    title: "4. El Despliegue",
    description:
      "Llevamos tu proyecto al mundo real. Aprenderás a desplegar tu aplicación para que sea accesible, funcional y puedas mostrarla en tu portfolio.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Process = () => {
  return (
    <section className="py-20 px-4">
      <div className="text-center mb-12">
        <h2 className="font-mono text-3xl md:text-5xl font-bold">
          Tu Camino a la Maestría
        </h2>
        <p className="font-sans text-lg mt-4 max-w-3xl mx-auto">
          No es magia, es un proceso. Estructurado, metódico y enfocado en ti.
        </p>
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {processSteps.map((step) => (
          <motion.div
            key={step.title}
            className="bg-background/80 border border-[var(--secondary)]/20 p-8 rounded-lg text-center"
            variants={itemVariants}
          >
            <div className="flex justify-center mb-4">{step.icon}</div>
            <h3 className="font-mono text-2xl font-bold text-[var(--primary)] mb-2">
              {step.title}
            </h3>
            <p className="font-sans">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Process;
