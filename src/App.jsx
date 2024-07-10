import { useState } from "react";
import "./App.css";
import { Contact, Footer, Header, Projects, Skills, Work } from "./components/index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full min-h-screen">
      <div className="w-4/5 mx-auto py-4">
        {/* <Navbar /> */}
        <Header />
        <main>
          <Work />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
