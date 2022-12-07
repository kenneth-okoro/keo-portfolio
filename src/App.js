import {Header, Nav, About, Experience, Services, Portfolio, Contact, Footer } from './components'

function App() {
  return (
    <div className='container mx-auto'>      
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
