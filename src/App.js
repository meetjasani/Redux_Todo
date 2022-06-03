
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Componet from "./Componet"
import About from "./About"
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Componet />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
