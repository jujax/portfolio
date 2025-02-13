import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-8">Contact</h1>
      <p className="text-xl mb-6">You can contact me by:</p>
      
      <div className="flex flex-col space-y-4">
        <a 
          href="mailto:contact.device518@aleeas.com"
          className="flex items-center space-x-3 text-lg hover:text-blue-500 transition-colors"
        >
          <Mail className="w-6 h-6" />
          <span>Email</span>
        </a>

        <a 
          href="https://www.linkedin.com/in/julien-pltr/"
          className="flex items-center space-x-3 text-lg hover:text-linkedin transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-6 h-6" />
          <span>LinkedIn</span>
        </a>

        <a 
          href="https://github.com/jujax"
          className="flex items-center space-x-3 text-lg hover:text-gray-600 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-6 h-6" />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  );
}