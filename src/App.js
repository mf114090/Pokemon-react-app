import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './components/Navbar';
import PokeGrid from './PokeGrid';
import PokeCard from './PokeCard';
import Footer from './components/Footer';


const App = () => {
    return (
        
        <BrowserRouter>
          <Navbar/>
         
           
                <Routes>
                    <Route exact path="/" element={<Home />}/>  
                    <Route exact path="/PokeGrid" element={<PokeGrid />}/> 
                    <Route exact path="/PokeCard" element={<PokeCard />}/> 
                    
                    
                </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App;