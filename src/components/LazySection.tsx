import { useEffect, useRef, useState } from "react";

interface LazySectionProps {
	children: React.ReactNode;
	className?: string;
}

export default function LazySection({
	children,
	className = ""
}: LazySectionProps) {
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.unobserve(entry.target);
				}
			},
			{
				threshold: 0.1
			}
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current);
			}
		};
	}, []);

	return (
		<section
			ref={sectionRef}
			className={`transition-all duration-1000 transform ${
				isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
			} ${className}`}
		>
			{children}
		</section>
	);
}
