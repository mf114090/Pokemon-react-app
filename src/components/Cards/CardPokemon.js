import React from 'react';
import { UseFetch } from '../UseFetch';

import PokeCard from '../../PokeCard';




const CardPokemon = ({url}) => {
    
    const estado = UseFetch(url)
    const {cargando, data}=estado

    return (
        <div className=''>
            {
                cargando
                ?
                <h1>Cargando</h1>
                :
                
                <div className='card text-center' style= {{width:'20rem'}}  data-toggle="modal" data-target={`#id${data.id}`}> 
                    <div className='card-header'>
                        <h5 className='card-title'> {data.id}</h5>
                    </div>
                    <div className='card-body '>
                        
                            <img src={data.sprites.front_default} style= {{width:'15rem'}} alt='pokemon' /> 
                       

                    </div>
                    <div className='card-footer'>
                        <p className='card-text text-capitalize'>{data.name}</p>

                    </div>
                    
                </div>
            }
            
        </div>
    )
};
export default CardPokemon;