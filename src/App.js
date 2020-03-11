import React,{useState,useEffect,Fragment} from 'react';
import Formulario from './components/Formulario';
import axios from 'axios';
import Cancion from './components/Cancion'
import Informacion from './components/Informacion'

function App(){

  //Utilizar usestate con 3 states

  const [artistas,agregarartistas]=useState('');
  const [letra,agregarletra]=useState([]);
  const [info,agregarinfo]=useState({});

  //metodo para consultar la api de letras de canciones


  const consultarapiletra= async busqueda=>{
    const{artista,cancion}=busqueda;
    const url =`https://api.lyrics.ovh/v1/${artista}/${cancion}`;
    
    //consultar a la api


    const resultado = await axios(url);


    // almacenar el artista que se busco

    agregarartistas(artista);


    //almacenar letra en el state

    agregarletra(resultado.data.lyrics);
  }



  //Metodo para consumir la api de informacion 

  const consultarapiinformacion = async()=>{
    if(artistas){
      const url =`https://theaudiodb.com/api/v1/json/1/search.php?s=${artistas}`;
    const resultado = await axios(url);
   
    agregarinfo(resultado.data.artists[0]);
    // console.log(info); 
    }
  }


  useEffect(
    ()=>{
      consultarapiinformacion();
    },[artistas]
  )


  return(
    <Fragment>

    <Formulario
      consultarapiletra={consultarapiletra}
    />

    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">

          <Informacion
          
          info={info}

          />

        </div>
        <div className="col-md-6">
          <Cancion
          letra={letra}
          />
        </div>
      </div>
    </div>

    </Fragment>
  )
}

export default App; 