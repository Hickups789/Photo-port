<<<<<<< HEAD
import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import ContactForm from "./components/Contact";

function App() {
=======
import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';

function App() {
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

>>>>>>> develop
  return (
    <div>
      <Nav />
      <main>
<<<<<<< HEAD
        <ContactForm></ContactForm>
        <Gallery currentCategory={currentCategory}></Gallery>
        <About></About>
=======
        <div>
        <Gallery currentCategory={currentCategory}></Gallery>
          <About></About>
        </div>
>>>>>>> develop
      </main>
    </div>
  );
}

export default App;
