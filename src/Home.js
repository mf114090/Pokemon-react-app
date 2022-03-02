import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./components/Carousel";




const Home = () => {
    return (
        <div className="home">
            <div className="home-header">
                <div className="container">

                    <Carousel />

                    <div className="home body">
                        <div className="container">
                            <h1 className="title text-center mt-auto">Pokemon</h1>
                            <p className="text-center">Pokemon narra la historia de Ash Ketchum, un joven entrenador Pokémon de Pueblo Paleta que comienza un viaje para alcanzar su sueño, ser un Maestro Pokémon. 
                            La serie está basada en la saga de videojuegos de Pokémon también creada por Satoshi Tajiri, desarrollada por Game Freak y distribuida por Nintendo, que aparecieron por primera vez en el 
                            mercado japonés el 27 de febrero de 1996.
                            El éxito de los videojuegos que aún se mantiene hasta estos días, hizo que su trama fuera adaptada en un anime producido por los estudios de animación OLM, Inc., el cual es emitido por la 
                            cadena de televisión TV Tokyo desde que se estrenó el 1 de abril de 1997.
                            La primera temporada está compuesta por 276 episodios. OLM, Inc. ha producido hasta el momento 20 películas, junto a varias miniseries especiales (también llamadas OVA) como Pokémon Origins, 
                            Pokémon: Mega Evolution Special y Pokémon Generaciones; también un spin-off 
                            llamado Shu-kan Pokémon Ho-así-kyoku que al ser llevado a Estados Unidos, obtuvo el nombre de Crónicas Pokémon (Pokémon Chronicles), una serie de historias en las que están involucrados personajes secundarios de la serie. Otras piezas de merchandising incluyen a un 
                            conjunto de mangas y novelas ligeras basadas en el anime y sus películas, videojuegos, tazos y cromos de colección desarrollados por distintas empresas.</p>
                            
                        </div>

                        {/* <--- Boton para iniciar la Pokegrid-->  */}
                        
                        
                        <div className="d-flex justify-content-center">
                            <Link to="/PokeGrid">
                                <button className="btn btn-primary text-center">Start</button>
                            </Link>
                        </div>



                    </div>
                </div>
            </div>





        </div>





    )
}

export default Home;