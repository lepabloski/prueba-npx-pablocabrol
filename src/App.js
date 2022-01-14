import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
function App() {
  const greetings = {
    principal : "BIENVENIDOS",
    secundario : "Proximamente todo lo que necesitas para ser el parrillero perfecto!"
}

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer principal={greetings.principal} secundario={greetings.secundario}  />
    </div>
  );
}

export default App;
