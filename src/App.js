import Header from './components/Header';  // Importamos el Header
import Home from './pages/Home';  // Importamos Home
import Canvas from "./components/Canvas";
// import WhatsappFloat from './components/ContactFloat'; //Importartamos Whatsapp flotante
import './App.css';

function App() {
  return (
    <div className="App">
        <Canvas />
      <Header />
      <Home />
        {/* <WhatsappFloat /> */}
    </div>
  );
}

export default App;
