import React from "react";
// import { Link } from "react-router-dom";
import Rrss from "./Rrss";
// import Rentahousecl from "../img/rentahousecl.png";;



const Footer = () => {
    return (
        <div className="container-fluid bg-light text-center">
           
            <div className="row row-cols-1 row-cols-md-6  text-dark p-5 ">
                <div className="col-md-8">
                   
                </div>
                <div className="col-md-1">
                  
                </div>
                <div className="col-md-3 bg-light border-light">
                    
                       
                        <Rrss/>
                    
                </div>
            </div>
        </div>
	);
}

export default Footer;