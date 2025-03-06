import React, { createContext, useContext, useState, useEffect } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
	theme: Theme;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<Theme>(() => {
		// Récupérer le thème depuis localStorage lors de l'initialisation
		const savedTheme = localStorage.getItem("theme");

		// Si une préférence existe, l'utiliser
		if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
			return savedTheme;
		}

		// Sinon, détecter la préférence du système
		if (
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches
		) {
			return "dark";
		}

		return "light";
	});

	// Appliquer le thème au document
	useEffect(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
		// Sauvegarder dans localStorage à chaque changement
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
}
