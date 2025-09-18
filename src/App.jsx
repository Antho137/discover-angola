import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from './pages/Home';
import About from './pages/About';
import Discovery from './pages/Discovery';
import Hotels from "./pages/Hotels";
import Contact from './pages/Contact';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <BrowserRouter basename="/discover-angola/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/discovery" element={<Discovery />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
