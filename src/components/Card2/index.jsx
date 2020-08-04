import React from 'react'; 
import './style.css'; 
import ImageTemp from '../../images/postertest.jpg';



const Card2 = () => { 
    return( 
    <>
        <div className="card2">
        <div className="box-titulo2">
                    <h1 id="titulo2">Title poster</h1>
                    <div className="data2">
                    <h3>27/04/1997</h3>
                </div>
                </div>
                
        <div className="cardcontent2">  
                <div className="content-text2">
                    <div id="subtitulo">
                        Sinopse
                    </div>
                    <hr></hr>

                    <div id="description2">
                        <p>Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Quem manda na minha terra sou euzis! Si num tem leite então bota uma pinga aí cumpadi! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. </p>
                    </div>
                    <div id="subtitulo">
                        Informações
                    </div>
                    <hr></hr>

                    <div id="info">
                        <span className="info-item"> Situação </span>
                        <span className="info-status">Lançado </span>      
                    </div>

                     <div id="info">
                        <span className="info-item"> Idioma </span>
                        <span className="info-status">Inglês</span>      
                    </div>

                    <div id="info">
                        <span className="info-item"> Duração </span>
                        <span className="info-status"> 2h10min</span>      
                    </div>

                    <div id="info">
                        <span className="info-item"> Orçamento </span>
                        <span className="info-status"> $180.000.000,00</span>      
                    </div>

                    <div id="info">
                    <span className="info-item"> Receita</span>
                    <span className="info-status"> $180.000.000,00</span>
                              
                    </div>
                    
                    <div id="info">
                    <span className="info-item"> Lucro </span>
                    <span className="info-status"> $180.000.000,00</span>
                              
                    </div>
                       

                    <div id="tags2">
                        <span className="tag-item"> tag 1</span>
                        <span className="tag-item"> tag 2</span>
                        <span className="tag-item"> tag 3</span>
                    </div>

                    <div className="box2">75%</div>
                <div className="cardimage2"> 
                <img src={ImageTemp} alt="cartaz" witdh="100%" height="100%"></img>
            </div>
                </div>
                
                
            </div>
            
           
        </div> 
        </>
    );
 } 
export default Card2;