import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      AboutMe
    </motion.div>
  );
};

export default AboutMe;
