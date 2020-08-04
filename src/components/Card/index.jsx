import React from 'react'; 
import './style.css'; 
import ImageTemp from '../../images/postertest.jpg';
import { Link } from 'react-router-dom';


const Card = () => { 
    return( 
    <>
    <Link to="/Detalhes">
        <div className="card">
        
            <div className="cardimage"> 
                <img src={ImageTemp} alt="cartaz" width="200px" height="100%"></img>
            </div>
            <div className="cardcontent">
                <div className="box-titulo">
                    <h1 id="titulo">Title poster</h1>
                </div>

                <div className="box">75%</div>
                
                <div id="data">
                    <h3>27/04/1997</h3>
                </div>

                <div className="content-text">
                    <div id="description">
                        <p>Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Quem manda na minha terra sou euzis! Si num tem leite então bota uma pinga aí cumpadi! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. </p>
                    </div>
                    <div id="tags">
                        <span className="tag-item"> tag 1</span>
                        <span className="tag-item"> tag 2</span>
                        <span className="tag-item"> tag 3</span>
                    </div>
                </div>
            </div>
           
        </div> 
        </Link>
             
        </>
    );
 } 
export default Card;