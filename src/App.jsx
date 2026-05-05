import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Plans from './components/Plans'
import Structure from './components/Structure'
import Differentials from './components/Differentials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Plans />
        <Structure />
        <Differentials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
