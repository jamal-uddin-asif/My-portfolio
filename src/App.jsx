import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/education";
import Container from "./components/Container";

function App() {
  return (

      <div id="home" className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex flex-col justify-center ">
          <div className="mt-20">
            <Hero />
          </div>
          <About />

          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
  
  );
}

export default App;
