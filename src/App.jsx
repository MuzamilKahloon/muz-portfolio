import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Bio from './components/Bio';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import EducationSection from './components/EducationSection';
import Contact from './components/Contact';
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='relative h-full overflow-y-auto antialiased'>
      {/* Background */}
      <div className='fixed inset-0 bg-fixed bg-center bg-cover bg-img'></div>
      
      {/* Main Content */}
      <div className='container relative z-10 flex flex-col items-center p-4 mx-auto space-y-8'>
        <Hero />
        <Navbar />
        <Projects />
        <Bio />
        <Skills />
        <WorkExperience />
        <EducationSection/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
