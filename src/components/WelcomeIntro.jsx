import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function WelcomeIntro() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="welcome-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="chibi-container"
            initial={{ x: -250, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <motion.div
              className="speech-bubble"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              Hi, I’m Nikki 💜 <br />
              Welcome to my portfolio.
            </motion.div>

            <motion.img
              src="/chibi-nikki.png"
              alt="Chibi Nikki"
              className="chibi-img"
              animate={{ rotate: [0, -5, 5, -5, 0] }}
              transition={{ delay: 1.5, duration: 1.2 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default WelcomeIntro;