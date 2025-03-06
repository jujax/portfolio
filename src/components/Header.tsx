import { Link } from "react-router";
import { Sun, Moon, ExternalLink } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";

const menu = [
	{
		name: "Home",
		url: "/",
		external: false,
		logo: null
	},
	{
		name: "Contact",
		url: "/contact",
		external: false,
		logo: null
	},
	{
		name: "Github",
		url: "https://github.com/jujax",
		external: true,
		logo: SiGithub
	},
	{
		name: "Linkedin",
		url: "https://www.linkedin.com/in/julien-pltr/",
		external: true,
		logo: SiLinkedin
	}
];

export default function Header() {
	const { theme, toggleTheme } = useTheme();

	return (
		<header className="z-100 fixed md:top-4 left-1/2 -translate-x-1/2 w-full max-w-[800px] border-b md:border border-neutral-200 dark:border-neutral-800 md:rounded-lg bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xs">
			<nav className="px-6 h-16 flex items-center justify-between">
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
									{item.logo && <item.logo size={20} className="mr-1" />}
									<p className="hidden md:block">{item.name}</p>
									<ExternalLink size={10} className="ml-1 hidden md:block" />
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

				<button
					onClick={toggleTheme}
					className="p-2 rounded-lg border border-white/80 hover:border-neutral-200 dark:border-neutral-900/80 dark:hover:border-neutral-800 transition-colors"
					aria-label="Toggle theme"
				>
					{theme === "light" ? (
						<Moon size={20} className="text-neutral-600" />
					) : (
						<Sun size={20} className="dark:text-neutral-200" />
					)}
				</button>
			</nav>
		</header>
	);
}
