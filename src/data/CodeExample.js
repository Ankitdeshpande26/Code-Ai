export const  codeExample = {
  "App.jsx": `import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4">
      <h1>Counter App</h1>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}`,

  "Hero.jsx": `import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <h1>Build Faster with AI 🚀</h1>
      <p>Generate code instantly with smart suggestions.</p>
      <button>Get Started</button>
    </section>
  );
};

export default Hero;`,

  "Navbar.jsx": `import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 bg-black text-white">
      <h2>CodeFlow</h2>
      <ul className="flex gap-4">
        <li>Home</li>
        <li>Docs</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;`
};



export const floatingCards={
  "App.jsx":{
  bgColor: "bg-blue-500/20 ",
  iconColor:"text-blue-400",
  textColor:"text-blue-200",
  contentColor:"text-blue-300",
  icon:"Ai",
  title:"Smart Completion",
  content:"Ai-powered Code Suggestion in real-time"
  },
  "Hero.jsx":{
  bgColor: "bg-purple-500/20 ",
  iconColor:"text-purple-400",
  textColor:"text-purple-200",
  contentColor:"text-purple-300",
  icon:"Ai",
  title:"Smart Completion",
  content:"Ai-powered Code Suggestion in real-time"
  },
  "Navbar.jsx":{
  bgColor: "bg-emerald-500/20 ",
  iconColor:"text-emerald-400",
  textColor:"text-emerald-200",
  contentColor:"text-emerald-300",
  icon:"Ai",
  title:"Smart Completion",
  content:"Ai-powered Code Suggestion in real-time"
  }
  
  
  
};