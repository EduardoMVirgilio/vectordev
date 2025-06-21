import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-4 pt-20">
      <div className="max-w-4xl">
        <motion.h1
          className="font-mono text-4xl md:text-7xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[var(--primary)]">Deja de Copiar Código.</span>
          <br />
          Aprende a Razonarlo.
        </motion.h1>
        <motion.p
          className="font-sans text-lg md:text-xl mt-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Programa de mentoría 1 a 1 que te enseña a pensar como un
          desarrollador senior. Transforma tu idea en un proyecto real y
          robusto, desde cero.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="https://calendly.com/eduardomiguelvirgilio/vectordev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[var(--primary)] text-[var(--background)] font-bold py-3 px-8 rounded-lg font-sans mt-8 text-xl hover:bg-[var(--primary)/90]  transition-colors">
              Define tu Ruta Ahora
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
