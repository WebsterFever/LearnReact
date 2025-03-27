import { useState } from "react";

function DarkModeToggle() {
  // État initial : mode clair (false = light, true = dark)
  const [darkMode, setDarkMode] = useState(false);

  // Inverse la valeur actuelle
  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h1 className="text-3xl font-bold mb-6">
        {darkMode ? "Dark Mode 🌙" : "Light Mode ☀️"}
      </h1>

      <button
        onClick={toggleMode}
        className="px-6 py-2 rounded bg-indigo-500 text-white hover:bg-indigo-600 transition"
      >
        Toggle Mode
      </button>
    </div>
  );
}

export default DarkModeToggle;
