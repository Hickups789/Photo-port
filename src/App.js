import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import ContactForm from "./components/Contact";

function App() {
  return (
    <div>
      <Nav />
      <main>
        <ContactForm></ContactForm>
        <Gallery currentCategory={currentCategory}></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
