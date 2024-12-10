import { About } from './components/home/About';
import { Contact } from './components/home/Contact';
import { Hero } from './components/home/Hero';
import { ProjectCarousel } from './components/home/ProjectCarousel';
import { Services } from './components/home/Services';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <ProjectCarousel />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;