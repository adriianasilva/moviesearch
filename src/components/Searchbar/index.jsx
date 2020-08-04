import React from 'react'; 
import './style.css';
import './searchbar.js'; 

const Searchbar = () => { 
    return( 
        <div class="search">
        <input type="text" onChange="capturar()" id="txtBusca" placeholder="Busque um filme por nome, ano ou gênero"/>
        <button id="btnBusca"  type="submit" value=""hidden/>
        
        </div> 
    );

    
 } 
export default Searchbar;

 