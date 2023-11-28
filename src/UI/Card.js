import "./Card.css";
import { motion } from "framer-motion";
function Card({ children }) {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0.005, scale: 1 }}
      animate={{ opacity: 1, scale: 1.01 }}
      transition={{
        type: "spring",
        duration: 0.8,
        delay: 0.5,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export default Card;
// [0, 0.71, 0.2, 1.01]
