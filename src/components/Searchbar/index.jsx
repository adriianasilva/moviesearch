import React from 'react'; 
import './style.css'; 

const Searchbar = () => { 
    return( 
        <div class="search">
        <input type="text" id="txtBusca" placeholder="Busque um filme por nome, ano ou gênero"/>
        <button id="btnBusca" type="submit" value=""hidden/>
        
        </div> 
    );
 } 
export default Searchbar;