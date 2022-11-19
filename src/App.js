import { Footer } from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/register/Register';
import Login from './pages/login/Login';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
        <header className="App">
          <div className='content'>
            <h1 className='content-title'>
              Tarjetas desplegables
            </h1>
            <h2>
              tridimensionales
            </h2>
            <h4>
              Las tarjetas cobran vida y movimiento cada vez que las abres.
            </h4>
          </div>
        </header>
        <main className="main-container">
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
