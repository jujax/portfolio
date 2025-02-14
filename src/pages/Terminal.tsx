import TerminalText from "../component/TerminalText";

export default function Terminal() {
    const lines = [
      "Initialisation du système...",
      "Chargement du portfolio...",
      "Bonjour, je suis [Ton Nom]",
      "Développeur Web Full Stack",
      "Bienvenue sur mon portfolio !",
    ];
  
    return (
      <div>
        <TerminalText 
          lines={lines}
          speed={10}
          commandDelay={500}
          commandPrefix="$"
        />
      </div>
    );
  }