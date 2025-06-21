import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 py-4 px-8 flex justify-between items-center bg-[var(--background)]/50 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="font-poppins text-2xl font-bold">
        <span className="text-[var(--primary)]">[</span>
        <span className="text-[var(--primary)]">VD</span>
        <span className="text-[var(--primary)]">]</span>
      </div>

      <motion.a
        href="https://calendly.com/eduardomiguelvirgilio/vectordev"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[var(--primary)] text-[var(--background)] font-bold py-2 px-6 rounded-lg font-sans"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Agenda tu Sesión
      </motion.a>
    </motion.nav>
  );
};

export default Navbar;
