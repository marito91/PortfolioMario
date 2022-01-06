import {BrowserRouter, Routes, Route} from 'react-router-dom';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
