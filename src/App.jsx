import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Process from './components/Process';
import Mentor from './components/Mentor';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Process />
        <Mentor />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App