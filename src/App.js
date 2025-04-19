import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="text-center py-20 bg-indigo-600 text-white">
        <img src="/images/logo.png" alt="Happlore Logo" className="mx-auto mb-8" />
        <h1 className="text-5xl font-bold mb-4">Plan Your Dream Vacation</h1>
        <p className="text-xl mb-6">Custom travel packages to Bali, Thailand, Europe & more</p>
        <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl hover:bg-indigo-200">
          Start Planning
        </button>
      </section>

      {/* Destination Section */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-8">Explore Our Destinations</h2>
        <div className="flex justify-center gap-8">
          <div>
            <img src="/images/bali.jpg" alt="Bali" className="rounded-lg" />
            <h3 className="text-2xl mt-4">Bali</h3>
          </div>
          <div>
            <img src="/images/thailand.jpg" alt="Thailand" className="rounded-lg" />
            <h3 className="text-2xl mt-4">Thailand</h3>
          </div>
          <div>
            <img src="/images/australia.jpg" alt="Australia" className="rounded-lg" />
            <h3 className="text-2xl mt-4">Australia</h3>
          </div>
        </div>
      </section>

      {/* Footer with Social Media Icons */}
      <footer className="bg-indigo-600 text-center py-8">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/facebook-icon.svg" alt="Facebook" className="h-8" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/instagram-icon.svg" alt="Instagram" className="h-8" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/twitter-icon.svg" alt="Twitter" className="h-8" />
          </a>
        </div>
        <p>© 2025 Happlore. All rights reserved.</p>
        <p>Contact: hello@happlore.com</p>
      </footer>
    </div>
  );
}

export default App;
