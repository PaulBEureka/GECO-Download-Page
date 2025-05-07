import { useTheme } from "../../context/ThemeContext";
import { Moon, Sun } from "lucide-react"; 

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-14 h-8 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300"
    >
      <div
        className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300
          ${theme === "dark" ? "translate-x-6" : "translate-x-0"}
        `}
      >
        {theme === "dark" ? (
          <Moon className="text-yellow-400 w-4 h-4 m-auto mt-1" />
        ) : (
          <Sun className="text-yellow-500 w-4 h-4 m-auto mt-1" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
