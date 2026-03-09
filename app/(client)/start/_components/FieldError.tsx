import { motion, AnimatePresence } from "framer-motion";
export function FieldError({ msg }: { msg?: string }) {
  return (
    <AnimatePresence>
      {msg && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="mt-1.5 font-sans text-[12px] text-red-400"
          role="alert"
        >
          {msg}
        </motion.p>
      )}
    </AnimatePresence>
  );
}