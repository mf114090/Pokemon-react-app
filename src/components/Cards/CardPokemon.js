import React from 'react';
import { UseFetch } from '../UseFetch';

const CardPokemon = ({ url }) => {
    const estado = UseFetch(url);
    const { cargando, data } = estado;

    const handleCardClick = () => {
        if (data) {
            const evolutionChainUrl = data.species.url;  // Get species URL
            fetch(evolutionChainUrl)
                .then(res => res.json())
                .then(speciesData => {
                    const evolutionChainUrl = speciesData.evolution_chain.url;
                    fetch(evolutionChainUrl)
                        .then(res => res.json())
                        .then(evolutionData => {
                            let evolutionChain = "";
                            let currentEvolution = evolutionData.chain;
                            while (currentEvolution) {
                                evolutionChain += currentEvolution.species.name + " -> ";
                                currentEvolution = currentEvolution.evolves_to[0];
                            }
                            evolutionChain = evolutionChain.slice(0, -4); // Remove the last " -> "

                            alert(
                                `
                                Foto: ${data.sprites.front_default}
                                Nombre: ${data.name}
                                Descripción: ${speciesData.flavor_text_entries.find(entry => entry.language.name === "es").flavor_text}
                                Evolución: ${evolutionChain}
                                `
                            );
                        });
                });
        }
    };


    return (
        <div className=''>
            {cargando ? (
                <h1>Cargando</h1>
            ) : (
                <button className='card text-justify' style={{ width: '20rem' }} onClick={handleCardClick}>
                    <div className='card-header'>
                        <h5 className='card-title'> {data.id}</h5>
                    </div>
                    <div className='card-body '>
                        <img src={data.sprites.front_default} style={{ width: '15rem' }} alt='pokemon' />
                    </div>
                    <div className='card-footer'>
                        <p className='card-text text-capitalize'>{data.name}</p>
                    </div>
                </button>
            )}
        </div>
    );
};

export default CardPokemon;