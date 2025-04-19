import React from "react";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section 
        className="text-center py-20 bg-indigo-600 text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold mb-4">Plan Your Dream Vacation</h1>
        <p className="text-xl mb-6">Custom travel packages to Bali, Thailand, Europe & more</p>
        <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl hover:bg-indigo-200">
          Start Planning
        </button>
      </motion.section>

      {/* Other Sections like Destinations, Form, etc. can go here */}

      {/* Footer */}
      <footer className="bg-indigo-600 text-center py-8">
        <p>© 2025 Happlore. All rights reserved.</p>
        <p>Contact: hello@happlore.com</p>
      </footer>
    </div>
  );
}

export default App;
