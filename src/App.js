
import './App.css';
import About from './sections/About';
import Navbar from './sections/Navbar';
import { ChakraProvider } from '@chakra-ui/react';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';


function App() {
  return (
    <div className='max-w-[1100px] justify-center m-auto bg-purple text-white  font-mono '>
      
    <ChakraProvider>
      <Navbar />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact/>
      </ChakraProvider>
      </div>
  );
}

export default App;
