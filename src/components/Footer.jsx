import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-[var(--secondary)]/20">
      <div className="max-w-7xl mx-auto">
        {/* Sección de CTA Final */}
        <div className="text-center mb-12">
          <motion.h2
            className="font-mono text-3xl md:text-4xl font-bold text-[var(--primary)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            ¿Listo para definir tu vector?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="https://calendly.com/eduardomiguelvirgilio/vectordev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-primary text-background font-bold py-3 px-8 rounded-lg font-sans mt-8 text-xl hover:bg-primary/90 transition-colors">
                Agenda tu Sesión de Descubrimiento
              </button>
            </a>
          </motion.div>
        </div>

        {/* Barra inferior */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="font-mono text-xl font-bold mb-4 md:mb-0">
            <span className="text-[var(--text)]">[</span>
            <span className="text-primary">VD</span>
            <span className="text-[var(--text)]">]</span>
            <span className="text-sm font-sans ml-4 text-[var(--text)]/70">
              © {new Date().getFullYear()} VectorDev. Todos los derechos
              reservados.
            </span>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/EduardoMVirgilio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text)]/70 hover:text-primary transition-colors"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/vectordev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text)]/70 hover:text-primary transition-colors"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
