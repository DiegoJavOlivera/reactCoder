import './App.css'
import  NavBar  from './components/NavBar/NavBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListConteiner from './components/itemlistconteiner/ItemListConteiner';

function App() {


  return (
    <>
      <NavBar></NavBar>
      <ItemListConteiner greeting={"Bienvenidos a tienda Dogllar"} />
    </>
  )
}

export default App
