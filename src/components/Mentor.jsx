import { motion } from "framer-motion";

const Mentor = () => {
  return (
    <section className="py-20 px-4 bg-[var(--background)]/80">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <motion.div
          className="md:col-span-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/logo.png"
            alt="Tu Nombre, Mentor en VectorDev"
            className="w-48 h-48 md:w-64 md:h-64 object-contain"
          />
        </motion.div>
        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-mono text-3xl md:text-4xl font-bold">
            Tu Guía en el Camino
          </h2>
          <p className="font-sans text-lg mt-4">
            Soy Eduardo Miguel Virgilio, desarrollador Full-Stack con más de 7
            años de experiencia construyendo y lanzando proyectos reales para
            clientes con stacks como MERN y RILT.
          </p>
          <p className="font-sans text-lg mt-4">
            Mi misión no es darte recetas de código. Es enseñarte las técnicas y
            el proceso de razonamiento que yo mismo uso cada día. Te guiaré para
            que pases de ser un espectador de tutoriales a un creador de
            tecnología.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Mentor;
