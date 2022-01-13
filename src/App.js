import {BrowserRouter, Routes, Route} from 'react-router-dom';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
