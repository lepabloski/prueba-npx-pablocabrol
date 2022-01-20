import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <ItemListContainer/>
      <Footer/>
    </div>
  );
}

export default App;
