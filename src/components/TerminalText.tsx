import { FC, useEffect, useState } from "react";

interface TerminalTextProps {
  lines: string[];
  commandPrefix?: string;
  speed?: number;
  commandDelay?: number;
}

const TerminalText: FC<TerminalTextProps> = ({
  lines,
  commandPrefix = ">",
  speed = 50,
  commandDelay = 1000,
}) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState<number>(0);
  const [currentCharIndex, setCurrentCharIndex] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean[]>([]);

  useEffect(() => {
    if (isTyping.length !== lines.length) {
      setIsTyping([true, ...Array(lines.length - 1).fill(false)]);
    }
    if (currentLineIndex < lines.length) {
      if (currentCharIndex < lines[currentLineIndex].length) {
        // Typing characters
        const timer = setTimeout(() => {
          setDisplayedLines((prev) => {
            const newLines = [...prev];
            if (!newLines[currentLineIndex]) {
              newLines[currentLineIndex] = "";
            }
            newLines[currentLineIndex] = lines[currentLineIndex].slice(
              0,
              currentCharIndex + 1
            );
            return newLines;
          });
          setCurrentCharIndex((prev) => prev + 1);
        }, speed);

        return () => clearTimeout(timer);
      } else {
        setIsTyping((prev) => {
          const newIsTyping = [...prev];
          if (currentLineIndex < lines.length - 1) {
            newIsTyping[currentLineIndex] = false;
            newIsTyping[currentLineIndex + 1] = true;
          }
          return newIsTyping;
        });
        // Line completed, wait before starting next line
        const timer = setTimeout(() => {
          setCurrentLineIndex((prev) => prev + 1);
          setCurrentCharIndex(0);
        }, commandDelay);

        return () => clearTimeout(timer);
      }
    }
  }, [currentLineIndex, currentCharIndex, lines, speed, commandDelay]);

  return (
    <>
      {displayedLines.map((line, index) => (
        <div>
          <span className="command-prefix">{commandPrefix}</span> {line}{" "}
          {isTyping[index] && <span className="cursor">▋</span>}
        </div>
      ))}
    </>
  );
};

export default TerminalText;
