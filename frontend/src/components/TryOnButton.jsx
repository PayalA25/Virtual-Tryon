import { motion } from "framer-motion";

function TryOnButton({ generateTryOn, loading }) {

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={generateTryOn}
      disabled={loading}
      className="mt-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-xl shadow-lg"
    >
      {loading ? "Generating AI Outfit..." : "✨ Try Outfit"}
    </motion.button>
  );
}

export default TryOnButton;