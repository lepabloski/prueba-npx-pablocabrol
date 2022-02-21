import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartContextProvider from './context/cartContext'
import Footer from './components/Footer/Footer'
import CartListContainer from './components/CartListContainer/CartListContainer'
import OrderListContainer from './components/OrderListContainer/OrderListContainer'

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="App">
          <NavBar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/category/:idCategory' element={<ItemListContainer />} />
            <Route exact path='/cart' element={<CartListContainer />} />
            <Route exatt path='/order/:idOrder' element={<OrderListContainer/>}/>
            <Route exact path='/item' element={<ItemDetailContainer />} />
            <Route exact path='/item/:IdProduct' element={<ItemDetailContainer />} />
          </Routes>
        </div>
        <Footer />
      </CartContextProvider>

    </BrowserRouter>
  );
}

export default App;
