import React , {  useState } from 'react';
import  {UseFetch} from "./components/UseFetch"
import { Cards } from './components/Cards/Cards';
import PokeCard from './PokeCard';



const PokeGrid =()=> {
    const [url,setUrl]=useState(' https://pokeapi.co/api/v2/pokemon')
    const estado = UseFetch(url)
    const {cargando, data}=estado
    cargando? console.log ('cargando'):console.log(data.results)

    return(
        <div>
            <h1 className='text-center'>Conoce tu Pokemon</h1>
            {
                cargando
                ?
                <h1>Cargando...</h1>
                :
                
                <div>
                    <Cards results={data.results}/>

                    <div className='container text-center'>
                        <button onClick= {()=> setUrl(data.previous)} className='m-2 btn btn-dark'>Anterior</button>
                        <button onClick= {()=> setUrl(data.next)} className='btn btn-dark'>Siguiente</button>


                    </div> 
                   
                </div>
                



            }


        </div>
    )
}
export default PokeGrid
