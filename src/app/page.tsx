"use client";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <main className="flex flex-col max-w-7xl w-full mx-auto">
      <h1 className="text-5xl text-black py-6">Home</h1>
    </main>
    // <motion.div
    //   className="flex flex-col max-w-7xl w-full mx-auto"
    //   initial={{ opacity: 0, y: 50 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 0.5 }}
    // >
    //   <motion.h1
    //     className="text-5xl text-black py-6"
    //     initial={{ opacity: 0, y: 50 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ delay: 0.1, duration: 0.3 }}
    //   >
    //     Home
    //   </motion.h1>
    //   {/* other content here */}
    // </motion.div>
  );
}
