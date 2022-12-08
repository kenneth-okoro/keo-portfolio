import {
  Header,
  Nav,
  About,
  Experience,
  Portfolio,
  Contact,
  Footer,
} from './components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <div className='w-[96%] sm:w-[86%] lg:w-[78%] mx-auto'>
        <ToastContainer />
        <Header />
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
