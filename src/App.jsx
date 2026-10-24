import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">

        {/* Navbar */}
        <nav className="bg-blue-700 px-6 py-5 text-white shadow-lg">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">

            <h2 className="text-2xl font-bold">
              My Website
            </h2>

            <div className="flex gap-6 font-medium">
              <Link
                to="/"
                className="transition hover:text-yellow-300"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="transition hover:text-yellow-300"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="transition hover:text-yellow-300"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main className="mx-auto mt-12 max-w-4xl rounded-xl bg-white p-10 shadow-md">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="mt-12 bg-gray-900 p-5 text-center text-white">
          <p>© 2026 My Website. All rights reserved.</p>
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;