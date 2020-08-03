import React from 'react'; 
import './style.css'; 
const Card = () => { 
    return( 
    <>
            <div class="card">
            <div class="cardimage">
            <img src="/home/adriana/projetos/moviesearch/moviesearch/src/components/Card/postertest.jpg" alt="cartaz" width="90" height="120"></img>
          </div>
           
            <div class="cardcontent">
                <div class="titulo"><h1 id="titulo">Mussum Ipsum</h1></div>
                <div class="box">75%</div>
                <div id="data"><h3>27/04/1997</h3></div>
                <div id="description">Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Quem manda na minha terra sou euzis! Si num tem leite então bota uma pinga aí cumpadi! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. 
                </div>
                <div id="tags">tags</div>
                

            </div>
            </div> 
             
        </>
    );
 } 
export default Card;