import React, { useState } from 'react';
import { UseFetch } from '../UseFetch';
import  Modal  from 'react-bootstrap/Modal'; // Importa el componente Modal de react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de bootstrap

const CardPokemon = ({ url }) => {
    const estado = UseFetch(url);
    const { cargando, data } = estado;
    const [showModal, setShowModal] = useState(false); // Estado para controlar el modal
    const [modalData, setModalData] = useState(null); // Estado para guardar los datos del modal

    const handleCardClick = () => {
        if (data) {
            const evolutionChainUrl = data.species.url;
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
                            evolutionChain = evolutionChain.slice(0, -4);

                            // Guarda los datos para el modal
                            setModalData({
                                image: data.sprites.front_default,
                                name: data.name,
                                description: speciesData.flavor_text_entries.find(entry => entry.language.name === "es")?.flavor_text || "No hay descripción en español", // Manejo de descripciones faltantes
                                evolution: evolutionChain
                            });

                            setShowModal(true); // Muestra el modal
                        });
                });
        }
    };

    const handleCloseModal = () => setShowModal(false); // Función para cerrar el modal

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

            {/* Componente Modal */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalData?.name}</Modal.Title> {/* Usa optional chaining */}
                </Modal.Header>
                <Modal.Body>
                    {modalData?.image && <img src={modalData.image} alt={modalData?.name} style={{ width: '100%' }} />} {/* Imagen en el modal */}
                    <p><strong>Descripción:</strong> {modalData?.description}</p>
                    <p><strong>Evolución:</strong> {modalData?.evolution}</p>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary" onClick={handleCloseModal}>Cerrar</button> {/* Botón de cerrar con estilo de Bootstrap */}
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CardPokemon;