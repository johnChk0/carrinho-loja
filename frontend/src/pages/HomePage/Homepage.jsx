//Imports
import React from 'react';

//Estilos
import './homepage.css'

//Components
import Produtos from "../../components/produtos/Produtos";
const HomePage = () => {
    return(
        <>
          <main className="homepage">
            <Produtos/>
          </main>
           
        </>
    )
}
export default HomePage;