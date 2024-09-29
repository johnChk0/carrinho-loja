//Imports
import React, {useEffect, useContext } from 'react';

//Estilos
import './Produtos.css'

//Api
import fetchProdutos from '../../api/fetchProdutos';

//Context
import AppContext from '../../context/AppContext';

//Componentes
import ProdutoCard from '../produtoCard/ProdutoCard';
import Loading from '../loading/Loading';


function Produtos() {
  const {produtos, setProdutos, loading, setLoading} = useContext(AppContext);
  
 
  useEffect(() => {
    fetchProdutos('iphone').then((response)=>{
      setProdutos(response)
      setLoading(false)
    });
  }, [setProdutos, setLoading])

  return (  
      <>
        {loading ? <Loading /> : <section className="produtos container">
        
          {produtos.map((produto)=> <ProdutoCard key={produto.id} data={produto}  />)}
        </section>}
      </>
  );
}

export default Produtos;