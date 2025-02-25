import Header from './components/Header';  // Importamos el Header
import Home from './pages/Home';  // Importamos Home
import Canvas from './components/Canvas';
import TopicDetail from './components/TopicDetail';
// import WhatsappFloat from './components/ContactFloat'; //Importartamos Whatsapp flotante
import './App.css';

function App() {
  return (
    <div className="App">
      <Canvas />
      <Header />
  
      <Home />
        {/* <WhatsappFloat /> */}

      <TopicDetail />
    </div>
  );
}

export default App;
