import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Livros from './pages/Livros';
import Home from './pages/Home';
import DetalhesLivro from './pages/DetalhesLivros';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/livros" element={<Livros />} />
        <Route path="/detalhesLivro/:id" element={<DetalhesLivro />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
