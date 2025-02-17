import { ExternalLink } from "lucide-react";
import { Link } from "react-router";
// import { useTheme } from "../contexts/ThemeContext";

const menu = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Contact",
    url: "/contact",
  },
  {
    name: "CV",
    url: "https://github.com/jujax/cv/blob/main/README.md",
    external: true,
  },
];

export default function Header() {
  // const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed w-full border border-neutral-200 dark:border-neutral-800 bg-[#00ff00] color-black backdrop-blur-sm">
      <nav className="px-6 h-8 flex items-center justify-between">
        <ul className="h-full flex items-center justify-center gap-6">
          {menu.map((item) => (
            <li key={item.name}>
              {item.external ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors text-sm font-medium flex items-center"
                >
                  {item.name}
                  <ExternalLink size={16} className="ml-1" />
                </a>
              ) : (
                <Link
                  to={item.url}
                  className="text-neutral-600 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors text-sm font-medium flex items-center"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
        {/* <button
          onClick={toggleTheme}
          className="p-2 rounded-lg neutral-600 dark:neutral-200 hover:bg-gray-400 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <Moon
              size={20}
              className="text-neutral-600 dark:text-neutral-400"
            />
          ) : (
            <Sun size={20} className="text-neutral-600 dark:text-neutral-400" />
          )}
        </button> */}
      </nav>
    </header>
  );
}
