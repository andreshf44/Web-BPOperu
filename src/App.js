import Header from './components/Header';  // Importamos el Header
import Home from './pages/Home';  // Importamos Home
import Canvas from './components/Canvas';
import { AppProvider } from './context/AppContext';  // Importamos el AppProvider
import './App.css';

function App() {
    return (
        <AppProvider>
            <div className="App">
                <Canvas />
                <Header />
                <Home />
            </div>
        </AppProvider>
    );
}

export default App;